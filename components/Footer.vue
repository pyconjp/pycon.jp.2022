<template>
  <div class="relative component-border-top font-noto text-white">
    <div class="bg-tertiary-900 footer-upper">
      <img src="~/assets/images/footer-2022-logo.svg" alt="2022-logo" />
      <div class="flex flex-col footer-menu lg:flex-row">
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
      <div class="font-source mb-3">
        <span class="mr-2">
          {{ $t('common.sns') }}
        </span>
        <span>
          <!-- TODO facebook追加 -->
          <a
            class="hover:opacity-70"
            href="https://twitter.com/pyconjapan"
            target="_blank"
            rel="noopener noreferrer"
            >@pyconjapan
            <img
              class="inline h-4"
              src="@/assets/images/twitter.svg"
              alt="twitter"
            />
          </a>
        </span>
      </div>
      <div class="flex flex-col lg:items-end lg:flex-row">
        <div class="flex-1 mb-8 lg:mb-1.5">
          <p class="mb-3">
            {{ $t('common.contact.contact') }}：
            <a class="hover:opacity-70" href="mailto:pyconjp@pycon.jp">
              pyconjp@pycon.jp
            </a>
          </p>
          <p class="whitespace-pre">{{ $t('common.contact.description') }}</p>
        </div>
        <!-- TODO デザインと配置が異なる -->
        <div class="flex-1 previous-pages lg:text-right text-secondary-400">
          <outer-link
            :label="$t('common.pastPyConJPSites')"
            to="https://www.pycon.jp/organizer/index.html"
          />
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
import OuterLink from '~/components/OuterLink'

export default {
  name: 'DefaultFooter',
  components: { OuterLink },
}
</script>

<style scoped>
.footer-upper {
  padding: 0.875rem 7.625rem 1.875rem 7.375rem;
}

.footer-menu {
  padding-top: 49px;
  padding-bottom: 1.5rem;
  margin-bottom: 1.875rem;

  border-bottom: solid;
  border-bottom-color: white;

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
  text-decoration: underline;

  &::after {
    content: '→';
  }
}
</style>
