const { Registration } = require("../models/registrations.model");

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json({
            status: "success",
            data: {
                registrations,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const getOneRegistration = async (req, res) => {
    try {
        const { id } = req.params;
        const { isRegistered } = req;

        res.status(200).json({
            status: "success",
            data: { oneRegistration },
        });
    } catch (error) {
        console.log(error);
    }
};

const createRegistration = async (req, res) => {
    try {
        const { entranceTime } = req.body;

        const newRegister = await Registration.create({ entranceTime });

        res.status(201).json({
            status: "success",
            data: { newRegister },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateRegistration = async (req, res) => {
    try {
        const { exitTime } = req.body;
        const { isRegistered } = req;

        await isRegistered.update({ status: "Out", exitTime });

        res.status(200).json({ status: "success", data: { isRegistered } });
    } catch (error) {
        console.log(error);
    }
};

const cancelRegistration = async (req, res) => {
    try {

        const { isRegistered } = req;

        isRegistered.update({ status: "cancelled" });

        res.status(204).json({ status: "success" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllRegistrations,
    getOneRegistration,
    createRegistration,
    updateRegistration,
    cancelRegistration,
};
