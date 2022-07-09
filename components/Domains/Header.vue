<template>
  <nav class="sticky top-0 z-50 px-5 py-3 bg-white shadow-md header">
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
        class="flex flex-row items-center justify-around w-full mx-10 text-xl font-bold font-fira whitespace-nowrap menu"
      >
        <div class="relative flex flex-row group">
          <p class="relative">
            {{ $t('common.menu.about.about') }}
          </p>
          <div class="arrow-bottom"></div>
          <div
            class="absolute left-0 invisible w-32 p-2 bg-white rounded-md shadow-md top-6 group-hover:visible"
          >
            <a>Menu1</a><br />
            <a>Menu2</a>
          </div>
        </div>
        <div class="relative flex flex-row group">
          <p>{{ $t('common.menu.event.event') }}</p>
          <div class="arrow-bottom"></div>
          <div
            class="absolute left-0 invisible w-32 p-2 bg-white rounded-md shadow-md top-6 group-hover:visible"
          >
            <a>Menu1</a><br />
            <a>Menu2</a>
          </div>
        </div>
        <div class="relative flex flex-row group">
          <p>{{ $t('common.menu.sponsor.sponsor') }}</p>
          <div class="arrow-bottom"></div>
          <div
            class="absolute left-0 invisible w-32 p-2 bg-white rounded-md shadow-md top-6 group-hover:visible"
          >
            <a>Menu1</a><br />
            <a>Menu2</a>
          </div>
        </div>
        <div class="flex flex-row">
          <p>{{ $t('common.menu.contents.contents') }}</p>
          <img
            class="inline h-4 mt-1 ml-2"
            src="@/assets/images/link-icon.svg"
            alt="content"
          />
        </div>
        <div class="">
          <p>{{ $t('common.menu.volunteer.volunteer') }}</p>
        </div>
      </div>

      <div
        class="flex flex-row pr-6 my-3 leading-10 bg-secondary-400 whitespace-nowrap"
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
  data() {
    return {
      isAboutMenuOpen: false,
    }
  },
}
</script>

<style scoped>
.header {
  height: 89px;
}

.menu {
  /* overflow-x: scroll; */
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

.arrow-bottom {
  right: 0px;
  top: 5px;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  margin-top: 5px;
  border-bottom: 3px solid #b32f0f;
  border-right: 3px solid #b32f0f;
  transform: rotate(45deg);
}
</style>
