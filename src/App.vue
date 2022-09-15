<script>
import { ref, watchEffect } from 'vue';
import Search from './components/search/Search.vue';
import Card from './components/card/Card.vue';
import getPosts from './api/posts';
import getUsers from './api/users';
import useSourceData from './hooks/useSortedData';

export default {
	name: 'App',
	components: {
		Search,
		Card,
	},
	setup() {
		const { sortedPosts, getSortedPosts } = useSourceData();
		const textInput = ref('');

		watchEffect(async () => {
			const posts = await getPosts();
			const users = await getUsers();
			getSortedPosts(users, posts);
		});

		return {
			textInput,
			sortedPosts,
		};
	},
};
</script>

<template>
	<div class="app">
		<div class="container">
			<div class="search-wrapper">
				<Search />
			</div>
			<div class="posts-wrapper">
				<div class="row row-cols-1 row-cols-md-3 g-4">
					<Card :sortedPosts="sortedPosts" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.app {
	background-color: #e8eff3;
	min-height: 100vh;
	height: 100%;
	padding-top: 20px;

	.container {
		max-width: 1200px;

		.search-wrapper {
			max-width: 400px;
			margin: 0 auto;
		}
	}
}
</style>
