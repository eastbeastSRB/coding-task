<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    // set list on app init
    onMounted(() => {
      store.dispatch('setUsersList', {})
    })
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>-->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
