import axios from "axios";


const state = {
    newsAPI: [],
    error: "",
    title:"",
    kategori:"sports",
    searchQ:"",
}

const mutations = {
    setKategori(state, param) {
        state.kategori = param;
    },
    setNews(state, param) {
        state.newsAPI = param;
    },
    setError(state,param) {
        state.error = param;
    },
    setSearch(state, param) {
        state.searchQ = param;
    },
}

const actions = {
    fetchNewsList(store) {
        axios
        .get(
            'https://newsapi.org/v2/top-headlines?country=id&category=' + 
            store.state.kategori + 
            '&q=' + 
            store.state.searchQ + 
            '&apiKey=217211cdb0054b4fb35c4574ddf62239'
            
        )
        .then((response) => {
            console.log("response: ", response);
            store.commit("setNews", response.data.articles);
        })
        .catch((error) => {
            console.log("global state error ", error.message);
            store.commit("setError", error.msg);
        });
    },

    updateNewsList(store, payload) {
        store.commit('setKategori', payload);
        store.dispatch('fetchNewsList');
    },

    searchNewsList(store, payload) {
        store.commit('setSearch', payload);
        store.dispatch('fetchNewsList');
        store.commit('setSearch', "");
    }
}

const getters = {
    news: state => title => {
        return state.newsAPI.find(news => news.title === title);
    }
}

export default { state, mutations, actions, getters }