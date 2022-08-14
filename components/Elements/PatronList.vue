<template>
    <div v-if="sponsors && patrons && patrons.length > 0">
        <div class="grid grid-cols-1 lg:grid-cols-4">
            <div v-for="patron in patrons" :key="patron.id" class="m-5">
            <div class="mt-2 underline">
                <img 
                v-if="patron[$i18n.locale].logo_file"
                :src="require(`@/assets/images/sponsors/patron/${patron[$i18n.locale].logo_file}`)"
                class="inline object-none object-center mr-2" />
                <outer-link :to="patron[$i18n.locale].url" class="inline text-2xl font-bold font-noto text-primary-700">
                    {{ patron[$i18n.locale].name }}
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
  name: 'PatronList',
  components: {
    OuterLink,
    ExternalLinkIcon,
  },
  mixins: [sponsorsMixin],
}
</script>