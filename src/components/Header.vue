<template>
    <header id="home" class="welcome-hero">
        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <!--/.carousel-indicator -->
            <!--            <ol class="carousel-indicators">-->
            <!--                <li data-target="#header-carousel" data-slide-to="0">-->
            <!--                    <span class="small-circle"></span>-->
            <!--                </li>-->
            <!--                <li data-target="#header-carousel" data-slide-to="1">-->
            <!--                    <span class="small-circle"></span>-->
            <!--                </li>-->
            <!--                <li data-target="#header-carousel" data-slide-to="2">-->
            <!--                    <span class="small-circle"></span>-->
            <!--                </li>-->
            <!--            </ol>-->
            <!-- /ol-->
            <!--/.carousel-indicator -->
            <!--/.carousel-inner -->
            <div class="carousel-inner" role="listbox">
                <carousel :per-page="1" :autoplay="true" :loop="true">
                    <slide v-for="(chair,index) in chairs" :key="index">
                        <!-- .item -->
                        <div class="item carousel-item active">
                            <div class="single-slide-item slide1">
                                <div class="container">
                                    <div class="welcome-hero-content">
                                        <div class="row">
                                            <div class="col-sm-7">
                                                <div class="single-welcome-hero">
                                                    <div class="welcome-hero-txt">
                                                        <h4 class="animated fadeInUp" style="opacity: 0">
                                                            great design collection
                                                        </h4>
                                                        <h2 class="animated fadeInUp" style="opacity: 0">
                                                            {{chair.name}}
                                                        </h2>
                                                        <p class="animated fadeInUp" style="opacity: 0">
                                                            {{chair.desc}}
                                                        </p>
                                                        <div class="packages-price">
                                                            <p class="animated fadeInUp" style="opacity: 0">
                                                                $ {{chair.price}}
                                                                <del>$ {{chair.mainPrice}}</del>
                                                            </p>
                                                        </div>
                                                        <button class="btn-cart welcome-add-cart animated fadeInDown" onclick="window.location.href='#'" style="opacity: 0">
                                                            <span class="lnr lnr-plus-circle"></span>
                                                            add <span>to</span> cart
                                                        </button>
                                                        <button class="btn-cart welcome-add-cart welcome-more-info animated fadeInDown" onclick="window.location.href='#'" style="opacity: 0">
                                                            more info
                                                        </button>
                                                    </div>
                                                    <!--/.welcome-hero-txt-->
                                                </div>
                                                <!--/.single-welcome-hero-->
                                            </div>
                                            <!--/.col-->
                                            <div class="col-sm-5">
                                                <div class="single-welcome-hero">
                                                    <div class="welcome-hero-img">
<!--                                                        <img src="../assets/images/slider/slider1.png" alt="slider image"/>-->
                                                        <img :src="require(`@/assets/images/slider/${chair.imagepath}`)" alt="slider image">
                                                    </div>
                                                    <!--/.welcome-hero-txt-->
                                                </div>
                                                <!--/.single-welcome-hero-->
                                            </div>
                                            <!--/.col-->
                                        </div>
                                        <!--/.row-->
                                    </div>
                                    <!--/.welcome-hero-content-->
                                </div>
                                <!-- /.container-->
                            </div>
                            <!-- /.single-slide-item-->
                        </div>
                        <!-- /.item .active-->
                    </slide>
                </carousel>
            </div>
            <!-- /.carousel-inner-->
        </div>
        <!--/#header-carousel-->
        <!-- top-area Start -->
        <div class="top-area">
            <div class="header-area">
                <!-- Start Navigation -->
                <div class="wrap-sticky" style="height: 78px">
                    <nav class="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy on menu-center no-full" :class="{ sticked: scrollPosition > 50 }" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">                        <!-- Start Top Search -->
                        <transition name="slide-fade">
                        <div class="top-search" :style="search">
                            <div class="container">
                                <div class="input-group">
                                   <span class="input-group-addon">
                                       <i class="fa fa-search"></i>
                                   </span>
                                    <input type="text" class="form-control" placeholder="Search"/>
                                    <span class="input-group-addon close-search" @click="show">
                                        <i class="fa fa-times"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        </transition>
                        <!-- End Top Search -->
                        <div class="container">
                            <!-- Start Atribute Navigation -->
                            <div class="attr-nav">
                                <ul>
                                    <li class="search">
                                        <a href="#" @click="show">
                                            <span class="lnr lnr-magnifier"></span>
                                        </a>
                                    </li>
                                    <!--/.search-->
                                    <li class="nav-setting">
                                        <a href="#"><span class="lnr lnr-cog"></span></a>
                                    </li>
                                    <!--/.search-->
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            <span class="lnr lnr-cart"></span>
                                            <span class="badge badge-bg-1">2</span>
                                        </a>
                                        <ul class="dropdown-menu cart-list s-cate animated fadeOutUp" style="display: none; opacity: 1">
                                            <li class="single-cart-list">
                                                <a href="#" class="photo">
                                                    <img src="../assets/images/collection/arrivals1.png" class="cart-thumb" alt="image"/>
                                                </a>
                                                <div class="cart-list-txt">
                                                    <h6>
                                                        <a href="#">arm <br/>chair</a>
                                                    </h6>
                                                    <p>1 x - <span class="price">$180.00</span></p>
                                                </div>
                                                <!--/.cart-list-txt-->
                                                <div class="cart-close">
                                                    <span class="lnr lnr-cross"></span>
                                                </div>
                                                <!--/.cart-close-->
                                            </li>
                                            <!--/.single-cart-list -->
                                            <li class="single-cart-list">
                                                <a href="#" class="photo">
                                                    <img src="../assets/images/collection/arrivals2.png" class="cart-thumb" alt="image"/>
                                                </a>
                                                <div class="cart-list-txt">
                                                    <h6>
                                                        <a href="#">single <br/>armchair</a>
                                                    </h6>
                                                    <p>1 x - <span class="price">$180.00</span></p>
                                                </div>
                                                <!--/.cart-list-txt-->
                                                <div class="cart-close">
                                                    <span class="lnr lnr-cross"></span>
                                                </div>
                                                <!--/.cart-close-->
                                            </li>
                                            <!--/.single-cart-list -->
                                            <li class="single-cart-list">
                                                <a href="#" class="photo">
                                                    <img src="../assets/images/collection/arrivals3.png" class="cart-thumb" alt="image"/>
                                                </a>
                                                <div class="cart-list-txt">
                                                    <h6>
                                                        <a href="#">wooden arn <br/>chair</a>
                                                    </h6>
                                                    <p>1 x - <span class="price">$180.00</span></p>
                                                </div>
                                                <!--/.cart-list-txt-->
                                                <div class="cart-close">
                                                    <span class="lnr lnr-cross"></span>
                                                </div>
                                                <!--/.cart-close-->
                                            </li>
                                            <!--/.single-cart-list -->
                                            <li class="total">
                                                <span>Total: $0.00</span>
                                                <button class="btn-cart pull-right" onclick="window.location.href='#'">
                                                    view cart
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                    <!--/.dropdown-->
                                </ul>
                            </div>
                            <!--/.attr-nav-->
                            <!-- End Atribute Navigation -->
                            <!-- Start Header Navigation -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <a class="navbar-brand" href="index.html">sine<span>mkt</span>.</a>
                            </div>
                            <!--/.navbar-header-->
                            <!-- End Header Navigation -->
                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li v-for="(menu, key) in menus" :key="key">
                                        <a :href="menu.path"  v-smooth-scroll="{ duration: 600}">{{ menu.name | capitalize}}</a>
                                    </li>
                                    <router-link to="/blogcontent">Blog</router-link>
                                </ul>
                                <!--/.nav -->
                            </div>
                            <!-- /.navbar-collapse -->
                        </div>
                        <!--/.container-->
                    </nav>
                </div>
                <!--/nav-->
                <!-- End Navigation -->
            </div>
            <!--/.header-area-->
            <div class="clearfix"></div>
        </div>
        <!-- /.top-area-->
        <!-- top-area End -->
    </header>
</template>

<script>
    import {Carousel, Slide} from "vue-carousel";
    import {navigation} from '../mixins/Common.js';
    export default {
        mixins:[navigation],
        components: {
            Carousel,
            Slide,
        },
        data() {
            return {
                search: "display:none",
                scrollPosition: null,
                isActive: false,
                value: 1,
            };
        },
        methods: {
            show() {
                if (this.search == "display:none") {
                    this.search = "display:block";
                } else {
                    this.search = "display:none";
                }
            },
            updateScroll() {
                this.scrollPosition = window.scrollY;
            },
        },
        mounted() {
            window.addEventListener("scroll", this.updateScroll);
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .single-welcome-hero {
        height: auto;
        margin-top: 200px;
    }
</style>
