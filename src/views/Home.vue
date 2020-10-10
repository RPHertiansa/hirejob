<template>
  <div>
      <div class="d-sm-block d-none">
      <Navbar/>
      <div class="cont-home">
        <div class="head-home d-flex align-items-center">
          <p class="text-white font-weight-bold" style="font-size: 28px;line-height: 20px;">Top Jobs</p>
        </div>
        <div class="body-home">
            <div class="search-home mb-5">
                <div class="input-container">
                    <input class="input-field" placeholder="Search for any skill" type="text">
                    <img class="icon" src="../assets/img/search (1) 1.png">
                    <div>
                    <b-dropdown
                        menu-class="mt-4 border-0"
                        text="Kategori"
                        variant="white"
                        class="m-2"
                        offset="-85"
                        no-caret
                    >
                        <b-dropdown-item href="#">Sortir berdasarkan nama</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan Skill</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan Lokasi</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan freelance</b-dropdown-item>
                        <b-dropdown-item href="#">Sortir berdasarkan fulltime</b-dropdown-item>
                    </b-dropdown>
                    </div>
                    <div>
                        <button type="button" class="btn btn-search">Search</button>
                    </div>
                </div>
            </div>
            <div class="list-pekerja">
                <div class="card cont-card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2">
                                <img style="border-radius:100%;" src="../assets/img/Ellipse 325.png">
                            </div>
                            <div class="col-8">
                                <p class="name-pekerja">Louis Tomlinson</p>
                                <p class="keahlian">Web developer</p>
                                <p class="keahlian"><img class="mr-2" src="../assets/img/map-pin (4) 1.png">Lorem ipsum</p>
                                <div class="bakat">
                                    <button type="button" class="btn b">PHP</button>
                                    <button type="button" class="btn b">JavaScript</button>
                                    <button type="button" class="btn b">HTML</button>
                                </div>
                            </div>
                            <div class="col-2">
                                <button style="margin-top:30px;" type="button" class="btn btn-search float-right">Lihat Profile</button>
                            </div>
                        </div>
                        <hr class="mt-5" style="border: 2px solid #F2F3F4;">
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
      <!-- responsive -->
      <div class="d-sm-none d-block"></div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.cont-home {
    background: #F6F7F8;
}
.head-home {
    height:100px;
    padding-left: 100px;
    background-color: #5E50A1;
}
.body-home {
    height: 100%;
    padding: 50px 100px;
    padding-left: 100px;
    padding-right: 100px;
}
.search-home {
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
    border-radius: 8px;
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  align-items: center;
}
.input-field {
  width: 100%;
  height: 100%;
  padding: 10px;
  outline: none;
  background: #FAFAFA;
  border:none;
}
.input-field:focus {
  border: none;
}
.icon {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 30px;
  background: #FAFAFA;
  min-width: 50px;
  text-align: center;
  border-right: 1px solid #9EA0A5;
}
.dropdown-search {
    margin-top: 25px;
}
.btn-search {
    width: 121px;
    height: 54px;
    margin-right: 10px;
    background: #5E50A1;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
.cont-card {
    background: #FFFFFF;
    box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
    border-radius: 8px;
    border: none;
    padding-left: 10px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.name-pekerja {
    font-weight: 600;
    font-size: 22px;
    color: #1F2A36;
}
.keahlian {
    font-size: 14px;
    margin-top: -10px;
    color: #9EA0A5;
}
.bakat {
    display: flex;
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
</style>
