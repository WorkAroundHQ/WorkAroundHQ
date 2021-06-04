<template>
	<nav>
		<NuxtLink to="/" class="home">
			<img class="logo-img" src="~/assets/img/logo.svg" alt="WorkAround Logo" width="32.5 px" height="32.5 px">
			<p class="logo-text">WorkAround</p>
		</NuxtLink>
		<div class="social-media">
			<a class="twitter-link" href="https://twitter.com/WorkAroundHQ" target="_blank" aria-label="Twitter Link">
				<img class="twitter umami--click--twitter" src="~/assets/img/twitter.svg" alt="Twitter Link">
			</a>
		<div class="social-media-spacer"></div>
			<a class="github-link" href="https://github.com/WorkAroundHQ" target="_blank" aria-label="GitHub Link">
				<img class="github umami--click--github" src="~/assets/img/github.svg" alt="GitHub Link">
			</a>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@import 'assets/scss/components/header.scss';
</style>
