<template>
  <div>
    <subpage-hero-section :title="['Staff', '']" subtitle="スタッフ" />
    <chair-person-section />
    <staff-section />
    <day-staff-section />
    <review-staff-section />
    <contact-section />
  </div>
</template>

<script>
import SubpageHeroSection from '~/components/Elements/SubpageHeroSection'
import ChairPersonSection from '@/components/Domains/StaffPage/ChairPersonSection'
import StaffSection from '@/components/Domains/StaffPage/StaffSection'
import DayStaffSection from '@/components/Domains/StaffPage/DayStaffSection'
import ReviewStaffSection from '@/components/Domains/StaffPage/ReviewStaffSection'
import ContactSection from '@/components/Domains/StaffPage/ContactSection'

export default {
  name: 'StaffPage',
  components: {
    SubpageHeroSection,
    ChairPersonSection,
    StaffSection,
    DayStaffSection,
    ReviewStaffSection,
    ContactSection,
  },
}
</script>
