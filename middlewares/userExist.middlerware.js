const { Registration } = require("../models/registrations.model");

const userExists = async (req, res, next) => {
    try {
        const { id } = req.params;

        const isRegistered = await Registration.findOne({ where: { id } });

        if (!isRegistered) {
            return res.status(404).json({
                status: "error",
                message: "User not registered",
            });
        }

        req.isRegistered = isRegistered;
        
        next();
    } catch (error) {
        console.log(error);
    }

   
};

module.exports = { userExists };
