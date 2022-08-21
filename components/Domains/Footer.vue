<template>
  <div class="relative text-white component-border-top font-noto">
    <div
      class="relative bg-center bg-no-repeat pt-7 pb-7 bg-tertiary-900 bg-footer lg:bg-right-bottom"
    >
      <div class="w-11/12 mx-auto lg:w-10/12">
        <img
          src="~/assets/images/footer-2022-logo.png"
          alt="2022-logo"
          class="mx-auto lg:ml-0 w-72"
        />
        <div
          class="flex flex-col w-1/2 gap-4 mx-auto footer-menu lg:flex-row lg:w-full lg:ml-0 lg:gap-0"
        >
          <div v-for="menu in menus" :key="menu.id" class="flex-1">
            <p>{{ $t(menu.title) }}</p>
            <p v-for="child in menu.children" :key="child.id">
              <a :target="child.target" :href="child.link" class="hover:opacity-70" rel="noopener noreferrer">
                {{ $t(child.title) }}
              </a>
            </p>
          </div>
        </div>
        <div
          class="flex flex-row gap-2 pt-6 mb-3 border-t-2 border-t-tertiary-400 lg:pt-9 font-source"
        >
          <div class="mr-2">
            {{ $t('common.sns') }}
          </div>
          <div class="flex flex-col gap-2">
            <div v-for="sns in getSns" :key="sns.name">
              <div class="inline-flex">
                <div class="w-28">
                  <outer-link class="text-secondary-300" :to="sns.url">
                    {{ sns.account }}
                  </outer-link>
                </div>
                <img
                  class="inline w-6 h-6"
                  :src="require(`@/assets/images/sns/${sns.logo}`)"
                  :alt="sns.name"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:items-end lg:flex-row">
          <div class="flex-1 mb-8 lg:mb-1.5">
            <div class="inline-flex mb-3">
              <div class="mr-2">{{ $t('common.contact.contact') }}：</div>
              <div>
                <outer-link
                  to="mailto:pyconjp@pycon.jp"
                  class="text-secondary-300"
                >
                  pyconjp@pycon.jp
                </outer-link>
              </div>
            </div>
            <p class="">{{ $t('common.contact.description') }}</p>
          </div>
        </div>
        <div
          class="mb-6 text-center underline lg:mt-7 mt-9 previous-pages lg:text-right text-secondary-300"
        >
          <outer-link to="https://www.pycon.jp/organizer/index.html">
            {{ $t('common.pastPyConJPSites') }}
          </outer-link>
        </div>
      </div>
    </div>
    <div class="text-black bg-white">
      <div class="flex justify-center">
        <div
          class="flex flex-col pt-8 pb-3 lg:py-10 lg:flex-row lg:items-start"
        >
          <div class="flex-auto mb-2 lg:mb-0 lg:mr-2">
            <a
              href="https://www.pycon.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="h-20 mx-auto lg:mr-0 lg:ml-auto"
                src="@/assets/images/association-logo.svg"
                alt="association-logo"
              />
            </a>
          </div>
          <div class="flex-row justify-center pl-8 pr-8 lg:ml-2 lg:p-0">
            <p class="lg:mt-2">主催：一般社団法人PyCon JP Association</p>
            <p class="lg:mt-2">
              PyCon JP 2022 is a production of the PyCon JP Association
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '@/components/Elements/OuterLink'
import menus from '@/content/menu.json'

const SNS = [
  {
    name: 'twitter',
    account: '@pyconjapan',
    url: 'https://twitter.com/pyconjapan',
    logo: 'twitter.svg',
  },
  {
    name: 'facebook',
    account: '@PyConJP',
    url: 'https://www.facebook.com/PyConJP/',
    logo: 'facebook.svg',
  },
]

export default {
  name: 'DefaultFooter',
  components: { OuterLink },
  data() {
    return  {
      menus
    }
  },
  computed: {
    getSns() {
      return SNS
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-menu {
  padding-top: 49px;
  padding-bottom: 1.5rem;
  margin-bottom: 1.875rem;

  & > div > p:not(:first-child) {
    margin-top: 0.75rem;
    color: #f7df7e;

    &::before {
      color: #95939f;
      display: inline-block;
      content: '';
      border-top: 0.1rem solid;
      width: 1rem;
      margin-right: 0.5rem;
      transform: translateY(-0.25rem);
    }
  }
}

.previous-pages {
  &::after {
    content: '→';
  }
}
</style>
