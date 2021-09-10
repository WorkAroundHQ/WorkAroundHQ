<template>
	<footer class="wa-footer">
		<div class="wa-footer-content">
			<div class="wa-from-berlin">
				<img src="~/assets/img/footer-logo.webp" width="20" height="16.2" alt="WorkAround Logo">
				<p class="wa-designed-in">Developed in Berlin</p>
			</div>
			<div class="wa-footer-links">
				<Mailto mail='maurice.gerhardt@code.berlin' subject="👋🏼 Hello WorkAround">
					Contact Us
				</Mailto>
				<NuxtLink to="/legal">Legal Notice</NuxtLink>
				<NuxtLink to="/privacy">Privacy</NuxtLink>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@import 'assets/scss/components/footer.scss';
</style>
