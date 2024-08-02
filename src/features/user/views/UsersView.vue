<template>
  <div class="user-view">
    <div class="d-flex">
      <h1>User Information</h1>
      <v-spacer />
      <v-btn color="primary" to="/user/form" class="mb-4">Add new User</v-btn>
    </div>
    <div v-if="userLoading">Loading...</div>
    <div v-else>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Age:</strong> {{ user.age }}</p>
        <p><strong>Salary:</strong> {{ user.salary }}</p>
      </div>
      <div v-else>
        <p>No user data available.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '../interfaces/User'
import { useUserStore } from '@/store'


const userStore = useUserStore()
const { user, userLoading, setUser, setLoading } = userStore

// const fetchUser = async () => {
//   try {
//     // Simulate an API call
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     user.value = {
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       age: 30,
//       salary: 20000
//     }
//   } catch (err) {
//     error.value = 'Failed to load user data'
//   } finally {
//     loading.value = false
//   }
// }

onMounted(() => {

  setLoading(true);
  setUser({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    salary: 20000,
  })
  setLoading(false);

})
</script>

<style scoped>
.user-view {
  padding: 20px;
}
</style>
