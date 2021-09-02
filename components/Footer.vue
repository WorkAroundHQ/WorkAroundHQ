<template>
	<footer class="footer">
		<div class="footerContent">
			<p class="designedIn">Developed in Berlin</p>
			<div class="footerLinks">
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
