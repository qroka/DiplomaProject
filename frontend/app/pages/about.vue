<script setup>
const config = useRuntimeConfig()
const { data: staffItems } = await useAsyncData('staff', () =>
  $fetch(`${config.public.apiBaseUrl}/api/staff/`), { server: false }
)
</script>

<template>
  <PageHeroElse
    title="Наша команда"
    description="Познакомьтесь с нашей командой!"
    image="/images/office.png"
    image-alt="Office workspace"
  />
  <Testimonial
    image="/images/PutinTestimonial.jpg"   
    quote="Любой гражданин, который хотел бы стать муниципальным или госслужащим, должен понимать, что вступление в должность связано с жесткими антикоррупционными требованиями, с определенными ограничениями, которые человек обязан строго соблюдать"
    alt="Customer photo"
    author='Владимир Владимирович Путин'
  />
  <StaffCard
    title="Наша команда"
    subtitle="Познакомьтесь с нашими сотрудниками"
    :items="staffItems ?? []"
  />
  <div class="flex justify-center mt-6">
    <Button
      label="Доска почета"
      to="/honorboard"
      color="primary"
      variant="solid"
      size="lg"
      trailing-icon="i-lucide-arrow-right"
      class="bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600"
    />
  </div>
  <div class="flex justify-center mt-6">
    <Button
      label="Резерв"
      to="/staffreserve"
      color="primary"
      variant="solid"
      size="lg"
      trailing-icon="i-lucide-arrow-right"
      class="bg-primary-500 text-gray-900 dark:text-white hover:bg-primary-600"
    />
  </div>
</template>
