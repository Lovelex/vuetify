<template>
  <div>
    <h2 class="subtitle-1 grey--text">Dashboard</h2>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{on}">
              <v-btn
                @click="sortBy('title')"
                v-on="on"
                text
                dark
                color="grey darken-2"
                class="mx-1"
              >
                <v-icon left>mdi-folder</v-icon>
                <span>by project name</span>
              </v-btn>
            </template>
            <span>Sort project by project name</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{on}">
              <v-btn
                @click="sortBy('person')"
                v-on="on"
                text
                dark
                color="grey darken-2"
                class="mx-1"
              >
                <v-icon left>mdi-account</v-icon>
                <span>by person</span>
              </v-btn>
            </template>
            <span>Sort project by person name</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-card v-for="project in projects" :key="project.title" flat>
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <div class="text-right">
              <v-chip small dark :class="`${color(project.status)} caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { db, auth } from '../plugins/firebase.js'

export default {
  data() {
    return {
      projects: []
    };
  },

  methods: {
    color(message) {
      if (message === "complete") return "cyan lighten-2";
      if (message === "ongoing") return "orange";
      if (message === "overdue") return "red";
    },
    sortBy(type) {
      this.projects.sort((a, b) => (a[type] < b[type] ? -1 : 1));
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
.v-card {
  word-break: normal;
}
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid #ffaa2c;
}

.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background-color: #3cd1c2;
}
.v-chip.ongoing {
  background-color: #ffaa2c;
}
.v-chip.overdue {
  background-color: #f83e70;
}
</style>