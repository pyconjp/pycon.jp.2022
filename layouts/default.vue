<template>
  <div>
    <default-header v-if="$device.isDesktop" />
    <SPHeader v-else />
    <Nuxt />
    <default-footer />
  </div>
</template>

<script>
import DefaultHeader from '@/components/Domains/Header'
import SPHeader from '@/components/Domains/SPHeader'
import DefaultFooter from '@/components/Domains/Footer'

export default {
  components: { DefaultFooter, DefaultHeader, SPHeader },
}
</script>

<style scoped></style>
