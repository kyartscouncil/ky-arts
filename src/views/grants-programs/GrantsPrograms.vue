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
	import getCollection from '../../composables/getCollection';
	const { documents: grants } = getCollection('grants-programs');
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
