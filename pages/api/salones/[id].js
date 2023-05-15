import { pool } from "@/config/db";


export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getSalon(req, res);
        case "DELETE":
            return await deleteSalon(req, res);
        case "PUT":
            return await updateSalon(req, res);
    }
}
const getSalon = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT * FROM salon WHERE id = ?", [
            id,
        ]);
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteSalon = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await pool.query("DELETE FROM salon WHERE id =?", [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateSalon = async (req, res) => {
    try {
        const { id } = req.query;
        const { nombre, grado } = req.body;

        await pool.query(
            "UPDATE salon SET nombre = ?, grado = ?  WHERE id =?",
            [nombre, grado, id]
        );
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};