<template>
    <div>
        <div v-if="this.status === 'pekerja'">
        <!-- form pencari kerja -->
        <b-row class="users">
            <b-col lg="12" class="profile-user">
                <b-row class="px-5">
                    <h1 class="px-2 py-3">Data Diri</h1>
                    <div class="line py-2"></div>
                    <b-col lg="12">
                        <form>
                            <div class="form-group">
                                <label>Nama Lengkap</label>
                                <input type="text" class="form-control" placeholder="Masukan nama lengkap">
                            </div>
                            <div class="form-group">
                                <label>Jobdesk</label>
                                 <input type="text" class="form-control" placeholder="Masukan Jobdesk">
                            </div>
                            <div class="form-group">
                                <label>Domisili</label>
                                 <input type="text" class="form-control" placeholder="Masukan Domisili">
                            </div>
                            <div class="form-group">
                                <label>Tempat Kerja</label>
                                 <input type="text" class="form-control" placeholder="Masukan Tempat Kerja">
                            </div>
                            <div class="form-group">
                                <label>Deskripsi singkat</label>
                                <textarea class="form-control" rows="5" placeholder="Tuliskan deskripsi singkat"></textarea>
                            </div>
                        </form>
                    </b-col>
                </b-row>
            </b-col>
            <!-- skil -->
            <b-col lg="12" class="skill-search my-4">
                <b-row class="input-search px-5">
                    <h1 class="px-2 py-3"></h1>
                    <div v-for="(item,index) in dataSkill" :key="index">
                        <button class="btn b">{{ item }}</button>
                    </div>
                    <b-col lg="12">
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="skill" placeholder="Golang">
                        <button class="btn search-btn mx-3" @click="saveSkill">Simpan</button>
                        </div>
                    </b-col>
                </b-row>
            </b-col>

            <!-- experience -->
            <b-col lg="12" class="experience my-4">
                <b-row class="px-5">
                    <h1 class="px-2 py-3">Pengalaman Kerja</h1>
                    <div class="line py-2"></div>
                    <b-col lg="12">
                        <form>
                            <div class="form-group">
                                <label>Posisi</label>
                                <input type="text" class="form-control" placeholder="Fullstack Developer">
                            </div>
                        </form>
                    </b-col>
                    <b-col lg="12">
                                <b-row>
                                    <b-col lg="6" class="text-left">
                                        <div class="form-group">
                                            <label>Nama Perusahaan</label>
                                            <input type="text" class="form-control" placeholder="PT Apa Aja Boleh">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="form-group">
                                            <label class="text-left">Bulan/Tahun</label>
                                            <input type="text" class="form-control" placeholder="Januari 2088">
                                        </div>
                                    </b-col>
                                </b-row>
                    </b-col>
                    <b-col lg="12">
                        <div class="form-group">
                                <label>Deskripsi singkat</label>
                                <textarea class="form-control" rows="5" placeholder="Deskripsi Pekerjaan anda"></textarea>
                        </div>
                    </b-col>
                    <b-col lg="12" class="my-3">
                        <button class="btn btn-experience">Tambah Pengalaman</button>
                    </b-col>
                </b-row>
            </b-col>
            <!-- end experience -->

            <!-- start portofolio -->
            <b-col lg="12" class="portofolio my-4">
                <b-row class="px-5">
                    <h1 class="px-2 py-3">Portofolio</h1>
                    <div class="line py-2"></div>
                    <b-col lg="12">
                        <form>
                            <div class="form-group">
                                <label>Nama Aplikasi</label>
                                <input type="text" class="form-control" placeholder="Masukkan nama aplikasi">
                            </div>
                            <div class="form-group">
                                <label>Link Repository</label>
                                <input type="text" class="form-control" placeholder="Masukkan link repository">
                            </div>
                            <div class="form-group">
                                <label>Type Portfolio</label>
                                <b-row>
                                <b-col lg="6" sm="6" cols="6" class="radio">
                                    <div class="radio-box text-left  py-2">
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                        <label class="form-check-label" for="exampleRadios1">
                                            Aplikasi Web
                                        </label>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="6" sm="6" cols="6" class="radio">
                                    <div class="radio-box text-left  py-2">
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                        <label class="form-check-label" for="exampleRadios1">
                                            Aplikasi Mobile
                                        </label>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                            </div>
                            <div class="form-group">
                                <label>Upload Gambar</label>
                                <input type="file" class="form-control" >
                            </div>
                        </form>
                    </b-col>
                    <b-col lg="12" class="my-3">
                        <button class="btn btn-experience">Tambah Portfolio</button>
                    </b-col>
                </b-row>
            </b-col>
            <!-- end portofolio -->
        </b-row>
        <!-- end form pencari kerja -->
        </div>

        <div v-else>
        <!-- company / perekrut -->
        <b-row >
            <b-col lg="12" class="profile-company">
                <b-row class="">
                    <h1 class="px-2 py-3">Data Diri</h1>
                    <div class="line py-2"></div>
                    <b-col lg="12">
                        <form>
                            <div class="form-group">
                                <label>Nama Perusahaan</label>
                                <input type="text" class="form-control" placeholder="Masukan nama Perusahaan">
                            </div>
                            <div class="form-group">
                                <label>Bidang</label>
                                 <input type="text" class="form-control" placeholder="Masukan bidang perusahaan ex : Financial">
                            </div>
                            <div class="form-group">
                                <label>Kota</label>
                                 <input type="text" class="form-control" placeholder="Masukan Kota">
                            </div>
                            <div class="form-group">
                                <label>Deskripsi singkat</label>
                                <textarea class="form-control" rows="5" placeholder="Tuliskan deskripsi singkat"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                 <input type="text" class="form-control" placeholder="Masukan Email">
                            </div>
                            <div class="form-group">
                                <label>Instagram</label>
                                 <input type="text" class="form-control" placeholder="Masukan Nama Instagram">
                            </div>
                            <div class="form-group">
                                <label>Nomor Telepon</label>
                                 <input type="text" class="form-control" placeholder="Masukan Nomor Telepon">
                            </div>
                            <div class="form-group">
                                <label>Linkedin</label>
                                 <input type="text" class="form-control" placeholder="Masukan Nama Linkedin">
                            </div>
                        </form>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dataSkill: [],
      skill: null,
      status: localStorage.getItem('status')
    }
  },
  methods: {
    saveSkill () {
      this.dataSkill.push(this.skill)
      console.log(this.dataSkill)
      this.skill = ''
    }
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
