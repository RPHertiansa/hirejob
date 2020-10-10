<template>
  <div>
    <Navbar/>
    <div class="cont-landpage">
      <div class="row no-gutters">
        <div class="col-6 r-1">
          <div class="text-landing-1">
             <p>Talenta terbaik negri untuk perubahan revolusi 4.0</p>
          </div>
          <div class="text-landing-2 mb-5">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          </div>
          <b-dropdown id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="primary" class="m-md-2">
                <b-dropdown-item><router-link to="/register-perekrut">Perekrut</router-link></b-dropdown-item>
                <b-dropdown-item><router-link to="/register-pekerja">Pekerja</router-link></b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="col-6">
          <img src="../assets/img/Group 1195.png">
        </div>
        <div class="col-6">
          <img class="mt-5" src="../assets/img/Group 1194.png">
        </div>
        <div class="col-6">
          <div class="text-landing-cont">
            <div class="text-landing-3">
              <p>Kenapa harus mencari tallent di peworld</p>
            </div>
            <div class="tick mt-5">
              <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Lorem ipsum dolor sit amet.</p>
              <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Lorem ipsum dolor sit amet.</p>
              <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Lorem ipsum dolor sit amet.</p>
              <p style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="text-landing-cont">
            <div class="text-landing-4">
              <p>Skill Tallent</p>
            </div>
            <div class="text-landing-2 mb-5">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">Java</p>
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">Kotlin</p>
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">PHP</p>
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">JavaScript</p>
              </div>
              <div class="col-6">
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">Golang</p>
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">C++</p>
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">Ruby</p>
                <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 13.png">10+ Bahasa lainnya</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img class="mt-3" src="../assets/img/Group 1196.png">
        </div>
        <div class="col-12">
          <div class="div carousel-landing">
            <div class="text-carousel mb-5">
              <p>Their opinion about peworld</p>
            </div>
               <b-row>
                <b-col cols="12">
                  <Carousel :navigationEnabled="true" :autoplay="true" :perPage="3">
                    <Slide class="p-2">
                      <b-card body-class="body-carousel" tag="article">
                        <img class="img-border" src="../assets/img/Ellipse 320.png">
                        <p class="card-name">Harry Styles</p>
                        <p class="card-job">Web Developer</p>
                        <p class="card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel" tag="article">
                        <img class="img-border" src="../assets/img/Ellipse 323.png">
                        <p class="card-name">Niall Horan</p>
                        <p class="card-job">Web Developer</p>
                        <p class="card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel" tag="article">
                        <img class="img-border" src="../assets/img/Ellipse 325.png">
                        <p class="card-name">Louis Tomlinson</p>
                        <p class="card-job">Web Developer</p>
                        <p class="card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel" tag="article">
                        <img class="img-border" src="../assets/img/Ellipse 320.png">
                        <p class="card-name">Harry Styles</p>
                        <p class="card-job">Web Developer</p>
                        <p class="card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                      </b-card>
                    </Slide>
                  </Carousel>
                </b-col>
              </b-row>
          </div>
        </div>
        <div class="col-12">
          <div class="start-bottom">
            <div class="start-bottom-2">
              <div class="text-start-bottom">
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div class="float-right btn-start-bottom">
              <b-dropdown id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="outline-danger" class="m-md-2">
                <b-dropdown-item><router-link to="/register-perekrut">Perekrut</router-link></b-dropdown-item>
                <b-dropdown-item><router-link to="/register-pekerja">Pekerja</router-link></b-dropdown-item>
              </b-dropdown>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Navbar,
    Footer,
    Carousel,
    Slide
  },
  data: function () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
.cont-landpage {
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 50px;
  padding-bottom: 100px;
}
.text-landing-1 {
  width: 490px;
  height: 210px;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 70px;
  color: #1F2A36;
}
.text-landing-2 {
  width: 488px;
  height: 56px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #46505C;
}
.text-landing-cont {
  padding-top: 80px;
  padding-left: 75px;
}
.text-landing-3 {
  width: 515px;
  height: 112px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;
  color: #1F2A36;
}
.text-landing-4 {
  width: 200px;
  height: 56px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;
  color: #1F2A36;
}
.text-carousel {
  height: 56px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;
  color: #1F2A36;
  margin-top: 150px;
  text-align: center;
}
.r-1 {
  padding-top: 150px;
}
.start-bottom {
  height: 227px;
  background: #5E50A1;
  border-radius: 40px 8px;
  margin-top: 200px;
}
.start-bottom-2 {
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  background-image: url('../assets/img/Vector 41.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 50px;
}
.text-start-bottom {
  width: 293px;
  height: 112px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;
  color: #FFFFFF;
  margin-top: 10px;
}
.btn-start-bottom {
  margin-top: -70px;
}
.btn-outline-danger {
    border:none;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #796EAF;
}
.btn-outline-danger:hover {
    border:none;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #796EAF;
}
.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
    border:none;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #796EAF;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    appearance: none;
    border: none;
    background-color: #5E50A1;
    /* background-image: url('../assets/img/Ellipse 269.png'); */
    padding: 0;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 8px 16px rgba(204, 204, 204, 0.75);
    width: 50px;
    height: 50px;
    border-radius: 100%;
}
.VueCarousel-dot[data-v-438fd353] {
    display: none;
}
.card {
  width: 339px;
  height: 437px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);
}
.body-carousel {
  text-align: center;
  padding: 30px;
}
.card-name {
  font-weight: 600;
  font-size: 30px;
  line-height: 56px;
  color: #1F2A36;
  margin-bottom: 5px;
}
.card-job {
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #9EA0A5;
}
.card-detail {
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #46505C;
}
.img-border {
  border: 7px solid rgba(251, 176, 23, 0.37);
  border-radius: 100%;
}
</style>
