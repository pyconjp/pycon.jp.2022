<template>
  <div>
    <subpage-hero-section title="Events" subtitle="イベント一覧" />
    <div>
      <div
        v-for="(event, index) in $t('events')"
        :key="index"
        class="component-border-top"
      >
        <div :class="index % 2 === 0 ? 'bg-secondary-400' : 'bg-tertiary-50'">
          <section-title
            :main="event.title.main"
            :sub="event.title.sub"
            :primary="index % 2 === 0"
          />
          <event-template :event="event.detail" :primary="index % 2 === 0" />
          <div class="snake-face-base">
            <div class="self-end hidden lg:block">
              <div v-if="index % 2 === 0">
                <div
                  v-if="index === lastIndex"
                  class="snake-face-primary-last"
                />
                <div v-else class="snake-face-primary" />
              </div>
              <div v-else>
                <div
                  v-if="index === lastIndex"
                  class="snake-face-secondary-last"
                />
                <div v-else class="snake-face-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventTemplate from '@/components/Domains/Event/EventTemplate'
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import SectionTitle from '@/components/Elements/SectionTitle'

export default {
  name: 'EventPage',
  components: {
    SectionTitle,
    SubpageHeroSection,
    EventTemplate,
  },
  computed: {
    lastIndex() {
      let i = 0
      while (true) {
        if (this.$t('events')[i] === undefined) {
          break
        }
        i++
      }
      return String(i - 1)
    },
  },
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
</style>

<i18n>
{
  "ja": {
    "events": [
      {
        "title": {
          "main": "SPRINT",
          "sub": "スプリント"
        },
        "detail": {
          "title": "スプリント",
          "image": "sprint.jpg",
          "url": "https://pyconjp.blogspot.com/2022/09/pyconjp2022-sprint-ja.html",
          "description": "今年のスプリントは10/16(日)、東京都江東区にあるTOC有明コンベンションホール(20F)にて開催いたします。\nスプリント用のconnpassイベントページに登録いただければ、どなたでも無料で参加いただけます！スプリント参加にあたってPyCon JP 2022のチケットは必要ありません。"
        }
      }
    ]
  },
  "en": {
    "events": [
      {
        "title": {
          "main": "SPRINT",
          "sub": "スプリント"
        },
        "detail": {
          "title": "Sprint",
          "image": "sprint.jpg",
          "url": "https://pyconjp.blogspot.com/2022/09/pyconjp2022-sprint-en.html",
          "description": "This year's sprint will be held on Sunday, October 16 at TOC Ariake Convention Hall (20F) in Koto-ku, Tokyo.\nAnyone who registers on the connpass event page for the sprint can attend for free! You do not need a ticket for PyCon JP 2022 to participate in a sprint."
        }
      }
    ]
  }
}
</i18n>
