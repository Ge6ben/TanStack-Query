/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../stores'
import router from '../router'
import { VueQueryPlugin } from '@tanstack/vue-query';

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {


  app.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 0
        }
      }
    }
  })
    .use(vuetify)
    .use(router)
    .use(pinia)
}
