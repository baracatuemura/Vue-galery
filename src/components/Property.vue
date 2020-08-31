<template>
    <div id="card" class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div class="card box" :id="property.id" >
            <div class="ribbon ribbon-top-right" :class="getBusinessType"><span>{{ getBusinessType }}</span></div>
            <div class="card-body ">
                <div class="box_imgs carousel-wrapper">
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="item in property.images" v-bind:key="item">
                            <img :src="item"> 
                        </div>
                    </VueSlickCarousel>
                </div>
                <div class="clearfix"></div>
                <div class="box_content" v-b-modal="'modal'+this.property.id">
                    <a v-bind:href="'#'+this.property.id">
                        <p id="usableAreas" v-if="property.usableAreas>0" >{{property.usableAreas}} <b>m²</b></p>
                        <p id="parkingSpaces" v-if="property.parkingSpaces>0" >{{property.parkingSpaces}} 
                            <b v-if="property.parkingSpaces>1">
                                  vagas
                              </b>
                              <b v-else>
                                  vaga
                              </b>
                          </p>
                      <p id="bathrooms" v-if="property.bathrooms>0">{{property.bathrooms}} 
                        <b v-if="property.bathrooms>1">
                          banheiros
                        </b>
                        <b v-else>
                          banheiro
                        </b>
                      </p>
                      <p id="bedrooms" v-if="property.bedrooms>0" >{{property.bedrooms}} 
                        <b v-if="property.bedrooms>1">
                          quartos
                        </b>
                        <b v-else>
                          quarto
                        </b>
                      </p>
                      <p class="price"><span>R$</span> {{formatPrice(property.pricingInfos.price)}}</p>
                  </a>
                </div>
            </div>
        </div>
        <div>
            <b-modal :id="'modal'+this.property.id"  size="lg"  hide-footer>
                <template v-slot:modal-title>
                  {{getBusinessType}} <div class="float-right" ><span class="price text-right"><span>R$</span> {{formatPrice(property.pricingInfos.price)}}</span></div>
                </template>
                <VueSlickCarousel  v-bind="settings2">
                    <p v-for="item in property.images" v-bind:key="item" class="slick-slide">
                        <img :src="item"> 
                    </p>
                </VueSlickCarousel>
                <div class="box_content" >
                    <p id="usableAreas" v-if="property.usableAreas>0" >{{property.usableAreas}} <b>m²</b></p>
                    <p id="parkingSpaces" v-if="property.parkingSpaces>0" >{{property.parkingSpaces}} 
                    <b v-if="property.parkingSpaces>1">
                          vagas
                      </b>
                      <b v-else>
                          vaga
                      </b>
                    </p>
                    <p id="bathrooms" v-if="property.bathrooms>0">{{property.bathrooms}} 
                        <b v-if="property.bathrooms>1">
                          banheiros
                        </b>
                        <b v-else>
                          banheiro
                        </b>
                    </p>
                    <p id="bedrooms" v-if="property.bedrooms>0" >{{property.bedrooms}} 
                        <b v-if="property.bedrooms>1">
                          quartos
                        </b>
                        <b v-else>
                          quarto
                        </b>
                    </p>
                    <p class="price text-right"><span>R$</span> {{formatPrice(property.pricingInfos.price)}}</p>
              </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'

    export default {
        props: ['property','currentPage'],
        components: { VueSlickCarousel },

        mounted() {
            if ( this.$route.hash && this.$route.hash.replace("#", "") == this.property.id){
                this.showModal();
            }
        },
        methods: {
            formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },    
            showModal() {
              this.$root.$emit('bv::show::modal', 'modal'+this.property.id, '#btnShow')
          },
          setOwlStageHeight() {

          }
      },
      computed: {
        getBusinessType() {
            if (this.property.pricingInfos.businessType == 'SALE') {
                return 'Venda';
            } 
            return 'Aluguel';
        }
    },    
    data: function () {
        return {
            settings: {
              "dots": true,
              "touchMove": false,
              "dotsClass": "slick-dots custom-dot-class",
              "edgeFriction": 0.35,
              "infinite": true,
              "speed": 500,
              "slidesToShow": 1,
              "slidesToScroll": 1

          },                
          settings2: {
              "touchMove": false,
              "dots": true,
              "infinite": true,
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "adaptiveHeight": true,
              "autoplay": true,

          },
      }
  },
}
</script>

<style scoped>
.card {
    border: 1px black;
    box-shadow: 1px 1px 5px rgba(51, 7, 7, .4);
    transition: 0.5s;
    text-align: center;
}

#card {
    padding: 20px;
}
</style>