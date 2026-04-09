const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/authDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const SECRET = "mysecretkey";

app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();
        res.json({ message: "User Registered Successfully" });

    } catch (err) {
        res.json({ message: "Error", error: err });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });

        res.json({ message: "Login Successful", token });

    } catch (err) {
        res.json({ message: "Error", error: err });
    }
});

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, SECRET);
        req.user = verified;
        next();
    } catch {
        res.json({ message: "Invalid Token" });
    }
}
app.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: "Protected Data Accessed", user: req.user });
});

app.listen(3000, () => console.log("Server running on port 3000"));