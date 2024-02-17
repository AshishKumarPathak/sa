const express = require("express");
const app =express();

const roleRouter = require("./api/roles/role.router")
const userRouter = require("./api/Users/user.router")

app.use(express.json());

app.use("/api/roles",roleRouter);
app.use("/api/users",userRouter);






app.listen(3001, ()=>{
    console.log("server up and running");
});