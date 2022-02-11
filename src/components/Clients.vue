<template>
<!-- clients strat -->
		<section id="clients"  class="clients">
			<div class="container">
				<div class="owl-carousel owl-theme" id="client">
						<div class="item" v-for="(client,key) in clients" :key="key">
							<a href="#">
								<img :src="require(`@/assets/images/${client.imgPath}`)" alt="brand-image">
							</a>
						</div><!--/.item-->
<!--						<div class="item">-->
<!--							<a href="#">-->
<!--								<img src="../../src/assets/images/clients/c2.png" alt="brand-image" />-->
<!--							</a>-->
<!--						</div>&lt;!&ndash;/.item&ndash;&gt;-->
<!--						<div class="item">-->
<!--							<a href="#">-->
<!--								<img src="../../src/assets/images/clients/c3.png" alt="brand-image" />-->
<!--							</a>-->
<!--						</div>&lt;!&ndash;/.item&ndash;&gt;-->
<!--						<div class="item">-->
<!--							<a href="#">-->
<!--								<img src="../../src/assets/images/clients/c4.png" alt="brand-image" />-->
<!--							</a>-->
<!--						</div>&lt;!&ndash;/.item&ndash;&gt;-->
<!--						<div class="item">-->
<!--							<a href="#">-->
<!--								<img src="../../src/assets/images/clients/c5.png" alt="brand-image" />-->
<!--							</a>-->
<!--						</div>&lt;!&ndash;/.item&ndash;&gt;-->
					</div><!--/.owl-carousel-->

			</div><!--/.container-->

		</section><!--/.clients-->	
		<!-- clients end -->
</template>

<script>
export default {
	data () {
		return {
			clients : [
				{
					imgPath : "clients/c1.png",
				},
				{
					imgPath : "clients/c2.png",
				},
				{
					imgPath : "clients/c3.png",
				},
				{
					imgPath : "clients/c4.png",
				},
				{
					imgPath : "clients/c5.png",
				},
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#client {
	display: flex;
	justify-content: space-around;
}
</style>
