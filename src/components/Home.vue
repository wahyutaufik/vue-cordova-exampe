<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="title align-center justify-center layout text-center">
        <span>{{ $route.name }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col class="align-center justify-center layout text-center" cols="12" sm="12" md="12" >
            <v-avatar>
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex flex-column mb-6 align-center justify-center layout text-center" cols="12" sm="12" md="12">
            <span class="body-1">Wahyu Taufik</span>
            <span class="caption">wahyutaufik37@gmail.com</span>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-bottom-navigation app inset >
      <v-btn value="recent" to="list/1">
        <span>List</span>
        <v-icon>mdi-view-list</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
    .v-progress-circular {
        margin: 1rem
    }
</style>