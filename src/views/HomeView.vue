<script setup>
import UserList from '../components/UserList.vue'
import SearchCmp from '../components/Common/SearchCmp.vue'
</script>

<template>
  <v-app>
    <main>
      <!-- Home view -->
      <v-container class="home-page">
        <h2>USER ROLE MANAGEMENT</h2>
        <!-- User Search -->
        <SearchCmp />
        <!--- USER LIST -->
        <UserList />
      </v-container>
    </main>
  </v-app>
</template>

<style>
@media (min-width: 1920px) {
  .home-page {
    max-width: 1400px !important;
  }
}
</style>
