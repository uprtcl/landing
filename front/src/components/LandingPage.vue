<template>
  <div class="hello">
    <h1>_Protocol</h1>
    <p>{{ topSentence }}</p>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',

  props: {
  },

  data () {
    return {
      topSentence: ''
    }
  },

  methods: {
    updateContent () {
      this.axios.get('http://www.collectiveone.org/1/model/section/ac109cd2-6939-1811-8169-399a03130000', {
        params: {
          levels: 2
        }
      }).then((response) => {
        let subsections = response.data.data.subsectionsCommon
        let topSection = subsections.find(s => s.title === 'Top Section')
        let topCard = topSection.cardsWrappersCommon.find(c => c.card.title === 'Static sentence').card
        this.topSentence = topCard.text
      })
    }
  },

  created () {
    this.updateContent()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
