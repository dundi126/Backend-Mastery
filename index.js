require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;
const githubData = {
	login: "dundi126",
	id: 155375409,
	node_id: "U_kgDOCULXMQ",
	avatar_url: "https://avatars.githubusercontent.com/u/155375409?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/dundi126",
	html_url: "https://github.com/dundi126",
	followers_url: "https://api.github.com/users/dundi126/followers",
	following_url: "https://api.github.com/users/dundi126/following{/other_user}",
	gists_url: "https://api.github.com/users/dundi126/gists{/gist_id}",
	starred_url: "https://api.github.com/users/dundi126/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/dundi126/subscriptions",
	organizations_url: "https://api.github.com/users/dundi126/orgs",
	repos_url: "https://api.github.com/users/dundi126/repos",
	events_url: "https://api.github.com/users/dundi126/events{/privacy}",
	received_events_url: "https://api.github.com/users/dundi126/received_events",
	type: "User",
	user_view_type: "public",
	site_admin: false,
	name: "Dundi Vignesh Gutti",
	company: null,
	blog: "https://dundi-portfolio.vercel.app",
	location: "Dearborn,MI",
	email: null,
	hireable: null,
	bio: null,
	twitter_username: null,
	public_repos: 21,
	public_gists: 0,
	followers: 1,
	following: 0,
	created_at: "2024-01-01T14:59:27Z",
	updated_at: "2025-11-27T18:44:54Z",
};

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/twitter", (req, res) => {
	res.send("Twitter endpoint");
});

app.get("/login", (req, res) => {
	res.send("<h1>Login to your account</h1>");
});

app.get("/github", (req, res) => {
	res.send(githubData);
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
