import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get("/api/jokes")
			.then((response) => {
				setJokes(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching the jokes!", error);
			});
	});

	return (
		<>
			<h1>Full Stack Connection</h1>
			<p>Count: {jokes.length}</p>

			{jokes.map((joke, index) => (
				<div key={index}>
					<h3>{joke.setup}</h3>
					<p>{joke.punchline}</p>
				</div>
			))}
		</>
	);
}

export default App;
