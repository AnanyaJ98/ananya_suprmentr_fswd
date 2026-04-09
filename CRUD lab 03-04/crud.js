const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crudDB')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));


const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});


const Student = mongoose.model('Student', studentSchema);


async function createStudent() {
    const student = new Student({
        name: "Ananya (creation)",
        age: 22,
        course: "BE"
    });

    await student.save();
    console.log("Student Created:", student);
}

async function readStudents() {
    const students = await Student.find();
    console.log("All Students:", students);
}

async function updateStudent() {
    await Student.updateOne(
        { name: "Ananya (update age)" },
        { age: 23 }
    );
    console.log("Student Updated");
}


async function deleteStudent() {
    await Student.deleteOne({ name: "Ananya" });
    console.log("Student Deleted");
}


async function runCRUD() {
    await createStudent();
    await readStudents();
    await updateStudent();
    await readStudents();
    await deleteStudent();
    await readStudents();

    mongoose.connection.close();
}

runCRUD();