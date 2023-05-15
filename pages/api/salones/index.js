import { pool } from "@/config/db";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getSalones(req, res);
        case "POST":
            return await saveSalon(req, res);
    }
}

const getSalones = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM salon ");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });

    }
};

const saveSalon = async (req, res) => {
    try {
        const { nombre, grado } = req.body;
        const [result] = await pool.query("Insert into salon SET ?", {
            nombre, grado
        });
        return res
            .status(200)
            .json({ result, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
