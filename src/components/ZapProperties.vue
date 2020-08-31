<template>
    <div class="row mt-5">
        <app-property v-for="property in visiblePropertys" :key="property.id" :property="property" :current-page="currentPage"/>
        <b-container class="pagination-row">
          <b-row  class="text-center">
            <b-col >
                <app-pagination v-if=pages :current-page="currentPage" :number-of-pages="pages" :baseUrl="baseUrl"/>
            </b-col>
          </b-row>
        </b-container>
    </div>

</template>

<script>
    import Property from "./Property";
    import Pagination from "./Pagination";
    import axios from "axios";

    export default {
        props: ['json'],
        components: {
            appProperty: Property,
            appPagination: Pagination,
        },
        created() {
         console.log('zap');

            axios.get('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json')
                .then(res => {
                    const data = res.data;
                    for (let key in data) {
                        const property = data[key];
                        if (data[key].pricingInfos.businessType == "RENTAL" && data[key].pricingInfos.price >= 3500) {
                            this.propertys.push(property);
                        }
                        if (data[key].pricingInfos.businessType == "SALE" && data[key].pricingInfos.price >= 600000) {
                            this.propertys.push(property);
                        }
                    }
                })
                .catch(error => console.log(error));
        },
        computed: {
            pages() {
                return Math.ceil(this.propertys.length / this.pageSize);
            },
            visiblePropertys() {
                return this.propertys.slice((this.currentPage - 1) * this.pageSize,
                    ((this.currentPage - 1) * this.pageSize) + this.pageSize);
            }
        },
        watch: {
            '$route'(to) {
                this.currentPage = parseInt(to.params.pagid);
                this.hash = to.hash;
            },
        },
        data: function () {
            return {
                currentPage: parseInt(this.$route.params.pagid),
                hash: this.$route.hash,
                pageSize: 21,
                baseUrl:"/zap/",
                propertys: []
            }
        }
    }
</script>

<style scoped>


</style>