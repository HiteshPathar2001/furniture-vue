<template>
    <div id="app">
        <Header/>
        <PopularProducts/>
        <NewArrivals/>
        <SofaCollection/>
        <FeaturedProducts/>
        <Blog/>
        <Clients/>
        <NewsLetter/>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header.vue'
import PopularProducts from './PopularProducts.vue'
import Footer from './Footer.vue'
import NewArrivals from './NewArrivals.vue'
import SofaCollection from './SofaCollection.vue'
import FeaturedProducts from './FeaturedProducts.vue'
import Blog from './Blog.vue'
import Clients from './Clients.vue'
import NewsLetter from './NewsLetter.vue'

export default {
    name: "Home",
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
    }
}
</script>

<style scoped>
    @import "../assets/css/bootstrap.min.css";
    @import "../assets/css/bootsnav.css";
    @import "../assets/css/style.css";
    @import "../assets/css/owl.carousel.min.css";
    @import "../assets/css/owl.theme.default.min.css";
    @import "../assets/css/animate.css";
    @import "../assets/css/responsive.css";
    @import "../assets/css/linearicons.css";
    @import "../assets/css/font-awesome.min.css";
</style>