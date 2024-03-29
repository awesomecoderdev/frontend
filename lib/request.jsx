import axios from "axios";

const request = axios.create({
	baseURL: "https://api.wpplagiarism.one/v1/",
	withCredentials: true,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-type": "application/json",
	},
});

export default request;
