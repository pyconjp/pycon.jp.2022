export default {
  data() {
    return {
      sponsors: [],
      diamond: [],
      platinums: [],
      golds: [],
      silvers: [],
      medias: [],
      venues: [],
      patrons: [],
      psfs: [],
    }
  },
  async fetch() {
    this.sponsors = await this.$content('sponsors').only(['body']).fetch()

    this.filter_sponsors()
  },
  methods: {
    filter_sponsors() {
      let dm = 0
      let pl = 0
      let g = 0
      let sl = 0
      let md = 0
      let ve = 0
      let pt = 0
      let cnt_psf = 0
      this.sponsors.body.sort((a, b) => a.order - b.order)
      for (let i = 0; i < this.sponsors.body.length; i++) {
        const sponsorRow = this.sponsors.body[i]
        const hashi18n = this.split_i18n(sponsorRow)

        if (sponsorRow.sponsor_type === 'Diamond') {
          // ダイアモンドスポンサー
          this.diamond[dm++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'Platinum') {
          // プラチナスポンサー
          this.platinums[pl++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'Gold') {
          // ゴールドスポンサー
          this.golds[g++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'Silver') {
          // シルバースポンサー
          this.silvers[sl++] = hashi18n
        } else if (sponsorRow.sponsor_type === '未確定') {
          // シルバースポンサー
          this.silvers[sl++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'Media') {
          // 特別スポンサー: メディア
          this.medias[md++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'Venue') {
          // 特別スポンサー: 会場提供
          this.venues[ve++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'Patron') {
          // パトロンスポンサー
          this.patrons[pt++] = hashi18n
        } else if (sponsorRow.sponsor_type === 'PSF') {
          // PSF
          this.psfs[cnt_psf++] = hashi18n
        }
      }
    },
    split_i18n(row) {
      // 言語別データ作成
      const hashJa = {}
      const hashEn = {}
      const hashi18n = {}

      // id
      hashJa.id = row.id
      hashEn.id = row.id
      // name
      hashJa.name = row.name_ja
      hashEn.name = row.name_en
      // introduction
      if (row.introduction_ja) {
        hashJa.introduction = row.introduction_ja
        hashEn.introduction = row.introduction_en
      }
      // url
      hashJa.url = row.url
      hashEn.url = row.url
      // logo_file
      if (row.logo_file && row.logo_file.length > 0) {
        hashJa.logo_file = row.logo_file
        hashEn.logo_file = row.logo_file
      }
      // sponsor_type
      if (row.sponsor_type) {
        hashJa.sponsor_type = row.sponsor_type
        hashEn.sponsor_type = row.sponsor_type
      }
      // create hash
      hashi18n.ja = hashJa
      hashi18n.en = hashEn

      return hashi18n
    },
  },
}
