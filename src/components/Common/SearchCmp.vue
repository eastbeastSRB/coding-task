<script>
import { watch, reactive, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import _ from 'lodash'

export default {
  setup() {
    const store = useStore()

    const form = reactive({
      name: null,
      status: null
    })
    const statuses = ref(['Active', 'Inactive', 'Active and Inactive'])
    let userList = ref([])

    // set init users
    onMounted(() => {
      userList.value = store.getters.userList
    })

    // watch name property
    watch(
      () => form.name,
      () => {
        update()
      }
    )

    // watch status property
    watch(
      () => form.status,
      () => {
        store.dispatch('searchUserByStatus', form.status)
      }
    )

    // debounce function on search input
    const update = _.debounce(() => {
      store.dispatch('searchUser', form.name)
    }, 500)

    return {
      form,
      statuses
    }
  }
}
</script>

<template>
  <!-- User Search -->
  <v-row class="mb-3" style="max-height: 80px">
    <v-col>
      <v-text-field
        v-model="form.name"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        class="no-bg"
      ></v-text-field>
      <!-- <v-text-field label="Another input"></v-text-field> -->
    </v-col>
    <v-col>
      <v-select
        clearable
        chips
        label="Role status"
        v-model="form.status"
        :items="statuses"
        variant="outlined"
        :search-input="false"
      ></v-select>
    </v-col>
    <v-col class="add-new-role">
      <RouterLink to="/add-role">
        <v-btn color="secondary" size="large">Create a new role</v-btn>
      </RouterLink>
    </v-col>
  </v-row>
</template>

<style>
.add-new-role {
  justify-content: end;
  display: flex;
  padding-top: 1em !important;
}
.v-field__field {
  background-color: white;
}
</style>
