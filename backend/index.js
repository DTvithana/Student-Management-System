const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");

const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lms'
});   

const app = express();
app.use(bodyParser.json());
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


app.get('/course', (req, res) => {
    const sql = 'SELECT * FROM courses';
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.json(result);
    })
});

app.put('/student/edit/:id', (req, res) => {
    const { fName, lName, address, birthday, degree, course1, course2, course3, course4 } = req.body;
    const sql = `UPDATE students SET fName = ?, lName = ?, address = ?, birthday = ?, degree = ?, course1 = ?, course2 = ?, course3 = ?, course4 = ? WHERE id = ?`;
    const values = [fName, lName, address, birthday, degree, course1, course2, course3, course4, req.params.id];
    
    db.query(sql, values, (err, result) => {
        if(err) throw err;
        return res.json(result);
})
});

app.put('/course/edit/:courseId', (req, res) => {
    const { courseName } = req.body;
    const sql = `UPDATE courses SET courseName = ? WHERE courseId = ?`;
    const values = [courseName, req.params.courseId];
    
    db.query(sql, values, (err, result) => {
        if(err) throw err;
        return res.json(result);
    });
});
 
app.post('/course', (req, res) => {
    const { courseName, courseId } = req.body;
    const sql = `INSERT INTO courses (courseName, courseId) VALUES (?, ?)`;
    const values = [courseName, courseId];
    
    db.query(sql, values, (err, result) => {
        if(err) throw err;
        return res.json(result);
    });
});

// app.post('/admin', (req, res) => {
//     const { email, password } = req.body;
//     const sql = `INSERT INTO admin (email, password) VALUES (?, ?)`;
//     const values = [email, password];
    
//     db.query(sql, values, (err, result) => {
//         if(err) throw err;
//         return res.json(result);
//     });
// });   

app.post('/admin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword);
        const sql = `INSERT INTO admin (email, password) VALUES (?, ?)`;
        const values = [email, hashedPassword];

        db.query(sql, values, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


app.listen(5000, () => {
    console.log('listening on port 5000')
})   