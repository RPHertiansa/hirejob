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
  name: 'EditProfilePekerja',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer,
    EditProfile
  }
}
</script>

<style scoped>

</style>
