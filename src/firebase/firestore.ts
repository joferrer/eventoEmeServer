

import {database} from './config'
import { Inscripcion } from '../types/inscripcion';

export const firestore = database;



export const agregarInscripcion = async(inscripcion: Inscripcion) => {

    try {
        const docRef = await firestore.collection('inscripciones').add({
            ...inscripcion
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
}