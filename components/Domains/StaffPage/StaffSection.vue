<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="mt-10">
        <img
          src="@/assets/images/conference_vector.svg"
          alt="Keynote vector"
          class="mid-vector"
        />
      </div>

      <div class="mt-16 coc-section-title font-noto">チーム -1-</div>

      <div
        class="items-center w-11/12 mx-auto mt-10 bg-tertiary-50 lg:w-8/12 chipped-card lg:mb-4"
      >
        <div class="items-center my-24 coc-content">
          <div class="font-medium font-noto">
            <p>メンバーをパネルでペタペタするとか</p>
          </div>
        </div>
      </div>

      <div class="mt-16 coc-section-title font-noto">チーム -2-</div>

      <div
        class="items-center w-11/12 mx-auto mt-10 bg-tertiary-50 lg:w-8/12 chipped-card lg:mb-4"
      >
        <div class="items-center my-24 coc-content">
          <div class="font-medium font-noto">
            <p>メンバーをパネルでペタペタするとか</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaffSection',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
.mid-vector {
  /* width: 72.28px; */
  height: 23.01px;
  text-align: center;
}

.coc-section-title {
  height: 30px;
  left: calc(50% - 143.58px / 2 - 0.42px);
  top: 71.01px;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  text-align: center;
  color: #1a1623;
}

.coc-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1023px) {
  .coc-content {
    margin-top: 60px;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .sp-width {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .coc-content {
    width: 100%;
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

li {
  list-style-type: none;
  position: relative;
  padding-left: 12px;
}
li:before {
  border-radius: 50%;
  width: 6px;
  height: 6px;
  display: block;
  position: absolute;
  left: 0;
  top: 0.6em;
  content: '';
  background: #e84118;
}
</style>
