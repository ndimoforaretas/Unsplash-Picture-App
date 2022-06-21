import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID cGucUcgIhVZbPS0Dyd8p5JbnEsoYqJgY70qJADJPovA",
	},
});
