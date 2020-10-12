<template>
  <div>
      <Navbar />
        <div class="profile-perekrut">
            <div class="card-user" >
            <div class="user-box">
                <div class="profile-image">
                <span></span>
                </div>
            </div>
            <div class="user-data mt-3">
                <div class="user-name">
                <h5 class="font-weight-bold text-center" style="margin-bottom: 0;">Louis Tomlinson</h5>
                <p class="text-center">Web Developer</p>
                </div>
                <div>
                <p class="text-secondary text-center" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> Purwokerto, Jawa Tengah</p>
                <p class="text-secondary text-center">Freelancer</p>
                </div>
                <div>
                <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eum nihil aut ut fugit accusantium ratione magnam, ipsam quaerat laudantium voluptas, rerum neque porro? Voluptatibus non illo quisquam rem nesciunt!</p>
                </div>
                <div>
                <button type="button" class="btn btn-search">Edit Profile</button>
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
export default {
  components: {
    Navbar,
    Footer
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
  width: 130px;
  background-image: url('../assets/img/Ellipse 325.png');
  background-size: cover;
  height: 130px;
  border-radius: 70px;
}
.user-data {
  width: 60%;
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
