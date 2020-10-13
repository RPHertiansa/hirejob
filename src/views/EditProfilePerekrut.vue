<template>
    <div>
        <Navbar />
        <EditProfile />
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
    EditProfile
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
