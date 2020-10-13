<template>
  <div>
    <div class="card-user">
      <div class="user-box">
        <div class="profile-image">
          <img :src="`http://localhost:3000/${dataz.imagepekerja}`">
        </div>
        <p class="text-secondary mt-3 text-center" style="margin-left: -15px;"><b-icon icon="pencil-fill" class="mr-1"></b-icon> Edit</p>
      </div>
      <div class="user-data mt-3">
        <div class="user-name">
          <h5 class="font-weight-bold" style="margin-bottom: 0;">{{dataz.namapekerja}}</h5>
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
            <b-col lg="12" class="my-3">
                <button class="btn btn-save">Simpan</button>
            </b-col>
            <b-col lg="12" class="my-3">
                <button class="btn btn-cancel">Batal</button>
            </b-col>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      dataz: 'pekerja/getDetailPekerja'
    })
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
}
.profile-image {
  background-size: cover;
  border-radius: 70px;
}
.user-data {
  width: 100%;
}
.btn-save{
  width: 90%;
  color: white;
  background: #5E50A1;
  border-radius: 4px;
}
.btn-save:hover{
  color: #5E50A1;
  background: white;
  border-radius: 4px;
  border: 1px solid #5E50A1;
}
.btn-cancel{
  width: 90%;
  border: 1px solid #5E50A1;
  box-sizing: border-box;
  border-radius: 4px;
}
.btn-cancel:hover{
  color: white;
  background: #5E50A1;
  border-radius: 4px;
  border: 1px solid #5E50A1;
}
</style>
