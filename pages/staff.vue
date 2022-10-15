<template>
  <div>
    <subpage-hero-section :title="['Staff', '']" subtitle="スタッフ" />
    <div class="component-border-top">
      <!-- 座長 -->
      <div class="component-border-top bg-secondary-400">
        <section-title main="CHAIR" sub="座長" />
        <chair-section />
        <!--snake face-->
        <div class="mt-10 snake-face-base">
          <div class="hidden snake-face-left-orange lg:block" />
        </div>
      </div>
    </div>

    <div class="text-center component-border-top bg-tertiary-100">
      <section-title main="STAFF" sub="スタッフ" :primary="false" />
      <staff-section />
      <!--snake face-->
      <div class="mt-10 snake-face-base">
        <div class="hidden snake-face-right-yello lg:block" />
      </div>
    </div>

    <div class="text-center component-border-top bg-secondary-400">
      <section-title main="STAFF ON THE DAY" sub="当日スタッフ" />
      <day-staff-section />
      <!--snake face-->
      <div class="mt-10 snake-face-base">
        <div class="hidden snake-face-left-orange lg:block" />
      </div>
    </div>

    <div class="text-center component-border-top bg-tertiary-100">
      <section-title
        main="REVIEW STAFF"
        sub="レビュースタッフ"
        :primary="false"
      />
      <review-staff-section />
      <!--snake face-->
      <div class="mt-10 snake-face-base">
        <div class="hidden snake-face-right-yello lg:block" />
      </div>
    </div>
  </div>
</template>

<script>
import SubpageHeroSection from '~/components/Elements/SubpageHeroSection'
import SectionTitle from '@/components/Elements/SectionTitle'
import ChairSection from '@/components/Domains/StaffPage/ChairSection'

import StaffSection from '@/components/Domains/StaffPage/StaffSection'
import DayStaffSection from '@/components/Domains/StaffPage/DayStaffSection'
import ReviewStaffSection from '@/components/Domains/StaffPage/ReviewStaffSection'

export default {
  name: 'StaffPage',
  components: {
    SubpageHeroSection,
    SectionTitle,
    ChairSection,
    StaffSection,
    DayStaffSection,
    ReviewStaffSection
  }
}
</script>

<style scoped>
.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}
.snake-face-left-orange {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;
  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}

.snake-face-right-yello {
  position: absolute;
  width: 150px;
  height: 90px;
  left: 85px;

  background-image: url('@/assets/images/section_bg_img_right_yellow.svg');
}

.snake-face-left-black {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}

.contact-text-icon {
  width: 31px;
  height: 31px;
  background-image: url('@/assets/images/card_title_icon.svg');
}

.contact-text-title {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0.02em;
  @media screen(lg) {
    font-size: 36px;
  }
}
</style>

<i18n>
{
  "ja": {
    "title": "スタッフ募集中！",
    "description": "PyCon JP 2022のスタッフを募集中です。",
    "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html",
    "link": "スタッフ募集概要・応募フォーム"
  },
  "en": {
    "title": "Staff wanted!",
    "description": "Staff for PyCon JP 2022 are now being accepted.",
    "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship-en.html",
    "link": "Staff Application Form"
  }
}
</i18n>
