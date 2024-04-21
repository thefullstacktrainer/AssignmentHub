const {
    getAssignments,
    createAssignment,
    getAssignmentDetails,
    updateAssignment,
    deleteAssignment
} = require('../models/assignmentModel');

exports.getList = async (req, res) => {
    try {
        const assignments = await getAssignments();
        res.status(200).json({
            status: 'success',
            data: assignments
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching the assignments',
            error
        });
    }
};

exports.create = async (req, res) => {
    try {
        const data = req.body;
        await createAssignment(data);

        res.status(201).json({
            status: 'success',
            message: 'Assignment created successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while creating the assignment',
            error
        });
    }
};

exports.getDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const assignment = await getAssignmentDetails(id);

        if (!assignment[0]) {
            return res.status(404).json({
                status: 'error',
                message: 'Assignment not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: assignment[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching the assignment details',
            error
        });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await updateAssignment(id, data);

        res.status(200).json({
            status: 'success',
            message: 'Assignment updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while updating the assignment',
            error
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteAssignment(id);

        res.status(200).json({
            status: 'success',
            message: 'Assignment deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while deleting the assignment',
            error
        });
    }
};
