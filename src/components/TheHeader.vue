<template>
	<header>
		<div>
			<router-link to="/">
				<img class="kac-logo" src="../assets/logo.png" alt="KAC" />
			</router-link>
		</div>
		<nav>
			<ul>
				<li>
					<router-link class="button" to="/about">
						<span class="text">About</span>
					</router-link>
				</li>
				<li>
					<router-link class="button" to="/about">
						<span class="text">Team</span>
					</router-link>
				</li>
				<li>
					<router-link class="button" to="/about">
						<span class="text">Contact Us</span>
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
		margin: var(--el-buffer);
		display: flex;
		justify-content: center;
		align-items: center;
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
		width: 100px;
	}
</style>
