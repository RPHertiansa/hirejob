<template>
  <div>
    <div class="card-user shadow">
      <div class="user-box">
        <div class="profile-image">
          <span>
            <img :src="`http://localhost:3000/${dataz.imagepekerja}`">
          </span>
        </div>
      </div>
      <div class="user-data mt-3">
        <div class="user-name">
          <h5 class="font-weight-bold" style="margin-bottom: 0;"> {{dataz.namapekerja}}</h5>
          <p>{{dataz.jobdescpekerja}}</p>
        </div>

        <div v-if="dataz.tipepekerjaan === 0">
          <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> {{dataz.domisilipekerja}}</p>
          <p class="text-secondary">Freelancer</p>
        </div>
        <div v-else>
          <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> {{dataz.domisilipekerja}}</p>
          <p class="text-secondary">Fulltime</p>
        </div>

        <div>
          <p class="text-secondary">{{dataz.deskripsi}}</p>
        </div>
        <div>
          <div v-if="statusbtn === 0">
            <button type="button" class="btn btn-search" @click="hire(dataz.idpekerja, 1)">Hire</button>
          </div>
          <div v-else-if="statusbtn === 1">
            <span>a</span>
          </div>
        </div>
        <div>
          <h2>Skill</h2>
        </div>
        <div>
          <button type="button" class="btn b" v-for="(skillz, index) in (dataz.skill || '').split(',')" :key="index"  > {{skillz}}</button>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['idpekerja'],
  data () {
    return {
      // status: localStorage.getItem('status'),
      btnstatus: this.$route.query.statusbtn
    }
  },
  methods: {
    ...mapActions({
      getData: 'pekerja/getDetailProfilPekerja'
    }),
    hire (idpekerja, statusbtn) {
      this.$router.push({
        path: '/hire',
        query: {
          id: idpekerja,
          statusbtn: statusbtn
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      dataz: 'pekerja/getDetailProfilPekerja'
    })
  },
  mounted () {
    this.getData(this.idpekerja)
  }
}
</script>

<style scoped>
.card-user {
  width: 320px;
  height: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
}
.profile-image {
  /* background-image: url('../assets/img/Ellipse 325.png'); */
  background-size: cover;
  border-radius: 70px;
}
.user-data {
  width: 100%;
}
.b {
    background: rgba(251, 176, 23, 0.6);
    margin: 5px;
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
.btn-search {
    width: 100%;
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
</style>
