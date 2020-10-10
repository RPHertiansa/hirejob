<template>
  <div>
  <div class="cont-resetpass d-sm-block d-none">
      <div class="row h-100 no-gutters">
          <div style="height: 822px;" class="col-6 resetpass-left text-white">
              <div class="p-4 bg-resetpass">
                  <p style="font-size: 14px;"><img class="mr-2" src="../assets/img/layers 1.png">Peworld</p>
                  <div class="resetpass-text ml-4">
                  <p class="font-weight-bold">Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                </div>
              </div>
          </div>
          <div class="col-6 resetpass-right">
              <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Reset Password</p>
              <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">You need to change your password to active your account</p>
               <form>
                <div class="form-group mb-3">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="password">Kata Sandi</label>
                    <input type="password" class="form-control" id="password" placeholder="Masukan kata sandi">
                </div>
                <div class="form-group mb-3">
                    <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="ConfirmPassword">Konfirmasi Kata Sandi</label>
                    <input type="password" class="form-control" id="ConfirmPassword" placeholder="Masukan konfirmasi kata sandi">
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Reset password</button>
              </form>
          </div>
      </div>
  </div>
  <!-- Responsive -->
  <div class="cont-resetpass-hp d-sm-none d-block">
      <img class="mb-5" src="../assets/img/iconhead.png">
         <p style="font-weight: 600;font-size: 32px;line-height: 44px;color: #1F2A36;">Reset Password</p>
        <p class="mb-5" style="font-size: 18px; line-height: 25px;color: #46505C;">You need to change your password to active your account</p>
        <form>
            <div class="form-group mb-3">
                <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="password">Kata Sandi</label>
                <input type="password" class="form-control" id="password" placeholder="Masukan kata sandi">
            </div>
            <div class="form-group mb-3">
                <label style="font-size: 12px;line-height: 16px;color: #9EA0A5;" for="ConfirmPassword">Konfirmasi Kata Sandi</label>
                <input type="password" class="form-control" id="ConfirmPassword" placeholder="Masukan konfirmasi kata sandi">
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Reset password</button>
        </form>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cont-resetpass {
    padding: 30px 70px;
    background-color: #F6F7F8;
    height: 100%;
}
.cont-resetpass-hp {
    background-color: #F6F7F8;
    height: 100vh;
    width: 100vw;
    padding: 30px 20px;
}
.resetpass-right {
    padding-top: 100px;
    padding-left: 50px;
}
.resetpass-left {
    background-image: url('../assets/img/Mask Group.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.bg-resetpass {
    background-image: url('../assets/img/Group 977.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}
.resetpass-text {
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
