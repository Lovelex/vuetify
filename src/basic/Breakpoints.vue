<template>
  <div class="breakpoints container">
    <v-btn block dark class="pink hidden-md-and-down">hidden-md-and-down</v-btn>
    <v-btn block dark class="red hidden-md-and-up">hidden-md-and-up</v-btn>
    <v-btn block dark class="green hidden-xs-only">hidden-xs-only</v-btn>
    <v-btn block dark class="purple hidden-sm-only">hidden-sm-only</v-btn>
    <v-btn block dark class="blue hidden-md-only">hidden-md-only</v-btn>
    <v-btn block dark class="indigo hidden-lg-only">hidden-lg-only</v-btn>
    <v-btn block dark class="orange hidden-xl-only">hidden-xl-only</v-btn>
  </div>
</template>

<style>
  .breakpoints > * {
    margin: 10px;
  }
</style>