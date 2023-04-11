import { defineStore } from "pinia";
import {User} from '@/types/Users/user'

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [{ name: "Behruz", age: 18 }] as User[],
  }),
  actions: {
    increment(): void {
      this.users[0].age++;
    },
  },
});
