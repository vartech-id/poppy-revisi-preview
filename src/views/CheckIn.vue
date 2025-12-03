<script setup>

</script>

<template>
  <div id="content-wrapper">
    <div class="content">
      <img class="logo-poppy" src="./assets/mainLogo.png" alt="logo_poppy" />
      <span class="scan-label"> SCAN QR DISINI </span>
      <div class="info-wrapper">
        <p>Check whatsapp anda kembali, dan temukan QR yang telah kami kirimkan <br> saat anda selesai melakukan kegiatan registrasi</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#content-wrapper {
  height: 100vh;
  background-image: url("./assets/bg_landscape.png");
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
  gap: 2.2em;
  padding-bottom: 4.5em;
}

.logo-poppy {
  width: 35%;
}

.scan-label{
  background-color: #0e4425;;
  width: 20%;
  font-size: 2.2em;
  width: 40%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Avenir", sans-serif;
  color: #ffffff;
  border: 1px solid;
  border-radius: 9999px;
}

.info-wrapper{
  text-align: center;
  font-family: "Avenir", sans-serif;
  color: #0e4425;
  font-size: 1.5em;
}

</style>
