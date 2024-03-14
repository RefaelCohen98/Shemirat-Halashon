import Express  from "express";
const app = Express()

app.get("/", (req, res) => {
    res.json({"users": ["one", "two", "three"]})
})

app.listen(5000, () => {console.log("server running on port 5000 and client on port");})