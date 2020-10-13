<template>
    <div>
        <Navbar />
        <div class="container-fluid">
          <b-col lg="12" class="profile py-5">
                  <b-row class="content mx-5">
                  <b-col lg="4" cols="12" class="user-card">
                      <EditCardUser :idperekrut="id" />
                  </b-col>
                  <b-col class="edit-profile" lg="8" cols="12">
                      <EditProfile />
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
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditCardUser from '../components/EditCardUser'
import EditProfile from '../components/EditProfile'

export default {
  name: 'EditProfilePerekrut',
  data () {
    return {
      id: localStorage.getItem('idperekrut')
    }
  },
  components: {
    Navbar,
    Footer,
    EditCardUser,
    EditProfile
  }
}
</script>

<style scoped>

</style>
