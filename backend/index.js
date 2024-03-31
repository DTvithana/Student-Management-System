const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
});   

const app = express();
app.use(cors());

app.get('/', (req, res) => {
   return res.json('From backend');
})

app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.json(result);
    })
})

app.post('/student', (req, res) => {
    console.log(req.body);
    const { fName, lName, address, birthday, degree, course1, course2, course3, course4 } = req.body;
    const sql = `INSERT INTO students (fName, lName, address, birthday, degree, course1, course2, course3, course4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [fName, lName, address, birthday, degree, course1, course2, course3, course4];
    
    db.query(sql, values, (err, result) => {
        if(err) throw err;
        return res.json(result);
})
});

app.put('/student/:id', (req, res) => {
    const { fName, lName, address, birthday, degree, course1, course2, course3, course4 } = req.body;
    const sql = `UPDATE students SET fName = ?, lName = ?, address = ?, birthday = ?, degree = ?, course1 = ?, course2 = ?, course3 = ?, course4 = ? WHERE id = ?`;
    const values = [fName, lName, address, birthday, degree, course1, course2, course3, course4, req.params.id];
    
    db.query(sql, values, (err, result) => {
        if(err) throw err;
        return res.json(result);
})
});

app.get('/course', (req, res) => {
    const sql = 'SELECT * FROM courses';
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.json(result);
    })
});

app.put('/course/:id', (req, res) => {
    const { courseName, courseId } = req.body;
    const sql = `UPDATE courses SET courseName = ?, courseId = ? WHERE id = ?`;
    const values = [courseName, courseId, req.params.id];
    
    db.query(sql, values, (err, result) => {
        if(err) throw err;
        return res.json(result);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081')
})   