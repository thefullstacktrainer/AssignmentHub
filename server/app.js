const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const userRoutes = require('./routes/usersRoutes');
const assignmentRoutes = require('./routes/assignmentsRoutes');
const submissionRoutes = require('./routes/submissionsRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/assignments', assignmentRoutes);
app.use('/submissions', submissionRoutes);

app.get('/', (req, res) => {
    res.send('Hello, AssignmentHub!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
