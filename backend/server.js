require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require('./routes/authRoutes')
const { checkUser } = require('./middleware/authMiddleware');
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:["http://localhost:5173"],
  credentials:true,
}));


app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.use('/api/auth', authRoutes);
app.get('/api/profile',checkUser,async(req,res)=>{
  
})
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDb connection error:",err));

app.use("/api", movieRoutes);
// app.get("/", (req, res) => {
//   res.send("Backend working fine!");
// });
app.listen(process.env.PORT,() => console.log("Server running on port 3000"));
