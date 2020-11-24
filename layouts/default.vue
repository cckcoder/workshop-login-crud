<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Global/Sidebar'
import Topbar from '@/components/Global/Topbar'
import Footer from '@/components/Global/Footer'

export default {
  components: {
    Sidebar,
    Topbar,
    Footer
  },
  computed: {
    drawer: {
      get () {
        return this.$nuxt.$store.state.drawer
      },
      set (val) {
        console.warn("Old Val", this.$nuxt.$store.state.drawer)
        console.warn("New Val", val)
        this.$store.commit('set_drawer', val)
        console.warn("New Val", this.$nuxt.$store.state.drawer)
      }
    }
  }
}
</script>
