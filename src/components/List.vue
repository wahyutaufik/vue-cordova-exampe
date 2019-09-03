<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon  v-if="back" @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="title align-center justify-center layout text-center">
        <span>{{ $route.name }}</span>
      </v-toolbar-title>
      <v-app-bar-nav-icon  v-if="back" @click="back">
        <v-icon>mdi-filter-variant</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-content class="fill-height grey lighten-3" fluid>
      <v-container>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // back: true,
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  }
}
</script>