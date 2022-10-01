<template>
  <!-- 当日スタッフ -->
  <div v-if="staffs && day_staffs && day_staffs.length > 0">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div v-for="staff in day_staffs" :key="staff.id" class="flex-1 m-5">
        <!--会社名-->
        <div class="mt-2">
          <img class="inline w-10 h-10" :src="staff[$i18n.locale].img_file" />
          {{ staff[$i18n.locale].name }}
          <outer-link
            :to="staff[$i18n.locale].twitter"
            class="text-2xl font-bold font-noto text-primary-700"
          >
            <img
              class="inline w-6 h-6"
              data-v-bf323f94=""
              :src="require('@/assets/images/sns/twitter.svg')"
            />
          </outer-link>
          <outer-link
            :to="staff[$i18n.locale].facebook"
            class="text-2xl font-bold font-noto text-primary-700"
          >
            <img
              class="inline w-6 h-6"
              data-v-bf323f94=""
              :src="require('@/assets/images/sns/facebook.svg')"
            />
          </outer-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '@/components/Elements/OuterLink'
import staffsMixin from '@/utils/staffs_mixin'

export default {
  name: 'DayStaff',
  components: {
    OuterLink,
  },
  mixins: [staffsMixin],
}
</script>
