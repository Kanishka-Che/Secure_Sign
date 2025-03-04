const express =require('express')
const app =express()
const mysql=require('mysql2')
const cors=require('cors')


app.listen(3002,()=>{
    console.log('Server is running on port 3002')
})

const db=mysql.createConnection({

    user:'root',
    host:'localhost',
    password:'',
    database:'secure_signdb',

})

app.post('/register',(req,res)=>{

      const sentEmail= req.body.Email
      const sentUserName= req.body.UserName
      const sentpassword= req.body.password


      const SQL='INSERT INTO users(email,username,password) VALUES (?,?,?)'
    
})