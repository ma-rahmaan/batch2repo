const express = require("express")
const jwt = require("jsonwebtoken")
const app = express();
app.use(express.json())
const PORT = 5000;

const SECRET_KEY = "mysecretkey";

const user = {
    id:1,
    username : "admin",
    password: "1234"
};

app.post("/login",(req,res) =>{
    const {username , password} = req.body;

    if(username === user.username && password === user.password){
        const token = jwt.sign(
            {id: user.id,username : user.username},
            SECRET_KEY,
            {expiresIn:"1h"}
        );
        return res.json({token});
    }
    res.status(401).json({message:"Invalid credentials"});
    });



function verifyToken(req,res,next){
    const authHeader = req.headers["authorization"];

    if(!authHeader){
        return res.status(401).json({message:"Token missing"});
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(403).json({message:"Invalid token"});
        }
        req.user = decoded;
        next();
    });
}


app.get("/profile" , verifyToken,(req,res)=>{
    res.json({
        message : "welcome to profile",
        user : req.user});
    });

    app.listen(PORT,()=> console.log('Server running on $(PORT)'));


