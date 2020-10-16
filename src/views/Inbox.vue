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
                      <div v-if="status === 'perekrut'">
                            <div class="user" v-for="(item, index) in listPekerja" :key="index">
                              <div class="row no-gutters" @click="selectUser(item.namapekerja, item.imagepekerja)">
                                <div class="col-2">
                                  <img class="img-user-chat" width="40px" height="40px" :src="`http://54.164.193.160:3000/${item.imagepekerja}`">
                                </div>
                                <div class="col-10 pl-3">
                                  <p class="name-user">{{item.namapekerja}}</p>
                                  <p class="chat-tmnl">Permisi kak, mau tanya...</p>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div v-else-if="status === 'pekerja'">
                            <div class="user" v-for="(item, index) in listPerekrut" :key="index">
                              <div class="row no-gutters" @click="selectUser(item.namaperekrut, item.imageperekrut)">
                                <div class="col-2">
                                  <img class="img-user-chat" width="40px" height="40px" :src="`http://54.164.193.160:3000/${item.imageperekrut}`">
                                </div>
                                <div class="col-10 pl-3">
                                  <p class="name-user">{{item.namaperekrut}}</p>
                                  <p class="chat-tmnl">Permisi kak, mau tanya...</p>
                                </div>
                              </div>
                            </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <div v-if="receiver !== null">
                    <div class="chating">
                      <div class="head-chating pt-2 pl-4">
                        <div class="name-chating">
                          <p class="mb-0">
                            <img class="img-user-chat mr-2" width="40px" height="40px" :src="`http://54.164.193.160:3000/${receiverImg}`">
                            {{receiver}}
                          </p>
                        </div>
                      </div>
                      <div class="chat-box">
                        <div  v-for="(item, index) in historyMsg" :key="`a`+index" class="msg-sent ">
                          <div  v-if="item.sender === namapekerja || item.sender === namaperekrut">
                            <div class="text-right">
                              {{item.message}}
                            </div>
                          </div>
                          <div v-else class="text-left">
                              {{item.message}}
                          </div>
                        </div>
                        <div  v-for="(item, index) in privateChat" :key="index" class=" msg-sent ">
                          <div  v-if="item.sender !== namapekerja || item.sender !== namaperekrut">
                            <div class="text-right">
                              {{item.message}}
                            </div>
                            <div class="text-left">
                              {{item.msg}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="chat-key">
                          <form class="input-container" @submit.prevent="sendMessage">
                              <input type="text" placeholder="type message..." v-model="message" class="input-field">
                              <div class="icon">
                                <img width="16px" height="16px" src="../assets/img/send (5) 1.png">
                              </div>
                          </form>
                      </div>
                    </div>
                </div>
                <div v-else>
                  <div class="chating">
                    <div class="empty-chat">
                      <img src="../assets/img/logo.png" alt=""><br>
                      Please select a user to start messaging
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
            <div class="user-box-hp">
              <div v-if="status === 'perekrut'">
                  <div v-b-modal.modal-receiver class="user-receiver"  v-for="(item, index) in listPekerja" :key="index"> <!-- <==looping disini -->
                    <div class="row no-gutters" @click="selectUser(item.namapekerja, item.imagepekerja)">
                      <div class="col-2">
                        <img class="img-user-chat-hp" width="40px" height="40px" :src="`http://54.164.193.160:3000/${item.imagepekerja}`">
                      </div>
                      <div class="col-10 pl-3">
                        <div class="d-flex">
                          <p class="name-user">{{item.namapekerja}}</p>
                          <p class="date-user ml-auto">12 Apr</p>
                        </div>
                        <p class="chat-tmnl">Permisi kak, mau tanya...</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div v-else-if="status === 'pekerja'">
                  <div v-b-modal.modal-receiver class="user-receiver"  v-for="(item, index) in listPerekrut" :key="index"> <!-- <==looping disini -->
                    <div class="row no-gutters" @click="selectUser(item.namaperekrut, item.imageperekrut)">
                      <div class="col-2">
                        <img class="img-user-chat-hp" width="40px" height="40px" :src="`http://54.164.193.160:3000/${item.imageperekrut}`">
                      </div>
                      <div class="col-10 pl-3">
                        <div class="d-flex">
                          <p class="name-user">{{item.namaperekrut}}</p>
                          <p class="date-user ml-auto">12 Apr</p>
                        </div>
                        <p class="chat-tmnl">Permisi kak, mau tanya...</p>
                      </div>
                    </div>
                  </div>
              </div>
              <b-modal id="modal-receiver" :title="`${receiver}`" centered hide-footer>
                <div class="chat-box">
                    <div  v-for="(item, index) in historyMsg" :key="`a`+index" class="msg-sent ">
                          <div  v-if="item.sender === namapekerja || item.sender === namaperekrut">
                            <div class="text-right">
                              {{item.message}}
                            </div>
                          </div>
                          <div v-else class="text-left">
                              {{item.message}}
                          </div>
                        </div>
                        <div  v-for="(item, index) in privateChat" :key="index" class=" msg-sent ">
                          <div  v-if="item.sender !== namapekerja || item.sender !== namaperekrut">
                            <div class="text-right">
                              {{item.message}}
                            </div>
                            <div class="text-left">
                              {{item.msg}}
                            </div>
                          </div>
                        </div>
                </div>
                  <div class="chat-key">
                      <form class="input-container" @submit.prevent="sendMessage">
                          <input type="text" placeholder="type message..." v-model="message" class="input-field">
                          <div class="icon">
                            <img width="16px" height="16px" src="../assets/img/send (5) 1.png">
                          </div>
                      </form>
                  </div>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import io from 'socket.io-client'
import { socket } from '../helper/env'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      socket: io(`${socket}`),
      listPekerja: null,
      listPerekrut: null,
      idperekrut: localStorage.getItem('idperekrut'),
      idpekerja: localStorage.getItem('idpekerja'),
      namapekerja: localStorage.getItem('namapekerja'),
      namaperekrut: localStorage.getItem('namaperekrut'),
      status: localStorage.getItem('status'),
      sender: null,
      receiver: null,
      receiverImg: null,
      message: '',
      listMessage: [],
      historyMsg: [],
      privateChat: [],
      receivedMsg: null
    }
  },
  methods: {
    selectUser (user, image) {
      this.receiver = user
      this.receiverImg = image
      this.setPrivateChat()
      this.socket.emit('get-history', {
        sender: this.sender,
        receiver: this.receiver
      })
      this.getHistoryMessage()
    },
    sendMessage () {
      const chat = {
        sender: this.sender,
        receiver: this.receiver,
        message: this.message
      }

      this.listMessage = [...this.listMessage, chat]

      this.socket.emit('send-message', {
        sender: this.sender,
        receiver: this.receiver,
        message: this.message
      })
      this.message = ''
      this.setPrivateChat()
    },
    getHistoryMessage () {
      this.socket.on('historyMessage', (payload) => {
        this.historyMsg = payload
      })
    },
    setPrivateChat () {
      const privateChats = this.listMessage.filter(e => {
        if (this.receiver === null) {
          return e.sender === this.receiver || e.sender === this.sender
        } else {
          return e.receiver === this.receiver || e.sender === this.receiver
        }
      })
      this.privateChat = privateChats
    }

  },
  mounted () {
    this.socket.emit('get-all-pekerja', { idperekrut: this.idperekrut })
    this.socket.on('listPekerja', (payload) => {
      this.listPekerja = payload
    })

    this.socket.emit('get-all-perekrut', { idpekerja: this.idpekerja })
    this.socket.on('listPerekrut', (payload) => {
      this.listPerekrut = payload
    })
    if (this.status === 'perekrut') {
      this.sender = this.namaperekrut
    } else {
      this.sender = this.namapekerja
    }

    this.socket.emit('join-room', this.sender)

    this.socket.on('private-message', (payload) => {
      this.listMessage = [...this.listMessage, payload]
      if (this.receiver !== null) {
        this.setPrivateChat()
      }
    })
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
.img-user-chat-hp {
  border-radius:100%;
  margin-top: 10px;
  margin-left: 10px;
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
.empty-chat{
  color: #9B9B9B;
  font-size: 150%;
  text-align: center;
  padding-top: 250px;
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
  margin-left: 8px;
  border-radius: 50%;
  padding-top: 6px;
  padding-left: auto;
  padding-right: auto;
  text-align: center;
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
.user-box-hp {
  height: 70vh;
}
.msg-sent{
  margin: 10px;
  padding: 20px;
  background-color: #5E50A1;
  border-radius: 10px;
  color: white;
}
.msg-received{
  margin: 10px;
  padding: 20px;
  background-color: #E2E5ED;
  border-radius: 10px;
}
</style>
