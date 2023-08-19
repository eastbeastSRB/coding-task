<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useDateFormat } from '@vueuse/core'

export default {
  setup() {
    const store = useStore()

    const userList = computed(() => {
      return store.getters.userList
    })

    const deleteUser = (id) => {
      console.log(id)
      store.dispatch('deleteUser', id)
    }

    const formatDate = (date) => {
      const formatted = useDateFormat(date, 'DD/MM/YYYY')
      return formatted
    }

    return {
      userList,
      formatDate,
      deleteUser
    }
  }
}
</script>

<template>
  <!-- User List wrapper -->
  <div class="user-wrapper">
    <v-row class="b-3">
      <v-col cols="12" sm="6" lg="4" v-for="(users, index) in userList" :key="index">
        <v-card class="mx-auto">
          <div class="pa-md-8">
            <div class="d-flex justify-end" v-if="!users.active">
              <v-btn color="red" size="x-small"> Inactive </v-btn>
            </div>
            <!-- Name -->
            <v-card-title class="pb-0">{{ users.name }}</v-card-title>

            <!-- Type -->
            <v-card-subtitle> {{ users.type }} </v-card-subtitle>

            <!-- Description -->
            <v-card-text class="line-clamp">
              {{ users.description }}
            </v-card-text>

            <!-- Avatar section-->
            <div v-if="users.users.length > 0" class="avatar-section mt-3 mb-3 pl-3">
              <v-avatar v-for="(userAvatar, index) in users.users" :key="index">
                <v-img :src="userAvatar.photo_url" alt="John"></v-img>
              </v-avatar>
            </div>
          </div>

          <!-- Bottom section-->
          <v-divider></v-divider>
          <v-row>
            <v-col>
              <v-sheet class="pa-2 ma-2">
                <p class="date-info">Datum Created: {{ formatDate(users.created_on) }}</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 d-flex justify-end">
                <a class="edit-btn custom-margin-r-20"> Edit </a>
                <a class="delete-btn" @click="deleteUser(users.id)"> Delete </a>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
// overwrite vuetify defaults for card
.v-card-text {
  font-size: 15px;
  color: gray;
  font-weight: 600;
}
.v-card-subtitle {
  color: gray;
  font-weight: 600;
}
.v-card-title {
  color: black;
  font-weight: 600;
}
.v-avatar {
  margin: 2px;
}
// Custom values
.date-info {
  color: black;
  font-weight: 600;
  font-size: 13px;
  font-size: 10px;
  padding-top: 0.5em;
  padding-left: 2.5em;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show before truncating */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 79px;
}
.edit-btn {
  font-weight: bold;
  cursor: pointer;
}
.delete-btn {
  font-weight: bold;
  color: red;
  cursor: pointer;
}
</style>
