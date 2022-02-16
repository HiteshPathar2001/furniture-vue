<template>
<!-- clients strat -->
		<section id="clients"  class="clients">
			<div class="container">
				<div class="owl-carousel owl-theme" id="client">
						<div class="item" v-for="(client,key) in clients" :key="key">
							<a href="#">
								<img :src="require(`@/assets/images/${client.imgPath}`)" alt="brand-image">
							</a>
						</div>
					</div><!--/.owl-carousel-->

			</div><!--/.container-->

		</section><!--/.clients-->	
		<!-- clients end -->
</template>

<script>
	import {clients} from "../mixins/Common";

	export default {
		mixins: [clients],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#client {
	display: flex;
	justify-content: space-around;
}
</style>
