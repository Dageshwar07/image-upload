import express from "express";
import fileUpload from "express-fileupload";
import  userRouter from "./routes/userRouter.js"
import dotenv  from 'dotenv'
dotenv.config()
import {dbConnection}  from "./database/connection.js";
// Emulate 
const app = express();

const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.get("/", (req, res) => {
  res.send("hello")})

app.use("/api/v1/user", userRouter);
dbConnection();

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});


export default app;
