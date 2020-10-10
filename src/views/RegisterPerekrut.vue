<template>
  <div>
  <div class="cont-register d-sm-block d-none">
      <div class="row h-100 no-gutters">
          <div style="height: 822px;" class="col-6 register-left text-white">
              <div class="p-4 bg-register">
                  <p style="font-size: 14px;"><img class="mr-2" src="../assets/img/layers 1.png">Peworld</p>
                  <div class="register-text ml-4">
                  <p class="font-weight-bold">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                </div>
              </div>
          </div>
          <div class="col-6 register-right">
              <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Halo, Pewpeople</p>
              <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
               <form>
                <div class="form-group mb-4">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="Name">Nama</label>
                    <input type="text" class="form-control" id="name" placeholder="Masukan Nama Panjang">
                </div>
                <div class="form-group mb-4">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Masukan alamat email">
                </div>
                <div class="form-group mb-4">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="perusahaan">Perusahaan</label>
                    <input type="text" class="form-control" id="perusahaan" placeholder="Masukan nama perusahaan">
                </div>
                <div class="form-group mb-4">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="jabatan">Jabatan</label>
                    <input type="text" class="form-control" id="jabatan" placeholder="Posisi di perusahaan Anda">
                </div>
                <div class="form-group mb-4">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="NoHandphone">No Handphone</label>
                    <input type="number" class="form-control" id="number" placeholder="Masukan no Handphone">
                </div>
                <div class="form-group mb-3">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="password">Kata Sandi</label>
                    <input type="password" class="form-control" id="password" placeholder="Masukan kata sandi">
                </div>
                <div class="form-group mb-3">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="ConfirmPassword">Konfirmasi Kata Sandi</label>
                    <input type="password" class="form-control" id="ConfirmPassword" placeholder="Masukan konfirmasi kata sandi">
                </div>
                <router-link style="font-size: 16px;line-height: 22px;color: #1F2A36;" to="/forgotpass" class="mb-3 float-right">Lupa kata sandi?</router-link>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Daftar</button>
              </form>
              <p class="mt-4 text-center">Anda sudah punya akun?<router-link to="/login-pekerja" class="ml-1" style="color:#FBB017;">Masuk disini</router-link></p>
          </div>
      </div>
  </div>
  <!-- Responsive -->
  <div class="cont-register-hp d-sm-none d-block">
      <img class="mb-5" src="../assets/img/iconhead.png">
         <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Register</p>
        <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form>
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="Name">Nama</label>
            <input type="text" class="form-control" id="name" placeholder="Masukan Nama Panjang">
        </div>
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Masukan alamat email">
        </div>
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="perusahaan">Perusahaan</label>
            <input type="text" class="form-control" id="perusahaan" placeholder="Masukan nama perusahaan">
        </div>
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="jabatan">Jabatan</label>
            <input type="text" class="form-control" id="jabatan" placeholder="Posisi di perusahaan Anda">
        </div>
        <div class="form-group mb-4">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="NoHandphone">No Handphone</label>
            <input type="number" class="form-control" id="number" placeholder="Masukan no Handphone">
        </div>
        <div class="form-group mb-3">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="password">Kata Sandi</label>
            <input type="password" class="form-control" id="password" placeholder="Masukan kata sandi">
        </div>
        <div class="form-group mb-3">
            <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="ConfirmPassword">Konfirmasi Kata Sandi</label>
            <input type="password" class="form-control" id="ConfirmPassword" placeholder="Masukan konfirmasi kata sandi">
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Daftar</button>
        </form>
        <p class="mt-4 text-center">Anda sudah punya akun?<router-link to="/login-pekerja" class="ml-1" style="color:#FBB017;">Masuk disini</router-link></p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cont-register {
    padding: 30px 70px;
    background-color: #F6F7F8;
    height: 100%;
}
.cont-register-hp {
    background-color: #F6F7F8;
    height: 100vh;
    width: 100vw;
    padding: 30px 20px;
}
.register-right {
    padding-top: 100px;
    padding-left: 50px;
}
.register-left {
    background-image: url('../assets/img/Mask Group.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-register {
    background-image: url('../assets/img/Group 977.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}
.register-text {
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
