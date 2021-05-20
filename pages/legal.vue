<template>
	<div>
		<div class="content">
			<Header />
			<main>
				<div class="legalTopSpacer"></div>
				<section class="legalNotice">
					<h2>Legal Notice</h2>
					<br>
					<h3>Information according to § 5 TMG</h3>
					<p>Maurice Gerhardt</p>
					<p>An der Wuhlheide 226</p>
					<p>12459 Berlin</p>
					<p>Germany</p>
					<br>
					<h3>Contact</h3>
					<p>Phone: +49 179 829 74 29</p>
					<p>Email: maurice.gerhardt@code.berlin</p>
					<br>
					<h3>Liability for contents</h3>
					<p>As a service provider, we are responsible for our own content on these pages according to § 7 para.1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG we are not obliged to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity.<br>Obligations to remove or block the use of information according to general laws remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a concrete infringement. If we become aware of any such legal infringements, we will remove the content in question immediately.</p>
					<br>
					<h3>Liability for links</h3>
					<p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the contents of the linked sites. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not identified at the time of linking.<br>However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.</p>
					<br>
					<h3>Copyright</h3>
					<p>The contents and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use.<br>Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately.</p>
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
    title: 'Legal Notice',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Legal Notice'
      }
    ],
  }
}
</script>

<style scoped>
	.legalTopSpacer {
	height: 90px;
	}

	@media only screen and (max-width: 768px) {
		.legalTopSpacer {
			height: 50px;
		}
	}

	.legalNotice {
		margin-left: 2.5px;
	}

	.legalNotice h3 {
		margin-bottom: 5px;
	}

	.legalNotice p {
		line-height: 1.5em;
	}
</style>