<template>
  <div>
        <nav class="d-sm-block d-none cont-nav">
            <img src="../assets/img/Group 980 1.png">
            <div v-if="$route.path === '/'" class="btn-head d-inline float-right">
                <b-dropdown id="dropdown-1" text="Masuk" class="btn-login m-md-2">
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-perekrut"> Perekrut </router-link></b-dropdown-item>
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-pekerja">Pekerja </router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-1" text="Daftar" variant="primary" class="btn-register m-md-2">
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/register-perekrut">Perekrut</router-link></b-dropdown-item>
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/register-pekerja">Pekerja</router-link></b-dropdown-item>
                </b-dropdown>
            </div>
            <div v-else class="btn-head d-inline float-right">
                <div v-if="status === 'pekerja'">
                    <img src="../assets/img/bell (1) 1.png">
                    <img class="ml-5" src="../assets/img/mail (3) 1.png">
                    <img class="ml-5" style="border-radius:100%;" width="30px" height="30px" :src="`http://localhost:3000/${detailPekerja.imagepekerja}`">
                </div>
                <div v-else>
                    <img src="../assets/img/bell (1) 1.png">
                    <img class="ml-5" src="../assets/img/mail (3) 1.png">
                    <img class="ml-5" style="border-radius:100%;" width="30px" height="30px" :src="`http://localhost:3000/${detailPerekrut.imageperekrut}`">
                </div>
            </div>
        </nav>
        <!-- responsive -->
        <nav class="d-sm-none d-block cont-nav-hp fixed-bottom">
            <div class="row no-gutters h-100 align-items-center">
                <div class="col-3 d-flex justify-content-center">
                    <img src="../assets/img/grid 1.png" width="24px" height="24px">
                </div>
                <div class="col-3 d-flex justify-content-center">
                    <img src="../assets/img/search (2) 1.png" width="24px" height="24px">
                </div>
                <div class="col-3 d-flex justify-content-center">
                    <img src="../assets/img/Vector.png" width="24px" height="24px">
                </div>
                <div v-if="status === 'pekerja'">
                    <div class="col-3 d-flex justify-content-center">
                        <img style="border-radius:100%;" :src="`http://localhost:3000/${detailPekerja.imagepekerja}`" width="24px" height="24px">
                    </div>
                </div>
                <div v-else>
                    <div class="col-3 d-flex justify-content-center">
                        <img style="border-radius:100%;" :src="`http://localhost:3000/${detailPerekrut.imageperekrut}`" width="24px" height="24px">
                    </div>
                </div>
            </div>
        </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      status: localStorage.getItem('status'),
      getid: localStorage.getItem('idpekerja'),
      getidperekrut: localStorage.getItem('idperekrut')
    }
  },
  computed: {
    ...mapGetters({
      detailPekerja: 'pekerja/getDetailPekerja',
      detailPerekrut: 'perekrut/getDetailPerekrut'
    })
  },
  methods: {
    sendParamPerekrut () {
      this.actgetDetailPerekrut(this.getidperekrut)
    },
    sendParam () {
      this.actgetDetail(this.getid)
    },
    ...mapActions({
      actgetDetail: 'pekerja/getDetailPekerja',
      actgetDetailPerekrut: 'perekrut/getDetailPerekrut'
    })
  },
  mounted () {
    this.sendParam()
    this.sendParamPerekrut()
  }
}
</script>

<style>
.cont-nav {
    padding: 30px 100px;
    height: 100px;
}
.cont-nav-hp {
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px -6px 20px rgba(175, 175, 175, 0.25);
    border-radius: 30px 30px 0px 0px;
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
