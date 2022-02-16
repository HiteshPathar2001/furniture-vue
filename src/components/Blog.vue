<template>
        <!--blog start -->
        <section id="blog" class="blog">
            <div class="container">
                <div class="section-header">
                    <h2>latest blog</h2>
                </div><!--/.section-header-->
                <div class="blog-content">
                    <div class="row">
                        <div class="col-sm-4" v-for="(blog,key) in blogs" :key="key">
                            <div class="single-blog">
                                <div class="single-blog-img">
                                    <img :src="require(`@/assets/images/${blog.imgPath}`)" alt="blog image">
                                    <div class="single-blog-img-overlay"></div>
                                </div>
                                <div class="single-blog-txt">
                                    <h2><a href="#">{{blog.name}}</a></h2>
                                    <h3>By <a href="#">{{blog.author}}</a> / 18th March 2018</h3>
                                    <p>
                                        {{blog.desc}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.container-->

        </section><!--/.blog-->
        <!--blog end -->
</template>

<script>
    import {blogs} from "../mixins/Common";

    export default {
        mixins : [blogs],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
