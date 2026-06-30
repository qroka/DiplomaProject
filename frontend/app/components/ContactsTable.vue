<template>
  <div class="w-4/5 mx-auto py-8">
    <DsEmptyState
      v-if="!pending && groupedStaff.length === 0"
      icon="i-lucide-phone-off"
      title="Контакты не найдены"
      description="Данные о сотрудниках временно недоступны"
    />

    <div v-else class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-800">
            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">ФИО</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Должность</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Телефон</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Email</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Кабинет</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="group in groupedStaff" :key="group.branchId">
            <!-- Branch group header -->
            <tr class="bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-green-500/20 transition-all duration-300 hover:shadow-md hover:shadow-green-500/20">
              <td colspan="5" class="px-4 py-3 text-sm font-bold text-primary-600 dark:text-primary-400">
                {{ group.branchName }} <span v-if="group.branchAddress" class="font-normal text-gray-500 dark:text-gray-400">({{ group.branchAddress }})</span>
              </td>
            </tr>
            <!-- Staff rows -->
            <tr
              v-for="member in group.members"
              :key="member.id || `${member.surname}-${member.name}`"
              class="bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-green-500/20 transition-all duration-300 hover:shadow-md hover:shadow-green-500/20"
            >
              <td class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                {{ member.surname }} {{ member.name }} {{ member.patronym }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{{ member.role }}</td>
              <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{{ member.phone }}</td>
              <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{{ member.email }}</td>
              <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{{ member.cabinet_number }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { data: allStaff, pending } = await useAsyncData('contacts-staff', () =>
  $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/staff/`), { server: false }
)

const groupedStaff = computed(() => {
  const items = allStaff.value ?? []
  const groups = {}

  for (const member of items) {
    const key = member.branch_name || '__none__'
    if (!groups[key]) {
      groups[key] = {
        branchId: key,
        branchName: member.branch_name || 'Без отделения',
        branchAddress: member.branch_address || '',
        members: []
      }
    }
    groups[key].members.push(member)
  }

  return Object.values(groups)
})
</script>
