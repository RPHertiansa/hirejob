<template>
  <div>
      <Navbar />
      <div class="bg-profile-perekrut">
        <div class="cont-profile-perekrut">
          <div class="bg-latar">
            <div class="ubah-latar">
              <p><img class="mr-2" src="../assets/img/edit (1) 1.png">Ubah Latar</p>
            </div>
            <img class="img-profile-perekrut" width="150px" height="150px" :src="`http://localhost:3000/${getProfile.imageperekrut}`">
          </div>
          <div class="d-flex justify-content-center">
            <div class="text-center cont-card-profile-perekrut">
            <div class="name-company">
              <p class="mb-2">{{ getProfile.namaperekrut }}</p>
            </div>
            <div class="type-company">
              <p class="mb-2">{{ getProfile.namaperusahaan }}</p>
            </div>
            <div class="type-company">
              <p class="mb-2">{{ getProfile.jabatan }}</p>
            </div>
            <div class="location-company">
              <p class="mb-2"><img class="mr-2" src="../assets/img/map-pin (4) 1.png">{{getProfile.kota}}</p>
            </div>
            <p class="des-company">
              {{ getProfile.deskripsi }}
            </p>
            <router-link class="edit-profile-per" to="/edit-profile-perekrut"><button class="btn btn-edit-profile-perekrut">Edit Profile</button></router-link>
            <div class="cont-sosmed">
              <p><img class="mr-2" width="24px" height="24px" src="../assets/img/mail (3) 1.png">Louistommo@gmail.com</p>
              <p><img class="mr-2" width="24px" height="24px" src="../assets/img/instagram.png">@Louist91</p>
              <p><img class="mr-2" width="24px" height="24px" src="../assets/img/gitub.png">@Louist91</p>
              <p><img class="mr-2" width="24px" height="24px" src="../assets/img/gitlab.png">@Louist91</p>
            </div>
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
.bg-profile-perekrut {
  background: #F6F7F8;
  padding-top: 50px;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 200px;
}
.cont-profile-perekrut {
  width: 1140px;
  height: 800px;
  background: #FFFFFF;
  border-radius: 8px;
}
.bg-latar {
  height: 200px;
  background: #5E50A1;
  border-radius: 8px 8px 0px 0px;
  position: relative;
}
.ubah-latar {
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #FFFFFF;
  position: absolute;
  right: 30px;
  bottom: 0px;
}
.cont-card-profile-perekrut {
  width: 614px;
  margin-top: 75px;
}
.img-profile-perekrut {
  position: absolute;
  bottom: -65px;
  right: 44%;
  border-radius: 100%;
}
.name-company {
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1F2A36;
}
.type-company {
  font-size: 14px;
  line-height: 24px;
  color: #1F2A36;
}
.location-company {
  font-size: 14px;
  line-height: 20px;
  color: #9EA0A5;
}
.des-company {
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #9EA0A5;
}
.btn-edit-profile-perekrut {
  width: 297px;
  height: 50px;
  background: #5E50A1;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}
.cont-sosmed {
  width: 300px;
  margin: 20px 30%;
  text-align: left;
}
.edit-profile-per {
  text-decoration: none;
  color: white;
}
.edit-profile-per:hover {
  color: white;
}
</style>
