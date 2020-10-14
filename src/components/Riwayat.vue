<template>
  <div class="portofolio-page">
    <div class="portofolio-experience">
        <div class="navbar-portofolio">
        <p class="switch-nav switch-toggle" @click="switchToggle1">Portofolio</p>
        <p class="switch-nav switch-toggle2" @click="switchToggle2">Pengalaman Kerja</p>
        </div>
        <div class="main-content">
        <div class="portofolio mt-4" v-if="switchContent === 0">
          <div class="mx-auto text-center" v-for="(item, index) in dataPor" :key="index">
            <div class="col" @click="openModal(item)">
              <img :src="`http://52.23.231.155:3000/${item.image2}`">
            </div>
            <small>{{item.namaaplikasi}}</small>
          </div>
        </div>

        <div class="exprerience col mt-4" v-else>
             <div class="experience-list row p-3" v-for="(item, index) in dataPeng" :key="index">
                  <div class="company-profile mr-4">
                    <span>
                      <img src="../assets/img/office_default.png" style="height:100px; width:100px">
                    </span>
                  </div>
                  <div class="experiece-bio">
                    <h4 class="font-weight-bold">{{item.posisi}}</h4>
                    <h6>{{item.namaperusahaan}}</h6>
                    <h6 class="text-secondary">{{item.mulaikerja}} - {{item.selesaikerja}} | {{item.lamakerja}} months</h6>
                    <p>{{item.deskripsi}}</p>
                  </div>
            </div>
        </div>
        </div>
    </div>

    <b-modal id="modal-1" hide-header>
      <b-col>
        <label><b>{{displayModal.namaaplikasi}}</b></label>
        <Carousel :navigationEnabled="true" :autoplay="true" :perPage="3">
          <Slide class="p-2">
            <div class="col">
              <img class="img-border" width="120px" height="120px" :src="`http://52.23.231.155:3000/${displayModal.image1}`">
            </div>
          </Slide>
          <Slide class="p-2">
            <div class="col">
              <img class="img-border" width="120px" height="120px" :src="`http://52.23.231.155:3000/${displayModal.image2}`">
            </div>
          </Slide>
          <Slide class="p-2">
            <div class="col">
              <img class="img-border" width="120px" height="120px" :src="`http://52.23.231.155:3000/${displayModal.image3}`">
            </div>
          </Slide>
        </Carousel>
      </b-col>
      <b-col>
        <b-row class="text-center">
          <b-col v-if="displayModal.tipeportofolio === 'Aplikasi Web'">
            <b-icon icon="laptop" font-scale="2" class="mr-3"></b-icon>
            <p>{{displayModal.tipeportofolio}}</p>
          </b-col>
          <b-col v-else>
            <b-icon icon="phone" font-scale="2" class="mr-3"></b-icon>
            <p>{{displayModal.tipeportofolio}}</p>
          </b-col>
          <b-col>
            <img src="../assets/img/gitub.png" alt="">
            <p>{{displayModal.linkrepository}}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-modal>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      switchToggle: 0,
      switchContent: 0,
      dataSkill: ['PHP', 'Phyton'],
      displayModal: ''
    }
  },
  props: ['idpekerja'],
  methods: {
    switchToggle1 () {
      if (this.switchToggle === 1) {
        const tgl1 = document.querySelector('.switch-toggle')
        tgl1.classList.toggle('switch-nav2')
        const tgl2 = document.querySelector('.switch-toggle2')
        tgl2.classList.toggle('switch-nav2')
        this.switchToggle = 1
      } else {
        const tgl1 = document.querySelector('.switch-toggle')
        tgl1.classList.toggle('switch-nav2')
        this.switchToggle = 1
      }
      this.switchContent = 0
    },
    switchToggle2 () {
      if (this.switchToggle === 1) {
        const tgl1 = document.querySelector('.switch-toggle')
        tgl1.classList.toggle('switch-nav2')
        const tgl2 = document.querySelector('.switch-toggle2')
        tgl2.classList.toggle('switch-nav2')
        this.switchToggle = 1
      } else {
        const tgl2 = document.querySelector('.switch-toggle2')
        tgl2.classList.toggle('switch-nav2')
        this.switchToggle = 1
      }
      this.switchContent = 1
    },
    openModal (item) {
      // console.log(item)
      this.displayModal = item
      // console.log(this.displayModal)
      this.$bvModal.show('modal-1')
    },
    ...mapActions({
      getPortofolio: 'pekerja/getPortofolio',
      getPengalaman: 'pekerja/getPengalaman'
    })
  },
  computed: {
    ...mapGetters({
      dataPor: 'pekerja/getPortofolio',
      dataPeng: 'pekerja/getPengalaman'
    })
  },
  mounted () {
    const tgl1 = document.querySelector('.switch-toggle')
    tgl1.classList.toggle('switch-nav2')
    this.switchToggle = 1
    this.getPortofolio(this.idpekerja)
    this.getPengalaman(this.idpekerja)
  }
}
</script>
<style scoped>
.modalPor img {
  height: 20vh;
  width: 20vh;
}

/* .card-portofolio img{
  height: 20vh;
  width: 20vh;
} */

.portofolio-page {
  background-color: #F6F7F8;
  height: 130vh;
}
.portofolio-content {
  background-color: #5E50A1;
  /* height: 300px; */
}
.portofolio-experience {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  overflow: scroll;
  height: 100vh;
}
.navbar-portofolio {
  display: flex;
}
.navbar-portofolio p {
  font-weight: bold;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
}
.switch-nav:hover::after {
  content: '';
  display: block;
  background-color: #5E50A1;
  width: 100%;
  height: 4px;
  margin-top: 6px;
  border-radius: 10px;
}
.switch-nav2::after {
  content: '';
  display: block;
  background-color: #5E50A1;
  width: 100%;
  height: 4px;
  margin-top: 6px;
  border-radius: 10px;
}
.portofolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(219px, 1fr));
  gap: 12px;
}
.portofolio img{
  width: 100px;
  height: 100px;
}
.portofolio-pict {
  width: 219px;
  height: 148px;
  /* background-image: url(); */
  background-size: cover;
  border-radius: 4px;
}
</style>
