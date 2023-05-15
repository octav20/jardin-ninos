import { pool } from "@/config/db";


export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getMaestro(req, res);
        case "DELETE":
            return await deleteMaestro(req, res);
        case "PUT":
            return await updateMaestro(req, res);
    }
}
const getMaestro = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT a.id, a.nombre, a.fecha_nacimiento as fechaNacimiento, a.telefono, a.direccion, s.grado, a.id_salon FROM maestro a INNER JOIN salon s ON a.id_salon = s.id WHERE a.id = ?;", [
            id,
        ]);
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteMaestro = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await pool.query("DELETE FROM maestro WHERE id =?", [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateMaestro = async (req, res) => {
    try {
        const { id } = req.query;
        const { nombre, fechaNacimiento, telefono, direccion, id_salon } = req.body;

        await pool.query(
            "UPDATE maestro SET nombre = ?, fecha_nacimiento = ?, telefono = ?, direccion = ?, id_salon = ?  WHERE id =?",
            [nombre, fechaNacimiento, telefono, direccion, id_salon, id]
        );
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};