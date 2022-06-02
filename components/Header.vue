<template>
  <div class="header sticky top-0 z-50 py-3 px-5 shadow-md">
    <div class="flex justify-between">
      <div class="flex flex-row gap-10">
        <div>
          <nuxt-link to="/">
            <img src="~/assets/images/header_logo.jpg" alt="header_logo" />
          </nuxt-link>
        </div>
        <div
          class="flex flex-row content-start gap-9 items-center justify-around font-fira text-xl font-bold"
        >
          <div class="w-32">
            <p>開催概要</p>
          </div>
          <div class="w-32">
            <p>イベント詳細</p>
          </div>
          <div class="w-32">
            <p>スポンサー</p>
          </div>
          <div class="w-32">
            <p>コンテンツ</p>
          </div>
          <div class="w-32">
            <p>スタッフ一覧</p>
          </div>
        </div>
      </div>
      <div class="bg-secondary-400 my-3 flex flex-row pr-3 leading-10">
        <img
          class="w-4 mx-4"
          src="~/assets/images/globe_alt.svg"
          alt="globe_alt"
        />
        <div v-if="$i18n.locale === 'ja'" class="flex flex-row">
          <nuxt-link
            class="underline text-primary-700"
            :to="switchLocalePath('en')"
          >
            EN
          </nuxt-link>
          <span class="mx-1.5"> / </span>
          <span> 日本語 </span>
        </div>
        <div v-else class="flex flex-row">
          <span> EN </span>
          <span class="mx-1.5"> / </span>
          <nuxt-link
            class="underline text-primary-700"
            :to="switchLocalePath('ja')"
          >
            日本語
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultHeader',
}
</script>

<style scoped>
.header {
  height: 89px;
}
</style>
