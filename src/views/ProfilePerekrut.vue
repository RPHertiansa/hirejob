<template>
  <div>
      <Navbar />
        <div class="profile-perekrut">
            <div class="card-user" >
            <div class="user-box">
                <div class="profile-image">
                  <img :src="`http://localhost:3000/${getProfile.imageperekrut}`" width="50%" height="100%" alt="profile">
                </div>
            </div>
            <div class="user-data mt-3">
                <div class="user-name">
                <h5 class="font-weight-bold text-center" style="margin-bottom: 0;">{{ getProfile.namaperekrut }}</h5>
                <p class="text-center">{{ getProfile.namaperusahaan }}</p>
                </div>
                <div>
                <p class="text-secondary text-center" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> {{getProfile.kota}}</p>
                <p class="text-secondary text-center">{{ getProfile.jabatan }}</p>
                </div>
                <div>
                <p class="text-secondary">{{ getProfile.deskripsi }}</p>
                </div>
                <div>
                    <button class="btn btn-edit"><router-link to="/edit-profile-perekrut">Edit Profile</router-link></button>
                </div>
                <div class="text-secondary mt-3 ">
                <img src="../assets/img/mail (3) 1.png" alt="">
                    Louistommo@gmail.com
                </div>
                <div class="text-secondary mt-3">
                <img src="../assets/img/instagram.png" alt="">
                @Louist91
                </div>
                <div class="text-secondary mt-3">
                <img src="../assets/img/gitub.png" alt="">
                @Louistommo
                </div>
                <div class="text-secondary mt-3">
                <img src="../assets/img/gitlab.png" alt="">
                @Louistommo91
                </div>
            </div>
            </div>
        </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      id: localStorage.getItem('idperekrut')
    }
  },
  computed: {
    ...mapGetters({
      getProfile: 'perekrut/getProfile'
    })
  },
  methods: {
    ...mapActions({
      actGetProfile: 'perekrut/getProfileDetail'
    }),
    sendParam () {
      this.actGetProfile(this.id)
    }
  },
  mounted () {
    this.sendParam()
  }
}
</script>

<style scoped>
.profile-perekrut{
    display: flex;
    justify-content: center ;
}
.card-user {
  width: 500px;
  height: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.profile-image {
  text-align: center;
  background-size: cover;
  height: 130px;
  border-radius: 70px;
}
.user-data {
  width: 60%;
}
.btn-edit{
  width: 90%;
  color: white;
  background: #5E50A1;
  border-radius: 4px;
}
.btn-edit:hover{
  color: #5E50A1;
  background: white;
  border-radius: 4px;
  border: 1px solid #5E50A1;
}
</style>
