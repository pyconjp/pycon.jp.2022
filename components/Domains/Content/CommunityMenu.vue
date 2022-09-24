<template>
  <div>
    <div v-for="(community, i) in communities" :key="i">
      <nuxt-link :to="localePath('/contents/communities/' + community.slug)">
        <div
          class="bg-tertiary-900 hover:bg-tertiary-100 text-tertiary-50 hover:text-primary-700 flex align-middle w-full flex-row justify-between gap-2 items-center px-6 py-4"
        >
          <div class="flex items-center w-4 h-4 align-middle">
            <chevron-right-icon class="mx-auto text-primary-400" />
          </div>
          <div class="flex-1">
            {{ community.title }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@vue-hero-icons/solid'

export default {
  name: 'CommunityMenu',
  components: {
    ChevronRightIcon,
  },
  props: {
    communities: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
