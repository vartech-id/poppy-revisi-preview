<script setup></script>

<template>
  <div id="content-wrapper">
    <div class="content">
      <img class="logo-poppy" src="./assets/mainLogo.png" alt="logo_poppy" />
      <span class="label-berhasil-scan"> Qr anda telah berhasil di scan, silahkan mengikuti dan memasuki area event! </span>
      <div class="detail-wrapper">
        <div class="label-input-tamu">
          <span class="label-nama">Nama :</span>
          <span class="label-wa">No. Whatsapp :</span>
          <span class="label-jumlah-tamu">Jumlah Tamu :</span>
          <span class="label-waktu-check-in">Waktu Check-In :</span>          
        </div>
        <div class="data-tamu">
          <span class="input-nama">Data paling panjang sudah pas tidak kemana mana</span>
          <span class="input-wa">085792190211</span>
          <span class="input-jumlah">2 Orang</span>
          <span class="input-checkin"> 16.30 WIB </span>
        </div>
        <div class="status-qr-wrapper"> 
          <span class="status-title">STATUS</span>
          <span class="status-qr"> QR SUDAH PERNAH DIGUNAKAN SEBELUMNYA
          </span>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
#content-wrapper {
  height: 100vh;
  background-image: url("./assets/bg_success.png");
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
  row-gap: 3em;
  padding-bottom: 5.3em;
}

.logo-poppy {
  width: 28%;
}

.label-berhasil-scan{
  font-size: 1.7em;
  font-family: "Avenir", sans-serif;
  color: #024123;
}

.detail-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 1em; 
    font-family: "Avenir", sans-serif;
    color: #024123;
    /* background-color: blanchedalmond; */
    width: 100%;
}

.label-input-tamu,
.data-tamu{
  display: flex;
  flex-direction: column;
  row-gap: 0.8em;
}

.label-input-tamu{
  text-align: right;
}

.data-tamu{
  text-align: center;
  border: 1px solid white;
  width: 520px;
}

.status-qr-wrapper{
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  /* background-color: rgba(0, 253, 253, 0.274); */
  width: 20%;
}

.status-title{
  font-size: 1.5em;
  padding-top: 0.6em;
}

.status-qr{
  padding-top: 2.5em;
  font-size: 1.5em;
  
}

/* label detail nama no wa jumlah tamu wajtu check in */
.label-input-tamu , .data-tamu {
  font-size: 1.3em;
}


/* input data nama,wa,jumlah tamu,waktu check-in */
.input-nama, .input-wa, .input-jumlah, .input-checkin{
  background-color: rgb(255, 255, 255);
  border : 2px solid #024123;
  border-radius: 9999px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.label-input-tamu > * , .input-nama, .input-wa, .input-jumlah, .input-checkin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2.8em;
}

span{
    color: #024123;
}

</style>
