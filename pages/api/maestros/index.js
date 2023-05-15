import { pool } from "@/config/db";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getMaestro(req, res);
        case "POST":
            return await saveMaestro(req, res);
    }
}

const getMaestro = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT a.id, a.nombre, a.fecha_nacimiento as fechaNacimiento, a.telefono, a.direccion, s.grado, a.id_salon FROM maestro a INNER JOIN salon s ON a.id_salon = s.id ");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });

    }
};

const saveMaestro = async (req, res) => {
    try {
        const { nombre, fechaNacimiento: fecha_nacimiento, telefono, direccion, salon } = req.body;
        const id_salon = parseInt(salon);
        const [result] = await pool.query("Insert into maestro SET ?", {
            nombre, fecha_nacimiento, telefono, direccion, id_salon
        });
        return res
            .status(200)
            .json({ result, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
