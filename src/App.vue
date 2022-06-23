<script setup>
	import TheSidebar from './components/TheSidebar.vue';
</script>

<template>
	<div class="app">
		<TheSidebar />
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
