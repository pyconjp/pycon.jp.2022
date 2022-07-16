<template>
  <nav class="sp-header" :class="{ 'sp-header-full': isSPHeaderOpen }">
    <div
      class="relative flex flex-row items-center w-full h-full"
      :class="isSPHeaderOpen ? 'justify-center' : 'justify-start'"
    >
      <div v-if="!isSPHeaderOpen" class="flex flex-row items-center">
        <img
          src="~/assets/images/sp-header-logo.svg"
          class="ml-6 sp-logo-img"
          alt="sp header log"
        />
        <p class="ml-4 text-xl font-bold font-fira">PyCon JP 2022</p>
      </div>
      <div class="absolute right-8 top-6">
        <div
          class="open-btn"
          :class="{ active: isSPHeaderOpen }"
          @click="isSPHeaderOpen = !isSPHeaderOpen"
        >
          <span></span><span></span><span></span>
        </div>
      </div>
      <div
        v-if="isSPHeaderOpen"
        class="flex flex-col items-center w-1/2 text-white"
      >
        <div class="w-2/3">
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>開催概要</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>行動規範</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>感染対策ガイドライン</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>会場案内</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>サポート</p>
            </div>
          </div>
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>イベント詳細</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>タイムテーブル</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>チュートリアル</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>スプリント</p>
            </div>
          </div>
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>スポンサー</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>スポンサー募集要項</p>
            </div>
          </div>
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>コンテンツ</p>
            </div>
            <div>
              <div class="sp-header-line"></div>
              <p>初学者向けコンテンツ</p>
            </div>
          </div>
          <div class="sp-header-section">
            <div>
              <div class="arrow-right"></div>
              <p>スタッフ一覧</p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-row pr-6 my-3 font-bold leading-10 text-black bg-secondary-400 whitespace-nowrap font-noto"
        >
          <img
            class="w-4 mx-4"
            src="~/assets/images/globe_alt.svg"
            alt="globe_alt"
          />
          <div v-if="$i18n.locale === 'ja'" class="flex flex-row text-ellipsis">
            <nuxt-link
              class="underline text-primary-700"
              :to="switchLocalePath('en')"
            >
              {{ $t('common.lang.en') }}
            </nuxt-link>
            <span class="mx-1.5"> / </span>
            <span> {{ $t('common.lang.ja') }} </span>
          </div>
          <div v-else class="flex flex-row text-ellipsis">
            <span> {{ $t('common.lang.en') }} </span>
            <span class="mx-1.5"> / </span>
            <nuxt-link
              class="underline text-primary-700"
              :to="switchLocalePath('ja')"
            >
              {{ $t('common.lang.ja') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data() {
    return {
      isSPHeaderOpen: false,
    }
  },
}
</script>

<style scoped>
.sp-header {
  width: 100%;
  height: 89px;
  background: #fcfcfd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.sp-logo-img {
  width: 65px;
}
.sp-header-full {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #1a1623;
}

.open-btn {
  position: relative;
  background: #952509;
  cursor: pointer;
  width: 44px;
  height: 36px;
  border-radius: 5px;
}
.open-btn.active {
  background: transparent;
}
.open-btn span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 12px;
  height: 2px;
  background: #ffffff;
  width: 20px;
}

.open-btn span:nth-of-type(1) {
  top: 11px;
}
.open-btn span:nth-of-type(2) {
  top: 17px;
}
.open-btn span:nth-of-type(3) {
  top: 23px;
}
.open-btn.active span:nth-of-type(1) {
  width: 25px;
  top: 11px;
  left: 11px;
  transform: translateY(6px) rotate(-45deg);
}
.open-btn.active span:nth-of-type(2) {
  opacity: 0;
}
.open-btn.active span:nth-of-type(3) {
  width: 25px;
  top: 23px;
  left: 12px;
  transform: translateY(-6px) rotate(45deg);
}

.sp-header-section {
  margin-top: 20px;
}

.sp-header-section div {
  font-family: 'Noto Sans JP';
  font-size: 14px;
  font-weight: 500;
  margin-top: 14px;
  margin-left: 14px;
  display: flex;
  align-items: center;
}
.sp-header-section div p {
  margin-left: 16px;
}

.sp-header-section div:nth-of-type(1) {
  font-family: 'Noto Sans JP';
  font-size: 14px;
  font-weight: 700;
  margin-top: 0px;
  margin-left: 0px;
}
.arrow-right {
  right: 0px;
  top: 5px;
  width: 8px;
  height: 8px;
  margin-left: 10px;
  margin-top: 8px;
  border-bottom: 3px solid #f77c5e;
  border-right: 3px solid #f77c5e;
  transform: rotate(315deg);
}
.sp-header-line {
  border-bottom: 1px solid #f77c5e;
  width: 20px;
  height: 1px;
}
</style>
