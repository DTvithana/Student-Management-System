const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return "From backend"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBe('From backend');
  });
});

describe('GET /student', () => {
  it('should return an array of students', async () => {
    const response = await request(app).get('/student');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('POST /student', () => {
  it('should add a new student', async () => {
    const newStudent = {
      fName: 'John',
      lName: 'Doe',
      address: '123 Main St',
      birthday: '1990-01-01',
      degree: 'Computer Science',
      course1: 'Math',
      course2: 'English',
      course3: 'Science',
      course4: 'History'
    };

    const response = await request(app).post('/student').send(newStudent);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('affectedRows', 1);
  });
});


describe('GET /course', () => {
    it('should return an array of courses', async () => {
        const response = await request(app).get('/course');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('PUT /student/edit/:id', () => {
    it('should update a student', async () => {
        const updatedStudent = {
            fName: 'Jane',
            lName: 'Doe',
            address: '456 Elm St',
            birthday: '1995-02-02',
            degree: 'Computer Engineering',
            course1: 'Physics',
            course2: 'Chemistry',
            course3: 'Biology',
            course4: 'Geography'
        };

        const response = await request(app).put('/student/edit/1').send(updatedStudent);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('affectedRows', 1);
    });
});

describe('PUT /course/edit/:courseId', () => {
    it('should update a course', async () => {
        const updatedCourse = {
            name: 'Mathematics',
            description: 'Advanced math course',
            credits: 4
        };

        const response = await request(app).put('/course/edit/1').send(updatedCourse);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('affectedRows', 1);
    });
});

describe('POST /course', () => {
    it('should add a new course', async () => {
        const newCourse = {
            name: 'English',
            description: 'English language course',
            credits: 3
        };

        const response = await request(app).post('/course').send(newCourse);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('affectedRows', 1);
    });
});

describe('DELETE /student/:id', () => {
    it('should delete a student', async () => {
        const response = await request(app).delete('/student/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('affectedRows', 1);
    });
});

describe('POST /admin', () => {
    it('should add a new admin', async () => {
        const newAdmin = {
            email: 'admin@example.com',
            password: 'admin123'
        };

        const response = await request(app).post('/admin').send(newAdmin);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('affectedRows', 1);
    });
});

describe('POST /admin/login', () => {
    it('should validate admin login credentials', async () => {
        const loginCredentials = {
            email: 'admin@example.com',
            password: 'admin123'
        };

        const response = await request(app).post('/admin/login').send(loginCredentials);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('valid', true);
    });
});

describe('GET /student/count', () => {
    it('should return the count of students', async () => {
        const response = await request(app).get('/student/count');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('count');
    });
});

describe('GET /course/count', () => {
    it('should return the count of courses', async () => {
        const response = await request(app).get('/course/count');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('count');
    });
})



