<template>
  <main>
  
  <section class="contaioner">

    <h1>Contatos</h1>

    <section class="contacts">

    <div class="contact" v-for="(contact, index) in contacts" :key="index">
        <div class="contact-title">{{ contact.title }}</div>
        <a :href="contact.link" target="_blank">{{ contact.label }}</a>
    </div>

    </section>


    </section>
  </main>
</template>

<script>
import api from '@/services/api'

  export default {
    name: 'Contato',
    data() {
      return {
       contacts: []
      }
    },
    mounted(){
      api.get('/contacts.json').then(response => {
        this.contacts = response.data
      })
    }

  }
</script>

<style scoped>

main {
align-items: center;
}

.contacts{
    margin: 20px 20px 20px 20px;
    color: var(--color-text-dark)
}

.contact-title {
    font-weight: 600;
    font-size: 18px;
}

.contact a {
    color: var(--color-text-dark);
}

.contact {
    margin-bottom: 20px;
}
</style>