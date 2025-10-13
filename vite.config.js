import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-single': resolve(__dirname, 'blog-single.html'),
        contact: resolve(__dirname, 'contact.html'),
        facility: resolve(__dirname, 'facility.html'),
        faq: resolve(__dirname, 'faq.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        login: resolve(__dirname, 'login.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        recipes: resolve(__dirname, 'recipes.html'),
        register: resolve(__dirname, 'register.html'),
        team: resolve(__dirname, 'team.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        '404': resolve(__dirname, '404.html'),
        'coming-soon': resolve(__dirname, 'coming-soon.html'),
        'forgot-password': resolve(__dirname, 'forgot-password.html'),
        'index-2': resolve(__dirname, 'index-2.html'),
        'index-3': resolve(__dirname, 'index-3.html')
      }
    }
  }
})