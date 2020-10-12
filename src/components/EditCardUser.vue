<template>
  <div>
    <div class="card-user" v-if="status === 'perekrut'">
      <div class="user-box">
        <div class="profile-image">
          <span></span>
        </div>
        <p class="text-secondary mt-3 text-center" style="margin-left: -15px;"><b-icon icon="pencil-fill" class="mr-1"></b-icon> Edit</p>
      </div>
      <div class="user-data mt-3">
        <div class="user-name">
          <h5 class="font-weight-bold" style="margin-bottom: 0;">Louis Tomlinson</h5>
          <p>Web Developer</p>
        </div>
        <div>
          <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> Purwokerto, Jawa Tengah</p>
          <p class="text-secondary">Freelancer</p>
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
export default {
  data () {
    return {
    }
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
  width: 130px;
  background-image: url('../assets/img/Ellipse 325.png');
  background-size: cover;
  height: 130px;
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
