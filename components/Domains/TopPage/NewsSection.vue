<template>
  <div class="text-center component-border-top bg-secondary-400">
    <section-title main="NEWS" sub="ニュース" class="mb-14" />
    <div class="flex flex-col w-10/12 gap-4 mx-auto lg:w-7/12 mb-9">
      <div v-for="card in ['volunteer', 'sponsor']" :key="card" class="w-full">
        <a :href="$t(`news_card.${card}.url`)">
          <div
            class="flex flex-row items-center justify-between w-full gap-8 px-8 py-4 bg-tertiary-900"
          >
            <div class="inline-flex items-center">
              <component
                :is="getNewsCardIcon(card)"
                class="mr-4 text-secondary-400 h-9 w-9"
              />
              <div class="text-lg text-left text-tertiary-50 news-card-title">
                {{ $t(`news_card.${card}.title`) }}
              </div>
            </div>
            <div
              class="flex-1 hidden text-sm text-left text-tertiary-50 lg:block"
            >
              {{ $t(`news_card.${card}.description`) }}
            </div>
            <div class="flex items-center w-8 h-8 align-middle">
              <ChevronRightIcon class="mx-auto text-secondary-400" />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="w-10/12 mx-auto text-left bg-tertiary-50 lg:w-7/12 blogs">
      <div class="pt-16 pb-10 text-lg px-14 lg:pb-5">
        <ul class="space-y-6">
          <li
            v-for="post in posts"
            :key="post.id"
            class="w-full align-middle lg:inline-flex"
          >
            <span class="mr-4 text-tertiary-600 published">{{
              post.published
            }}</span>
            <div class="text-tertiary-900">
              <outer-link :to="post.url">
                {{ post.title }}
              </outer-link>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="pr-8 text-lg font-bold text-center underline lg:text-right text-primary-700 pb-14"
      >
        <outer-link class="more-news" to="https://pyconjp.blogspot.com/">
          {{ $t('more_blogs').toString() }}
        </outer-link>
      </div>
    </div>

    <div class="snake-face-base">
      <div class="hidden snake-face lg:block" />
    </div>
  </div>
</template>

<script>
import {
  UsersIcon,
  ChevronRightIcon,
  SpeakerphoneIcon,
} from '@vue-hero-icons/solid'
import moment from 'moment'
import SectionTitle from '@/components/Elements/SectionTitle'
import OuterLink from '@/components/Elements/OuterLink'

const NEWS_CARD_ICONS = {
  volunteer: 'UsersIcon',
  sponsor: 'SpeakerphoneIcon',
}

export default {
  name: 'NewsSection',
  components: {
    OuterLink,
    SectionTitle,
    UsersIcon,
    ChevronRightIcon,
    SpeakerphoneIcon,
  },
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts?key=${process.env.BLOGGER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>
        data.items.slice(0, 5).map(({ id, title, url, published }) => ({
          id,
          title,
          url,
          published: moment(published).format('YYYY.MM.DD'),
        }))
      )
  },
  methods: {
    getNewsCardIcon(card) {
      return NEWS_CARD_ICONS[card]
    },
  },
}
</script>

<style scoped>
.news-card-title {
  width: 200px;
}

.published {
  flex: 0 0 6rem;
}

.blogs {
  clip-path: polygon(
    0 0,
    calc(100% - 40px) 0,
    100% 40px,
    100% 100%,
    40px 100%,
    0% calc(100% - 40px)
  );
}

.more-news::after {
  content: '→';
}

li:before {
  content: url('@/assets/images/li_before.svg');
  display: inline-block;
  height: 1.125rem;
  margin-right: 0.375rem;
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
  right: 85px;

  background-image: url('@/assets/images/section_bg_img_left_orange.svg');
}
</style>

<i18n>
{
  "ja": {
    "news_card": {
      "volunteer": {
        "title": "スタッフ募集",
        "description": "PyCon JP 2022では、一緒にイベントを創り上げるボランティアスタッフを募集しています",
        "url": "https://pyconjp.blogspot.com/2022/02/pycon-jp-2022.html"
      },
      "sponsor": {
        "title": "スポンサー募集中",
        "description": "PyCon JP 2022のスポンサーシップを募集中です。2次募集期間は 2022/06/14 (火) - 開催1ヶ月前 です。",
        "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship.html"
      }
    },
    "more_blogs": "Newsをもっと見る（blog）"
  },
  "en": {
    "news_card": {
      "volunteer": {
        "title": "Volunteer wanted!",
        "description": "PyCon JP 2022 is looking for volunteers to help create the event together!",
        "url": "https://pyconjp.blogspot.com/2022/02/pycon-jp-2022.html"
      },
      "sponsor": {
        "title": "Sponsors wanted!",
        "description": "Sponsorships for PyCon JP 2022 are now being accepted, with the second call for applications being accepted from Tuesday, 06/14/2022 - one month prior to the event.",
        "url": "https://pyconjp.blogspot.com/2022/05/pyconjp2022-sponsorship-en.html"
      }
    },
    "more_blogs": "More News (blog)"
  }
}
</i18n>