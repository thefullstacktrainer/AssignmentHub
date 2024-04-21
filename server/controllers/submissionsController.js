const { submitAssignment } = require('../models/submissionModel');

exports.submit = async (req, res) => {
    try {
        const data = {
            ...req.body,
            submissionDate: new Date()
        };

        await submitAssignment(data);

        res.status(201).json({
            status: 'success',
            message: 'Assignment submitted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while submitting the assignment',
            error
        });
    }
};
