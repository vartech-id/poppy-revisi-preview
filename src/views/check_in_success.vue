<script setup>
import { ref } from 'vue';

const mode = ref("checkin");
const setMode = (newMode) => {
    mode.value = newMode;
};
</script>

<template>
  <main class="page">
    <div class="invite-card">
        <div class="mainContent">
            <img class="mainLogo" src="./assets/pertamina/mainLogo.png" alt="poppylogo"></img>
            <div class="detail-wrapper">
                <span>Nama : Samuel Ilham </span>
                <span>No Whatsapp : 085792190211</span>
                <span>Email : flip360.id.solo@gmail.com </span>
                <span>Company : Vartech.id</span>
                <span>Kategori Tamu : VIP </span>
                <span>Check-in at : 01-Dec-2025 12:24 WIB </span>
                <span>Status : Qr Sudah pernah digunakan sebelumnya</span>
            </div>
        <!-- <div class="mode-toggle-container">
                <div class="mode-toggle">
                    <button
                        :class="['toggle-btn', { active: mode === 'checkin' }]"
                        @click="setMode('checkin')"
                    >
                        Check-In
                    </button>
                    <button
                        :class="['toggle-btn', { active: mode === 'souvenir' }]"
                        @click="setMode('souvenir')"
                    >
                        Souvenir
                    </button>
                </div>
            </div> -->
            <span class="powered"> </span>
        </div>
    </div>
  </main>
</template>

<style scoped>



.mode-toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 5px;
}

.toggle-btn {
    border: none;
    background: transparent;
    padding: 10px 50px;  /* toggle width and height */
    border-radius: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #64748b;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-btn.active {
    background: #084225;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
/* toggle */
.page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background: #f3eee7;
}

.invite-card {
    width: min(100vw, calc(100vh * 9 / 16));
    aspect-ratio: 9 / 16;
    background-image: url("./assets/pertamina/bg.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mainContent{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9em;
  padding-top: 0em;
    }

.mainLogo {
    width: 75%;
}

.detail-wrapper{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 3em;
    padding-top: 2em;
    color:  #3E5D6C;

}

.powered {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2em;
  color: white;
  padding-top: 3em;
  text-shadow: 
    -2px -2px 0 #00415a,
     2px -2px 0 #00415a,
    -2px  2px 0 #00415a,
     2px  2px 0 #00415a,
     0px  0px 4px #00415a;
}

.toggle-wrapper{
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2em;
    color:  #3E5D6C;
    padding-top: 1em;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
