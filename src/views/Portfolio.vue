<template>
  <div class="portofolio-page">
    <Navbar />
    <div class="portofolio-content">
      <div class="container pt-5 portofolio-box">
        <CardUser />
        <div class="portofolio-experience">
          <div class="navbar-portofolio">
            <p class="switch-nav switch-toggle" @click="switchToggle1">Portofolio</p>
            <p class="switch-nav switch-toggle2" @click="switchToggle2">Pengalaman Kerja</p>
          </div>
          <div class="main-content">
            <div class="portofolio" v-if="switchContent === 0">
              <div class="portofolio-pict"><span></span></div>
              <div class="portofolio-pict"><span></span></div>
              <div class="portofolio-pict"><span></span></div>
            </div>
            <div class="exprerience" v-else>
              <div class="exprerience-pict"><span></span></div>
              <div class="exprerience-pict"><span></span></div>
              <div class="exprerience-pict"><span></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardUser from '../components/CardUser'
import Navbar from '../components/Navbar'
export default {
  name: 'Portofolio',
  components: {
    CardUser,
    Navbar
  },
  data () {
    return {
      switchToggle: 0,
      switchContent: 0
    }
  },
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
    }
  },
  mounted () {
    const tgl1 = document.querySelector('.switch-toggle')
    tgl1.classList.toggle('switch-nav2')
    this.switchToggle = 1
  }
}
</script>

<style>
.portofolio-page {
  background-color: #F6F7F8;
  height: 200vh;
}
.portofolio-content {
  background-color: #5E50A1;
  height: 300px;
}
.portofolio-box {
  display: grid;
  grid-template-columns: 3.5fr 7fr;
}
.portofolio-experience {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
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
.portofolio-pict {
  width: 219px;
  height: 148px;
  background-image: url();
  background-size: cover;
  border-radius: 4px;
}
</style>
