<template>
  <div>
      <div class="d-sm-block d-none">
        <Navbar/>
        <div class="cont-chat">
          <div class="chat">
            <div class="row">
              <div class="col-3">
                <div class="list-user">
                  <div class="head-list-user">
                    <div class="text-head-user">
                      <p>Chat</p>
                    </div>
                    <div class="cont-user w-100 p-3">
                      <div class="user">
                        <div class="row no-gutters">
                        <div class="col-2">
                          <img class="img-user-chat" width="40px" height="40px" src="../assets/img/gdpr_profile-picture 1.png">
                        </div>
                        <div class="col-10 pl-3">
                          <p class="name-user">Jonas adam</p>
                          <p class="chat-tmnl">Permisi kak, mau tanya...</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <div class="chating">
                  <div class="head-chating pt-2 pl-4">
                    <div class="name-chating">
                      <p class="mb-0">
                        <img class="img-user-chat mr-2" width="40px" height="40px" src="../assets/img/gdpr_profile-picture 1.png">
                        Jonas adam
                      </p>
                    </div>
                  </div>
                  <div class="chat-box"></div>
                  <div class="chat-key">
                    <div class="input-container">
                      <input type="text" placeholder="type message..." class="input-field">
                      <div class="icon">
                        <img width="16px" height="16px" src="../assets/img/send (5) 1.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <!-- responsive -->
      <div class="d-sm-none d-block">
        <div>
         <Navbar/>
          <div class="cont-inbox-hp">
            <p style="font-weight: 600;font-size: 16px;line-height: 22px;color: #9EA0A5;" >Utama</p>
            <div class="user">
              <div class="row no-gutters">
              <div class="col-2">
                <img class="img-user-chat" width="40px" height="40px" src="../assets/img/gdpr_profile-picture 1.png">
              </div>
              <div class="col-10 pl-3">
                <div class="d-flex">
                  <p class="name-user">Jonas adam</p>
                  <p class="date-user ml-auto">12 Apr</p>
                </div>
                <p class="chat-tmnl">Permisi kak, mau tanya...</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
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
.cont-chat {
  background: #F6F7F8;
  padding: 40px 100px;
}
.list-user {
  height: 583px;
  background: white;
  border-radius: 4px;
}
.chating {
  height: 583px;
  background: white;
  border-radius: 4px;
}
.head-list-user {
  height: 60px;
  border-bottom: 1px solid #E2E5ED;
}
.text-head-user {
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1F2A36;
}
.text-head-user p{
  margin-bottom:0px;
  margin-left: 20px;
}
.head-chating {
  height: 60px;
  border-bottom: 1px solid #E2E5ED;
}
.cont-user {
  height: 450px;
  overflow: auto;
}
.name-user {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1F2A36;
  margin-bottom: 0px;
}
.chat-tmnl {
  font-size: 14px;
  line-height: 19px;
  color: #9B9B9B;
  margin-bottom: 0px;
}
.img-user-chat {
  border-radius:100%;
}
.name-chating {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1F2A36;
}
.chat-box {
  height: 450px;
  overflow: auto;
}
.chat-key {
  padding-left: 10px;
  padding-right: 10px;
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
  background: #FFFFFF;
  border: 1px solid #E2E5ED;
  border-radius: 23px;
}
.input-field:focus {
  border: 1px solid #E2E5ED;
}
.icon {
  width: 40px;
  height: 40px;
  background: #5E50A1;
  border-radius: 100%;
  margin-left: 10px;
  padding-left: 8px;
  padding-top: 8px;
}
.cont-inbox-hp {
  width: 100vw;
  height: 100vh;
  background-color: #F6F7F8;
  padding-top: 75px;
  padding-right: 10px;
  padding-left: 10px;
}
.date-user {
  font-size: 14px;
  line-height: 19px;
  color: #9EA0A5;
}
</style>
