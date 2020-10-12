<template>
  <div class="portofolio-page">
    <div class="portofolio-experience">
        <div class="navbar-portofolio">
        <p class="switch-nav switch-toggle" @click="switchToggle1">Portofolio</p>
        <p class="switch-nav switch-toggle2" @click="switchToggle2">Pengalaman Kerja</p>
        </div>
        <div class="main-content">
        <div class="portofolio mt-4" v-if="switchContent === 0">
            <div class="portofolio-pict"><span>Mantap</span></div>
            <div class="portofolio-pict"><span></span></div>
            <div class="portofolio-pict"><span></span></div>
        </div>
        <div class="exprerience mt-4" v-else>
             <div class="experience-list">
                  <div class="company-profile">
                    <span></span>
                  </div>
                  <div class="experiece-bio">
                    <h4 class="font-weight-bold">Engginer</h4>
                    <h6>Tokopedia</h6>
                    <h6 class="text-secondary">July 2019 - January 2020 6 months</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switchToggle: 0,
      switchContent: 0,
      dataSkill: ['PHP', 'Phyton']
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
    }
  },
  mounted () {
    const tgl1 = document.querySelector('.switch-toggle')
    tgl1.classList.toggle('switch-nav2')
    this.switchToggle = 1
  }
}
</script>
<style scoped>
.portofolio-page {
  background-color: #F6F7F8;
  height: 100vh;
}
.portofolio-content {
  background-color: #5E50A1;
  height: 300px;
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
