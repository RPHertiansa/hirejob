<template>
  <div>
        <nav class="d-sm-block d-none cont-nav" :class="{shadownav: $route.path === '/'? false: true  }">
            <router-link to="/"> <img src="../assets/img/Group 980 1.png"> </router-link>
            <router-link v-if="$route.path === '/' && status !== null" to="/home" class="menu-home">Home</router-link>
            <div v-if="$route.path === '/' && status !== null" class="btn-head d-inline float-right">
                <button v-if="status === 'pekerja'" class="btn btn-profile" @click="detailProfile(detailPekerja.idpekerja)">Profile</button>
                <button v-else class="btn btn-profile"><router-link class="tprf" to="/profile-perekrut">Profile</router-link></button>
            </div>
            <div v-else-if="$route.path === '/'" class="btn-head d-inline float-right">
                <b-dropdown id="dropdown-1" text="Masuk" class="btn-login m-md-2" no-caret>
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-perekrut"> Perekrut </router-link></b-dropdown-item>
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/login-pekerja">Pekerja </router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-1" text="Daftar" variant="primary" class="btn-register m-md-2" no-caret>
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/register-perekrut">Perekrut</router-link></b-dropdown-item>
                    <b-dropdown-item><router-link style="color: #5E50A1;" to="/register-pekerja">Pekerja</router-link></b-dropdown-item>
                </b-dropdown>
            </div>
            <div v-else class="btn-head d-inline float-right">
                <div v-if="status === 'pekerja'">
                    <b-dropdown size="sm" offset="-110" center variant="link" menu-class="drdwn" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                        <img src="../assets/img/bell (1) 1.png">
                        </template>
                        <div class="cont-notif">
                          <div v-if="notifList === null">
                            <img src="../assets/img/undraw_Notify_re_65on 1.png">
                            <p>Belum ada notifikasi</p>
                          </div>
                          <div v-else>
                            {{notifList}}
                          </div>
                        </div>
                    </b-dropdown>
                    <router-link to="/inbox">
                      <img class="ml-5" src="../assets/img/mail (3) 1.png">
                    </router-link>
                    <b-dropdown id="dropdown-1" offset="-50" size="lg" variant="link" text="" class="ml-5" no-caret>
                      <template v-slot:button-content>
                        <b-icon icon="gear-fill" style="color: #5E50A1;" aria-hidden="true"></b-icon>
                      </template>
                        <img class="ml-5 mb-3" style="border-radius:100%;" width="30px" height="30px" :src="`http://localhost:3000/${detailPekerja.imagepekerja}` === undefined ? `../assets/img/mail (3) 1.png` : `http://localhost:3000/${detailPekerja.imagepekerja}`">
                        <b-dropdown-item><li class="" @click="detailProfile(detailPekerja.idpekerja)" >Profile</li></b-dropdown-item>
                        <b-dropdown-item><router-link style="color: #5E50A1;" to="/edit-profile-pekerja">Edit Profile</router-link></b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item><li class="text-danger" @click="logout()">Logout</li></b-dropdown-item>
                    </b-dropdown>
                </div>
                <div v-else-if="status === 'perekrut'">
                    <b-dropdown size="sm" offset="-110" center variant="link" menu-class="drdwn" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                        <img src="../assets/img/bell (1) 1.png">
                        </template>
                        <div class="cont-notif">
                          <div v-if="notifList === null">
                            <img src="../assets/img/undraw_Notify_re_65on 1.png">
                            <p>Belum ada notifikasi</p>
                          </div>
                          <div v-else>
                            {{notifList}}
                          </div>
                        </div>
                    </b-dropdown>
                    <router-link to="/inbox">
                      <img class="ml-5" src="../assets/img/mail (3) 1.png">
                    </router-link>
                    <b-dropdown id="dropdown-1" offset="-50" size="lg" variant="link" text="" class="ml-5" no-caret>
                      <template v-slot:button-content>
                        <b-icon icon="gear-fill" style="color: #5E50A1;" aria-hidden="true"></b-icon>
                      </template>
                        <img class="ml-5" style="border-radius:100%;" width="30px" height="30px" :src="`http://localhost:3000/${detailPerekrut.imageperekrut}` === undefined ? `../assets/img/mail (3) 1.png` : `http://localhost:3000/${detailPerekrut.imageperekrut}`">
                        <b-dropdown-item><router-link style="color: #5E50A1;" to="/profile-perekrut">Profile</router-link></b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item><li class="text-danger" @click="logoutPerekrut()">Logout</li></b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </nav>
        <!-- responsive -->
        <nav class="d-sm-none d-block cont-nav-hp fixed-bottom">
            <div class="row no-gutters h-100 align-items-center">
                <div class="col-4 d-flex justify-content-center">
                    <router-link v-if="$route.path === '/home'" to="/home">
                    <img src="../assets/img/grid 1.png" width="24px" height="24px">
                    </router-link>
                    <router-link v-else to="/home">
                      <img src="../assets/img/grid 1 (1).png" width="24px" height="24px">
                  </router-link>
                </div>
                <div class="col-4 d-flex justify-content-center">
                    <router-link v-if="$route.path === '/inbox'" to="">
                        <img src="../assets/img/Vector (1).png" width="24px" height="24px">
                  </router-link>
                  <router-link v-else to="/inbox">
                        <img src="../assets/img/Vector.png" width="24px" height="24px">
                  </router-link>
                </div>

                <div v-if="status === 'pekerja'" class="col-4 d-flex justify-content-center">
                  <b-dropdown id="dropdown-drowup" size="lg" variant="link" text="" class="ml-2" no-caret>
                    <template v-slot:button-content>
                      <b-icon icon="gear-fill" style="color: #5E50A1;" aria-hidden="true"></b-icon>
                    </template>
                      <img class="ml-5" style="border-radius:100%;" :src="`http://localhost:3000/${detailPekerja.imagepekerja}` === undefined ? `../assets/img/mail (3) 1.png` : `http://localhost:3000/${detailPekerja.imagepekerja}`" width="24px" height="24px">
                      <b-dropdown-item><li class="" @click="detailProfile(detailPekerja.idpekerja)" >Profile</li></b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item><li class="text-danger" @click="logout()">Logout</li></b-dropdown-item>
                  </b-dropdown>
                </div>
                <div v-else-if="status === 'perekrut'" class="col-4 d-flex justify-content-center">
                  <b-dropdown id="dropdown-1" size="lg" variant="link" text="" class="ml-2" no-caret>
                    <template v-slot:button-content>
                      <b-icon icon="gear-fill" style="color: #5E50A1;" aria-hidden="true"></b-icon>
                    </template>
                      <img class="ml-5" style="border-radius:100%;" :src="`http://localhost:3000/${detailPerekrut.imageperekrut}` === undefined ? `../assets/img/mail (3) 1.png` : `http://localhost:3000/${detailPerekrut.imageperekrut}`" width="24px" height="24px">
                      <b-dropdown-item><router-link style="color: #5E50A1;" to="/profile-perekrut">Profile </router-link></b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item><li class="text-danger" @click="logoutPerekrut()">Logout</li></b-dropdown-item>
                  </b-dropdown>
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
      status: localStorage.getItem('status') === undefined ? null : localStorage.getItem('status'),
      getid: localStorage.getItem('idpekerja') === undefined ? null : localStorage.getItem('idpekerja'),
      getidperekrut: localStorage.getItem('idperekrut') === undefined ? null : localStorage.getItem('idperekrut'),
      notifList: 'test'
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
      actgetDetailPerekrut: 'perekrut/getDetailPerekrut',
      onLogout: 'auth/onLogoutPekerja',
      onLogoutPerekrut: 'auth/onLogoutPerekrut'
    }),
    logout () {
      this.onLogout().then(() => { window.location = '/' })
    },
    logoutPerekrut () {
      this.onLogoutPerekrut().then(() => { window.location = '/' })
    },
    detailProfile (idpekerja) {
      this.$router.push({
        path: '/profile',
        query: { id: idpekerja }
      })
    }
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
.shadownav {
    box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25);
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
.drdwn {
  width: 258px;
  height: 305px;
}
.cont-notif {
  padding-top: 40%;
  padding-left: 25%;
}
.cont-notif p{
  font-size: 14px;
  line-height: 20px;
  color: #1F2A36;
}
.btn-profile {
  background: #5E50A1;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
}
.btn-profile:hover {
  color: #FFFFFF;
}
.menu-home {
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #1F2A36;
  text-decoration: none !important;
  margin-left: 150px;
}
.menu-home:hover {
  color: #1F2A36;
}
.tprf {
  text-decoration: none !important;
  color: white;
}
.tprf:hover {
  color:white;
}
</style>
