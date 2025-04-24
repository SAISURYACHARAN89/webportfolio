import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.resolve("./public/Data/CVGeneral12222419.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="Resume.pdf"');
  res.send(fileBuffer);
}
