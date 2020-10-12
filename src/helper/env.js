require('dotenv')

module.exports = {
  url: process.env.VUE_APP_BASE_URL,
  socket: process.env.VUE_APP_SOCKET_URL
}
