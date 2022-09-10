<template>
  <div
    class="flex flex-col items-center text-center component-border-top bg-tertiary-100"
  >
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
              :src="require(`@/assets/images/event/${eventimg.file}`)"
              :alt="eventimg.alt"
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
              {{ $t('title.t900') }}
              <span class="text-primary-700"> {{ $t('title.t700') }} </span> ?
            </div>
          </div>
          <div
            class="pl-5 text-left overview-text-description text-tertiary-800 font-fira"
          >
            {{ $t('description') }}
          </div>
          <div
            class="py-2 mt-1 text-center rounded shadow-md font-noto bg-primary-700 text-tertiary-100"
          >
            <outer-link :to="$t('details.url').toString()">
              {{ $t('details.link') }}
            </outer-link>
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
import OuterLink from '~/components/Elements/OuterLink'

export default {
  name: 'EventTemplate',
  components: {
    OuterLink,
  },
  data() {
    return {
      eventimg: {
        file: 'overview.jpg',
        alt: 'event_img',
      },
    }
  },
}
</script>

<i18n>
{
  "ja": {
    "title": {
      "t900": "<Title>",
      "t700": "<Title2>"
    },
    "description": "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    "details": {
      "title": "詳細へのリンク",
      "description": "詳細説明",
      "url": "https://pyconjp.blogspot.com/",
      "link": "詳細はこちら"
    }
  },
  "en": {
    "title": {
      "t900": "<Title>",
      "t700": "<Title2>"
    },
    "description": "Event description.",
    "details" : {
      "description": "More description.",
      "title": "Event details link",
      "url": "https://pyconjp.blogspot.com/",
      "link": "More details"
    }
  }
}
</i18n>

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
