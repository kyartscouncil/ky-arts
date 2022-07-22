<template>
	<header>
		<div>
			<router-link :to="{ name: 'Home' }">
				<img class="kac-logo" src="../assets/logo.png" alt="KAC" />
			</router-link>
		</div>
		<nav>
			<ul>
				<li>
					<router-link class="button" :to="{ name: 'GrantsPrograms' }">
						<span class="text">Grants & Programs</span>
					</router-link>
				</li>
				<li>
					<router-link class="button" :to="{ name: 'Resources' }">
						<span class="text">Resources</span>
					</router-link>
				</li>
				<li>
					<router-link class="button" :to="{ name: 'Events' }">
						<span class="text">Events</span>
					</router-link>
				</li>
				<li>
					<router-link class="button" :to="{ name: 'About' }">
						<span class="text">About</span>
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup></script>

<style scoped>
	header {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		background: #ccc;
	}

	nav {
		padding: var(--el-buffer);
	}

	nav ul {
		width: 50vw;
		list-style: none;
		display: flex;
		justify-content: space-evenly;
	}

	nav ul li {
		margin: 10px;
	}

	.kac-logo {
		width: 10vw;
		margin: 5px;
	}

	@media screen and (max-width: 1000px) {
		header {
			height: fit-content;
		}
		nav ul {
			flex-direction: column;
			align-items: center;
			justify-content: flex-end;
		}
	}
</style>
