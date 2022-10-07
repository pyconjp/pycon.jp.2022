<template>
  <div>
    <div class="flex flex-col items-center">
      <!-- Chair start -->
      <div class="flex flex-col w-10/12 mt-2 lg:w-7/12">
        <div :key="'talk_' + index" class="flex flex-col mt-10">
          <div class="flex flex-col items-center lg:flex-row">
            <!-- left image -->
            <div class="relative w-full lg:flex-1">
              <img
                class="relative object-cover w-full h-5/6 keynote-clip lg:flex-1"
                :src="require('@/assets/images/staff/selina.jpg')"
                :alt="'chair_img'"
              />
            </div>

            <!-- right text -->
            <div class="flex flex-col lg:mt-0 lg:ml-10 w-12/12 lg:flex-[2_2_0]">
              <div
                class="font-bold chair-name text-primary-900"
                v-html="'片寄 里菜 / Lina KATAYOSE(selina)'"
              ></div>
              <p
                class="mt-5 font-bold chair-description"
                v-html="$t('chair.description')"
              ></p>
              <outer-link
                :to="$t('chair.twitter')"
                class="text-2xl font-bold font-noto text-primary-700"
              >
                <img
                  class="inline w-6 h-6"
                  data-v-bf323f94=""
                  :src="require('@/assets/images/sns/twitter.svg')"
                />
              </outer-link>
              <outer-link
                :to="$t('chair.facebook')"
                class="text-2xl font-bold font-noto text-primary-700"
              >
                <img
                  class="inline w-6 h-6"
                  data-v-bf323f94=""
                  :src="require('@/assets/images/sns/facebook.svg')"
                />
              </outer-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'ChierPersonSection',
  components: {
    OuterLink,
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.chair-name {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  font-size: 24px;
}

.chair-description {
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #1a1623;
}
</style>

<!-- ↓JSONフォーマットです -->
<i18n>
{
  "ja": {
    "chair": {
      "name": "片寄 里菜",
      "description": "PyCon JP 2016に初参加。その後、2017,2018にスピーカー参加し、2020年には招待講演で登壇。海外では、PyCon US、PyCon Taiwan、PyCon Thailandの参加経験あり。うさぎ好き。車やDrone, Raspberry Piなどガジェット好き。ピアノ,バイオリンを特訓中。プログラマー、エンジニアではなく科学者(Scientist)を目指す。Pyladies Tokyo Staff, (株)moegi代表。東海大学 航空宇宙学修了。慶應義塾大学SFC研究所 上席所員",
      "sns": {
        "twitter": "https://twitter.com/selina787b",
        "github": null,
        "facebook": "https://www.facebook.com/lina.katayose",
        "instagram": null
      }
    }
  },
  "en": {
    "chair": {
      "name": "片寄 里菜",
      "description": "うさぎ大好き。PyConJP2022座長。車やDrone, Raspberry Piなどガジェットが好きです。ピアノ,バイオリン,ドラムを特訓中。プログラマー、エンジニアではなく科学者(Scientist)を目指す。Pyladies Tokyo Staff, 株式会社moegi代表、航空宇宙学修了。三アマ取得",
      "sns": {
        "twitter": "https://twitter.com/selina787b",
        "github": null,
        "facebook": "https://www.facebook.com/lina.katayose",
        "instagram": null
      }
    }
  }
}
</i18n>
