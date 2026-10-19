const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'students.json');

const loadStudents = () => {
  if (!fs.existsSync(FILE_PATH)) {
    const initialData = [
      { id: 1, name: "Alice Smith", age: 20, grade: "A", email: "alice@example.com" },
      { id: 2, name: "Bob Jones", age: 22, grade: "B", email: "bob@example.com" }
    ];
    fs.writeFileSync(FILE_PATH, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
};

const saveStudents = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

let students = loadStudents();
let nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', err => reject(err));
  });
};

const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const method = req.method;

  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const pathParts = pathName.split('/').filter(Boolean);

  if (pathName === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Student API running. Access /api/students');
  }

  if (pathParts[0] === 'api' && pathParts[1] === 'students') {
    const studentId = pathParts[2] ? parseInt(pathParts[2], 10) : null;

    try {
      if (method === 'POST' && !studentId) {
        const body = await getRequestBody(req);
        const { name, age, grade, email } = body;

        if (!name || !age || !email) {
          return sendJSON(res, 400, { error: "Name, age, and email are required." });
        }

        const newStudent = {
          id: nextId++,
          name,
          age: Number(age),
          grade: grade || "N/A",
          email
        };

        students.push(newStudent);
        saveStudents(students);
        return sendJSON(res, 201, { message: "Student created successfully", student: newStudent });
      }

      if (method === 'GET' && !studentId) {
        return sendJSON(res, 200, students);
      }

      if (method === 'GET' && studentId) {
        const student = students.find(s => s.id === studentId);
        if (!student) {
          return sendJSON(res, 404, { error: "Student not found" });
        }
        return sendJSON(res, 200, student);
      }

      if (method === 'PUT' && studentId) {
        const index = students.findIndex(s => s.id === studentId);
        if (index === -1) {
          return sendJSON(res, 404, { error: "Student not found" });
        }

        const body = await getRequestBody(req);
        const { name, age, grade, email } = body;

        students[index] = {
          ...students[index],
          ...(name && { name }),
          ...(age && { age: Number(age) }),
          ...(grade && { grade }),
          ...(email && { email })
        };

        saveStudents(students);
        return sendJSON(res, 200, {
          message: "Student updated successfully",
          student: students[index]
        });
      }

      if (method === 'DELETE' && studentId) {
        const index = students.findIndex(s => s.id === studentId);
        if (index === -1) {
          return sendJSON(res, 404, { error: "Student not found" });
        }

        const deletedStudent = students.splice(index, 1)[0];
        saveStudents(students);
        return sendJSON(res, 200, {
          message: "Student deleted successfully",
          student: deletedStudent
        });
      }
    } catch (error) {
      return sendJSON(res, 400, { error: "Invalid JSON format in request body" });
    }
  }

  sendJSON(res, 404, { error: "Endpoint not found" });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/students`);
});