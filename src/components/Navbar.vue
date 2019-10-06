<template>
  <nav class="nav">

    <v-snackbar top color="success" v-model="snack">
      <span>Awesome! You added a new project.</span>
      <v-btn @click="snack = false" text color="white">Close</v-btn>
    </v-snackbar>

    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer />

      <!-- Menu Droppdown Start -->

      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn text color="grey" v-on="on">
            <v-icon left="">
              mdi-chevron-down
            </v-icon>
            <span>
              Menu
            </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.router" :to="link.route">
            <v-list-item-title>
              <v-icon left>{{link.icon}}</v-icon>
              <span>{{link.text}}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    <!-- Menu Droppdown End -->

    <v-btn text dark color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <div class="d-flex flex-column align-center mt-12">
        <v-avatar size="100">
          <v-img :src="'/avatar-3.png'"></v-img>
        </v-avatar>
        <p class="white--text subtitle mt-1">Net Ninja</p>
        <Popup @snack="snack = $event" class="my-5"/>
      </div>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-icon>
          <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ],
      snack: false
    };
  }
};
</script>

<style>
</style>