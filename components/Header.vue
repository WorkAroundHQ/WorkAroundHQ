<template>
	<nav>
		<NuxtLink to="/" class="wa-home">
			<img class="wa-logo-img" src="~/assets/img/logo.svg" alt="WorkAround Logo" width="32.5 px" height="32.5 px">
			<p class="wa-logo-text">WorkAround</p>
		</NuxtLink>
		<div class="wa-social-media">
			<a class="wa-twitter-link" href="https://twitter.com/WorkAroundHQ" target="_blank" rel="noopener" aria-label="Twitter Link">
				<img class="wa-twitter umami--click--twitter" src="~/assets/img/twitter.svg" alt="Twitter Link">
			</a>
		<div class="wa-social-media-spacer"></div>
			<a class="wa-github-link" href="https://github.com/WorkAroundHQ" rel="noopener" target="_blank" aria-label="GitHub Link">
				<img class="wa-github umami--click--github" src="~/assets/img/github.svg" alt="GitHub Link">
			</a>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@import 'assets/scss/components/header.scss';
</style>
