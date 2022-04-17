<template>
  <div>
        <h1>Berita Terkini</h1>
        <News />
    </div>
</template>

<script>
import News from '@/components/News.vue'

export default {
  name:"IndexPage",

  components:{
      News,
  },
}
</script>

<style>
.news:before, .news:after {
    display: block;
    content: "";
    clear: both;
  }

h1 {
    text-align: center;
    margin:10px
}
</style>
