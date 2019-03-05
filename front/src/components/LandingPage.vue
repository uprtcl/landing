<template>
  <div class="page-container">
    <div v-if="!loading" class="">
      <div class="w3-row section first">
        <div class="w3-row part">
          <img src="./../assets/background-1.png" alt="">
        </div>
        <div class="w3-row center">
          <div class="w3-col s12 m6 logo-col">
            <div class="logo-container">
              <div class="logo-img-div">
                <img src="./../assets/logo.png" alt="">
              </div>
              <div class="logo-txt-div">
                {{ projectName }}
              </div>
            </div>
          </div>
          <div class="w3-col s12 m6 top-sentence-col gray" v-html="topSentence">
          </div>
        </div>
        <div class="part">
          <img src="./../assets/background-2.png" alt="">
        </div>
      </div>
      <div class="w3-row section second light-background">
        <div class="w3-row top-subsentence">
          {{ topSubsentence }}
        </div>
        <div class="w3-row feature-row">
          <div class="w3-row features-title">
            {{ featuresTitle }}
          </div>
          <div class="w3-row features-container">
            <div class="feature-background">
              <img src="./../assets/feature-background.png" alt="">
            </div>
            <div class="feature-vert-container feature-text-container">
              <div class="feature-text">
                {{ keyFeatures[keyFeatureIx] }}
              </div>
            </div>
            <div @click="swipeLeft()" class="feature-vert-container feature-right-container">
              <img src="./../assets/arrow.png" alt="">
            </div>
            <div @click="swipeRight()" class="feature-vert-container feature-left-container">
              <img src="./../assets/arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="w3-row section third">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-1.png" alt="">
        </div>
        <div class="spec-feature-text" v-html="techFeatures[0]">
        </div>
      </div>
      <div class="w3-row section third light-background">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-2.png" alt="">
        </div>
        <div class="spec-feature-text" v-html="techFeatures[1]">
        </div>
      </div>
      <div class="w3-row section third">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-3.png" alt="">
        </div>
        <div class="spec-feature-text" v-html="techFeatures[2]">
        </div>
      </div>
      <div class="w3-row section third light-background">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-4.png" alt="">
        </div>
        <div class="spec-feature-text" v-html="techFeatures[3]">
        </div>
      </div>
      <div class="w3-row section contact">
        <div class="w3-row text-div">
          The underscore protocol is an initiative of
        </div>
        <div class="w3-row">
          <a href="http://www.collectiveone.org">
            <img src="./../assets/c1-logo.png" alt="">
          </a>
        </div>
        <div class="w3-row learn-more">
          <a href="https://goo.gl/forms/gyIeT8LxnH0tVbFw2">Learn more!</a>
        </div>
      </div>
    </div>
    <div v-else class="">
      <img class="loader-gif" src="./../assets/spinner-loop.gif" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: 'LandingPage',

  props: {
  },

  data () {
    return {
      loading: true,
      projectName: '',
      topSentence: '',
      topSubsentence: '',
      featuresTitle: '',
      keyFeatures: [],
      keyFeatureIx: 1,
      techFeatures: []
    }
  },

  methods: {
    swipeLeft () {
      this.keyFeatureIx = this.keyFeatureIx + 1

      if (this.keyFeatureIx >= this.keyFeatures.length) {
        this.keyFeatureIx = 0
      }
    },
    swipeRight () {
      this.keyFeatureIx = this.keyFeatureIx - 1

      if (this.keyFeatureIx < 0) {
        this.keyFeatureIx = this.keyFeatureIx = this.keyFeatures.length - 1
      }
    },
    updateContent () {
      this.loading = true
      this.axios.get('http://www.collectiveone.org/1/model/section/ac109cd2-6939-1811-8169-399a03130000', {
        params: {
          levels: 2
        }
      }).then((response) => {
        this.loading = false
        let subsections = response.data.data.subsectionsCommon
        let topSection = subsections.find(s => s.title === 'Top Section')
        this.projectName = topSection.cardsWrappersCommon.find(c => c.card.title === 'Name').card.text
        this.topSentence = topSection.cardsWrappersCommon.find(c => c.card.title === 'Static sentence').card.text
        this.topSubsentence = topSection.cardsWrappersCommon.find(c => c.card.title === 'Static subsentence').card.text
        this.featuresTitle = topSection.cardsWrappersCommon.find(c => c.card.title === 'Switching animation title').card.text
        this.keyFeatures = [
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 1').card.text,
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 2').card.text,
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 3').card.text,
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 4').card.text
        ]
        let techSection = subsections.find(s => s.title === 'Technical Section')
        this.techFeatures = [
          techSection.cardsWrappersCommon.find(c => c.card.title === 'contexts').card.text,
          techSection.cardsWrappersCommon.find(c => c.card.title === 'perspectives').card.text,
          techSection.cardsWrappersCommon.find(c => c.card.title === 'relationships').card.text,
          techSection.cardsWrappersCommon.find(c => c.card.title === 'cocreation').card.text
        ]
        document.title = this.projectName
      })
    }
  },

  created () {
    this.updateContent()
  }

}
</script>

<style scoped>

.gray {
  color: #5a5a66ff;
}

.light-background {
  background-color: #ecececff;
}

.loader-gif {
    width: 100vw;
}

.page-container {
}

.section.first {
  height: 100vh;
}

.section > .part {
  height: 30vh;
  width: 100%;
  overflow: hidden;
}

.section > .center {
  height: 40vh;
}

.section > .part > img {
  height: 100%;
}

.section > .center > .w3-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width:600px) {
  .center > .logo-col {
    height: 50%;
  }
  .center > .top-sentence-col {
    height: 50%;
  }
}

@media (min-width:601px) {
  .section > .center > .w3-col {
    height: 100%;
  }
}

.center > .logo-col > .logo-container {
  padding: 15px;
  margin: 0 auto;
}

.center > .logo-col > .logo-container > div  {
  float: left;
}

.center > .logo-col > .logo-container > .logo-img-div {
}

.center > .logo-col > .logo-container > .logo-img-div > img {
  height: 70px;
}

.center > .w3-col > .logo-container > .logo-txt-div {
  font-size: 55px;
  vertical-align: top;
  font-weight: bold;
}

.center > .top-sentence-col {
  padding: 0px 10px;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}

.center > .top-sentence-col > .second-row-txt {
  font-size: 18px !important;
}

.section.second {
  height: 70vh;
}

.second > .top-subsentence {
  height: 30%;
  font-size: 22px;
  font-weight: bold;
  padding: 40px 20px 30px 20px;
}

.second > .feature-row {
  height: 70%;
}


.second > .feature-row > .features-title {
  text-align: left;
  font-size:18px;
  font-weight: bold;
  padding: 40px 20px 30px 20px;
}


.second .features-container {
  position: relative;
}

.second .feature-background {
  height: 100%;
}

.second .feature-background > img {
  width: 94%;
}

.second .feature-vert-container {
  position: absolute;
  top: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.second .feature-text-container {
  width: 100%;
  padding: 0px 25px;
  font-size: 18px;
}

.second .feature-right-container {
  width: 20px;
  right: 5px;
}

.second .feature-left-container {
  width: 20px;
  left: 5px;
}

.second .feature-vert-container > img {
  width: 20px;
}

.second .feature-left-container > img {
  transform: rotate(180deg);
}

.section.third {
  height: 80vh;
}

.section.third h3 {
  font-size: 22px !important;
}

.third .spec-feature-graphic {
  height: 200px;
  padding: 10px 0px;
}

.third .spec-feature-graphic img {
  height: 100%;
}

.third .spec-feature-text {
  height: calc(100% - 150px);
  padding: 10px 10px;
}

.contact img {
  width: 80%;
}

.contact > .text-div {
  font-size: 22px;
  padding: 20px 10px 0px 10px;
}

.contact .learn-more {
  padding: 20px 10px 40px 10px;
}


</style>
