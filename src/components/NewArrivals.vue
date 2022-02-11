<template>
    <div>
    <!--new-arrivals start -->
    <section id="new-arrivals" class="new-arrivals">
        <div class="container">
            <div class="section-header">
                <h2>new arrivals</h2>
            </div><!--/.section-header-->
            <div class="new-arrivals-content">
                <div class="row" >
                    <div class="col-md-3 col-sm-4" v-for="(item,key) in items" :key="key">
                        <div class="single-new-arrival" >
                            <div class="single-new-arrival-bg" >
                                <img :src="require(`@/assets/images/${item.img}`)" alt="new-arrivals images">
                                <div class="single-new-arrival-bg-overlay"></div>
                                <div :class="item.myClass">
                                    <p>sale</p>
                                </div>
                                <div class="new-arrival-cart">
                                    <p>
                                        <span class="lnr lnr-cart"></span>
                                        <a href="#">add <span>to </span> cart</a>
                                    </p>
                                    <p class="arrival-review pull-right">
                                        <span class="lnr lnr-heart"></span>
                                        <span class="lnr lnr-frame-expand"></span>
                                    </p>
                                </div>
                            </div>
                            <h4><a href="#">{{item.name}}</a></h4>
                            <p class="arrival-product-price">{{item.price}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--/.container-->

    </section><!--/.new-arrivals-->
    <!--new-arrivals end -->
    </div>
</template>

<script>
    export default {
        props: {
            item: String
        },
        name: 'NewArrivals',
        data () {
            return {
                items: [
                    {
                        img:'collection/arrivals1.png',
                        name: "Wooden Chair",
                        price: "$65",
                        myClass  : "sale bg-1"
                    },
                    {
                        img: "collection/arrivals2.png",
                        name: "Single Armchair",
                        price: "$80",
                        myClass  : "sale bg-2"
                    },
                    {
                        img: "collection/arrivals3.png",
                        name: "Wooden Armchair",
                        price: "$40",
                        myClass  : ""
                    },
                    {
                        img: "collection/arrivals4.png",
                        name: "Stylish Chair",
                        price: "$100",
                        myClass  : "sale bg-1"
                    },
                    {
                        img: "collection/arrivals5.png",
                        name: "Modern Chair",
                        price: "$120",
                        myClass  : ""
                    },
                    {
                        img: "collection/arrivals6.png",
                        name: "Mapple Wood Dinning Table",
                        price: "$140",
                        myClass  : "sale bg-1"
                    },
                    {
                        img: "collection/arrivals7.png",
                        name: "Arm Chair",
                        price: "$90",
                        myClass  : "sale bg-2"
                    },
                    {
                        img: "collection/arrivals8.png",
                        name: "Wooden Bad",
                        price: "$140",
                        myClass  : "sale bg-1"
                    },
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
