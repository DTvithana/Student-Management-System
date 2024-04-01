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

app.get('/student', (req, res) => {
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

app.delete('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const sql = 'DELETE FROM students WHERE id = ?';
    
    db.query(sql, studentId, (err, result) => {
        if(err) throw err;
        return res.json(true);
    });
});

app.post('/admin', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword);
        const sql = `INSERT INTO admins (email, password,name) VALUES (?, ?,?)`;
        const values = [email, hashedPassword,name];

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

app.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const sql = `SELECT * FROM admins WHERE email = ?`;
        const values = [email];

        db.query(sql, values, async (err, result) => {
            if (err) throw err;
            if (result.length === 0) {
                return res.json({ "valid": false });
            } else {
                const validPassword = await bcrypt.compare(password, result[0].password);
                if (validPassword) {
                    return res.json({ "valid": true, "name": result[0].name });
                } else {
                    return res.json({ "valid": false });
                }
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "error": 'Internal Server Error' });
    }
});

// app.post('/admin/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const sql = `SELECT * FROM admins WHERE email = ?`;
//         const values = [email];

//         db.query(sql, values, async (err, result) => {
//             if (err) throw err;
//             if (result.length === 0) {
//                 return res.json({ valid: false });
//             } else {
//                 const validPassword = await bcrypt.compare(password, result[0].password);
//                 if (validPassword) {
//                     return res.json({ valid: true });
//                 } else {
//                     return res.json({ valid: false });
//                 }
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

app.get('/student/count', (req, res) => {
    const sql = 'SELECT COUNT(*) AS count FROM students';
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.json(result[0].count);
    })
})

app.get('/course/count', (req, res) => {
    const sql = 'SELECT COUNT(*) AS count FROM courses';
    db.query(sql, (err, result) => {
        if(err) throw err;
        return res.json(result[0].count);
    })
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})   