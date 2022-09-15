<script>
import { ref, watch } from 'vue';
import useSourceData from '../../hooks/useSortedData';
import getPosts from '../../api/posts';
import getUsers from '../../api/users';

export default {
	name: 'Search',

	setup() {
		const { getSortedPosts, getFilteredPosts } = useSourceData();
		const textInput = ref('');

		const onChangeHandler = event => {
			textInput.value = event.target.value;
		};

		watch(textInput, async () => {
			const posts = await getPosts();
			const users = await getUsers();
			getSortedPosts(users, posts);
			getFilteredPosts(textInput.value);
		});

		return {
			onChangeHandler,
			textInput,
		};
	},
};
</script>

<template>
	<div class="input-group mb-3">
		<span class="input-group-text"
			><img
				class="search-icon"
				src="../../assets/icon-search.png"
				alt="search-icon"
		/></span>
		<input
			v-model="textInput"
			@change="onChangeHandler"
			type="text"
			class="form-control"
			placeholder="Username"
			aria-label="Username"
			aria-describedby="basic-addon1"
		/>
	</div>
</template>

<style>
.search-icon {
	width: 20px;
	height: 20px;
}
</style>
