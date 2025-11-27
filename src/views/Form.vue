<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ name: '', whatsapp: '', email: '', company: '' })

const submit = () => {
  router.push({ name: 'last', query: { ...form } })
}
</script>

<template>
    <main class="page">
        <div class="invite-card">
            <div class="mainContent">
                <img class="mainLogo" src="./assets/pertamina/mainLogo.png" alt="pertaminaLogo"></img>
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
                        <input
                            v-model="form.email"
                            required
                            placeholder="Email"
                        />
                        <input
                            v-model="form.company"
                            required
                            placeholder="Company"
                        />                        
                    </div>
                        <button type="submit" class="buttonForm">Submit</button>
                </form>
                <span>Powered By Vartech.id </span>
            </div>
        </div>
    </main>
</template>

<style scoped>

::placeholder {
    color:  #3E5D6C;
    text-align: center;
}

.page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background:  #E7FAFC;
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
  justify-content: center;  /* center VERTIKAL seluruh kolom (img + form) */
  align-items: center;      /* center HORIZONTAL */
  padding-bottom: 5em;
}


.mainLogo {
    width: 60%;
    padding-bottom: 3em;
}

.form {
    display: flex;
    flex-direction: column;
    width: 70%;             /* misal: biar gak kepenuhan layar */
    max-width: 320px;  
    gap: 2.5em;
}

.inputWrapper{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    text-align: center;
}

input {
    padding: 12px 14px;
    border: 1px solid  #3E5D6C;
    background: #fff;
    border-radius: 9999px;    
    text-align: center;   
    color:  #3E5D6C;   
}


.buttonForm{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 4rem;         /* ini yang bikin lebar & tinggi */
    border-radius: 9999px;         
    background-color:  #3E5D6C;     
    color: #fff;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;

}

span{
  padding-top: 3em;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
