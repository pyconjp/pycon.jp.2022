<template>
  <div>
    <subpage-hero-section
      :title="['Time', 'Table']"
      subtitle="タイムテーブル"
    />
    <div class="component-border-top bg-tertiary-100">
      <div class="flex flex-col items-center">
        <div class="mt-10 snake-face-base">
          <!--snake face-->
          <div class="hidden snake-face lg:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubpageHeroSection from '../Elements/SubpageHeroSection'

export default {
  name: 'TimeTable',
  components: {
    SubpageHeroSection,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.snake-face-base {
  width: 100%;
  height: 90px;
}

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}
</style>

<!-- ↓JSONフォーマットです -->
<i18n>
  {  }
</i18n>
