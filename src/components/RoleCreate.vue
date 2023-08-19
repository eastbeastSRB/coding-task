<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const userForm = reactive({
      id: '',
      name: '',
      type: '',
      description: '',
      editable: null,
      active: null,
      users: [
        {
          id: '',
          first_name: '',
          last_name: '',
          photo_url: ''
        }
      ],
      created_on: '',
      modified_on: ''
    })
    const roles = ref([
      'Super Admin',
      'Company Admin',
      'Property Admin',
      'Job Recruiter',
      'Content Administrator',
      'Property Moderator'
    ])

    const goBack = () => {
      history.go(-1)
    }

    return {
      roles,
      userForm,
      goBack
    }
  }
}
</script>

<template>
  <div class="user-card-wrapper">
    <v-container>
      <v-card class="mt-5">
        <v-card-text>
          <v-text-field
            ref="name"
            label="Full Name"
            required
            solo-inverted
            background-color="red lighten-2"
            @update:error="updateError()"
          ></v-text-field>
          <v-autocomplete
            ref="country"
            :items="roles"
            label="Role"
            required
            solo-inverted
          ></v-autocomplete>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat @click="goBack">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss"></style>
