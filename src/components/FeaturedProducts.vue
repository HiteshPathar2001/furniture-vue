<template>
    <!--feature start -->
    <section id="feature" class="feature">
        <div class="container">
            <div class="section-header">
                <h2>featured products</h2>
            </div><!--/.section-header-->
            <div class="feature-content">
                <div class="row">
                    <div class="col-sm-3" v-for="(product,key) in products" :key="key">
                        <div class="single-feature">
                            <img :src="require(`@/assets/images/${product.imgPath}`)" alt="feature images">
                            <div class="single-feature-txt text-center">
                                <p>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <span class="spacial-feature-icon"><i class="fa fa-star"></i></span>
                                    <span class="feature-review">(45 review)</span>
                                </p>
                                <h3><a href="#">{{product.name}}</a></h3>
                                <h5>{{product.price}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--/.container-->

    </section><!--/.feature-->
    <!--feature end -->
</template>

<script>
    import {featuredProducts} from "../mixins/Common";

    export default {
        mixins : [featuredProducts],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
