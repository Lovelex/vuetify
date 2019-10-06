<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn v-on="on" text class="success">Add new project</v-btn>
      </template>
      <v-card>
        <v-card-title class="subtitle-1 grey lighten-4">
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit" ref="form" class="px-3">
            <v-text-field :rules="inputRules" prepend-icon="mdi-folder" label="Text" v-model="title" />
            <v-textarea
              :rules="inputRules"
              prepend-icon="mdi-pencil"
              v-model="content"
              label="Information"
              placeholder="Writte the information here..."
            />

            <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :rules="inputRules"
                  prepend-icon="mdi-calendar-range"
                  :value="computedDateFormattedMomentjs"
                  clearable
                  label="Due Date"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker :rules="inputRules" v-model="date" @change="menu1 = false"></v-date-picker>
            </v-menu>

            <v-btn :loading="loading" type="submit" class="mx-0 mt-3" right color="success" depressed tile>Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import parseISO from "date-fns/format";
import moment from "moment";
moment.locale('pt-br');

import { db, auth } from '../plugins/firebase.js'

export default {
  data() {
    return {
      title: '',
      content: '',
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      inputRules: [
        v => v && v.length >= 3 || 'Minumun length is 3 characters'
      ],
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true

        const project = {
          title: this.title,
          content: this.content,
          date: moment(this.date).format('LL'),
          person: 'Chun Li',
          status: 'ongoing'
        }

        db.collection('projects')
          .add(project)
          .then(() => {
            console.log('Sended to firebase')
            this.title = ''
            this.content = ''
            this.date = ''
            this.dialog = false
            this.$emit('snack', true)
          })
          .finally(() => this.loading = false)
      }
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("LL") : "";
    }
  }
};
</script>

<style>
</style>