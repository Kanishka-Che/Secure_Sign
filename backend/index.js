const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'secure_signdb',
});

// Check if the database connection is successful
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database successfully');
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentpassword = req.body.password;

    const SQL = 'INSERT INTO users(email,username,password) VALUES (?,?,?)';
    const values = [sentEmail, sentUserName, sentpassword];

    db.query(SQL, values, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send(err);
        } else {
            console.log('User inserted successfully');
            res.send({ message: 'User added!' });
        }
    });
});

app.post('/login',(req,red)=>{
    
    const sentloginUserName = req.body.loginUserName;
    const sentLoginPassword = req.body.loginPassword;

    const SQL = 'SELECT * FROM users WHERE username =? && password=?'
    const values = [sentloginUserName, sentLoginPassword ];


    db.query(SQL, values, (err, result) => {
      if(err){
          res.send({error:err})
      }
      if(results.length>0){
        res.send(results)
      }
      else{
        res.send({message:`Credentials Don't match!`})
      }

    });
})
