import { defineStore } from "pinia";

export const useLinksStore = defineStore("links", {
  state: () => ({
    links: [
      {
        path: "/",
        name: "CreateDocuments",
        title: "links.index",
      },
      {
        path: "/about",
        name: "35MILON",
        title: "35' HEALTH CLUBS",
      },
      {
        path: "/price",
        name: "Price",
        title: "links.price",
      },
      {
        path: "/news",
        name: "news",
        title: "links.news",
      },
      {
        path: "/collaboration",
        name: "collaboration",
        title: "links.collaboration",
      },
      {
        path: "/franchise",
        name: "franchise",
        title: "links.franchise",
      },
      {
        path: "/clubs",
        name: "clubs",
        title: "links.clubs",
      },
    ],
  }),
  actions: {},
});
