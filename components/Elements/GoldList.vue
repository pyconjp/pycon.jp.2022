<template>
  <!-- ゴールドスポンサー -->
  <div v-if="sponsors && golds && golds.length > 0">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div v-for="gold in golds" :key="gold.id" class="flex-1 m-5">
        <div class="flex flex-col items-center justify-center">
          <!--ロゴ-->
          <div class="sponsor-chipped-card bg-tertiary-50 w-[284px] h-[147px]">
            <outer-link :to="gold[$i18n.locale].url">
              <img
                v-if="gold[$i18n.locale].logo_file"
                :src="
                  require(`@/assets/images/sponsors/gold/${
                    gold[$i18n.locale].logo_file
                  }`)
                "
                class="object-contain w-full h-full p-5"
              />
            </outer-link>
          </div>
          <!--会社名-->
          <div class="mt-2 underline">
            <outer-link
              :to="gold[$i18n.locale].url"
              class="text-2xl font-bold font-noto text-primary-700"
            >
              {{ gold[$i18n.locale].name }}
              <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
          </div>
          <!-- 紹介文 -->
          <div v-if="needsIntroduction" class="mt-8 text-center lg:w-10/12">
            {{ gold[$i18n.locale].introduction }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import OuterLink from '@/components/Elements/OuterLink'
import sponsorsMixin from '@/utils/sponsors_mixin'

export default {
  name: 'GoldList',
  components: {
    OuterLink,
    ExternalLinkIcon,
  },
  mixins: [sponsorsMixin],
  props: {
    needsIntroduction: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
