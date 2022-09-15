const getPosts = async () =>
	await fetch(`${import.meta.env.VITE_TYPICODE_URL}/posts`, {
		method: 'GET',
	}).then(res => res.json());

export default getPosts;
