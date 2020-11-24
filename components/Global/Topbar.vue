<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer () {
      this.$store.commit('set_drawer', ! this.$store.state.drawer)
    }
  },
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>

<style></style>
