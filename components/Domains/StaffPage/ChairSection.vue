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
                class="font-bold font-fira text-primary-900"
                v-html="'片寄 里菜 / Lina KATAYOSE(selina)'"
              ></div>
              <p
                class="mt-5 font-noto chair-description"
                v-html="$t('chair.description')"
              ></p>
              <div class="inline">
                <outer-link
                  :to="$t('chair.sns.twitter')"
                  class="text-2xl font-bold font-noto text-primary-700"
                >
                  <img
                    class="inline w-6 h-6"
                    data-v-bf323f94=""
                    :src="require('@/assets/images/sns/twitter.svg')"
                  />
                </outer-link>
                <outer-link
                  :to="$t('chair.sns.facebook')"
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
  line-height: 100%;
  font-size: 24px;
}

.chair-description {
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
      "name": "Lina Katayose",
      "description": "Lina attended Pycon JP in 2016 for the first time. Participated in 2017 and 2018 as a speaker, and as an invited speaker in 2020. She also attended Pycon overseas, such as in the US, Taiwan, and Thailand. Loves rabbits, cars, drones, and gadgets such as Raspberry Pi as well. Currently taking special lessons in piano and violin. Always wants to be a scientist, not a programmer or an engineer. An active member of Pyladies Tokyo and a founder of moegi Inc. Lina graduated from Tokai University with a BS and an MS in Aeronautics and Astronautics. She is currently a Senior Research Fellow at the Keio Research Institute at SFC（Shonan Fujisawa Campus）.",
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
