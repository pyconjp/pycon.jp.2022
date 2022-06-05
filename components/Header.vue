<template>
  <nav class="header z-50 sticky top-0 py-3 px-5 shadow-md bg-white">
    <div class="flex flex-nowrap">
      <div class="my-auto">
        <nuxt-link to="/">
          <img
            src="@/assets/images/header-2022-logo.svg"
            alt="header_logo"
            class="header-logo"
          />
        </nuxt-link>
      </div>
      <div
        class="flex flex-row mx-10 content-start gap-9 items-center font-fira w-full font-bold text-xl whitespace-nowrap menu"
      >
        <div class="flex-auto">
          <p>{{ $t('common.menu.about.about') }}</p>
        </div>
        <div class="flex-auto">
          <p>{{ $t('common.menu.event.event') }}</p>
        </div>
        <div class="flex-auto">
          <p>{{ $t('common.menu.sponsor.sponsor') }}</p>
        </div>
        <div class="flex-auto">
          <p>{{ $t('common.menu.contents.contents') }}</p>
        </div>
        <div class="flex-auto">
          <p>{{ $t('common.menu.volunteer.volunteer') }}</p>
        </div>
      </div>
      <div
        class="bg-secondary-400 my-3 pr-6 flex flex-row leading-10 whitespace-nowrap"
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
  </nav>
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

.menu {
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
}

.menu::-webkit-scrollbar {
  /* Chrome, Safari 対応 */
  display: none;
}

.header-logo {
  width: 200px;
}
</style>
