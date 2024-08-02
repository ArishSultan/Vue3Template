import type { User } from "@/features/user/interfaces/User";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    // state
    const users = ref<Array<User>>([]);
    const user = ref<User | null>(null);
    const loading = ref(false);
  
    // getters
    const userName = computed(() => user.value?.name || 'Guest');
    const usersData = computed(() => users.value);
    const isLoading = computed(() => loading.value);

    // action
    const setLoading = (isLoading: boolean) => {
        loading.value = isLoading;    
    }

    const getUsersData() {
        setLoading(true);

        

    }


  
    const clearUser = () => {
      user.value = null;
    };
  
  
    return {
      user,
      userName,
      isLoading,
      setUser,
      setLoading,
      clearUser,
    };
  });