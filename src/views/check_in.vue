<script setup>
import { ref } from 'vue';

const mode = ref("checkin");

// modal state
const showConfirmModal = ref(false);
const pendingMode = ref(null);

// helper to show prettier label
const modeLabel = (m) => (m === "checkin" ? "Check-In" : "Souvenir");

// when user clicks one of the toggle buttons
const requestModeChange = (newMode) => {
  if (newMode === mode.value) return; // kalau klik mode yang sama, abaikan
  pendingMode.value = newMode;
  showConfirmModal.value = true;
};

const confirmModeChange = () => {
  if (pendingMode.value) {
    mode.value = pendingMode.value;
  }
  showConfirmModal.value = false;
  pendingMode.value = null;
};

const cancelModeChange = () => {
  showConfirmModal.value = false;
  pendingMode.value = null;
};

</script>

<template>
  <main class="page">
    <div class="invite-card">
      <div class="mainContent">
        <img class="mainLogo" src="./assets/pertamina/mainLogo.png" alt="poppylogo" />
        <div class="detail-wrapper">
          <span>Scan The QR to The Qr Scanner </span>
        </div>

        <div class="mode-toggle-container">
          <div class="mode-toggle">
            <button
              :class="['toggle-btn', { active: mode === 'checkin' }]"
              @click="requestModeChange('checkin')"
            >
              Check-In
            </button>
            <button
              :class="['toggle-btn', { active: mode === 'souvenir' }]"
              @click="requestModeChange('souvenir')"
            >
              Souvenir
            </button>
          </div>
        </div>

        <span class="powered"> </span>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="modal-backdrop">
      <div class="modal">
        <p class="modal-text">
          Do you want to switch to
          <strong>{{ modeLabel(pendingMode) }}</strong>?
        </p>
        <div class="modal-actions">
          <button class="btn-cancel" @click="cancelModeChange">Cancel</button>
          <button class="btn-confirm" @click="confirmModeChange">Yes, switch</button>
        </div>
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
    padding: 15px 50px;  /* toggle width and height */
    border-radius: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #64748b;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-btn.active {
    background:#3E5D6C;
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
  padding-top: 5em;
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
    padding-top: 4em;
    color:  #3E5D6C;

}

.powered {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2em;
  color: white;
  padding-top: 8em;
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


/* === Modal === */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5); /* sedikit gelap */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.modal-text {
  font-size: 1rem;
  color: #1f2933;
  margin-bottom: 1.5rem;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-cancel,
.btn-confirm {
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-cancel {
  background: #e5e7eb;
  color: #374151;
}

.btn-confirm {
  background: #3E5D6C;
  color: white;
}

</style>
