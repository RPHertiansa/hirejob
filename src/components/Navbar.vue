<template>
  <div>
      <nav class="cont-nav">
          <img src="../assets/img/Group 980 1.png">
          <div class="btn-head d-inline float-right">
            <b-dropdown id="dropdown-1" text="Masuk" class="btn-login m-md-2">
                <b-dropdown-item><router-link to="/login-perekrut"> Perekrut </router-link></b-dropdown-item>
                <b-dropdown-item><router-link to="/login-pekerja">Pekerja </router-link></b-dropdown-item>
            </b-dropdown>
              <b-dropdown id="dropdown-1" text="Daftar" variant="primary" class="btn-register m-md-2">
                <b-dropdown-item><router-link to="/register-perekrut">Perekrut</router-link></b-dropdown-item>
                <b-dropdown-item><router-link to="/register-pekerja">Pekerja</router-link></b-dropdown-item>
            </b-dropdown>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cont-nav {
    padding: 30px 100px;
    height: 100px;
}
.btn-secondary {
    color: #5E50A1;
    background-color: #fff;
    border: 1px solid #5E50A1;
    border-radius: 4px;
}
.btn-primary {
    color: #fff;
    background-color: #5E50A1;
    border:none;
    border-radius: 4px;
}
.btn-secondary:hover {
    color: #5E50A1;
    background-color: #fff;
    border: 1px solid #5E50A1;
    border-radius: 4px;
}
.btn-primary:hover {
    color: #fff;
    background-color: #5E50A1;
    border-color: none;
    border:none;
    border-radius: 4px;
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #5E50A1;
    border-color: none;
    border:none;
    border-radius: 4px;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: #5E50A1;
    background-color: #fff;
    border: 1px solid #5E50A1;
    border-radius: 4px;
}
</style>
