import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Salom, TypeScript bilan Node.js ishlayapti!");
});

// Serverni ishga tushurish

app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT} da ishlayapti`);
});
