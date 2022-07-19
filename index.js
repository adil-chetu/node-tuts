const express = require("express");
require("./config");
const Product = require("./product");
const multer = require('multer')
const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

app.get('/search/:key', async(req, resp)=>{
  let data = await Product.find({
    "$or":[
      {"name":{$regex:req.params.key}},       
      {"brand":{$regex:req.params.key}}
    ]
  })
  
  resp.send(data)
})

const upload = multer({
  storage:multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "uploads")
    },
    filename: function(req, file, cb){
      cb(null, file.fieldname+ "-"+ Date.now() + '.jpg')
    }
  })
}).single('user_file')

app.post("/upload", (req, resp) => {
  resp.send("file upload")
})

app.listen(4500);
