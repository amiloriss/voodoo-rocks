<script setup>
defineProps({
	sortedPosts: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<div :key="sortedPost.id" v-for="sortedPost in sortedPosts" class="col mb-3">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-primary">{{ sortedPost.title }}</h5>
				<p class="card-text">
					{{ sortedPost.body }}
				</p>
			</div>
			<div class="card-footer">
				<small class="text-muted">{{ sortedPost.userName }}</small>
			</div>
		</div>
	</div>
</template>

<style></style>
