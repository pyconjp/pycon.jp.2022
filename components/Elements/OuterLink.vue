<template>
  <a
    :href="to"
    target="_blank"
    class="hover:opacity-70"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'OuterLink',
  props: {
    to: {
      type: String,
      default: '#',
    },
  },
}
</script>
