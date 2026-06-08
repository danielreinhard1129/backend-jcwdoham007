import express from "express";

const PORT = 8000;

const app = express();

const users = [
  { id: 1, name: "budi" },
  { id: 2, name: "joko" },
  { id: 3, name: "siti" },
];

app.use(express.json()); // agar bisa menerima req.body

app.get("/api", (req, res) => {
  res.status(200).send("Welcome to my API");
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send(user);
});

app.post("/users", (req, res) => {
  const latestId = users[users.length - 1].id;

  users.push({
    id: latestId + 1,
    name: req.body.name,
  });

  res.status(200).send("Create user success");
});

app.use((req, res) => res.status(404).send({ message: "route not found" }));

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});

// pigiri3887@googxs.com
