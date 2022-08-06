<template>
  <div class="bg-tertiary-900 w-full">
    <div
      :class="
        'flex flex-row lg:justify-center lg:gap-4 pb-12 pt-[72px] px-4 lg:px-auto' +
        (!slotExists ? ' lg:pt-12' : '')
      "
    >
      <img
        class="hidden lg:block"
        src="@/assets/images/hero-bgimg_darkbg.svg"
        alt="hero background image"
      />
      <div class="flex justify-center flex-col gap-2.5">
        <div
          v-if="Array.isArray(title)"
          class="font-bayon text-secondary-400 text-[64px] leading-[100%]"
        >
          <div
            v-for="(line, index) in title"
            :key="index"
            class="block lg:hidden"
          >
            {{ line }}
          </div>
          <div class="hidden lg:block">
            {{ title.join(' ') }}
          </div>
        </div>
        <div
          v-else
          class="font-bayon text-secondary-400 text-[64px] leading-[100%]"
        >
          {{ title }}
        </div>
        <div class="font-noto text-tertiary-300 text-3xl leading-[100%]">
          {{ subtitle }}
        </div>
      </div>
    </div>
    <div :class="slotExists ? 'pb-12' : ''">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubpageHeroSection',
  props: {
    title: {
      type: [String, Array],
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    slotExists() {
      return this.$slots.default !== undefined
    },
  },
}
</script>

<style scoped></style>
