<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goNext = () => router.push({ name: 'form' })
</script>

<template>
  <div class="home-shell">
    <div class="content-wrapper">
      <!-- PAGE 1: full image, rasio aman -->
      <section class="top-content">
        <img
          class="invite-image"
          src="./assets/mobileLong.png"
          alt="Invitation"
        />
      </section>

      <!-- PAGE 2: logo + tombol di bawah gambar -->
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
.home-shell {
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #f3eee7;
  padding: 0;
  box-sizing: border-box;
  overflow-y: auto;
}

/* frame “HP” di tengah */
.content-wrapper {
  width: 100%;
  max-width: 480px;        /* kunci lebar biar di desktop nggak melebar */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

/* PAGE 1: gambar undangan dengan rasio terkunci */
.top-content {
  width: 100%;
}

.invite-image {
  display: block;
  width: 100%;
  height: auto;           /* ❗ inilah yang mengunci aspect ratio */
}

/* PAGE 2: area logo + tombol di bawah gambar */
.bottom-content {
  width: 100%;
  padding: 24px 16px 40px;
  background: #f3eee7;   /* warna dasar sama dengan body */
}

.page {
  width: 100%;
  display: flex;
  justify-content: center;
}

.invite-card {
  width: 100%;
  background: transparent;
}

.mainContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.mainLogo {
  width: 70%;
}

.buttonForm {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 4rem;
  border-radius: 9999px;
  background-color: #024123;
  color: #fff;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}

/* Desktop: frame di tengah layar */
@media (min-width: 768px) {
  .home-shell {
    align-items: center;
    padding: 24px;
  }
}

</style>

