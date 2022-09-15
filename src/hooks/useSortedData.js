import { ref } from 'vue';

const sortedPosts = ref([]);

const getSortedPosts = (users, posts) => {
	sortedPosts.value = [];

	for (let user in users) {
		for (let post in posts) {
			if (users[user].id === posts[post].userId) {
				sortedPosts.value.push({ ...posts[post], userName: users[user].name });
			}
		}
	}
};

const getFilteredPosts = letter => {
	sortedPosts.value = sortedPosts.value.filter(post =>
		post.userName.toLowerCase().trim('').includes(letter.toLowerCase().trim(''))
	);
};

const useSourceData = () => {
	return {
		getSortedPosts,
		sortedPosts,
		getFilteredPosts,
	};
};

export default useSourceData;
