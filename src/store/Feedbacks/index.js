import { defineStore } from "pinia";

export const useFeedbacksStore = defineStore("feedbacks", {
  state: () => ({
    
  }),
  actions: {
    postFeedback(payload) {
        let formData = new FormData()
for (let key in payload) {
  formData.append(key, payload[key]);
}
        fetch('https://event.milon.uz/rf/form?type=form2', {
          method: "POST",
          body: formData,
        }).then((res) => {
         console.log(res)
        });
      },
  },
});
