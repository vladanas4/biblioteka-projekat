import Express from "express";
const app = Express()

import zanroviRoutes from "./routes/zanrovi.js"

app.use("/api/zanrovi", zanroviRoutes); // kad god posjetimo /api/zanrovi vodi nas na sadrzaj definisan u ./routes/zanrovi.js

app.listen(8800, () => {
    console.log("API radi!");
});