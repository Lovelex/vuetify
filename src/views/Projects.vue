<template>
  <div class>
    <h2 class="subtitle-1 grey--text">Projects</h2>

    <v-container>
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header >{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">Due by {{project.due}}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { db } from '../plugins/firebase.js'

export default {
  data() {
    return { 
      projects: []
    }
  },

  computed: {
    myProjects() {
      return this.projects.filter(projcet => projcet.person === 'Chun Li' )
    }
  },

  created() {
    db.collection('projects')
      .onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if(change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
  }
};
</script>

<style>
</style>