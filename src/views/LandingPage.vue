<template>
  <div>
    <div class="d-sm-block d-none">
        <Navbar/>
    <div class="cont-landpage">
      <div class="row no-gutters">
        <div class="col-6 r-1">
          <div class="text-landing-1">
             <p>Talenta terbaik negri untuk perubahan revolusi 4.0</p>
          </div>
          <div class="text-landing-2 mb-5">
             <p>Pemworld adalah aplikasi untuk perusahaan yang ingin mencari talenta terbaik, cukup buat akun anda dapat menukan talenta yang ada butuhkan</p>
          </div>
          <b-dropdown v-if="status === 'perekrut'" id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="primary" class="m-md-2" no-caret>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/home">Home</router-link></b-dropdown-item>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/profile-perekrut">Profile</router-link></b-dropdown-item>
          </b-dropdown>
          <b-dropdown v-else-if="status === 'pekerja'" id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="primary" class="m-md-2" no-caret>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/home">Home</router-link></b-dropdown-item>
                <b-dropdown-item><li style="color: #5E50A1;" @click="detailProfile(detailPekerja.idpekerja)" >Profile</li></b-dropdown-item>
          </b-dropdown>
          <b-dropdown v-else id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="primary" class="m-md-2" no-caret>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-perekrut">Perekrut</router-link></b-dropdown-item>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-pekerja">Pekerja</router-link></b-dropdown-item>
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
              <p>Kenapa harus mencari talent di peworld</p>
            </div>
            <div class="tick mt-5">
              <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Mudah menemukan talent</p>
              <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Aman</p>
              <p class="mb-4" style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Cepat</p>
              <p style="font-size: 16px;line-height: 28px;color: #46505C;"><img class="mr-4" src="../assets/img/tick 1.png">Gratis</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="text-landing-cont">
            <div class="text-landing-4">
              <p>Skill Tallent</p>
            </div>
            <div class="text-landing-2 mb-5">
             <p>Setiap talent yang mendaftar pada Pemworld dipastikan memiliki Skill yang mumpuni, hanya talent terbaik yang akan anda dapatkan pada Pemworld</p>
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
                    <Slide v-for="(item,index) in allPekerja" :key=(index) class="p-2">
                      <b-card body-class="body-carousel" tag="article">
                        <img class="img-border" width="120px" height="120px" :src="`http://54.164.193.160:3000/${item.imagepekerja}`">
                        <p class="card-name">{{ item.namapekerja }}</p>
                        <p class="card-job">{{ item.domisilipekerja }}</p>
                        <p class="card-detail">{{item.deskripsi}}</p>
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
                <p>PEW PEW</p>
              </div>
              <div class="float-right btn-start-bottom">
                <b-dropdown v-if="status === 'perekrut'" id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="outline-danger" class="m-md-2" no-caret>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/home">Home</router-link></b-dropdown-item>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/profile-perekrut">Profile</router-link></b-dropdown-item>
              </b-dropdown>
              <b-dropdown v-else-if="status === 'pekerja'" id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="outline-danger" class="m-md-2" no-caret>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/home">Home</router-link></b-dropdown-item>
                <b-dropdown-item><li style="color: #5E50A1;" @click="detailProfile(detailPekerja.idpekerja)" >Profile</li></b-dropdown-item>
              </b-dropdown>
              <b-dropdown v-else id="dropdown-1" size="lg" text="Mulai Dari Sekarang" variant="outline-danger" class="m-md-2" no-caret>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-perekrut">Perekrut</router-link></b-dropdown-item>
                <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-pekerja">Pekerja</router-link></b-dropdown-item>
              </b-dropdown>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    <div class="d-sm-none d-block">
       <div class="cont-landing-hp">
         <div class="bg-landing-hp">
            <p class="text-main"><img class="mr-2" src="../assets/img/layers 1.png">Peworld</p>
            <p class="text-body-hp">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
            <button type="button" class="btn btn-pekerja btn-block btn-lg">
              <router-link v-if="status !== null" style="color: #5E50A1;" to="/home">Home</router-link>
              <router-link v-else style="color: #5E50A1;" to="/login-pekerja">Masuk sebagai pekerja</router-link>
            </button>
            <div class="row no-gutters mt-2">
              <div class="col-5"><hr class="line-landing"></div>
              <div class="col-2"><p class="text-main text-center mt-2">atau</p></div>
              <div class="col-5"><hr class="line-landing"></div>
            </div>
            <button v-if="status === 'pekerja'" @click="detailProfile(detailPekerja.idpekerja)" type="button" class="btn btn-perekrut btn-block btn-lg">
              <li class="text-white">Profile</li>
            </button>
            <button v-else-if="status === 'perekrut'" type="button" class="btn btn-perekrut btn-block btn-lg">
              <router-link class="text-white" to="/profile-perekrut">Profile</router-link>
            </button>
            <button v-else type="button" class="btn btn-perekrut btn-block btn-lg">
              <router-link class="text-white" to="/login-perekrut">Masuk sebagai perekrut</router-link>
            </button>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { Carousel, Slide } from 'vue-carousel'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Footer,
    Carousel,
    Slide
  },
  data: function () {
    return {
      status: localStorage.getItem('status') === undefined ? null : localStorage.getItem('status'),
      getid: localStorage.getItem('idpekerja') === undefined ? null : localStorage.getItem('idpekerja'),
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapGetters({
      detailPekerja: 'pekerja/getDetailPekerja',
      allPekerja: 'pekerja/getPekerja'
    })
  },
  methods: {
    sendParam () {
      this.actgetDetail(this.getid)
    },
    ...mapActions({
      actgetDetail: 'pekerja/getDetailPekerja',
      actionGetAllPekerja: 'pekerja/getPekerja'
    }),
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    detailProfile (idpekerja) {
      this.$router.push({
        path: '/profile',
        query: { id: idpekerja }
      })
    }
  },
  mounted () {
    this.sendParam()
    this.actionGetAllPekerja(' ')
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
.btn-pekerja {
  background: #FFFFFF;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  color: #5E50A1;
  margin-top: 25vh;
}
.btn-perekrut {
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}
.line-landing {
  border: 1px solid #FFFFFF;
}
.text-main {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
}
.text-body-hp {
  font-weight: bold;
  font-size: 34px;
  line-height: 54px;
  color: #FFFFFF;
  margin-top: 15vh;
}
.d-sm-none .cont-landing-hp {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/Mask Group (1).png');
  background-repeat: no-repeat;
}
.d-sm-none .cont-landing-hp .bg-landing-hp{
  width: 100vw;
  height: 100vh;
  background-color: #5E50A1;
  opacity: 0.8;
  background-repeat: no-repeat;
  padding: 40px 20px;
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
