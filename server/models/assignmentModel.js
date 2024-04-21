// server/models/assignmentModel.js
const db = require('../config/db');

exports.getAssignments = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM assignments';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};


exports.createAssignment = async (data) => {
    const query = 'INSERT INTO assignments (title, description, deadline, created_by) VALUES (?, ?, ?, ?)';
    return await db.query(query, [data.title, data.description, data.deadline, data.adminId]);
};

exports.getAssignmentDetails = async (id) => {
    const query = 'SELECT * FROM assignments WHERE assignment_id = ?';
    return await db.query(query, [id]);
};

exports.updateAssignment = async (id, data) => {
    const query = 'UPDATE assignments SET title = ?, description = ?, deadline = ? WHERE assignment_id = ?';
    return await db.query(query, [data.title, data.description, data.deadline, id]);
};

exports.deleteAssignment = async (id) => {
    const query = 'DELETE FROM assignments WHERE assignment_id = ?';
    return await db.query(query, [id]);
};
