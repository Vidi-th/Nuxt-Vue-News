<template>
    <div class="article">
    <!-- <span v-if="errorMessage">Gagal ambil data</span> -->

    <li v-for="(newsList,index) in news" :key=index>
        <div class="content">
          <div class ="image">
            <img :src="newsList.urlToImage">
          </div>
          
          <div class="desc">
              <span id="author"> {{ newsList.author }} </span><br>
              <span id="title"><router-link :to="{ name: 'HalamanDetail', params: { index: index } }">
              {{ newsList.title }}
              </router-link></span><br>
              <span id="publish">{{ newsList.publishedAt }}</span><br><br>
          </div>
        </div>
    </li>
    </div>
</template>

<script>
export default {
    name:"NewsComponent",
    computed: {
      news() {
      return this.$store.state.news.newsAPI;
      },
      errorMessage() {
        if (this.$store.state.news.error !== "") {
          return true
        }
        return false
      },
    },
    mounted () {
        this.$store.dispatch('news/fetchNewsList');
    },
};

</script>

<style scoped>

.article {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}

@media only screen and (min-width: 1024px){
  .article li {
    width: 48%;
    padding: 12px;
    border-radius: 4px;
    display: block;
    background-color: white;
    cursor: pointer;
  }
}

@media only screen and (max-width: 1024px){
  .article li {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    display: block;
    background-color: white;
    cursor: pointer;
  }
}

.image {
  width: 30%;
  margin-block: auto;
  padding-left: 12px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.content {
  display: flex;
  background-color: #e3eee8;
  min-height: 150px;
  cursor: pointer;
}

.desc {
  width: 70%;
  padding: 4px 12px;
}

#author {
  font-size: small;
  font-weight: 600;
}

#title a{
  text-decoration: none;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: #000;
}

#publish {
  font-size: small;
}

</style>