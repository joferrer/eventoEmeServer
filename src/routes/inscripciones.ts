import { agregarInscripcion } from "@/firebase/firestore";
import { Inscripcion } from "@/types/inscripcion";
import { Router } from "express";


export const router = Router();

router.post('/inscribirse', async(req, res) => {
    console.log(req.body);

     const nuevaInscripcion: Inscripcion = {
        ...req.body
     }
     const resp = await agregarInscripcion(nuevaInscripcion);
    res.json(resp);
})