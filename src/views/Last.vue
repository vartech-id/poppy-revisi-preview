<script setup>

</script>

<template>
  <main class="page">
    <div class="invite-card">
        <div class="mainContent">
            <img class="mainLogo" src="./assets/pertamina/mainLogo.png" alt="poppylogo"></img>
            <img class="thankYou" src="./assets/pertamina/thankyou.png" alt="thankyou"></img>
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
  padding-bottom: 0em;
  padding-top: 3em;
    }

.mainLogo {
    width: 68%;
    padding-bottom: 6em;
}

.thankYou{
  width: 80%;
  padding-bottom: 5em;

}

span{
  padding-top: 7em;
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
