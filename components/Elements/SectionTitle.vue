<template>
  <div class="text-center">
    <h1
      :class="{
        'font-bayon': true,
        title: true,
        'text-shadow': true,
        'text-primary-700': primary,
        'text-tertiary-500': !primary,
      }"
    >
      {{ main }}
    </h1>
    <div class="text-xl text-tertiary-900 font-noto font-bold -mt-7 lg:mt-0">
      {{ sub }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    main: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: true,
      required: false,
    },
    sub: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 4rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
