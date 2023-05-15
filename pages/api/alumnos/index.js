import { pool } from "@/config/db";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getAlumnos(req, res);
        case "POST":
            return await saveAlumno(req, res);
    }
}

const getAlumnos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT a.nombre, a.fecha_nacimiento as fechaNacimiento, a.contacto, a.direccion, s.grado, a.id_salon FROM alumno a INNER JOIN salon s ON a.id_salon = s.id  ");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });

    }
};

const saveAlumno = async (req, res) => {
    try {
        const { nombre, fechaNacimiento: fecha_nacimiento, contacto, direccion, salon } = req.body;
        const id_salon = parseInt(salon);
        const [result] = await pool.query("Insert into alumno SET ?", {
            nombre, fecha_nacimiento, contacto, direccion, id_salon
        });
        return res
            .status(200)
            .json({ result, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
