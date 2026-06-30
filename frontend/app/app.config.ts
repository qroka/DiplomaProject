export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        size: 'md',
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'font-medium min-h-11',
        },
      ],
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
  },
})
