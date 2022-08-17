<template>
  <div
    class="flex flex-col items-center text-center component-border-top bg-tertiary-100"
  >
    <section-title main="OVERVIEW" sub="概要" :primary="false" />
    <div
      class="flex flex-col items-center justify-center w-11/12 mt-10 mb-8 lg:flex-row lg:w-10/12"
    >
      <div class="flex flex-col items-center lg:mt-10 lg:flex-row">
        <!-- left pane -->
        <div class="flex justify-center w-10/12 lg:flex-1 overview-frame">
          <!-- overview-frame -->
          <div class="relative w-full">
            <div
              class="absolute w-11/12 mt-5 border-solid border-1 overview-clip bg-primary-700 h-5/6"
            />
            <img
              class="absolute object-cover w-11/12 h-5/6 left-4 overview-clip"
              src="~/assets/images/overview.jpg"
              alt="overview_img"
            />
          </div>
        </div>

        <!-- right pane -->
        <div
          class="flex flex-col w-11/12 mt-10 lg:ml-10 lg:flex-[2_2_0] lg:mt-0"
        >
          <div class="flex flex-row">
            <div class="mr-1 overview-text-icon" />
            <div class="overview-text-title text-tertiary-900 font-fira">
              What is <span class="text-primary-700">PyCon JP</span> ?
            </div>
          </div>
          <div
            class="pl-5 text-left overview-text-description text-tertiary-800 font-fira"
          >
            {{ $t('pages.index.overviewDescription') }}
          </div>
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
  min-width: 375px;
  min-height: 600px;
}

.overview-clip {
  clip-path: polygon(
    0% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    100% 100%,
    10% 100%,
    0% 90%
  );
}

.overview-text-icon {
  width: 31px;
  height: 31px;
  background-image: url('@/assets/images/card_title_icon.svg');
}
.overview-text-title {
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0.02em;
  @media screen(lg) {
    font-size: 36px;
  }
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
