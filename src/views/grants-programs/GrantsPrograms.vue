<template>
	<main class="grants-programs-page">
		<h1>Grants and Programs</h1>
		<p>This is the grants and programs page.</p>
		<section>
			<ul>
				<li v-for="grant in grants" :key="grant.id">
					<router-link :to="{ name: 'GrantsProgramsDetails', params: { id: grant.id } }">
						{{ grant.title }}
					</router-link>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
	import { ref } from 'vue';

	const grants = ref([
		{ title: 'Kentucky Arts Partnership Grant', id: 1, description: 'This is the description for KAP.' },
		{ title: 'Kentucky Peer Advisory Network', id: 2, description: 'This is the description for KPAN.' },
		{ title: 'Al Smith Fellowship Grant', id: 3, description: 'This is the description for ASF.' },
		{ title: 'Emerging Artist Grant', id: 4, description: 'This is the description for EA.' },
	]);
</script>

<style scoped>
	section {
		margin: 20px 0px;
	}
	ul {
		list-style: none;
		padding: 0px;
		margin: 0px;
	}
</style>
