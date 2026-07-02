<script setup lang="ts">
import { privacyPolicyIntro, privacyPolicySections } from '~/data/privacy-policy'

useHead({ title: privacyPolicyIntro })
</script>

<template>
  <DsStandardPage
    :title="privacyPolicyIntro"
    description="Документ определяет порядок обработки персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»."
  >
    <div class="space-y-4">
      <PrivacyPolicySectionContent
        v-for="section in privacyPolicySections"
        :key="section.id"
        :section="section"
      />
    </div>
  </DsStandardPage>
</template>
