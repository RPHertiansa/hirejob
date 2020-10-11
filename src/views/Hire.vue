<template>
  <div style="background: #f6f7f8">
    <Navbar />
    <div class="container">

    <b-row class="no-gutters">
      <b-col lg="5" class="mt-3">
        <CardUser />
      </b-col>
      <b-col lg="7" class="mt-3 formSize">
        <div class="divHire">
        <h2 style="font-weight: bold">Hubungi Lous Tomlinson</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          recusandae quo qui at neque repellat, nemo quisquam ratione dolorem
          laudantium! Dignissimos, libero ea facilis iure maiores accusantium
          expedita vel consectetur?
        </p>

        <b-form @submit.prevent="onHire()">
            <b-form-text>Tujuan tentang posisi ini</b-form-text>
            <b-form-select class="mb-4"></b-form-select>
            <b-form-text>Nama Lengkap</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan nama lengkap"
              autofocus
              class="mb-4"
            ></b-input>
            <b-form-text>Email</b-form-text>
            <b-input
              type="text"
              placeholder="Masukan email"
              class="mb-4"
            ></b-input>
            <b-form-text>No Handphone</b-form-text>
            <b-input
              type="number"
              class="mb-4"
              placeholder="Masukan no handphone"
            ></b-input>
            <b-form-text>Deskripsi</b-form-text>
            <b-form-textarea placeholder="Deskripsikan jelaskan lebih detail" rows="8"></b-form-textarea>
            <button class="mt-4 btn-hire" block>Hire</button>
          </b-form>

        </div>
      </b-col>
    </b-row>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardUser from '../components/CardUser'

export default {
  name: 'Hire',
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
