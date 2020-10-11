<template>
  <div class="card-user">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUser'
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
</style>
