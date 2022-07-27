<template>
	<section>
		<h1>Grants and Programs Details</h1>
		<p>ID: {{ id }}</p>
		<p>Title: {{ title }}</p>
		<p>Description: {{ description }}</p>
	</section>
</template>
<script setup>
	import { ref } from 'vue';
	const props = defineProps(['id']);
</script>

<style>
	section {
		margin: 30px;
	}
</style>
