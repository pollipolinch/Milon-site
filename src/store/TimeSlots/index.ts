import { defineStore } from "pinia";
export const useTimeSlotsStore = defineStore("timeSlots", {
    state: () => ({
        timeslots: [] as any,
      }),
    actions: {
        async fetchDate(payload:string) {
            try {
              await $fetch("https://event.milon.uz/rf/timeslots/", {
                method: "GET",
              }).then((res) => {
               
                this.timeslots = res?.filter((ell) => ell.date === payload);
                this.timeslots.map((ell) => ell.timeSlot = `${"c "+ell.from+" до "+ell.till}`)
              });
            } catch (error) {
              console.log(error);
            }
          },
       async   postTimeSlot(payload) {
            let formData = new FormData()
    for (let key in payload) {
      formData.append(key, payload[key]);
    }
            console.log(payload)
          await  fetch('https://event.milon.uz/rf/reserve/', {
              method: "POST",
              body: formData,
            }).then((res) => {
             console.log(res)
            });
          },
    },

})