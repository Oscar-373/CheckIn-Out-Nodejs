const express = require("express");

const {
    getAllRegistrations,
    getOneRegistration,
    createRegistration,
    updateRegistration,
    cancelRegistration,
} = require("../controllers/registrations.controller");

const registrationsRouter = express.Router();

registrationsRouter.get("/", getAllRegistrations);
registrationsRouter.get("/:id", getOneRegistration);
registrationsRouter.post("/", createRegistration);
registrationsRouter.patch("/:id", updateRegistration);
registrationsRouter.delete("/:id", cancelRegistration);

module.exports = { registrationsRouter };
