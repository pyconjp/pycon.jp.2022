<template>
  <nav class="sticky top-0 z-20 px-5 py-3 bg-white shadow-md header">
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
        <div v-for="(menu, i) in menus" :key="i">
          <div
            v-if="menu.children.length > 0"
            class="relative flex flex-row group"
          >
            <p class="relative">
              {{ $t(menu.title) }}
            </p>
            <div class="arrow-bottom"></div>
            <div
              class="invisible rounded-md shadow-md child-menu font-noto top-7 group-hover:visible"
            >
              <div
                v-for="(child, j) in menu.children"
                :key="j"
                class="child-menu-record"
              >
                <nuxt-link v-if="child.innerlink" :to="localePath(child.link)">
                  <div class="flex w-full pt-2 pb-2 ml-6">
                    <div class="arrow-right"></div>
                    <span class="ml-6">{{ $t(child.title) }}</span>
                  </div>
                </nuxt-link>
                <nuxt-link
                  v-else-if="child.disable"
                  class="child-menu-record disable-color"
                  to="#"
                >
                  <div class="flex w-full pt-2 pb-2 ml-6">
                    <div class="arrow-right"></div>
                    <span class="ml-6">{{ $t(child.title) }}</span>
                  </div>
                </nuxt-link>
                <outer-link
                  v-else
                  :to="$t(child.link)"
                  class="child-menu-record"
                >
                  <div class="flex w-full pt-2 pb-2 ml-6">
                    <div class="arrow-right"></div>
                    <span class="ml-6">{{ $t(child.title) }}</span>
                  </div>
                </outer-link>
              </div>
            </div>
          </div>
          <div v-else class="relative flex flex-row group disable-color">
            <p class="relative">
              {{ $t(menu.title) }}
            </p>
            <div class="arrow-bottom"></div>
          </div>
        </div>
      </div>

      <!--###############-->
      <!-- 言語切り替えエリア -->
      <!--###############-->
      <div
        class="flex flex-row pr-6 my-3 font-bold leading-10 bg-secondary-400 whitespace-nowrap font-noto"
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
import OuterLink from '../Elements/OuterLink.vue'
import menus from '@/content/menu.json'

export default {
  name: 'DefaultHeader',
  components: { OuterLink },
  data() {
    return {
      isAboutMenuOpen: false,
      menus,
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

.child-menu {
  background: #1a1623;
  position: absolute;
  border-radius: 2px;
  width: 270px;
  color: white;
  font-size: 15px;
  white-space: normal;
}

.child-menu-record {
  display: block;
}

.child-menu-record:hover {
  background: #f3d34f;
  color: black;
}

.disable-color {
  opacity: 0.5;
}
</style>
