<template>
  <div>
    <Navbar />
    <div class="d-sm-block d-none">
    <div style="background: #f6f7f8" class="pl-5">

    <b-row class="no-gutters">
      <b-col lg="5" class="mt-3">
        <CardUser :idpekerja="id" />
      </b-col>
      <b-col lg="7" class="mt-3 formSize">
        <div class="divHire">
        <h2 style="font-weight: bold">Hubungi Lous Tomlinson</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <b-form @submit.prevent="onHire">
            <b-form-text>Tujuan tentang posisi ini</b-form-text>
            <b-form-select v-model="selected" :options="options" class="mb-4"></b-form-select>
            <b-form-text>Nama Lengkap</b-form-text>
            <b-input
              type="text"
              v-model="name"
              placeholder="Masukan nama lengkap"
              autofocus
              required
              class="mb-4"
            ></b-input>
            <b-form-text>Email</b-form-text>
            <b-input
              v-model="email"
              type="email"
              placeholder="Masukan email"
              class="mb-4"
              required
            ></b-input>
            <b-form-text>No Handphone</b-form-text>
            <b-input
              v-model="phone"
              required
              type="number"
              class="mb-4"
              placeholder="Masukan no handphone"
            ></b-input>
            <b-form-text>Deskripsi</b-form-text>
            <b-form-textarea placeholder="Deskripsikan jelaskan lebih detail" v-model="desc" rows="8"></b-form-textarea>
            <button class="mt-4 btn-hire" block>Hire</button>
          </b-form>

        </div>
      </b-col>
    </b-row>
    </div>

    <Footer/>
    </div>
    <div class="d-sm-none d-block">
      <CardUser :idpekerja="id" />
      <div class="divHire-hp">
        <h2 style="font-weight: bold">Hubungi Lous Tomlinson</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <b-form @submit.prevent="onHire">
            <b-form-text>Tujuan tentang posisi ini</b-form-text>
            <b-form-select v-model="selected" :options="options" class="mb-4"></b-form-select>
            <b-form-text>Nama Lengkap</b-form-text>
            <b-input
              type="text"
              v-model="name"
              placeholder="Masukan nama lengkap"
              autofocus
              required
              class="mb-4"
            ></b-input>
            <b-form-text>Email</b-form-text>
            <b-input
              v-model="email"
              type="email"
              placeholder="Masukan email"
              class="mb-4"
              required
            ></b-input>
            <b-form-text>No Handphone</b-form-text>
            <b-input
              v-model="phone"
              required
              type="number"
              class="mb-4"
              placeholder="Masukan no handphone"
            ></b-input>
            <b-form-text>Deskripsi</b-form-text>
            <b-form-textarea placeholder="Deskripsikan jelaskan lebih detail" v-model="desc" rows="8"></b-form-textarea>
            <button class="mt-4 btn-hire" block>Hire</button>
          </b-form>

        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardUser from '../components/CardUser'

export default {
  name: 'Hire',
  data () {
    return {
      id: this.$route.query.id,
      idperekrut: localStorage.getItem('idperekrut'),
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Fulltime', text: 'Fulltime' },
        { value: 'Freelance', text: 'Freelance' },
        { value: 'Project', text: 'Project' }
      ],
      name: null,
      email: null,
      phone: null,
      desc: null
    }
  },
  methods: {
    ...mapActions({
      onHireTalent: 'hire/onHireTalent'
    }),
    onHire () {
      const data = {
        idperekrut: this.idperekrut,
        idpekerja: this.id,
        pesantujuan: this.selected,
        namalengkap: this.name,
        email: this.email,
        phone: this.phone,
        deskripsi: this.desc
      }
      console.log(data)
      this.onHireTalent(data).then(result => {
        this.alertActivate()
      }).catch(err => this.alerError(err))
    },
    alertActivate () {
      Swal.fire({
        icon: 'success',
        title: 'Your Recruit Talent Success',
        text: 'Please Wait Confirm From Talent'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Something Went Wrong!'
      })
    }
  },
  components: {
    CardUser,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.formSize{
  margin-bottom: 20%;
}
.userCard{
  margin-left: 10%;
}
button {
  background: #fbb017;
  border-radius: 4px;
  border-color: #ffffff;
  width: 100%;
}
button:hover {
  background: #ffffff;
  color: #fbb017;
  border-color: #fbb017;
}
.divHire{
  margin-right: 110px;
}
.divHire-hp{
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 90px;
}
.buttonSkill button {
  pointer-events: none;
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  box-sizing: border-box;
  border-radius: 4px;
}
.profileHire {
  background: #ffffff;
  margin: 0px 80px 0px 100px;
  padding: 50px 0 20px 20px;
}
.profileHire img {
  width: 150px;
  height: 150px;
  margin-left: 90px;
}
.btn-hire{
    height: 60px;
    width: 100%;
    border: 2px solid #FBB017;
    box-sizing: border-box;
    border-radius: 4px;
    color: white;
}
</style>
