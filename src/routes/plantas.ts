
import { Router } from 'express';


import dayjs  from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);


export const router = Router();


router.get('/plantas', (_req, res) => {
    res.json({
        message: 'List of plants'
    });
});


router.post('/resgistrarRiego', async(req, res) => {
    const { idPlanta, humedad } = req.body;
    const fechaRiego = dayjs().tz('America/Bogota').format(); // hora actual en Colombia
    console.log(idPlanta, fechaRiego,humedad);
    if (!idPlanta || !fechaRiego || !humedad) {
        res.status(400).json({
            message: 'Faltan datos para registrar el riego',
            idPlanta,
            fechaRiego,
            humedad
        });
        return;
    }

})