<template>
  <div class="text-center component-border-top bg-tertiary-100">
    <section-title main="OVERVIEW" sub="概要"  :primary="false"/>
      <div class="flex flex-col items-center w-10/12 mx-auto mt-10 mb-8 lg:flex-row">
        <!-- left pane -->
        <div class="relative overview-frame"> <!-- overview-frame -->
          <div class="absolute mt-5 -ml-5 bg-primary-700 overview-clip" />
          <div class="absolute overview-image border-secondary-50" /> <!-- image -->
        </div>
        
        <!-- right pane -->
        <div class="flex flex-col w-full h-auto mt-4 overview-text lg:w-1/2">
              <div class="flex flex-row">
                <div class="mr-2 overview-text-icon" />
                <div class="overview-text-title text-tertiary-900 font-fira">What is <span class="text-primary-700">PyCon</span> ?</div>
              </div>
              <div class="text-left overview-text-description text-tertiary-800 font-fira">
                {{ $t('pages.index.overviewDescription') }}
              </div>
        </div>
    </div>
    <div class="snake-face-base">
      <div class="self-end hidden snake-face lg:block" />
    </div>
  </div>  
</template>

<script>
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'OverviewSection',
  components: {
    SectionTitle,
  },
}
</script>

<style scoped>
.overview-frame {
  width: 650px;
  height: 400px;
}

.overview-clip {
  width: 590px;
  height: 370px;
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}
.overview-image {
  width: 590px;
  height: 370px;
  background-image: url("@/assets/images/overview.svg");
  border: 1px solid;
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}

.overview-text {
  padding: 0px 20px;
  gap: 20px;
}

.overview-text-icon {
  width: 31px;
  height: 31px;
  background-image: url("@/assets/images/card_title_icon.svg");
}
.overview-text-title {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0.02em;

  white-space:nowrap;
}

.overview-text-description {

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.03em;
}

.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}

.snake-face {
  position: absolute;
  width: 150px;
  height: 90px;
  left: 85px;

  background-image: url('@/assets/images/section_bg_img_right_yellow.svg');
}
</style>


