<template>
    <div>
        <button @click = "backTo">Back</button>
        <img :src="berita[news].urlToImage">
        <h1>{{ berita[news].title }}</h1>
        <div id="keterangan">
            <p>{{ berita[news].author }}</p>
            <p>{{ berita[news].publishedAt }}</p>
        </div>
        <p>{{ berita[news].description }}</p>
        <div id="link">
            Lanjutan baca terdapat di link:
            <a :href=berita[news].url>Sini</a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        news() {
            // return this.$store.getters.news.news(this.$route.params.title);
            return this.$route.params.index;
        },
        berita() {
            return this.$store.state.news.newsAPI;
        },
        
    },
    methods: {
        backTo() {
            this.$router.go(-1);
        },
    },
    
}

</script>

<style scoped>
img {
    width: 100%;
}

#keterangan {
    display: flex;
    place-content: space-between;
    margin: 0 12px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
}

#link {
    text-align: left;
}
</style>