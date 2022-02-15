export default {
    methods: {
        show() {
            if (this.search == "display:none") {
                this.search = "display:block";
            } else {
                this.search = "display:none";
            }
        },
        myFilter: function () {
            this.isActive = !this.isActive;
        },
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
};