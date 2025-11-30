<script setup>

</script>

<template>
  <div id="content-wrapper">
    <div class="content">
      <img class="logo-poppy" src="./assets/mainLogo.png" alt="logo_poppy" />
      <span>Scan The Qr to the QR code </span>
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
  gap: 5em;
  padding-bottom: 3em;
}

.logo-poppy {
  width: 35%;
}

span {
  font-size: 1.5em;
  font-family: "Avenir", sans-serif;
  color: #0e4425;
}
</style>
