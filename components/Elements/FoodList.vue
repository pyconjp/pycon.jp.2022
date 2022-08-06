<template>
    <!-- 特別スポンサー フード -->
    <div v-if="sponsors && foods && foods.length > 0">
        <div class="grid grid-cols-1 lg:grid-cols-4">
        <div v-for="food in foods" :key="food.id" class="m-5">
            <!--ロゴ-->
            <div class="sponsor-chipped-card bg-tertiary-50 w-[284px] h-[147px]" >
            <outer-link :to="food[$i18n.locale].url">
                <img 
                :src="require(`@/assets/images/sponsors/${food[$i18n.locale].logo_file}`)"
                class="object-none object-center w-full h-full" />
            </outer-link>
            </div>
            <!--会社名-->
            <div class="mt-2 underline">
            <outer-link :to="food[$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                {{ food[$i18n.locale].name }}
                <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
            </outer-link>
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
  name: 'FoodList',
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