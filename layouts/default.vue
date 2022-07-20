<template>
  <div>
    <SPHeader v-if="isSPHeader" />
    <default-header v-else />
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
  data() {
    return {
      isSPHeader: false,
    }
  },
  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 1024px)')
    if (mediaQuery.matches) {
      this.isSPHeader = true
    }
  },
}
</script>

<style scoped></style>
