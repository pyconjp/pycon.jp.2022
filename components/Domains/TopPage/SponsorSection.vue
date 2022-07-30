<template>
  <div class="text-center component-border-top bg-tertiary-100">
    <section-title main="SPONSOR" sub="スポンサー" :primary="false"/>
    <div class="flex flex-col items-center">
      <div class="mt-10 mb-10 separator" /><!-- Separator -->

      <div class="m-20 text-4xl font-bold font-fira text-primary-900">
        Coming Soon !!
      </div>
      <!--snake face-->
      <div class="flex content-end w-11/12 h-32 bg-right-bottom bg-no-repeat snake-base" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'SponsorSection',
  components: {
    SectionTitle,
  },
}
</script>

<style scoped>
.separator{
  width: 59px;
  height: 23px;
  background-image: url("@/assets/images/separator.svg");
}
.snake-base {
  background-image: url("@/assets/images/section_bg_img_left_black.svg");
}
</style>
