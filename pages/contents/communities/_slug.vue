<template>
  <div>
    <subpage-hero-section
      :title="['CONTENTS FOR', 'BEGINNERS']"
      subtitle="初学者向けコンテンツ"
    />
    <div class="bg-secondary-400">
      <div class="pt-12">
        <img
          src="@/assets/images/conference_vector.svg"
          alt="separator"
          class="mx-auto"
        />
      </div>

      <div v-if="current" class="my-8 flex items-center">
        <div class="font-noto mx-auto text-[30px] font-bold">
          {{ current.title }}
        </div>
      </div>

      <div
        v-if="current"
        class="w-10/12 flex mx-auto gap-6 mb-4 lg:flex-row flex-col-reverse"
      >
        <community-menu :communities="communities" class="lg:w-[280px]" />
        <content-body :document="current" class="flex-1" />
      </div>

      <div class="snake-face-base">
        <div class="snake-face hidden lg:block" />
      </div>
    </div>
  </div>
</template>

<script>
import SubpageHeroSection from '@/components/Elements/SubpageHeroSection'
import CommunityMenu from '@/components/Domains/Content/CommunityMenu'
import ContentBody from '~/components/Domains/Content/ContentBody'

export default {
  components: { ContentBody, CommunityMenu, SubpageHeroSection },
  async asyncData({ $content, params }) {
    const slug = params.slug
    const communities = await $content('communities').fetch()
    const current = communities.find((community) => community.slug === slug)

    return {
      communities,
      current,
    }
  },
  mounted() {
    if (this.communities && !this.current) {
      const randomCommunity =
        this.communities[Math.floor(Math.random() * this.communities.length)]
      this.$router.push(
        this.localePath('/contents/communities/' + randomCommunity.slug)
      )
    }
  },
}
</script>

<style scoped>
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

  background-image: url('@/assets/images/section_bg_img_left_black.svg');
}
</style>
