<template>
  <div class="relative w-full rounded shadow-sm" :style="bgStyleObject">
    <div class="flex items-center justify-center w-full h-12">
      <img
        class="w-6"
        src="~/assets/images/timetable-head-snake.svg"
        alt="timetable section snake"
      />
      <p class="ml-2 font-bold font-noto" :style="textStyleObject">
        {{ title }}
      </p>
    </div>
    <p
      class="absolute -top-8 left-0 lg:top-0 lg:-left-[42px] font-noto font-medium"
    >
      {{ time }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FullWidthRow',
  props: {
    backgroundColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bgStyleObject: {
        backgroundColor: this.backgroundColor,
      },
      textStyleObject: {
        color: this.textColor,
      },
    }
  },
}
</script>

<style></style>
