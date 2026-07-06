export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL !== undefined
        ? process.env.NUXT_PUBLIC_API_BASE_URL
        : (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000'),
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

  // Статика на nginx без Nitro/IPX — NuxtImg должен отдавать прямые URL
  image: {
    provider: 'none',
  },

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
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },
  
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  icon: {
    clientBundle: { sizeLimitKb: 1024 },
    customCollections: [{
      prefix: 'custom',
      dir: './public/Icons'
    }]
  },

  ui: {
    theme: {
      colors: [
        'primary',
        'neutral',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logos/logoASR.svg' },
        { rel: 'apple-touch-icon', href: '/logos/logoASR.svg' },
      ],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
  
})