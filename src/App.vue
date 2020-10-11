<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face{
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: normal;
    src: url('assets/font/OpenSans-Regular.ttf')
}
#app {
  font-family: OpenSans;
}
.pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-right: 15px !important;
}
.page-link {
    color: #9EA0A5 !important;
    background-color: #fff;
    border: 1px solid #E2E5ED !important;
}
.page-item.active .page-link {
    z-index: 3;
    color: #fff !important;
    background-color: #5E50A1 !important;
    border-color: #5E50A1 !important;
}

</style>
