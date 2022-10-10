<template>
  <div class="font-noto">
    <subpage-hero-section title="VENUE INFORMATION" subtitle="会場案内" />
    <div class="bg-secondary-400 component-border-top">
      <section-title main="MAP" sub="会場見取り図" :primary="true" />
      <div
        class="flex flex-col items-center justify-center w-11/12 mx-auto mt-10 mb-8 lg:w-10/12 gap-10"
      >
        <div>
          <div class="relative">
            <div class="image-bg">
              <outer-link
                :to="require('@/assets/images/venue/venue_rotated.png')"
              >
                <img
                  class="relative object-cover w-11/12 h-5/6 relative w-full lg:flex-1"
                  src="@/assets/images/venue/venue.png"
                  alt="会場案内"
                />
              </outer-link>
            </div>
          </div>
        </div>
        <div>
          <div class="mx-auto">
            {{ $t('child_care_description') }}
          </div>
        </div>
      </div>
      <div class="snake-face-base">
        <div class="self-end hidden lg:block">
          <div class="snake-face-primary" />
        </div>
      </div>
    </div>
    <div class="bg-tertiary-50 component-border-top">
      <section-title main="ACCESS" sub="会場アクセス" :primary="false" />
      <div
        class="flex flex-col items-center justify-center w-11/12 mx-auto mt-10 mb-8 lg:w-10/12 lg:flex-row gap-10"
      >
        <div class="flex-1">
          <iframe
            v-if="$i18n.locale === 'en'"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6485.625372822181!2d139.788521!3d35.632344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29ed0c04cca72dd5!2sTOC%20Ariake%20Convention%20Hall!5e0!3m2!1sen!2sjp!4v1665392941094!5m2!1sen!2sjp"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            v-else
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6485.625372822181!2d139.788521!3d35.632344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29ed0c04cca72dd5!2zVE9D5pyJ5piO44Kz44Oz44OZ44Oz44K344On44Oz44Ob44O844Or!5e0!3m2!1sja!2sjp!4v1665392924080!5m2!1sja!2sjp"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="flex-1">
          <div
            v-for="({ title, description }, index) in $t('access')"
            :key="index"
            class="mb-2"
          >
            <div class="font-bold">{{ title }}</div>
            <div>{{ description }}</div>
          </div>
        </div>
      </div>
      <div class="snake-face-base">
        <div class="self-end hidden lg:block">
          <div class="snake-face-primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import SectionTitle from '@/components/Elements/SectionTitle'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'VenuePage',
  components: { OuterLink, SectionTitle, SubpageHeroSection },
}
</script>

<style scoped lang="scss">
.snake-face-base {
  width: 100%;
  height: 36px;
  @media (min-width: 1024px) {
    height: 90px;
  }
}

@mixin primary {
  position: absolute;
  width: 150px;
  height: 90px;
  right: 85px;
}

@mixin secondary {
  position: absolute;
  width: 150px;
  height: 90px;
  left: 85px;
}

.snake-face-primary {
  @include primary;
  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}

.snake-face-primary-last {
  @include primary;
  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}

.snake-face-secondary {
  @include secondary;
  background-image: url('@/assets/images/section_bg_img_right_yellow.svg');
}

.snake-face-secondary-last {
  @include secondary;
  background-image: url('@/assets/images/section_bg_img_right_black.svg');
}

@mixin clip {
  clip-path: polygon(5% 0%, 100% 0%, 100% 90%, 95% 100%, 0% 100%, 0% 10%);
}

.image-bg {
  &::before {
    content: '';
    position: absolute;
    top: 1.5rem;
    left: -1rem;
    width: calc(100% + 0.5rem);
    height: calc(100% - 0.5rem);
    background-color: #b32f0f;
    @include clip;
  }

  & img {
    @include clip;
  }
}
</style>

<i18n>
{
  "en": {
    "child_care_description": "※ Please ask the staff if you would like to use the child care. Child care is available by reservation only. It is not available for those who do not make a reservation in advance.",
    "access": [
      {
        "title": "Venue",
        "description": "TOC Ariake Convention Hall"
      },
      {
        "title": "Location",
        "description": "3-5-7 Ariake, Koto-ku, Tokyo"
      },
      {
        "title": "Nearest Stations",
        "description": "Kokusai-tenjijo (Rinkai Line), Tokyo Big Sight (Yurikamome)"
      }
    ]
  },
  "ja": {
    "child_care_description": "※ 託児所をご利用の方はスタッフへお尋ねください。託児所は完全予約制となっております。事前予約のない方はご利用になれません。",
    "access": [
      {
        "title": "会場",
        "description": "TOC有明コンベンションホール"
      },
      {
        "title": "所在地",
        "description": "東京都江東区有明3丁目5番7号"
      },
      {
        "title": "最寄り駅",
        "description": "国際展示場（りんかい線）、東京ビッグサイト（ゆりかもめ）"
      }
    ]
  }
}
</i18n>
