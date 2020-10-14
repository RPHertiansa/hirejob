<template>
  <div>
      <footer class="cont-footer">
          <img src="../assets/img/Group 978 1.png">
          <div class="mt-4 text-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          </div>
          <hr class="line-footer">
          <div class="row no-gutters mt-4 footer-copy">
              <div class="col-6">
                  <p>2020 Pewworld. All right reserved</p>
              </div>
              <div class="col-6">
                  <div class="d-flex justify-content-end">
                    <p>Telepon</p>
                    <p class="ml-5">Email</p>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cont-footer {
    height: 401px;
    background: #5E50A1;
    padding-right: 100px;
    padding-left: 100px;
    padding-top: 50px;
}
@media only screen and (max-width: 600px) {
  .cont-footer {
      display: none;
  }
}
.text-footer{
    width: 381px;
    height: 84px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
}
.line-footer {
    border: 1px solid #FFFFFF;
    margin-top: 100px;
}
.footer-copy {
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
}
</style>
