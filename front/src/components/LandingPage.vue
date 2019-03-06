/<template>
  <div class="page-container">
    <div v-if="!loading" class="">
      <div class="w3-row section first">
        <div class="w3-row part top-banner">
        </div>
        <div class="w3-row center">
          <div class="w3-col s12 m6 logo-col">
            <div class="logo-container relative">
              <div class="logo-img-div">
                <img src="./../assets/logo.png" alt="">
              </div>
              <div class="logo-txt-div">
                {{ projectName }}
              </div>
              <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49e695af0109"
                target="_blank"
                class="prtcl_-icon prtcl_-icon-white">
              </a>
            </div>
          </div>
          <div class="w3-col s12 m6 top-sentence-col gray relative">
            <div class="w3-row" v-html="topSentence"></div>
            <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac109cd2-6939-1811-8169-399c63db0062"
              target="_blank"
              class="prtcl_-icon prtcl_-icon-white">
            </a>
          </div>
        </div>
        <div class="w3-row part bottom-banner">
        </div>
      </div>
      <div class="w3-row section second light-background">
        <div class="w3-row top-subsentence relative">
          {{ topSubsentence }}
          <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac109cd2-6939-1811-8169-399dca610084"
            target="_blank"
            class="prtcl_-icon prtcl_-icon-white">
          </a>
        </div>
        <div class="w3-row feature-row">
          <div class="w3-row features-title relative">
            {{ featuresTitle }}
            <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac109cd2-6939-1811-8169-39a0548e00a6"
              target="_blank"
              class="prtcl_-icon prtcl_-icon-white">
            </a>
          </div>
          <div class="w3-row features-container">
            <div class="feature-background">
              <img src="./../assets/feature-background.png" alt="">
            </div>
            <div class="feature-vert-container feature-text-container">
              <div class="feature-text relative">
                {{ keyFeatures[keyFeatureIx] }}
                <a :href="keyFeaturesUrls[keyFeatureIx]"
                  target="_blank"
                  class="prtcl_-icon prtcl_-icon-white features-icon">
                </a>
              </div>
            </div>
            <div @click="swipeLeft()" class="feature-vert-container feature-right-container">
              <img src="./../assets/arrow.png" alt="">
            </div>
            <div @click="swipeRight()" class="feature-vert-container feature-left-container">
              <div class="arrow-row">
                <img src="./../assets/arrow.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w3-row section third">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-1.png" alt="">
        </div>
        <div class="spec-feature-text relative">
          <div class="" v-html="techFeatures[0]"></div>
          <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39a2cb1500e9"
            target="_blank"
            class="prtcl_-icon prtcl_-icon-white">
          </a>
        </div>
      </div>
      <div class="w3-row section third light-background">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-2.png" alt="">
        </div>
        <div class="spec-feature-text relative">
          <div class="" v-html="techFeatures[1]"></div>
          <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39a6516d010b"
            target="_blank"
            class="prtcl_-icon prtcl_-icon-white">
          </a>
        </div>
      </div>
      <div class="w3-row section third">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-3.png" alt="">
        </div>
        <div class="spec-feature-text relative">
          <div class="" v-html="techFeatures[2]"></div>
          <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39aef1b3016e"
            target="_blank"
            class="prtcl_-icon prtcl_-icon-white">
          </a>
        </div>
      </div>
      <div class="w3-row section third light-background">
        <div class="spec-feature-graphic">
          <img src="./../assets/tech-feature-4.png" alt="">
        </div>
        <div class="spec-feature-text relative">
          <div class="" v-html="techFeatures[3]"></div>
          <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-39a080b900c7/cards/ac109cd2-6939-1811-8169-39b9e46401d1"
            target="_blank"
            class="prtcl_-icon prtcl_-icon-white">
          </a>
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
        <div class="w3-row light-background">
          <div class="explain-row">
            * The content of this page is specified in the "Landing" <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a03130000/messages" target="_blank" class="icon-inline"></a> (sub)context of the "Branding" <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac12f44a-68ca-1500-8168-ccaf25a800b1/messages" target="_blank" class="icon-inline"></a>
             (sub)context of the "_Protocol" <a href="https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac135cf6-63a8-1dc2-8163-ab7583ea0053/messages" target="_blank" class="icon-inline"></a> context, using <a href="http://www.collectiveone.org" target="_blank">the current prototype of CollectiveOne</a>. This is a simple example of how "contexts" can be used as conversation spaces and content containers.
          </div>
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
      techFeatures: [],
      keyFeaturesUrls: []
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
        this.keyFeaturesUrls = [
          'https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce11730001',
          'https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce378b0023',
          'https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce56f90045',
          'https://www.collectiveone.org/#/app/inits/ac119496-5e3e-1db5-815e-3f192a890001/model/section/ac109cd2-6939-1811-8169-399a9fd20021/cards/ac137866-6949-1dbf-8169-49ce76890067'
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

.relative {
  position: relative;
}

.prtcl_-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  height: 15px;
  width: 15px;
}

.prtcl_-icon-white {
  background: url('./../assets/grey_.png')  center left / cover no-repeat;
}

.prtcl_-icon-white:hover {
  background: url('./../assets/black_.png')  center left / cover no-repeat;
}

.features-icon {
  top: -20px !important;
  right: 20px !important;
}

.first > .top-banner {
  background: url('./../assets/background-1.png') center left / cover no-repeat;
}

.first > .bottom-banner {
  background: url('./../assets/background-2.png') center left / cover no-repeat;
}

.gray {
  color: #5a5a66ff;
}

.light-background {
  background-color: #ecececff;
}

.loader-gif {
    width: 100vw;
    max-width: 400px;
    margin: 0 auto;
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
  max-height: 500px;
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
  max-width: 600px;
  margin: 0 auto;
}


.second .features-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.second .feature-background {
  height: 100%;
}

.second .feature-background > img {
  width: 94%;
  max-width: 500px;
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
  padding: 0px 30px;
  font-size: 18px;
}

.second .feature-right-container {
  width: 5%;
  right: 5px;
  cursor: pointer;
}

.second .feature-left-container {
  width: 5%;
  left: 5px;
  cursor: pointer;
}

.second .feature-vert-container > img {
  width: 20px;
}

.second .feature-left-container .arrow-row > img {
  transform: rotate(180deg);
  float: right;
  width: 20px;
}

.section.third {
  height: 80vh;
  max-height: 540px;
  padding-top: 20px;
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
  max-width: 380px;
  margin: 0 auto;
}

.contact img {
  width: 80%;
  max-width: 300px;
}

.contact > .text-div {
  font-size: 22px;
  padding: 20px 10px 0px 10px;
}

.contact .learn-more {
  padding: 20px 10px 40px 10px;
}

.explain-row {
  padding: 20px 40px;
  max-width: 600px;
  margin: 0 auto;
}

.icon-inline {
  display: inline-block;
  vertical-align: text-bottom;
  height: 16px;
  width: 16px;
  background: url('./../assets/black_.png') center left / cover no-repeat;
}

</style>
