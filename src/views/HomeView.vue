<script setup>
import UserList from '../components/UserList.vue'
</script>

<template>
  <main>
    <h2>USER ROLE MANAGEMENT</h2>
    <v-container>
      <v-row align="start" no-gutters style="height: 150px">
        <v-col>
          <v-text-field label="Another input"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Another input"></v-text-field>
        </v-col>
        <v-col>
          <v-btn density="comfortable">Comfortable Button</v-btn>
        </v-col>
      </v-row>

      <v-row class="justify-content-center mb-3">
        <v-col cols="4" v-for="index in 10" :key="index">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>Administrator Type</v-card-title>
            <v-card-subtitle class="pt-4"> Administrator Role </v-card-subtitle>

            <v-card-text>
              Whitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday
              Island, Whitsunday Islands
            </v-card-text>

            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>

            <v-divider></v-divider>
            Datum Created:
            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>

              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <UserList />
  </main>
</template>
