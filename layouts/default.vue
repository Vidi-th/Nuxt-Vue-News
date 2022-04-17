<template>
  <div>
    <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      clipped
      color="#460b63"
      dark
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in items" :key=index @click="category(item)">
            <v-list-item-title> {{ item }} </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#a953d4"
      clipped-left
    
      dark
    >
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title>My News</v-toolbar-title>

      <v-spacer></v-spacer>
      <label v-if="searchMode">
        <v-text-field v-model="searchText"></v-text-field>
      </label>
      <v-btn v-if="!searchMode" icon @click="editMode">
          <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-if="searchMode" icon @click="search(searchText)">
          <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      searchText:"",
      items: ["general", "business", "sport", "entertainment", "health", "science", "technology"],
      drawer: false,
      group: null,
      searchMode: false,
    }
  },

  watch: {
    group () {
      this.drawer = false
    },
  },

  methods: {
    editMode() {
       this.searchMode = !this.searchMode;
    },

    category(param) {
      return this.$store.dispatch('news/updateNewsList', param);
    },

    search(param) {
      this.searchText ="";
      this.editMode();
      return this.$store.dispatch('news/searchNewsList', param);
    }
  },
}
</script>
