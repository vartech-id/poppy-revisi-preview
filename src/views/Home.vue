<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goNext = () => router.push({ name: 'form' })
</script>

<template>
  <div class="home-shell">
    <div class="content-wrapper">
      <section class="top-content">
      </section>
      <section class="bottom-content">
        <main class="page">
          <div class="invite-card">
            <div class="mainContent">
              <img class="mainLogo" src="./assets/mainLogo.png" alt="poppylogo" />
              <button class="buttonForm" @click="goNext">Click to Register</button>
            </div>
          </div>
        </main>
      </section>
    </div>
  </div>
</template>

<style>
.home-shell{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3eee7;
  padding: 16px;
  box-sizing: border-box;
}

.content-wrapper{
  width: min(100vw, calc(100vh * 9 / 16));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.top-content{
  width: min(100vw, calc(100vh * 9 / 16));
  aspect-ratio: 9 / 16;
  background-image: url("./assets/rundown.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}



.bottom-content {
    width: min(100vw, calc(100vh * 9 / 16));
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background: #f3eee7;
}

.invite-card {
  width: min(100vw, calc(100vh * 9 / 16));
  aspect-ratio: 9 / 16;
  background-image: url("./assets/bg1.png");
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

.buttonForm{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 4rem;         /* ini yang bikin lebar & tinggi */
    border-radius: 9999px;         
    background-color: #024123;     
    color: #fff;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
}
</style>
