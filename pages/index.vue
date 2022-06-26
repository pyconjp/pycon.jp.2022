<template>
  <div>
    <hero-section />
    <news-section />
    <overview-section />
    <conference-section />
    <goods-section />
    <faq-section />
    <sponsor-section />
  </div>
</template>

<script>
import HeroSection from '@/components/Domains/TopPage/HeroSection'
import NewsSection from '@/components/Domains/TopPage/NewsSection'
import OverviewSection from '@/components/Domains/TopPage/OverviewSection'
import ConferenceSection from '@/components/Domains/TopPage/ConferenceSection'
import FaqSection from '@/components/Domains/TopPage/FaqSection'
import SponsorSection from '@/components/Domains/TopPage/SponsorSection'
import GoodsSection from '@/components/Domains/TopPage/GoodsSection'

export default {
  name: 'IndexPage',
  components: {
    GoodsSection,
    SponsorSection,
    FaqSection,
    ConferenceSection,
    OverviewSection,
    NewsSection,
    HeroSection,
  },
}
</script>
