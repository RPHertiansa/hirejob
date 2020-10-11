<template>
  <div>
  <div class="cont-login d-sm-block d-none">
      <div class="row h-100 no-gutters">
          <div style="height: 822px;" class="col-6 login-left text-white">
              <div class="p-4 bg-login">
                  <p style="font-size: 14px;"><img class="mr-2" src="../assets/img/layers 1.png">Peworld</p>
                  <div class="login-text ml-4">
                  <p class="font-weight-bold">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                </div>
              </div>
          </div>
          <div class="col-6 login-right">
              <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Halo, Pewpeople</p>
              <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
               <form @submit.prevent="login">
                <div class="form-group mb-5">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="email">Email</label>
                    <input type="email" class="form-control" id="email" autofocus required v-model="loginEmail" placeholder="Masukan alamat email">
                </div>
                <div class="form-group mb-3">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="password">Kata Sandi</label>
                    <input type="password" class="form-control" id="password" autofocus required v-model="loginPassword" placeholder="Masukan kata sandi">
                </div>
                <router-link style="font-size: 16px;line-height: 22px;color: #1F2A36;" to="/forgotpass-pekerja" class="mb-3 float-right">Lupa kata sandi?</router-link>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Masuk</button>
              </form>
              <p class="mt-4 text-center">Anda belum punya akun?<router-link to="/register-pekerja" class="ml-1" style="color:#FBB017;">Daftar disini</router-link></p>
          </div>
      </div>
  </div>
  <!-- Responsive -->
  <div class="cont-login-hp d-sm-none d-block">
      <img class="mb-5" src="../assets/img/iconhead.png">
         <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Login</p>
        <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form @submit.prevent="login">
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="email">Email</label>
            <input type="email" class="form-control" id="email1" autofocus required v-model="loginEmail" placeholder="Masukan alamat email">
        </div>
        <div class="form-group mb-3">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="password">Kata Sandi</label>
            <input type="password" class="form-control" id="password1" autofocus required v-model="loginPassword" placeholder="Masukan kata sandi">
        </div>
        <router-link style="font-size: 16px;line-height: 22px;color: #1F2A36;" to="/forgotpass-pekerja" class="mb-3 float-right">Lupa kata sandi?</router-link>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Masuk</button>
        </form>
        <p class="mt-4 text-center">Anda belum punya akun?<router-link to="/register-pekerja" class="ml-1" style="color:#FBB017;">Daftar disini</router-link></p>
  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  name: 'login-pekerja',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    ...mapActions({
      onLogin: 'auth/onLoginPekerja'
    }),
    login () {
      const data = {
        emailpekerja: this.loginEmail,
        passwordpekerja: this.loginPassword
      }
      this.onLogin(data).then(result => {
        if (result === "Cannot read property 'passwordpekerja' of undefined") {
          this.alertExist()
          localStorage.removeItem('emailpekerja')
          localStorage.removeItem('idpekerja')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('status')
          localStorage.removeItem('token')
        } else if (result === 'Need Activation') {
          this.alertActivate()
          localStorage.removeItem('emailpekerja')
          localStorage.removeItem('idpekerja')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('status')
          localStorage.removeItem('token')
        } else if (result === 'Incorrect password! Please try again') {
          this.alertMatch()
          localStorage.removeItem('emailpekerja')
          localStorage.removeItem('idpekerja')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('status')
          localStorage.removeItem('token')
        } else {
          window.location = '/home'
        }
      }).catch(err => this.alertError(err.message))
    },
    alertExist () {
      Swal.fire({
        icon: 'error',
        title: 'Username Doesnt Exist!',
        text: 'Please check your personal info or create a new one'
      })
    },
    alertActivate () {
      Swal.fire({
        icon: 'warning',
        title: 'This Account need to verified!',
        text: 'Please check your email account to activate'
      })
    },
    alertMatch () {
      Swal.fire({
        icon: 'question',
        title: 'Username and Password Doesnt Match!'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }
}
</script>

<style scoped>
.cont-login {
    padding: 30px 70px;
    background-color: #F6F7F8;
    height: 100%;
}
.cont-login-hp {
    background-color: #F6F7F8;
    height: 100vh;
    width: 100vw;
    padding: 30px 20px;
}
.login-right {
    padding-top: 100px;
    padding-left: 50px;
}
.login-left {
    background-image: url('../assets/img/Mask Group.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-login {
    background-image: url('../assets/img/Group 977.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}
.login-text {
    width: 456px;
    height: 280px;
    font-size: 44px;
    line-height: 70px;
    margin-top: 40%;
}
.btn {
    background: #FBB017;
    border-radius: 4px;
    border: none;
}
</style>
