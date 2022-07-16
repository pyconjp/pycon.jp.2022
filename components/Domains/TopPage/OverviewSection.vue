<template>
  <div class="text-center component-border-top bg-tartiary-100">
    <section-title main="OVERVIEW" sub="概要"  :primary="false"/>
    <div class="flex flex-col items-center content-end">
      <div class="flex flex-row mt-10">
        <!-- left pane -->
        <div>
          <div class="overview-frame">
            <div class="mt-5 overview-card bg-primary-700" />
            <div class="ml-5 overview-image border-t-secondary-50" /><!-- image -->
            <!--</div>-->
          </div>
        </div>
        
        <!-- right pane -->
        <div class="flex flex-col overview-text">
              <div class="flex flex-row">
                <div class="mr-2 overview-text-icon" />
                <div class="overview-text-title text-tertiary-900 font-fira">What is <span class="text-primary-700">PyCon</span> ?</div>
              </div>
              <div class="text-left overview-text-description text-tertiary-800 font-fira">
                {{ $t('pages.index.overviewDescription') }}
              </div>
        </div>
      </div>
      <!--snake face-->
      <div class="flex content-end w-11/12 h-32 bg-left-bottom bg-no-repeat snake-base" />
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
  position: relative;
}

.overview-card {
  position: absolute;
  width: 590px;
  height: 370px;
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}
.overview-image {
  position: absolute;
  width: 590px;
  height: 370px;
  background-image: url("@/assets/images/overview.svg");
  border: 1px solid;
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 100% 100%, 10% 100%, 0% 90%);
}

.overview-text {
  padding: 0px 20px;
  gap: 20px;
  width: 590px;
  height: 360px;
}

.overview-text-icon {
  width: 31px;
  height: 31px;
  background-image: url("@/assets/images/card_title_icon.svg");
}
.overview-text-title {
  /* text */
  width: 268px;
  height: 36px;

  /* text / en / .text-4xl.text-bold */

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0.02em;

  white-space:nowrap;
}

.overview-text-description {
  width: 550px;
  height: 192px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  letter-spacing: 0.03em;
}

.snake-base {
  background-image: url("@/assets/images/section_bg_img_right_yellow.svg");
}
</style>


