<template>
    <div>
        <Navbar />
        <!-- <div class="top-bg fluid"> -->
          <div class="container-fluid">
          <b-col lg="12" class="profile py-5">
                  <b-row class="content mx-5">
                  <b-col lg="4" cols="12" class="user-card">
                      <CardUser :idpekerja="id" />
                  </b-col>
                  <b-col class="edit-profile" lg="8" cols="12">
                      <Riwayat :idpekerja="id" />
                  </b-col>
              </b-row>
          </b-col>
          </div>
          <div>
              <Footer />
          </div>
    </div>
</template>

<script>
import CardUser from '../components/CardUser'
import Navbar from '../components/Navbar'
import Riwayat from '../components/Riwayat'
import Footer from '../components/Footer'

export default {
  data () {
    return {
      id: this.$route.query.id
    }
  },
  components: {
    CardUser,
    Navbar,
    Riwayat,
    Footer
  }
}

</script>
<style scoped>
    .container-fluid{
        background: #F6F7F8;
    }
    .top-bg{
        background: #5E50A1;
        height: 200px;
    }
    .user-card{
        height: 600px;
    }
    /* .profile{
        padding: 0px 5px;
        margin-top: 5px;
    } */
    @media only screen and (max-width: 600px) {
    .edit-profile {
      margin-top: 25px;
    }
    .profile {
      padding-right: 0px;
      padding-left: 0px;
    }
    .user-card {
      padding-right: 0px;
      padding-left: 0px;
    }
    .container-fluid {
      padding-right: 0px;
      padding-left: 0px;
    }
    .edit-profile {
      padding-right: 0px;
      padding-left: 0px;
    }
}
</style>
