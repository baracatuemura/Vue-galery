<template>
    <div class="app">
        <app-header/>
        <div class="container my-5 content">
            <div class="row">
                <div class="col-md-12">
                    <transition name="bounceLeft" style="animation-duration: 0.2s" mode="out-in">
                        <router-view :json="json" />
                    </transition>
                </div>
            </div>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Header from "./components/Header";
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    import axios from "axios";



    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
        },        
        created() {
            axios.get('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json')
                .then(res => {
                    const data = res.data;
                    this.json = data;

                })
                .catch(error => console.log(error));
        },
        data: function () {
            return {
                json: this.json
            }
        }
    }
</script>

<style lang="scss">
@import './assets/styles/variable.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/styles/custom.scss';


    .app{
        font-family: "Open Sans", Helvetica, sans-serif;
        background-color: #f5f5f5;

        .content {
            min-height: 500px;
        }
    }

    body {
        background-color: #c8d419;
    }
</style>

