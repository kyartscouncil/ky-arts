<template>
	<section>
		<h1>Grants and Programs Details</h1>
		<p>ID: {{ id }}</p>
		<p>Title: {{ document.title }}</p>
		<p>Description: {{ document.description }}</p>
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	import getDocument from '../../composables/getDocument';

	const props = defineProps(['id']);

	const { document } = getDocument('grants-programs', props.id);
</script>

<style>
	section {
		margin: 30px;
	}
</style>
