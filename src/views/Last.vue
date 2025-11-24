<script setup>

</script>

<template>
  <main class="page">
    <div class="invite-card">
        <div class="mainContent">
            <img class="mainLogo" src="./assets/mainLogo.png" alt="poppylogo"></img>
            <img class="mainLogo" src="./assets/thankyou.png" alt="thankyou"></img>
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
    background-image: url("./assets/bg23.png");
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
  padding-bottom: clamp(24px, 6vh, 72px);
    }

.mainLogo {
    width: 85%;
    padding-bottom: 3em;
}
</style>
