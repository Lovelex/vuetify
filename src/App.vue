<template>
  <v-app >
    <Navbar />
    <v-content>
      <router-view class="pa-4"/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .theme--light.v-application {
    background-color: rgb(230, 230, 230);
  }
</style>
