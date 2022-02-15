<template>
  <div id="app">
    <Header />
    <PopularProducts />
    <NewArrivals />
    <SofaCollection />
    <FeaturedProducts/>
    <Blog />
    <Clients />
    <NewsLetter />
    <Footer />
    <test />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PopularProducts from './components/PopularProducts.vue'
import Footer from './components/Footer.vue'
import NewArrivals from './components/NewArrivals.vue'
import SofaCollection from './components/SofaCollection.vue'
import FeaturedProducts from './components/FeaturedProducts.vue'
import Blog from './components/Blog.vue'
import Clients from './components/Clients.vue'
import NewsLetter from './components/NewsLetter.vue'
import test from './components/test.vue'
export default {
  name: 'App',
  components: {
    Header,
    PopularProducts,
    Footer,
    NewArrivals,
    SofaCollection,
    FeaturedProducts,
    Blog,
    Clients,
    NewsLetter,
    test
  }
}


</script>

<style>
  @import "assets/css/bootstrap.min.css";
  @import "assets/css/bootsnav.css";
  @import "assets/css/style.css";
   @import "assets/css/owl.carousel.min.css";
  @import "assets/css/owl.theme.default.min.css";
  @import "assets/css/animate.css";
  @import "assets/css/responsive.css";
  @import "assets/css/linearicons.css";
  @import "assets/css/font-awesome.min.css";

</style>
