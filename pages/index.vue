<template>
  <div>
    <hero-section />
    <news-section :posts="posts" />
    <overview-section />
    <conference-section />
    <goods-section />
    <faq-section />
    <sponsor-section />
  </div>
</template>

<script>
import moment from 'moment/moment'
import HeroSection from '@/components/Domains/TopPage/HeroSection'
import NewsSection from '@/components/Domains/TopPage/NewsSection'
import OverviewSection from '@/components/Domains/TopPage/OverviewSection'
import ConferenceSection from '@/components/Domains/TopPage/ConferenceSection'
import GoodsSection from '@/components/Domains/TopPage/GoodsSection'
import FaqSection from '@/components/Domains/TopPage/FaqSection'
import SponsorSection from '@/components/Domains/TopPage/SponsorSection'

export default {
  name: 'IndexPage',
  components: {
    SponsorSection,
    GoodsSection,
    FaqSection,
    ConferenceSection,
    OverviewSection,
    NewsSection,
    HeroSection,
  },
  async asyncData() {
    const posts = {}
    if (process.env.BLOGGER_API_KEY) {
      for (const lang of ['ja', 'en']) {
        const url = new URL(
          'https://www.googleapis.com/blogger/v3/blogs/1711203921350230994/posts'
        )
        url.searchParams.append('key', process.env.BLOGGER_API_KEY)
        url.searchParams.append('labels', lang)
        posts[lang] = await fetch(url.toString())
          .then((res) => res.json())
          .then((data) =>
            data.items.slice(0, 5).map(({ id, title, url, published }) => ({
              id,
              title,
              url,
              published: moment(published).format(
                lang === 'ja' ? 'YYYY.MM.DD' : 'MMM DD, YYYY'
              ),
            }))
          )
      }
    }
    return { posts }
  },
}
</script>
