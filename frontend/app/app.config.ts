export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      secondary: 'neutral',
      neutral: 'zinc',
    },
    card: {
      slots: {
        root: 'ring-1 ring-[var(--color-border-default)] shadow-xs',
      },
    },
    input: {
      slots: {
        root: 'ring-[var(--color-border-default)] bg-surface-raised text-text-primary',
      },
    },
    textarea: {
      slots: {
        root: 'ring-[var(--color-border-default)] bg-surface-raised text-text-primary',
      },
    },
    formField: {
      slots: {
        label: 'text-text-primary font-medium',
        error: 'text-red-700 dark:text-red-300',
      },
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8',
    },
  },
})
