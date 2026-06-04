<template>
  <UCard
    class="bg-white/80 dark:bg-transparent backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
    :ui="{
      root: 'h-full flex flex-col',
      body: 'flex-1 p-4 sm:p-6',
      footer: 'p-4 sm:px-6'
    }"
  >
    <!-- Vacancy Header -->
    <template #header>
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ vacancy.title }}</h3>
          <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <UIcon name="i-lucide-building" class="h-4 w-4" />
            <span>{{ vacancy.company }}</span>
          </div>
        </div>
        <UBadge
          v-if="vacancy.isNew"
          color="green"
          variant="subtle"
          size="sm"
        >
          Новое
        </UBadge>
      </div>
    </template>

    <!-- Vacancy Details -->
    <div class="space-y-3 mb-6">
      <!-- Location -->
      <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <UIcon name="i-lucide-map-pin" class="h-4 w-4" />
        <span>{{ vacancy.location }}</span>
      </div>

      <!-- Salary -->
      <div class="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
        <UIcon name="i-lucide-wallet" class="h-4 w-4" />
        <span>{{ vacancy.salary }}</span>
      </div>

      <!-- Employment Type -->
      <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <UIcon name="i-lucide-briefcase" class="h-4 w-4" />
        <span>{{ vacancy.employmentType }}</span>
      </div>

      <!-- Experience -->
      <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <UIcon name="i-lucide-award" class="h-4 w-4" />
        <span>Опыт: {{ vacancy.experience }}</span>
      </div>
    </div>

    <!-- Skills Tags -->
    <div class="flex flex-wrap gap-2 mb-6">
      <UBadge
        v-for="(skill, skillIndex) in vacancy.skills"
        :key="skillIndex"
        color="gray"
        variant="subtle"
        size="sm"
      >
        {{ skill }}
      </UBadge>
    </div>

    <!-- Action Buttons -->
    <template #footer>
      <div class="flex gap-3">
        <UButton
          label="Подробнее"
          :aria-label="'Подробнее о вакансии: ' + vacancy.title"
          color="primary"
          variant="solid"
          class="bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 flex-1"
          :to="vacancy.detailsLink"
        />
        <UButton
          label="Откликнуться"
          color="green"
          variant="outline"
          class="bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600 flex-1"
          @click="$emit('apply', vacancy)"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  vacancy: {
    type: Object,
    required: true
  }
})

defineEmits(['apply'])
</script>
