const db = require('../config/db');

exports.submitAssignment = async (data) => {
    const query = 'INSERT INTO submissions (assignment_id, user_id, submission_file, submission_text, submission_date) VALUES (?, ?, ?, ?, ?)';
    return await db.query(query, [data.assignmentId, data.userId, data.submissionFile, data.submissionText, data.submissionDate]);
};
