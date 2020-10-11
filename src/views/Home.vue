<template>
  <div>
      <div class="d-sm-block d-none">
      <Navbar/>
      <div class="cont-home">
        <div class="head-home d-flex align-items-center">
          <p class="text-white font-weight-bold" style="font-size: 28px;line-height: 20px;">Top Jobs</p>
        </div>
        <div class="body-home">
            <div class="search-home mb-5">
                <div class="input-container">
                    <input class="input-field" placeholder="Search for any skill" type="text">
                    <div class="h-100 icon">
                        <img width="24px" height="24px" src="../assets/img/search (1) 1.png">
                    </div>
                    <div>
                    <b-dropdown
                        menu-class="mt-4 border-0"
                        text="Kategori"
                        variant="white"
                        class="m-2"
                        offset="-85"
                        no-caret
                    >
                        <b-dropdown-item href="#">Sortir berdasarkan nama</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan Lokasi</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan freelance</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan fulltime</b-dropdown-item>
                    </b-dropdown>
                    </div>
                    <div>
                        <button type="button" class="btn btn-search">Search</button>
                    </div>
                </div>
            </div>
            <div class="list-pekerja" v-for="(item,index) in allPekerja" :key=(index)>
                <div class="cont-card">
                    <div class="card-body" >
                        <div class="row pa-seeker">
                            <div class="col-2 d-flex h-100 align-items-center justify-content-center">
                                <img style="border-radius:100%;" :src="`http://localhost:3000/${item.imagepekerja}`" width="80%" height="70%">
                            </div>
                            <div class="col-8">
                                <p class="name-pekerja">{{ item.namapekerja }}</p>
                                <p class="keahlian"></p>
                                <p class="keahlian"><img class="mr-2" src="../assets/img/map-pin (4) 1.png">{{ item.domisilipekerja }}</p>
                                <div class="bakat">
                                    <button type="button" class="btn b" v-for="(skillz, index) in item.skill.split(',')" :key="index">{{ skillz }}</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <button style="margin-top:30px;" type="button" class="btn btn-search float-right">Lihat Profile</button>
                            </div>
                        </div>
                        <hr class="mt-5" style="border: 2px solid #F2F3F4;">
                    </div>
                </div>
            </div>
            <div class="cont-pagination">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    size="lg"
                    page-class=""
                ></b-pagination>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
      <!-- responsive -->
      <div class="d-sm-none d-block">
          <Navbar/>
          <div class="head-home-hp">
            <div class="bg-home-hp">
                <div class="dot-dot"></div>
                <div class="row h-100 no-gutters">
                    <div class="col-10 cont-sekk">
                        <div class="date-sekk">
                            <p>Sen, 21 April 2020</p>
                        </div>
                        <div class="hello-sekk">
                            <p>Hai, Mohammad!</p>
                        </div>
                    </div>
                    <div class="col-2 d-flex h-100 align-items-center">
                        <img class="ml-4" src="../assets/img/bell (1) 1 (1).png">
                    </div>
                </div>
            </div>
          </div>
             <div class="cont-dev">
             <div class="carousel-web">
              <div class="text-dev">
                  <p>Web developer</p>
              </div>
                <b-row class="no-gutters">
                <b-col cols="12">
                  <Carousel :perPage="2">
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                  </Carousel>
                </b-col>
              </b-row>
          </div>
          <div class="carousel-android">
              <div class="text-dev">
                  <p>Android developer</p>
              </div>
              <b-row class="no-gutters">
                <b-col cols="12">
                  <Carousel :perPage="2">
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                    <Slide class="p-2">
                      <b-card body-class="body-carousel-home" tag="article">
                        <img class="img-border-home" src="../assets/img/Rectangle 683.png">
                        <p class="card-name-home">Louis Tomlinson</p>
                        <p class="card-job-home">Web Developer</p>
                        <div class="flex">
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                            <button class="btn btn-sm btn-skill-home">PHP</button>
                        </div>
                      </b-card>
                    </Slide>
                  </Carousel>
                </b-col>
              </b-row>
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
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      rows: 10,
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapGetters({
      allPekerja: 'pekerja/getPekerja'
    })
  },
  methods: {
    ...mapActions({
      actionGetAllPekerja: 'pekerja/getPekerja'
    }),
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  mounted () {
    this.actionGetAllPekerja()
  }
}
</script>

<style>
.cont-home {
    background: #F6F7F8;
}
.head-home {
    height:100px;
    padding-left: 100px;
    background-color: #5E50A1;
}
.head-home-hp {
    height: 174px;
    background: #5E50A1;
    border-radius: 0px 0px 20px 0px;
}
.body-home {
    height: 100%;
    padding: 50px 100px;
    padding-left: 100px;
    padding-right: 100px;
}
.search-home {
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
    border-radius: 8px;
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  align-items: center;
}
.input-field {
  width: 100%;
  height: 100%;
  padding: 10px;
  outline: none;
  background: #FAFAFA;
  border:none;
}
.input-field:focus {
  border: none;
}
.icon {
  border-right: 1px solid #9EA0A5;
  padding-top: 20px;
  padding-right: 20px;
}
.dropdown-search {
    margin-top: 25px;
}
.btn-search {
    width: 121px;
    height: 54px;
    margin-right: 10px;
    background: #5E50A1;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
.cont-card {
    background: #FFFFFF;
    box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
    border-radius: 8px;
    border: none;
}
.card-body {
    padding:0rem;
}
.pa-seeker {
    padding-left: 2vh;
    padding-right: 10vh;
    padding-top: 7vh;
}
.name-pekerja {
    font-weight: 600;
    font-size: 22px;
    color: #1F2A36;
}
.keahlian {
    font-size: 14px;
    margin-top: -10px;
    color: #9EA0A5;
}
.bakat {
    display: flex;
}
.b {
    background: rgba(251, 176, 23, 0.6);
    border: 1px solid #FBB017;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
    padding: 5px 20px;
    margin-right: 10px;
}
.b:hover {
    color: white;
}
.cont-pagination {
    margin-top: 10vh;
    display: flex;
    justify-content: center;
}
.dot-dot {
    position: absolute;
    width: 100px;
    height: 100px;
    top:-40px;
    transform: rotate(90deg);
    background-image: url('../assets/img/Union.png');
}
.bg-home-hp {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    background-image: url('../assets/img/Vector 41 (1).png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.date-sekk {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-left: 10px;
}
.hello-sekk {
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;
    color: #FFFFFF;
    margin-left: 10px;
}
.cont-sekk {
    padding-top: 10vh;
}
.text-dev {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #1F2A36;
}
.cont-dev {
    padding-left: 10px;
    padding-top: 5vh;
    background: #F6F7F8;
    height: 100%;
    padding-bottom: 80px;
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
    display: inline-block;
    cursor: pointer;
    appearance: none;
    border: none;
    background-clip: content-box;
    box-sizing: content-box;
    padding: 0;
    border-radius: 100%;
    outline: none;
    display: none;
}
.card {
    width: 160px;
    height: 220px;
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(214, 214, 214, 0.25);
    border-radius: 4px;
    border: none;
}
.body-carousel-home{
    text-align: center;
    padding-top: 20px;
    padding-right: 5px;
    padding-left: 5px;
}
.img-border-home {
    width: 72px;
    height: 72px;
    border-radius: 4px;
}
.card-name-home {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #1F2A36;
    margin-top: 20px;
}
.card-job-home {
    font-size: 12px;
    line-height: 16px;
    color: #9EA0A5;
    margin-top: -10px;
}
.btn-skill-home {
    background: #FBB017;
    border-radius: 4px;
    color: white;
    padding: 1px 3px;
    margin-right: 3px;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #FFFFFF;
}
.btn-skill-home:hover {
    color: white;
}
</style>
