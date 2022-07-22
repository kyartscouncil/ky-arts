<template>
	<h1>Grants and Programs Details</h1>
	<p>The ID is {{ id }}</p>
</template>
<script setup>
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';

	const props = defineProps(['id']);

	// const route = useRoute();
	// const id = ref(route.params.id);
</script>

<style></style>
