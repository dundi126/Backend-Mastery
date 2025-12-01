import express from "express";

const app = express();

app.use(express.static("dist"));
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;

const jokes = [
	{
		id: 1,
		setup: "Why don't scientists trust atoms?",
		punchline: "Because they make up everything!",
	},
	{
		id: 2,
		setup: "Why did the math book look sad?",
		punchline: "Because it had too many problems.",
	},
	{
		id: 3,
		setup: "What do you call fake spaghetti?",
		punchline: "An impasta!",
	},
	{
		id: 4,
		setup: "Why did the scarecrow win an award?",
		punchline: "Because he was outstanding in his field!",
	},
	{
		id: 5,
		setup: "What do you call cheese that isn't yours?",
		punchline: "Nacho cheese!",
	},
];

app.get("/api/jokes", (req, res) => {
	res.send(jokes);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
