const express = require("express");

const {
    getAllRegistrations,
    getOneRegistration,
    createRegistration,
    updateRegistration,
    cancelRegistration,
} = require("../controllers/registrations.controller");

const { userExists } = require("../middlewares/userExist.middlerware")

const registrationsRouter = express.Router();

registrationsRouter.get("/", getAllRegistrations);
registrationsRouter.get("/:id", userExists, getOneRegistration);
registrationsRouter.post("/", createRegistration);
registrationsRouter.patch("/:id", userExists, updateRegistration);
registrationsRouter.delete("/:id", userExists, cancelRegistration);

module.exports = { registrationsRouter };
