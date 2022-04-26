<template>
  <main>
  
  <section class="contaioner">

    <h1>Sobre</h1>

    <div class="about" v-html="about">
    </div>

  </section>
  
  </main>
</template>

<script>
import api from '@/services/api'

  export default {
    name: 'Sobre',
    data() {
      return {
        about: ''
      }
    },
    mounted(){
      api.get('/about.json').then(response => {
        this.about = response.data.about
      })
    }

  }
</script>

<style scoped>

main {
align-items: center;
}

.about{
    margin: 20px 20px 20px 20px;
    color: var(--color-text-dark)
}
</style>
