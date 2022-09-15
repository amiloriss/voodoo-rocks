const getUsers = async () =>
	await fetch(`${import.meta.env.VITE_TYPICODE_URL}/users`, {
		method: 'GET',
	}).then(res => res.json());

export default getUsers;
