<template>
    <div>
        <div v-if="this.status === 'pekerja'">
          <div class="container-fluid">
            <b-col lg="12" class="profile py-5">
              <b-row class="content mx-5">
                  <b-col lg="4" cols="12" class="user-card">
                    <div class="card-user shadow">
                        <div class="user-box text-center">
                          <div class="profile-image">
                            <img :src="`http://localhost:3000/${dataz.imagepekerja}`" width="100%" height="100%" style="border-radius:100%;">
                          </div>
                         <form enctype="multipart/form-data" @change.prevent="updatePekerjaImage">
                            <label class="text-secondary mt-3 text-center custom-file-upload" style="margin-left: -15px;">
                              <b-icon icon="pencil-fill" class="mr-1"></b-icon><input type="file" @change="uploadPekerja($event)"> Edit
                            </label>
                          </form>
                        </div>
                        <div class="user-data mt-3 text-center">
                          <div class="user-name">
                            <h5 class="font-weight-bold" style="margin-bottom: 0;">{{dataz.namapekerja}}</h5>
                            <p>{{dataz.jobdescpekerja}}</p>
                          </div>

                          <div v-if="dataz.tipepekerjaan === 0">
                            <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> {{dataz.domisilipekerja}}</p>
                            <p class="text-secondary">Freelancer</p>
                          </div>
                          <div v-else>
                            <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin"> {{dataz.domisilipekerja}}</p>
                            <p class="text-secondary">Fulltime</p>
                          </div>

                          <div>
                              <b-col lg="12" class="my-3">
                                  <button class="btn btn-save" @click="updatePekerja(dataz)">Simpan</button>
                              </b-col>
                              <b-col lg="12" class="my-3">
                                  <button class="btn btn-cancel">Batal</button>
                              </b-col>
                          </div>
                        </div>
                    </div>
                  </b-col>
                  <b-col class="edit-profile" lg="8" cols="12">
                    <!-- form pencari kerja -->
                    <b-row class="users">
                        <b-col lg="12" class="profile-user shadow">
                            <b-row class="px-5">
                                <h1 class="px-2 py-3">Data Diri</h1>
                                <div class="line py-2"></div>
                                <b-col lg="12">
                                    <form>
                                        <div class="form-group">
                                            <label>Nama Lengkap</label>
                                            <input type="text" class="form-control" placeholder="Masukan nama lengkap"
                                            v-model="dataz.namapekerja" :namapekerja="dataz.namapekerja"
                                            required
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Jobdesk</label>
                                            <input type="text" class="form-control" placeholder="Masukan Jobdesk"
                                            v-model="dataz.jobdescpekerja" :jobdescpekerja="dataz.jobdescpekerja"
                                            required
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Domisili</label>
                                            <input type="text" class="form-control" placeholder="Masukan Domisili"
                                            v-model="dataz.domisilipekerja" :domisilipekerja="dataz.domisilipekerja"
                                            required
                                            >
                                        </div>
                                        <div class="form-group">
                                             <b-form-text>Tipe Pekerjaan</b-form-text>
                                              <b-form-select v-model="tipepekerjaan" :options="options" class="mb-4"></b-form-select>
                                        </div>
                                        <div class="form-group">
                                            <label>Instagram</label>
                                            <input type="text" class="form-control" placeholder="Masukan Akun Instagram"
                                            v-model="dataz.ig" :domisilipekerja="dataz.ig"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Github</label>
                                            <input type="text" class="form-control" placeholder="Masukan Akun Github"
                                            v-model="dataz.github" :domisilipekerja="dataz.github"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Gitlab</label>
                                            <input type="text" class="form-control" placeholder="Masukan Akun Gitlab"
                                            v-model="dataz.gitlab" :domisilipekerja="dataz.gitlab"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Deskripsi singkat</label>
                                            <textarea class="form-control" rows="5" placeholder="Tuliskan deskripsi singkat"
                                            v-model="dataz.deskripsi" :deskripsi="dataz.deskripsi"
                                            ></textarea>
                                        </div>
                                    </form>
                                </b-col>
                            </b-row>
                        </b-col>
                        <!-- skil -->
                        <b-col lg="12" class="skill-search my-4 shadow">
                            <b-row class="input-search px-5">
                              <h1 class="px-2 py-3"></h1>
                                <div v-for="(item, index) in users.dataSkill" :key="index">
                                    <button class="btn b">{{ item }}</button>
                                </div>
                                <b-col lg="12">
                                    <div class="input-group mb-3">
                                    <input type="text" class="form-control" required v-model="skill" placeholder="Skill">
                                    <button class="btn search-btn mx-3" @click="saveSkill">Simpan</button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>

                        <!-- experience -->

                        <b-col lg="12" class="experience my-4 shadow">
                            <b-row class="px-5">
                              <h1 class="px-2 py-3">Pengalaman Kerja</h1>
                                <div class="line py-2"></div>
                                  <div class="row"  v-for="(item, index) in dataPeng" :key="index">
                                    <b-col lg="12">
                                      <form>
                                        <div class="form-group">
                                          <div class="row">
                                            <div class="col">
                                              <label>Posisi</label>
                                                <input type="text" class="form-control" placeholder="Fullstack Developer"
                                                  v-model="item.posisi" :posisi="item.posisi"
                                                  required
                                                >
                                            </div>
                                            <div class="col">
                                            <b-dropdown variant="outline-success" right class="float-right mt-3" menu-class="dropmenu" no-caret>
                                              <template v-slot:button-content>
                                                <b-icon icon="gear" class=""></b-icon>
                                              </template>
                                              <b-dropdown-item-button class="">
                                                <button class="btn btn-outline-info btn-block" @click.prevent="updatePengalaman(item)">
                                                  <b-icon icon="pencil-fill" class="mr-3"></b-icon>
                                                  Edit
                                                </button>
                                              </b-dropdown-item-button>
                                              <b-dropdown-item-button class="">
                                                <button class="btn btn-outline-danger btn-block" @click.prevent="deletePengalaman(item.idpengalaman)">
                                                  <b-icon icon="trash" class="mr-3"></b-icon>
                                                  Delete
                                                </button>
                                              </b-dropdown-item-button>
                                            </b-dropdown>
                                            </div>
                                            <!-- <div class="col">
                                              <div class="col text-right mt-3">
                                                <button class="btn btn-outline-info">Edit</button>
                                              </div>
                                              <div class="col text-right mt-3">
                                                <button class="btn btn-outline-danger">Hapus</button>
                                              </div>
                                            </div> -->
                                          </div>
                                        </div>
                                      </form>
                                    </b-col>
                                    <b-col lg="12">
                                      <b-row>
                                        <b-col lg="6" class="text-left">
                                          <div class="form-group">
                                            <label>Nama Perusahaan</label>
                                            <input type="text" class="form-control" placeholder="PT Apa Aja Boleh"
                                            v-model="item.namaperusahaan" :namaperusahaan="item.namaperusahaan"
                                            required
                                            >
                                          </div>
                                        </b-col>
                                        <b-col lg="6">
                                          <div class="form-group">
                                            <label class="text-left">Bulan/Tahun</label>
                                            <input type="text" class="form-control" placeholder="Januari 2088"
                                            v-model="item.mulaikerja" :mulaikerja="item.mulaikerja"
                                            required
                                            >
                                          </div>
                                          <div class="form-group">
                                            <label class="text-left">Bulan/Tahun</label>
                                            <input type="text" class="form-control" placeholder="Januari 2088"
                                            v-model="item.selesaikerja" :selesaikerja="item.selesaikerja"
                                            required
                                            >
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </b-col>
                                    <b-col lg="12">
                                      <div class="form-group">
                                        <label>Deskripsi singkat</label>
                                        <textarea class="form-control" rows="5" placeholder="Deskripsi Pekerjaan anda"
                                        v-model="item.deskripsi" :deskripsi="item.deskripsi"
                                        required
                                        ></textarea>
                                      </div>
                                    <hr>
                                    </b-col>
                                </div>

                                <b-col lg="12" class="my-3">
                                  <b-button class="btn btn-experience" v-b-toggle.add-collapse>+ Tambah Pengalaman</b-button>
                                </b-col>

                                <!-- add -->

                                <b-collapse id="add-collapse">

                                  <form @submit.prevent="addPengalaman">
                                  <b-row>
                                    <b-col lg="12">
                                        <div class="form-group">
                                          <label>Posisi</label>
                                            <input type="text" class="form-control" placeholder="Posisi"
                                            v-model="newPeng.posisi"
                                            required
                                            >
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                      <b-row>
                                        <b-col lg="6" class="text-left">
                                          <div class="form-group">
                                            <label>Nama Perusahaan</label>
                                            <input type="text" class="form-control" placeholder="Nama Perusahaan"
                                            v-model="newPeng.namaperusahaan"
                                            required
                                            >
                                          </div>
                                        </b-col>
                                        <b-col lg="6">
                                          <div class="form-group">
                                            <label class="text-left">Bulan/Tahun</label>
                                            <input type="date" class="form-control" placeholder="Mulai Kerja"
                                            v-model="newPeng.mulaikerja"
                                            required
                                            >
                                          </div>
                                          <div class="form-group">
                                            <label class="text-left">Bulan/Tahun</label>
                                            <input type="date" class="form-control" placeholder="Selesai Kerja"
                                            v-model="newPeng.selesaikerja"
                                            required
                                            >
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </b-col>
                                    <b-col lg="12">
                                      <div class="form-group">
                                        <label>Deskripsi singkat</label>
                                        <textarea class="form-control" rows="5" placeholder="Deskripsi Pekerjaan anda"
                                        v-model="newPeng.deskripsi"
                                        required
                                        ></textarea>
                                      </div>
                                    </b-col>
                                    <b-col lg="12" class="my-3">
                                      <b-button class="btn btn-add-experience" type="submit">Save Pengalaman</b-button>
                                    </b-col>
                                  </b-row>
                                    </form>

                                </b-collapse>

                                <!-- end add -->

                            </b-row>
                        </b-col>
                        <!-- end experience -->

                        <!-- start portofolio -->

                        <b-col lg="12" class="portofolio my-4 shadow">
                            <b-row class="px-5">
                                <h1 class="px-2 py-3">Portofolio</h1>
                                <div class="line py-2"></div>
                                {{dataPor}}
                                <b-col lg="12" v-for="(item, index) in dataPor" :key="index">
                                    <form>
                                        <div class="form-group">
                                            <label>Nama Aplikasi</label>
                                            <input type="text" class="form-control" placeholder="Masukkan nama aplikasi"
                                            v-model="item.namaaplikasi" :namaaplikasi="item.namaaplikasi"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Link Repository</label>
                                            <input type="text" class="form-control" placeholder="Masukkan link repository"
                                            v-model="item.linkrepository" :linkrepository="item.linkrepository"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label>Type Portfolio</label>
                                            <b-row>
                                            <b-col lg="6" sm="6" cols="6" class="radio">
                                                <div class="radio-box text-left  py-2">
                                                    <div class="form-check">
                                                    <input class="form-check-input"
                                                    type="radio" name="exampleRadios" id="exampleRadios1"
                                                    :value= item.portofolio
                                                    :checked="item.tipeportofolio === 'Aplikasi Web'"
                                                    >
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Aplikasi Web
                                                    </label>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col lg="6" sm="6" cols="6" class="radio">
                                                <div class="radio-box text-left  py-2">
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" :checked="item.tipeportofolio === 'Aplikasi Mobile'">
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Aplikasi Mobile
                                                    </label>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                        </div>
                                        <vue-dropzone ref="myVueDropzone" id="dropzone customdropzone" :options="dropzoneOptions" :useCustomSlot=true>
                                            <!-- <img src="../assets/img/dragndrop.png" style="width:100%" alt="dragndrop"> -->
                                        </vue-dropzone>
                                    </form>
                                    <hr>
                                </b-col>
                                <b-col lg="12" class="my-3">
                                    <button class="btn btn-experience">Tambah Portfolio</button>
                                </b-col>
                            </b-row>
                        </b-col>
                        <!-- end portofolio -->
                    </b-row>
                    <!-- end form pencari kerja -->
                  </b-col>
              </b-row>
            </b-col>
          </div>
        </div>

        <div v-else>
        <!-- company / perekrut -->
        <div class="container-fluid">
          <b-col lg="12" class="profile py-5">
            <b-row class="content mx-5">
              <b-col lg="4" cols="12" class="user-card">
                <div class="card-user shadow">
                  <div class="user-box text-center">
                    <div class="profile-image">
                      <img :src="`http://localhost:3000/${dataperekrut.imageperekrut}`" width="100%" height="100%" style="border-radius:100%;">
                    </div>
                    <form enctype="multipart/form-data" @change.prevent="updatePerekrutImage">
                      <label class="text-secondary mt-3 text-center custom-file-upload" style="margin-left: -15px;">
                        <b-icon icon="pencil-fill" class="mr-1"></b-icon><input type="file" @change="uploadPerekrut($event)"> Edit
                      </label>
                    </form>
                  </div>
                  <div class="user-data mt-3">
                    <div class="user-name">
                      <h5 class="font-weight-bold" style="margin-bottom: 0;"></h5>
                      <p class="text-center">{{ dataperekrut.namaperusahaan }}</p>
                    </div>

                    <div class="text-center">
                      <p class="text-secondary">{{ dataperekrut.bidang }}</p>
                      <p class="text-secondary" style="margin-bottom: 0;"><img src="../assets/img/map-pin (4) 1.png" alt="mappin">{{ dataperekrut.kota }}</p>
                    </div>

                    <div class="text-center">
                        <b-col lg="12" class="my-3">
                            <button class="btn btn-save" @click="updatePerusahaan(dataperekrut)">Simpan</button>
                        </b-col>
                        <b-col lg="12" class="my-3">
                            <button class="btn btn-cancel">Batal</button>
                        </b-col>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col class="edit-profile" lg="8" cols="12">
                <b-row >
                  <b-col lg="12" class="profile-company shadow">
                    <b-row class="">
                      <h1 class="px-2 py-3">Data Diri</h1>
                      <div class="line py-2"></div>
                      <b-col lg="12">
                          <form>
                              <div class="form-group">
                                  <label>Nama Perusahaan</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.namaperusahaan" :namaperusahaan="dataperekrut.namaperusahaan" placeholder="Masukan nama Perusahaan">
                              </div>
                              <div class="form-group">
                                  <label>Bidang</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.bidang" :bidang="dataperekrut.bidang" placeholder="Masukan bidang perusahaan ex : Financial">
                              </div>
                              <div class="form-group">
                                  <label>Kota</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.kota" :kota="dataperekrut.kota" placeholder="Masukan Kota">
                              </div>
                              <div class="form-group">
                                  <label>Deskripsi singkat</label>
                                  <textarea class="form-control" rows="5" autofocus required v-model="dataperekrut.deskripsi" :deskripsi="dataperekrut.deskripsi" placeholder="Tuliskan deskripsi singkat"></textarea>
                              </div>
                              <div class="form-group">
                                  <label>Email Perusahaan</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.emailperusahaan" :emailperusahaan="dataperekrut.emailperusahaan" placeholder="Masukan Email Perusahaan">
                              </div>
                              <div class="form-group">
                                  <label>Instagram</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.linkinstagram" :linkinstagram="dataperekrut.linkinstagram" placeholder="Masukan Nama Instagram">
                              </div>
                              <div class="form-group">
                                  <label>Nomor Telepon</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.phoneperekrut" :phoneperekrut="dataperekrut.phoneperekrut" placeholder="Masukan Nomor Telepon">
                              </div>
                              <div class="form-group">
                                  <label>Linkedin</label>
                                  <input type="text" class="form-control" autofocus required v-model="dataperekrut.linklinkedin" :linklinkedin="dataperekrut.linklinkedin" placeholder="Masukan Nama Linkedin" >
                              </div>
                          </form>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </div>

        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import { mapGetters, mapActions } from 'vuex'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  data () {
    return {
      dataSkill: [],
      skill: null,
      status: localStorage.getItem('status'),
      idpekerja: localStorage.getItem('idpekerja'),
      idperekrut: localStorage.getItem('idperekrut'),
      tipepekerjaan: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: '1', text: 'Fulltime' },
        { value: '0', text: 'Freelance' }
      ],
      newPeng: {
        idpekerja: localStorage.getItem('idpekerja'),
        posisi: '',
        namaperusahaan: '',
        mulaikerja: '',
        selesaikerja: '',
        deskripsi: ''
      },
      users: {
        dataSkill: []
      }
    }
  },
  methods: {
    // alert
    alertSuccess () {
      Swal.fire({
        icon: 'success',
        title: 'Image Updated'
      })
    },
    alertSuccessInsert () {
      Swal.fire({
        icon: 'success',
        title: 'Update Data Success'
      })
    },
    alertSuccessDelete () {
      Swal.fire({
        icon: 'success',
        title: 'Delete Data Success'
      })
    },
    alertSize () {
      Swal.fire({
        icon: 'error',
        title: 'Image size is too big!',
        text: 'Please upload another one with size < 5mb'
      })
    },
    alertValidation () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Image type must be JPG or JPEG'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    },
    // Pekerja
    updatePekerja () {
      const data = {
        idpekerja: this.dataz.idpekerja,
        namapekerja: this.dataz.namapekerja,
        jobdescpekerja: this.dataz.jobdescpekerja,
        domisilipekerja: this.dataz.domisilipekerja,
        tipepekerjaan: this.tipepekerjaan,
        ig: this.dataz.ig,
        github: this.dataz.github,
        gitlab: this.dataz.gitlab,
        deskripsi: this.dataz.deskripsi,
        skill: this.users.dataSkill.toString(),
        jumlahskill: this.users.dataSkill.length
      }
      this.onUpdatePekerja(data)
        .then((response) => {
          this.alertSuccessInsert()
          this.getPengalaman(this.idpekerja)
        })
        .catch((err) => {
          alert(err)
        })
    },
    saveSkill () {
      this.users.dataSkill.push(this.skill)
      this.skill = ''
    },
    addPengalaman () {
      this.onAddPengalaman(this.newPeng)
        .then((response) => {
          this.alertSuccessInsert()
          this.newPeng.posisi = ''
          this.newPeng.namaperusahaan = ''
          this.newPeng.mulaikerja = ''
          this.newPeng.selesaikerja = ''
          this.newPeng.deskripsi = ''
          // this.$bvCollapse.hide('add-collapse')
          this.getPengalaman(this.idpekerja)
        })
        .catch((err) => {
          alert(err)
        })
    },
    updatePengalaman (item) {
      this.$delete(item, 'lamakerja')
      this.onUpdatePengalaman(item)
        .then((response) => {
          this.alertSuccessInsert()
          this.getPengalaman(this.idpekerja)
        })
        .catch((err) => {
          alert(err)
        })
    },
    deletePengalaman (idpengalaman) {
      if (confirm('Delete ?')) {
        this.onDeletePengalaman(idpengalaman)
          .then((response) => {
            this.alertSuccessDelete()
            this.getPengalaman(this.idpekerja)
          })
          .catch((err) => {
            alert(err)
          })
      }
    },
    uploadPekerja (event) {
      this.image = event.target.files[0]
    },
    updatePekerjaImage () {
      const data = {
        idpekerja: this.idpekerja,
        imagepekerja: this.image
      }
      console.log(data)
      this.onUpdateImagePekerja(data).then((response) => {
        if (response.data.message === 'Image size is too big! Please upload another one with size <5mb') {
          this.alertSize()
        } else if (response.data.message === 'Image type must be JPG or JPEG') {
          this.alertValidation()
        } else {
          this.alertSuccess()
          window.location = '/edit-profile-pekerja'
        }
      })
    },
    // Perekrut
    uploadPerekrut (event) {
      this.image = event.target.files[0]
    },
    updatePerekrutImage () {
      const data = {
        idperekrut: this.idperekrut,
        imageperekrut: this.image
      }
      this.onUpdateImagePerekrut(data).then((response) => {
        if (response.data.message === 'Image size is too big! Please upload another one with size <5mb') {
          this.alertSize()
        } else if (response.data.message === 'Image type must be JPG or JPEG') {
          this.alertValidation()
        } else {
          this.alertSuccess()
          window.location = 'profile-perekrut'
        }
      })
    },
    updatePerusahaan () {
      // console.log(this.dataperekrut)
      this.onUpdatePerusahaan(this.dataperekrut)
        .then((response) => {
          this.alertSuccessInsert()
        })
        .catch((err) => {
          alert(err)
        })
    },
    ...mapActions({
      onUpdatePekerja: 'pekerja/updatePekerja',
      getPortofolio: 'pekerja/getPortofolio',
      getPengalaman: 'pekerja/getPengalaman',
      onAddPengalaman: 'pekerja/addPengalaman',
      onUpdatePengalaman: 'pekerja/updatePengalaman',
      onDeletePengalaman: 'pekerja/deletePengalaman',
      getProfile: 'perekrut/getProfileDetail',
      onUpdatePerusahaan: 'perekrut/updatePerusahaan',
      onUpdateImagePerekrut: 'perekrut/updateImage',
      onUpdateImagePekerja: 'pekerja/updateImage'
    })
  },
  computed: {
    ...mapGetters({
      dataz: 'pekerja/getDetailPekerja',
      dataPeng: 'pekerja/getPengalaman',
      dataPor: 'pekerja/getPortofolio',
      dataperekrut: 'perekrut/getProfile'
    })
  },
  mounted () {
    this.getPortofolio(this.idpekerja)
    this.getPengalaman(this.idpekerja)
    this.getProfile(this.idperekrut)
  }
}
</script>
<style scoped>
.profile-user{
    background: #FFFFFF;
    border-radius: 8px;
}
.skill-search{
    background: #FFFFFF;
    border-radius: 8px;
}
.experience{
    background: #FFFFFF;
    border-radius: 8px;
}
.input-search .form-control{
    height: 55px;
}
.search-btn{
    background: #FBB017;
    border-radius: 4px;
    color: white;
    border: 2px solid  #FBB017;
}
.search-btn:hover{
    background: white;
    border-radius: 4px;
    color: #FBB017;
    border: 2px solid  #FBB017;
}
.line{
   border-bottom: 1px solid #C4C4C4;
}
.form-group label{
    color: #9EA0A5;
    font-size: 13px;
}
.form-control{
    background: #FFFFFF;
    border: 1px solid #E2E5ED;
    box-sizing: border-box;
    border-radius: 4px;
}
/* experience */
.btn-experience{
    height: 60px;
    width: 100%;
    border: 2px solid #FBB017;
    box-sizing: border-box;
    border-radius: 4px;
    color: #FBB017;
}
.btn-experience:hover{
    height: 60px;
    width: 100%;
    border: 2px solid #FBB017;
    box-sizing: border-box;
    border-radius: 4px;
    background-color:  #FBB017;
    color: white;
}
.btn-add-experience{
    height: 60px;
    width: 100%;
    border: 2px solid #5E50A1;
    box-sizing: border-box;
    border-radius: 4px;
    color: #5E50A1;
}
.btn-add-experience:hover{
    height: 60px;
    width: 100%;
    border: 2px solid #5E50A1;
    box-sizing: border-box;
    border-radius: 4px;
    background-color:  #5E50A1;
    color: white;
}
/* portofolio */
.portofolio{
    background: #FFFFFF;
    border-radius: 8px;
}
.radio-box{
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E2E5ED;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
}
.radio:hover{
    cursor: pointer;
}
.b {
    background: rgba(251, 176, 23, 0.6);
    border: 1px solid #FBB017;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
    padding: 5px 20px;
    margin-right: 10px;
}
.b:hover {
    color: white;
}
/* company */
.profile-company{
    padding: 0px 45px;
    background: #FFFFFF;
    border-radius: 8px;
}
/* Card-User */
.card-user {
  width: 320px;
  height: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
input[type="file"] {
  display: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #FFFFFF;
  border: 1px solid #5E50A1;
  box-sizing: border-box;
  border-radius: 10px;
  color: #5E50A1;
  margin-bottom: 15px;
}
.profile-image {
  background-size: cover;
  border-radius: 70px;
}
.user-data {
  width: 100%;
}
.btn-save{
  width: 90%;
  color: white;
  background: #5E50A1;
  border-radius: 4px;
}
.btn-save:hover{
  color: #5E50A1;
  background: white;
  border-radius: 4px;
  border: 1px solid #5E50A1;
}
.btn-cancel{
  width: 90%;
  border: 1px solid #5E50A1;
  box-sizing: border-box;
  border-radius: 4px;
}
.btn-cancel:hover{
  color: white;
  background: #5E50A1;
  border-radius: 4px;
  border: 1px solid #5E50A1;
}
@media only screen and (max-width: 600px) {
  .radio-box {
    padding: 1px;
  }
  .profile-company{
    padding: 6px;
    background: #FFFFFF;
    border-radius: 8px;
  }
}
</style>
