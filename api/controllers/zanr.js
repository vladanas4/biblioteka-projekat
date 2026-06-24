import { db } from "../connect.js";

// export const getZanr = (req,res)=> {
//     const q = "SELECT * FROM zanr WHERE id = ?";
//     const values = [req.params.zanrId];

//     db.query(q, values, (err, data) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }
//         res.json(data);
//     });

// }

export const getAllZanr = (req,res)=> {
    const q = "SELECT * FROM zanr";

    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(data);
    });

}

export const insertZanr = (req,res)=> {
    const q = "INSERT INTO zanr (naziv) VALUES (?)";
    const values = [req.body.naziv];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(data);
    });

}

export const deleteZanr = (req,res)=> {
    const q = "DELETE FROM zanr WHERE id = ?";
    const values = [req.params.id];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(data);
    });

}