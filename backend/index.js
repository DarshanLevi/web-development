const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer")
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { type } = require("os");
const { stringify } = require("querystring");

app.use(express.json());
app.use(cors());

// database connection with mongoDB 

mongoose.connect("mongodb+srv://levi:Priyadarshan2@cluster0.sfebu7f.mongodb.net/e-commerce")

// api creation

app.get("/",(req, res)=>{
    res.send("express app is running")

})

// image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating upload endpoint for images

app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
    res.json
    ({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
    
})

// schema for creating products

const Product = mongoose.model("product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true
    },
})

app.listen(port,(error)=>{
    if (!error) { 
        console.log("server running on port "+ port)
    }
    else{
        console.log("error: "+error)
    }
})