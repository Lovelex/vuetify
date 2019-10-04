<template>
  <div class="buttons">
    <h1>Buttons</h1>

    <div class="margin">
      <v-btn class="pink white--text">Button</v-btn>
      
      <v-btn dark color="pink">Button</v-btn>

      <v-btn text dark color="pink">Button</v-btn>

      <v-btn dark color="pink">
        <span>Send</span>
        <v-icon right>mdi-send</v-icon>
      </v-btn>

      <v-btn small dark color="pink">
        <span >Dashboard</span>
        <v-icon right small>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn large dark color="pink">
        <span>Alien</span>
        <v-icon large right>mdi-alien</v-icon>
      </v-btn>
      
      <v-btn fab dark color="pink">
        <v-icon large>mdi-alien</v-icon>
      </v-btn>

      <v-btn depressed dark color="pink">Depressed Button :(</v-btn>

    </div>


  </div>
</template>

<style >
  .buttons .margin > * {
    margin: 5px;
  }
</style>