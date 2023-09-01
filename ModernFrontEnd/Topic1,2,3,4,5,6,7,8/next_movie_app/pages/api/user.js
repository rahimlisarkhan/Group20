import { readData } from "../../shared/helper/readData";
import { writeData } from "../../shared/helper/writeData";

export default function userHandler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Set other CORS headers as needed (e.g., methods, headers, etc.)
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET") {
    let data = null;

    readData("personal", (d) => {
      data = d;
    });

    res.status(200).json({ message: "OK", user: data });
  }

  if (req.method === "POST") {
    const { name, age } = req.body;

    if (!name || !age) {
      res.status(404).json({ message: "Fields are empth" });
    }

    const newData = {
      name,
      age,
    };
    // res.redirect("/products");

    // await writeData("personal", newData);
    writeData("personal", newData);

    res.status(201).json({ message: "Created", newData });
  }
}
