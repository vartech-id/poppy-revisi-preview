<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ name: '', whatsapp: '', pax: null })

const submit = () => {
  router.push({ name: 'last', query: { ...form } })
}
</script>

<template>
    <main class="page">
        <div class="invite-card">
            <div class="mainContent">
                <img class="mainLogo" src="./assets/mainLogo.png" alt="poppylogo"></img>
                <form class="form" @submit.prevent="submit">
                    <div class="inputWrapper">
                        <input
                            v-model="form.name"
                            placeholder="Nama Lengkap"
                            required
                        />
                        <input
                            v-model="form.whatsapp"
                            required
                            placeholder="No. Whatsapp 081xxx"
                        />
                        <select v-model.number="form.pax">
                                <option :value="null" disabled>
                                Pilih Jumlah Pax Kehadiran
                                </option>
                            <option v-for="n in 5" :key="n" :value="n">
                                {{ n }}
                            </option>
                        </select>
                    </div>
                        <button type="submit" class="buttonForm">Submit</button>
                </form>
            </div>
        </div>
    </main>
</template>

<style scoped>

::placeholder {
    color: #024123;
    text-align: center;
}

option {
    color: #024123;
    text-align: center;
}

select {
    color: #024123;
    text-align: center;
}

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
  justify-content: center;  /* center VERTIKAL seluruh kolom (img + form) */
  align-items: center;      /* center HORIZONTAL */
  padding-bottom: 7em;
}


.mainLogo {
    width: 50%;
    padding-bottom: 3em;
}

.form {
    display: flex;
    flex-direction: column;
    width: 70%;             /* misal: biar gak kepenuhan layar */
    max-width: 320px;  
    gap: 3.5em;
}

.inputWrapper{
    display: flex;
    flex-direction: column;
    gap: 2em;
    text-align: center;
}

input,
select {
    padding: 12px 14px;
    border: 1px solid #024123;
    background: #fff;
    border-radius: 9999px;    
    text-align: center;   
    color: #024123;   
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
.btn:hover {
    opacity: 0.9;
}
</style>
