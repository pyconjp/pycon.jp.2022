export default {
  data() {
    return {
      timetables: [],
      videos: {},
      documents: {},
    }
  },
  async fetch() {
    this.timetables = await this.$content('timetable').only(['body']).fetch()

    this.filter_timetables()
  },
  methods: {
    filter_timetables() {
      for (let i = 0; i < this.timetables.body.length; i++) {
        const timetableRow = this.timetables.body[i]
        // Youtubeのリンク
        if (timetableRow.Video.length === 0) {
          this.videos[timetableRow.code] = ''
        } else {
          this.videos[timetableRow.code] = timetableRow.Video
        }
        // スライドのリンク
        if (timetableRow.Document.length === 0) {
          this.documents[timetableRow.code] = ''
        } else {
          this.documents[timetableRow.code] = timetableRow.Document
        }
      }
    },
  },
}
