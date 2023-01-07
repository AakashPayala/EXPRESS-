const express=require("express")

app=express()

// listen for requests 

app.listen(3000)

// accept requests 
app.get("/",(req, res)=>{
res.send("<h1>hello world</h1>")
// res.send("ok")
})

app.get("/sample",(req,res)=>{
    res.sendFile("./html_files/sample_1.html",{root:__dirname})
})

app.use((req,res)=>{
    res.status(404).sendFile("./html_files/404_error.html",{root:__dirname})

})

// you can also use redirect method 
