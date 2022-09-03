<template>
    <!-- シルバースポンサー -->
    <div v-if="sponsors && silvers && silvers.length > 0">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div v-for="silver in silvers" :key="silver.id" class="flex-1 m-5">
            <!--会社名-->
            <div class="mt-2 underline">
                <outer-link :to="silver[$i18n.locale].url" class="text-2xl font-bold font-noto text-primary-700">
                    {{ silver[$i18n.locale].name }}
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
  name: 'SelverList',
  components: {
    OuterLink,
    ExternalLinkIcon,
  },
  mixins: [sponsorsMixin],
}
</script>