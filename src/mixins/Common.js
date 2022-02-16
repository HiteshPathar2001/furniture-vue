export const navigation = {
    data() {
        return {
            menus: [
                {
                    name: "home",
                    path: "#home",
                },
                {
                    name: "new arrival",
                    path: "#new-arrivals",
                },
                {
                    name: "features",
                    path: "#feature",
                },
                {
                    name: "blog",
                    path: "#blog",
                },
                {
                    name: "contact",
                    path: "#newsletter",
                },
            ],
            chairs: [
                {
                    name: "cloth covered accent chair",
                    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.",
                    imagepath: "slider1.png",
                    mainPrice: "399",
                    price: "499"
                },
                {
                    name: "Mapple Wood Accent Chair",
                    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.",
                    imagepath: "slider2.png",
                    mainPrice: "299",
                    price: "399"
                },
                {
                    name: "Valvet Accent Arm Chair",
                    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.",
                    imagepath: "slider3.png",
                    mainPrice: "199",
                    price: "299"
                },
            ],
        }
    }
};
export const newArrivals = {
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
};
export const featuredProducts = {
    data () {
        return {
            products: [
                {
                    name: "Designed Sofa",
                    price: "$160",
                    imgPath: "features/f1.jpg"
                },
                {
                    name: "Dining Table",
                    price: "$200",
                    imgPath: "features/f2.jpg"
                },
                {
                    name: "Chair And Table",
                    price: "$200",
                    imgPath: "features/f3.jpg"
                },
                {
                    name: "Modern Arm Chair",
                    price: "$200",
                    imgPath: "features/f4.jpg"
                },
            ]
        }
    }
};
export const blogs = {
    data () {
        return {
            blogs: [
                {
                    title: "Why Brands are Looking at Local Language",
                    author: "By Robert Norby / 18th March 2018",
                    desc: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
                    imgPath: "blog/b1.jpg",
                },
                {
                    title: "Why Brands are Looking at Local Language",
                    author: "By Robert Norby / 18th March 2018",
                    desc: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
                    imgPath: "blog/b2.jpg",
                },
                {
                    title: "Why Brands are Looking at Local Language",
                    author: "By Robert Norby / 18th March 2018",
                    desc: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
                    imgPath: "blog/b3.jpg",
                },
            ]
        }
    }
};
export const clients = {
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
};