<template>
  <main>
  
  <section class="contaioner">

    <h1>Videos</h1>

    <section class="videos">

    <div class="video" v-for="(video, index) in videos" :key="index">
      <a :href="video.link" target="_blank">
        <img :src="video.thumb" :alt="video.title">
        <div class="video-title">{{ video.title }}</div>
      </a>
    </div>

    </section>

  </section>
  
  </main>
</template>

<script>
import api from '@/services/api'

  export default {
    name: 'Videos',
    data() {
      return {
        videos: []
      }
    },
    mounted(){
      api.get('/videos.json').then(response => {
        this.videos = response.data
      })
    }

  }
</script>

<style scoped>

main {
align-items: center;
}
.videos{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.video {
width: 80%;
margin-bottom: 30px;
}

.video img {
  width: 100%;
}

.video a {
  text-align: center;
  color: var(--color-text-dark);
  font-weight: 600;
}

@media (min-width: 700px){
  .videos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .video {
    margin-right: 30px;
    width: 300px;
  }
}


</style>

