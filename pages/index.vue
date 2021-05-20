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
    <script async defer data-website-id="19c7ef49-dad0-4129-9448-f9ee75340f66" src="https://cukami.workaround.world/umami.js"></script>
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

<style scoped>
  .mission {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.comingSoonBadge {
		background-color: #51C4D3;
		border-radius: 10px;
		width: 135px;
		height: 30px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.comingSoonText {
		color: white;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.missionStatement {
		font-weight: 900;
		text-align: center;
		margin-bottom: 40px;
	}

	.caption {
		color: #949FB3;
		font-weight: 500;
		display: flex;
		justify-content: center;
		text-align: center;
		max-width: 760px;
	}

	.midSpacer {
		height: 130px;
	}

	.contact {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.contactButton {
		display: inline-block;
		background-color: #114477;
		color: white;
		font-size: 18px;
		line-height: 50px;
		text-align: center;
		margin: 0;
		height: 50px;
		padding: 0 33px;
		border-radius: 10px;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight:  500;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition: background-color 0.2s;
	}

	.contactButton:hover {
		color: white;
		background-color: #2B2D42;
	}

	.contactSpacer {
		height: 45px;
	}

	.note {
		font-weight: 500;
		text-align: center;
		width: 60%;
	}

	@media only screen and (max-width: 768px) {
		.note {
			width: 90%;
		}
	}
</style>