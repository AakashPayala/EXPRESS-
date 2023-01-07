const express = require("express")
const morgan = require("morgan")
const app=express()

const title=""
//register view engine 
app.set("view engine","ejs")


//listening for requests

app.listen(3000)

//loging each request 
//note position at the top and use next() function to execute other codes :)) 

app.use((req,res,next)=>{
    console.log("____new request____")
    console.log("host : ",req.hostname)
    console.log("path : ",req.path)
    console.log("method : ",req.method)
    console.log("____________________________")


    //imp 

    next()
})


//you can also use morgan to log requests  
//morgan is a third party package that logs request made from the browser :)) 

app.use(morgan("tiny"))




// accept requests 
app.get("/",(req, res)=>{
res.render("index",{title: "homepage"})
// res.send("ok")
})
app.get("/about",(req,res)=>{
    res.render("about",{title : "about"})
})

app.use((req,res)=>{
    res.status(400).render("404_error",{title:"Error"})
})

