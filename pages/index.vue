<template>
	<div>
		<div class="content">
      <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id='typef_orm_share', b='https://embed.typeform.com/'; if(!gi.call(d,id)){ js=ce.call(d,'script'); js.id=id; js.src=b+'embed.js'; q=gt.call(d,'script')[0]; q.parentNode.insertBefore(js,q) } })() </script>
			<Header />
			<div class="spacer"></div>
			<main>
				<section class="mission">
					<div class="comingSoonBadge">
						<p class="comingSoonText">COMING SOON</p>
					</div>
					<h1 class="missionStatement">Step up your<br>digital life!</h1>
					<h2 class="caption">WorkAround is a community for digital nomads around the world to connect with each other.</h2>
				</section>
				<div class="midSpacer"></div>
				<section class="contact">
					<a class="typeform-share button contactButton umami--click--newsletter" href="https://form.typeform.com/to/dfJKj6JT?typeform-medium=embed-snippet" rel="noopener" data-mode="popup" data-size="50" data-hide-headers="true" data-hide-footer="true" data-submit-close-delay="2" target="_blank">Get notified!</a>
					<div class="contactSpacer"></div>
					<h3 class="note">We are working hard to release the first beta of WorkAround in September 2021. Until then, please leave your email to be the first to be notified.</h3>
				</section>
			</main>
			<div class="spacer"></div>
		</div>
		<Footer />
	</div>
</template>

<script>
export default {
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/index.scss';
</style>
