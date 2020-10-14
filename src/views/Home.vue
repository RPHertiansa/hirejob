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
                <form @submit.prevent="searching(skill)">
                    <div class="input-container">
                      <input class="input-field" placeholder="Search for any skill" v-model="skill" type="text">
                      <div class="h-100 icon">
                          <img width="24px" height="24px" src="../assets/img/search (1) 1.png">
                      </div>
                      <div>
                      <b-dropdown
                          menu-class="mt-4 border-0"
                          text="Kategori"
                          toggle-class="brd-dr"
                          variant="white"
                          class="m-2"
                          offset="-85"
                          no-caret
                      >
                          <b-dropdown-item @click="sort('namapekerja','')">Sortir berdasarkan Nama</b-dropdown-item>
                          <b-dropdown-item @click="sort('domisilipekerja','')">Sortir berdasarkan Lokasi</b-dropdown-item>
                          <b-dropdown-item @click="sort('jumlahskill','DESC')">Sortir berdasarkan Skill</b-dropdown-item>
                      </b-dropdown>
                      </div>
                      <div>
                          <button type="submit" class="btn btn-search">Search</button>
                      </div>
                  </div>
                </form>
            </div>
            <div class="list-pekerja">
                <div class="cont-card">
                    <div class="card-body" v-for="(item,index) in allPekerja" :key=(index)>
                        <div class="row pa-seeker">
                            <div class="col-2 d-flex h-100 align-items-center justify-content-center">
                                <img style="border-radius:100%;" :src="`http://localhost:3000/${item.imagepekerja}`" width="80%" height="70%">
                            </div>
                            <div class="col-8">
                                <p class="name-pekerja">{{ item.namapekerja }}</p>
                                <p class="keahlian"></p>
                                <p class="keahlian"><img class="mr-2" src="../assets/img/map-pin (4) 1.png">{{ item.domisilipekerja }}</p>
                                <div class="bakat">
                                    <button type="button" class="btn b" v-for="(skillz, index) in item.skill.replace('[', '').replace(']', '').split(',')" :key="index">{{ skillz }}</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <button style="margin-top:30px;" @click="detailProfile(item.idpekerja, index)" class="btn btn-search float-right">Lihat Profile</button>
                            </div>
                        </div>
                        <hr class="mt-5" style="border: 2px solid #F2F3F4;">
                    </div>
                </div>
            </div>
            <div class="cont-pagination" @click="pagi()">
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
                            <p>{{tanggal}} {{arrbulan[bulan]}} {{tahun}}</p>
                        </div>
                        <div class="hello-sekk">
                            <p>Hai, Mohammad!</p>
                        </div>
                    </div>
                    <div class="col-2 d-flex h-100 align-items-center">
                        <b-dropdown size="sm" offset="-240" center variant="link" menu-class="drdwn" toggle-class="text-decoration-none" no-caret>
                            <template v-slot:button-content>
                            <img src="../assets/img/bell (1) 1 (1).png">
                            </template>
                            <div class="cont-notif">
                              <img src="../assets/img/undraw_Notify_re_65on 1.png">
                              <p>Belum ada notifikasi</p>
                            </div>
                        </b-dropdown>
                    </div>
                </div>
            </div>
          </div>
             <div class="cont-dev">
              <div class="d-flex ss">
                <div class="w-search mr-2">
                    <div class="input-container">
                        <div class="h-100 iconhp">
                            <img width="24px" height="24px" src="../assets/img/search (1) 1.png">
                        </div>
                        <input @keyup.enter="searching(skill)" v-model="skill" class="input-field" placeholder="Search for any skill" type="text">
                    </div>
                </div>
                <div class="w-sort">
                    <b-dropdown size="sm" offset="-240" center variant="link" menu-class="sorthp" toggle-class="text-decoration-none text-center" no-caret>
                          <template v-slot:button-content>
                          <img width="24px" height="24px" src="../assets/img/list 1.png">
                          </template>
                          <b-dropdown-item @click="sort('namapekerja','')">Sortir berdasarkan Nama</b-dropdown-item>
                          <b-dropdown-item @click="sort('domisilipekerja','')">Sortir berdasarkan Lokasi</b-dropdown-item>
                          <b-dropdown-item @click="sort('jumlahskill','DESC')">Sortir berdasarkan Skill</b-dropdown-item>
                      </b-dropdown>
                </div>
            </div>
             <div class="carousel-web">
              <div class="text-dev">
                  <p>Talent</p>
              </div>
                <b-row class="no-gutters">
                <b-col cols="6 mb-3" v-for="(item,index) in allPekerja" :key=(index)>
                  <b-card body-class="body-carousel-home" tag="article">
                    <img class="img-border-home" :src="`http://localhost:3000/${item.imagepekerja}`">
                    <p class="card-name-home">{{ item.namapekerja }}</p>
                    <p class="card-job-home"><img class="mr-2" src="../assets/img/map-pin (4) 1.png">{{ item.domisilipekerja }}</p>
                    <div class="flex">
                        <button class="btn btn-sm btn-skill-home" v-for="(skillz, index) in item.skill.replace('[', '').replace(']', '').split(',')" :key="index">{{ skillz }}</button>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
          </div>
          <div class="cont-pagination" @click="pagi()">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    size="md"
                    page-class=""
                ></b-pagination>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      rows: null,
      slide: 0,
      sliding: null,
      skill: '',
      arrbulan: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      tanggal: new Date().getDate(),
      bulan: new Date().getMonth(),
      tahun: new Date().getFullYear()
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
    },
    searching (skill) {
      if (skill === '') {
        this.$router.push({
          path: '/home',
          query: {
            skill
          }
        })
        this.actionGetAllPekerja(' ')
      } else {
        this.$router.push({
          query: {
            skill
          }
        })
        const fd = {
          skill: skill,
          page: this.currentPage
        }
        this.actionGetAllPekerja(fd)
        this.skill = ''
      }
    },
    sort (sort, sorttype) {
      const fd = {
        sort,
        sorttype
      }
      this.actionGetAllPekerja(fd)
    },
    pagi () {
      const fd = {
        skill: '',
        page: this.currentPage
      }
      this.actionGetAllPekerja(fd)
    },
    detailProfile (idpekerja, index) {
      this.$router.push({
        path: '/profile',
        query: {
          id: idpekerja
        }
      })
    }
  },
  mounted () {
    this.actionGetAllPekerja(' ')
      .then((result) => {
        this.rows = result.meta.total
      })
      .catch((err) => {
        console.log(err)
      })
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
  padding-top: 10px;
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
  padding-right: 20px;
  border-right: 1px solid #9EA0A5;
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
    height: 1500px;
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
.w-search {
    width: 280px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(163, 162, 192, 0.25);
    border-radius: 4px;
}
.w-sort {
    width: 53px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(163, 162, 192, 0.25);
    border-radius: 4px;
}
.w-search .input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  align-items: center;
}
.w-search .input-field {
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0px 10px;
  background: #FAFAFA;
  border:none;
}
.w-search .input-field:focus {
  border: none;
}
.iconhp {
  padding-left: 10px;
}
.w-sort .text-center {
    padding-top: 10px;
}
.sorthp {
  margin-top: 10px !important;
}
.ss {
  margin-bottom: 20px;
}
</style>
