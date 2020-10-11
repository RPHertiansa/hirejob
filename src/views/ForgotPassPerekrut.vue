<template>
  <div>
  <div class="cont-forgotpass d-sm-block d-none">
      <div class="row h-100 no-gutters">
          <div style="height: 822px;" class="col-6 forgotpass-left text-white">
              <div class="p-4 bg-forgotpass">
                  <p style="font-size: 14px;"><img class="mr-2" src="../assets/img/layers 1.png">Peworld</p>
                  <div class="forgotpass-text ml-4">
                  <p class="font-weight-bold">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                </div>
              </div>
          </div>
          <div class="col-6 forgotpass-right">
              <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Reset Password</p>
              <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">Enter your user account's verified email address and we will send you a password reset link</p>
               <form @submit.prevent="forgotpass">
                <div class="form-group mb-4">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="email">Email</label>
                    <input type="email" class="form-control" id="email" autofocus required v-model="sendMail"  placeholder="Masukan alamat email">
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Send password reset email</button>
              </form>
          </div>
      </div>
  </div>
  <!-- Responsive -->
  <div class="cont-forgotpass-hp d-sm-none d-block">
      <img class="mb-5" src="../assets/img/iconhead.png">
         <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Reset Password</p>
        <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">Enter your user account's verified email address and we will send you a password reset link</p>
        <form @submit.prevent="forgotpass">
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="email">Email</label>
            <input type="email" class="form-control" autofocus required v-model="sendMail"  id="email1" placeholder="Masukan alamat email">
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Send password reset email</button>
        </form>
  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
export default {
  name: 'forgotpass-perekrut',
  data () {
    return {
      sendMail: null
    }
  },
  methods: {
    ...mapActions({
      onForgotPassword: 'auth/onForgotPasswordPerekrut'
    }),
    forgotpass () {
      const data = {
        emailperekrut: this.sendMail
      }
      console.log(data)
      this.onForgotPassword(data).then(result => {
        this.alertActivate(result)
        window.location = 'login-perekrut'
      }).catch(err => this.alertError(err.message))
    },
    alertActivate () {
      Swal.fire(
        'Check your email',
        'Please Check Your Email to reset password',
        'success'
      )
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Send Email Failed!'
      })
    }
  }
}
</script>

<style scoped>
.cont-forgotpass {
    padding: 30px 70px;
    background-color: #F6F7F8;
    height: 100%;
}
.cont-forgotpass-hp {
    background-color: #F6F7F8;
    height: 100vh;
    width: 100vw;
    padding: 30px 20px;
}
.forgotpass-right {
    padding-top: 100px;
    padding-left: 50px;
}
.forgotpass-left {
    background-image: url('../assets/img/Mask Group.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-forgotpass {
    background-image: url('../assets/img/Group 977.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}
.forgotpass-text {
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
