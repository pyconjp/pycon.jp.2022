<template>
  <outer-link :to="url">
    <div
      :class="
        'w-full flex flex-row justify-between gap-8 items-center px-8 py-4 ' +
        (primary ? 'bg-tertiary-100' : 'bg-tertiary-900')
      "
    >
      <div class="inline-flex items-center">
        <slot name="icon" />
        <div
          :class="
            'text-left text-lg w-[200px] ' +
            (primary ? 'text-primary-700' : 'text-tertiary-50')
          "
        >
          {{ title }}
        </div>
      </div>
      <div
        :class="
          'flex-1 text-left text-sm hidden lg:block ' +
          (primary ? 'text-primary-700' : 'text-tertiary-100')
        "
      >
        {{ description }}
      </div>
      <div class="h-8 w-8 flex items-center align-middle">
        <chevron-right-icon
          :class="
            'mx-auto ' + (primary ? 'text-primary-700' : 'text-secondary-300')
          "
        />
      </div>
    </div>
  </outer-link>
</template>

<script>
import { ChevronRightIcon } from '@vue-hero-icons/solid'
import OuterLink from '@/components/Elements/OuterLink'

export default {
  name: 'NewsCardBase',
  components: {
    OuterLink,
    ChevronRightIcon,
  },
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
