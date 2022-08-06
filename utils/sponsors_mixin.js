export default {
    data() {
        return {
          sponsors: [],
          diamond: [],
          platinums: [],
          golds: [],
          silvers: [],
          medias: [],
          foods: [],
          patrons: [],
        }
      },
      async fetch() {
        this.sponsors = await this.$content("sponsors")
        .only(['body'])
        .fetch();
        
        this.filter_sponsors();
      },
    methods: {
      filter_sponsors() {
        let dm = 0;
        let pl = 0;
        let g = 0;
        let sl = 0;
        let sm = 0;
        let sf = 0;
        let pt = 0;
        for(let i=0;i < this.sponsors.body.length;i++){
          const sponsorRow = this.sponsors.body[i];
          const hashi18n = this.split_i18n(sponsorRow);
        
          if(sponsorRow.sponsor_type === "diamond"){
            // ダイアモンドスポンサー
            this.diamond[dm++] = hashi18n;
          }else if(sponsorRow.sponsor_type === "platinum"){
            // プラチナスポンサー
            this.platinums[pl++] = hashi18n;
          }else if(sponsorRow.sponsor_type === "gold"){
            // ゴールドスポンサー
            this.golds[g++] = hashi18n;
          }else if(sponsorRow.sponsor_type === "silver"){
            // シルバースポンサー
            this.silvers[sl++] = hashi18n;
          }else if(sponsorRow.sponsor_type === "media"){
            // 特別スポンサー: メディア
            this.medias[sm++] = hashi18n;
          }else if(sponsorRow.sponsor_type === "food"){
            // 特別スポンサー: フード
            this.foods[sf++] = hashi18n;
          }else if(sponsorRow.sponsor_type === "patron"){
            // パトロンスポンサー
            this.patrons[pt++] = hashi18n;
          }
        }
      },
      split_i18n(row) {
        // 言語別データ作成
        const hashJa = {};
        const hashEn = {};
        const hashi18n = {};
  
        // id
        hashJa.id = row.id;
        hashEn.id = row.id;
        // name
        hashJa.name = row.name_ja;
        hashEn.name = row.name_en;
        // introduction
        if(row.introduction_ja){
          hashJa.introduction = row.introduction_ja;
          hashEn.introduction = row.introduction_en;
        }
        // url
        hashJa.url = row.url;
        hashEn.url = row.url;
        // logo_file
        if(row.logo_file && row.logo_file.length > 0){
          hashJa.logo_file = row.logo_file;
          hashEn.logo_file = row.logo_file;
        }
        // sponsor_type
        if(row.sponsor_type){
          hashJa.sponsor_type = row.sponsor_type;
          hashEn.sponsor_type = row.sponsor_type;
        }
        // create hash
        hashi18n.ja = hashJa;
        hashi18n.en = hashEn;
  
        return hashi18n;
      },
    },
  }