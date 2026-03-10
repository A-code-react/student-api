const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Add new student
app.post("/students", (req, res) => {

  const student = {
    id: Date.now().toString(),
    ...req.body
  };

  students.push(student);

  res.json(student);
});

// Delete student
app.delete("/students/:id", (req, res) => {

  const id = req.params.id;

  students = students.filter(s => s.id !== id);

  res.json({ message: "Student deleted" });

});

// IMPORTANT: Use Render's port or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});