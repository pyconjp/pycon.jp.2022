<template>
  <div class="relative component-border-top font-noto text-white">
    <div
      class="pt-7 pb-7 relative bg-tertiary-900 bg-footer bg-no-repeat lg:bg-right-bottom bg-center"
    >
      <div class="mx-auto w-11/12 lg:w-10/12">
        <img
          src="~/assets/images/footer-2022-logo.svg"
          alt="2022-logo"
          class="mx-auto lg:ml-0 w-10/12 lg:w-auto"
        />
        <div
          class="flex flex-col footer-menu lg:flex-row w-1/2 lg:w-full mx-auto lg:ml-0"
        >
          <div class="flex-1">
            <p>{{ $t('common.menu.about.about') }}</p>
            <!--TODO-->
            <p>Child(TODO)</p>
          </div>
          <div class="flex-1">
            <p>
              {{ $t('common.menu.event.event') }}
            </p>
            <!--TODO-->
            <p>Child(TODO)</p>
          </div>
          <div class="flex-1">
            <p>
              {{ $t('common.menu.sponsor.sponsor') }}
            </p>
            <!--TODO-->
            <p>Child(TODO)</p>
          </div>
          <div class="flex-1">
            <p>
              {{ $t('common.menu.contents.contents') }}
            </p>
            <!--TODO-->
            <p>Child(TODO)</p>
          </div>
          <div class="flex-1">
            <p>
              {{ $t('common.menu.volunteer.volunteer') }}
            </p>
            <!--TODO-->
            <p>Child(TODO)</p>
          </div>
        </div>
        <div
          class="border-t-2 border-t-tertiary-400 lg:pt-9 pt-6 font-source mb-3 flex flex-row gap-2"
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
                  class="inline h-6 w-6"
                  :src="require(`@/assets/images/sns/${sns.logo}`)"
                  :alt="sns.name"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:items-end lg:flex-row">
          <div class="flex-1 mb-8 lg:mb-1.5">
            <div class="mb-3 inline-flex">
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
            <p class="whitespace-pre">{{ $t('common.contact.description') }}</p>
          </div>
        </div>
        <div
          class="lg:mt-7 mt-9 mb-6 previous-pages underline lg:text-right text-center text-secondary-300"
        >
          <outer-link to="https://www.pycon.jp/organizer/index.html">
            {{ $t('common.pastPyConJPSites') }}
          </outer-link>
        </div>
      </div>
    </div>
    <div class="bg-white text-black">
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
  computed: {
    getSns() {
      return SNS
    },
  },
}
</script>

<style scoped>
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
