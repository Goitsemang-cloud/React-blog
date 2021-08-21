const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const UserRoute = require("./routes/Users");
const PostRoute = require("./routes/Posts");
const CategorytRoute = require("./routes/Categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false,
}).then(console.log("Conncted to mongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/api/Auth", authRoute);
app.use("/api/Users", UserRoute);
app.use("/api/Posts", PostRoute);
app.use("/api/Categories", CategorytRoute);

dotenv.config();

app.listen("5000", () =>{
    console.log("Backend is running");
}); 