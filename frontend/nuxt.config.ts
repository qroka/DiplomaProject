export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
    prerender: {
      routes: ['/']
    }
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
      esiaFeedbackUrl: process.env.NUXT_PUBLIC_ESIA_FEEDBACK_URL || 'https://pos.gosuslugi.ru/landing/'
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/a11y'
  ],

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  fonts: {
    families: [
      { name: 'PT Sans', provider: 'google', weights: [400, 500, 700] },
    ],
  },
  
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './public/Icons'
    }]},

  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
  
})