<template>
  <div>
    <div class="bg-tertiary-50 chipped-card">
      <div class="py-12 px-12">
        <h4 class="my-10 text-2xl">
          {{ community.name }}
        </h4>
        <div class="whitespace-pre-line mb-2">
          {{ community.content }}
        </div>

        <div v-if="community.url">
          <outer-link
            :to="community.url"
            class="inline underline text-primary-800"
          >
            詳しくはこちら
            <ExternalLinkIcon class="inline w-4 h-4 mb-2" />
          </outer-link>
        </div>

        <img
          :src="require('@/assets/images/communities/' + community.image)"
          :alt="community.name"
          class="my-4 h-[480px]"
        />

        <div v-if="community.owner">
          <h5 class="text-xl my-4">主催者</h5>
          <ul>
            <li
              v-for="(owner, i) in (community.owner || '').split(',')"
              :key="i"
            >
              {{ owner }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from '@vue-hero-icons/outline'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'CommunityBody',
  components: { OuterLink, ExternalLinkIcon },
  props: {
    community: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
