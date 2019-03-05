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
          <div class="w3-col s12 m6 top-sentence-col gray">
            {{ topSentence }}
          </div>
        </div>
        <div class="part">
          <img src="./../assets/background-2.png" alt="">
        </div>
      </div>
      <div class="w3-row section second">
        <div class="w3-row">
          <p>{{ topSentenceSubpar }}</p>
          <h3>{{ featuresTitle }}</h3>
        </div>
        <div class="w3-row feature-row">
          <p v-for="feature in keyFeatures">{{ feature }}</p>
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
      topSentenceSubpar: '',
      featuresTitle: '',
      keyFeatures: []
    }
  },

  methods: {
    updateContent () {
      // this.loading = true
      // this.axios.get('http://localhost:3000/1/model/section/ac109cd2-6939-1811-8169-399a03130000', {
      //   params: {
      //     levels: 2
      //   }
      // }).then((response) => {
        let response = {
          data: {
            data: {
              subsectionsCommon: [
                {
                  title: 'Top Section',
                  cardsWrappersCommon: [
                    {
                      card: {
                        title: 'Name',
                        text: 'Prtcl'
                      }
                    },
                    {
                      card: {
                        title: 'Static sentence',
                        text: 'Like Git. But for ideas and conversations.'
                      }
                    },
                    {
                      card: {
                        title: 'Switching animation title',
                        text: 'A radical change in the way people exchange ideas and create content together. Any piece of content created with _Prtcl can be:'
                      }
                    },
                    {
                      card: {
                        title: 'Key Feature 1',
                        text: 'feature 1'
                      }
                    },
                    {
                      card: {
                        title: 'Key Feature 2',
                        text: 'feature 2'
                      }
                    },
                    {
                      card: {
                        title: 'Key Feature 3',
                        text: 'feature 3'
                      }
                    },
                    {
                      card: {
                        title: 'Key Feature 4',
                        text: 'feature 4'
                      }
                    }
                  ]
                }
              ]
            }
          }
        }

        this.loading = false
        let subsections = response.data.data.subsectionsCommon
        let topSection = subsections.find(s => s.title === 'Top Section')
        this.projectName = topSection.cardsWrappersCommon.find(c => c.card.title === 'Name').card.text
        this.topSentence = topSection.cardsWrappersCommon.find(c => c.card.title === 'Static sentence').card.text
        this.featuresTitle = topSection.cardsWrappersCommon.find(c => c.card.title === 'Switching animation title').card.text
        this.keyFeatures = [
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 1').card.text,
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 2').card.text,
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 3').card.text,
          topSection.cardsWrappersCommon.find(c => c.card.title === 'Key Feature 4').card.text
        ]
        document.title = this.projectName
    //   })
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

.loader-gif {
    width: 100vw;
}

.page-container {
}

.section {
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
  .section > .center > .w3-col > {
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
  font-size: 22px;
  font-weight: bold;
}


</style>
