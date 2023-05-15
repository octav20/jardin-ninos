import { pool } from "@/config/db";


export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getAlumno(req, res);
        case "DELETE":
            return await deleteAlumno(req, res);
        case "PUT":
            return await updateAlumno(req, res);
    }
}
const getAlumno = async (req, res) => {
    try {
        const { id } = req.query;
        // const [result] = await pool.query("SELECT * FROM alumno WHERE id = ?", [
        //     id,
        // ]);
        const [result] = await pool.query("SELECT a.nombre, a.fecha_nacimiento as fechaNacimiento, a.contacto, a.direccion, s.grado, a.id_salon FROM alumno a INNER JOIN salon s ON a.id_salon = s.id WHERE a.id = ?;", [
            id,
        ]);
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteAlumno = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await pool.query("DELETE FROM alumno WHERE id =?", [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateAlumno = async (req, res) => {
    try {
        const { id } = req.query;
        const { nombre, fechaNacimiento, contacto, direccion, id_salon } = req.body;

        await pool.query(
            "UPDATE alumno SET nombre = ?, fecha_nacimiento = ?, contacto = ?, direccion = ?, id_salon = ?  WHERE id =?",
            [nombre, fechaNacimiento, contacto, direccion, id_salon, id]
        );
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};