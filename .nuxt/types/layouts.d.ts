import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "default"
declare module "/Users/a1/Desktop/milon site/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}