<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();
const goNext = () => router.push({name : 'form'})


</script>

<template>
    <main class="page">
        <div class="invite-card">
            <div class="mainContent">
                <img class="mainLogo" src="./assets/pertamina/mainLogo.png" alt="pertaminaLogo"></img>
                <img class="detail-event" src="./assets/pertamina/detail.png" alt="detail-acara"></img>
                <button class="buttonRegister" @click="goNext">Click to register</button>
                <span>Powered By Vartech.id </span>
            </div>
        </div>
    </main>
</template>

<style scoped>

.page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background: #E7FAFC;
}

.invite-card {
    width: min(100vw, calc(100vh * 9 / 16));
    aspect-ratio: 9 / 16;
    background-image: url("./assets//pertamina/bg.png");
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
  justify-content: center;  /* center VERTIKAL seluruh kolom (img + form) */
  align-items: center;      /* center HORIZONTAL */
  padding-bottom: 0em;
  padding-top: 6em;
}


.mainLogo {
    width:70%;
    padding-bottom: 2em;
}

.detail-event{
    width: 65%;
    padding-bottom: 2em;
}

.buttonRegister{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 4rem;
    border-radius: 9999px;         
    background-color: #3E5D6C;     
    color: #fff;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;

}
.btn:hover {
    opacity: 0.9;
}

span{
  padding-top: 12em;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  text-shadow: 
    -2px -2px 0 #00415a,
     2px -2px 0 #00415a,
    -2px  2px 0 #00415a,
     2px  2px 0 #00415a,
     0px  0px 4px #00415a;
}
</style>
