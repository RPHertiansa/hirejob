<template>
  <div>
      <div class="d-sm-none d-block cont-search pl-3 pr-3 pt-5">
         <Navbar/>
         <div class="d-flex">
            <div class="w-search mr-2">
                <div class="input-container">
                    <div class="h-100 iconhp">
                        <img width="24px" height="24px" src="../assets/img/search (1) 1.png">
                    </div>
                    <input class="input-field" placeholder="Android developer" type="text">
                </div>
            </div>
            <div class="w-sort">
                <b-dropdown size="sm" offset="-240" center variant="link" menu-class="sorthp" toggle-class="text-decoration-none text-center" no-caret>
                      <template v-slot:button-content>
                      <img width="24px" height="24px" src="../assets/img/list 1.png">
                      </template>
                      <b-dropdown-item href="#">Sortir berdasarkan nama</b-dropdown-item>
                      <b-dropdown-item href="#">Sortir berdasarkan Lokasi</b-dropdown-item>
                      <b-dropdown-item href="#">Sortir berdasarkan freelance</b-dropdown-item>
                      <b-dropdown-item href="#">Sortir berdasarkan fulltime</b-dropdown-item>
                  </b-dropdown>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.cont-search {
    background: #F6F7F8;
    height: 100vh;
}
.w-search {
    width: 280px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(163, 162, 192, 0.25);
    border-radius: 4px;
}
.w-sort {
    width: 53px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(163, 162, 192, 0.25);
    border-radius: 4px;
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
.iconhp {
  /* border-right: 1px solid #9EA0A5;
  padding-top: 20px;
  padding-right: 20px; */
  padding-top: 10px;
  padding-left: 10px;
}
.w-sort .text-center {
    padding-top: 10px;
}
.sorthp {
  margin-top: 100px;
}
</style>
