export const antiCorruptionCategoryIcons: Record<string, string> = {
  normative: 'i-lucide-scale',
  expertise: 'i-lucide-search-check',
  methods: 'i-lucide-book-open',
  forms: 'i-lucide-file-pen',
  commission: 'i-lucide-users',
}

export function antiCorruptionCategoryIcon(slug: string) {
  return antiCorruptionCategoryIcons[slug] ?? 'i-lucide-file-text'
}
