<script setup></script>

<template>
  <div id="content-wrapper">
    <div class="content">
      <img class="logo-poppy" src="./assets/mainLogo.png" alt="logo_poppy" />
      <div class="detail-wrapper">
        <span>Nama : Samuel Ilham </span>
        <span>No Whatsapp : 085792190222</span>
        <span>Check-in: 30-Nov-2025 16:43 WIB </span>
        <span>Jumlah Tamu : 2 </span>
        <span>Status : Qr Sudah Pernah digunakan sebelumnya </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
#content-wrapper {
  height: 100vh;
  background-image: url("./assets/bg_landscape.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: brown;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 0em;
  padding-bottom: 3em;
}

.logo-poppy {
  width: 35%;
}

.detail-wrapper{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 2em;
}

span {
  font-size: 2.3em;
  font-family: "Avenir", sans-serif;
  color: #0e4425;
}
</style>
