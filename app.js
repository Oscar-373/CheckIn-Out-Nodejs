// Se importa la libreria de express.
const express = require("express");

// Routes
const { registrationsRouter } = require("./routes/registrations.routes");

// Inicio de la aplicación con express.
const app = express();

// Habilitar la aplicación Express para recibir datos JSON.
app.use(express.json());

// Endpoints.
app.use("/api/v1/registrations", registrationsRouter);

app.all("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: `${req.method} ${req.url} does not exists in our server`,
    });
});

// Exportacion de configuración del servidor para escuchar
module.exports = { app };
