<script setup>
	import TheHeader from './components/TheHeader.vue';
</script>

<template>
	<div class="app">
		<TheHeader />
		<router-view />
	</div>
</template>

<style>
	:root {
		--el-buffer: 30px;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Fira sans', sans-serif;
	}

	main {
		margin: var(--el-buffer);
	}
</style>
