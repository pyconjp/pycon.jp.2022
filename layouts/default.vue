<template>
  <div>
    <default-header />
    <Nuxt />
    <default-footer />
  </div>
</template>

<script>
import DefaultHeader from '@/components/Domains/Header'
import DefaultFooter from '@/components/Domains/Footer'

export default {
  components: { DefaultFooter, DefaultHeader },
}
</script>

<style></style>
