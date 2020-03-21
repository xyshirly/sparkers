<template>
  <div class="home">
    <Header></Header>

    <section class="flex-row slogans">
      <div class="slogans-left">
        DESIGN <br/>
        YOUR <br/>
        <span style="color: #8EDAC8">GROWTH</span> <br/>
        ENGINE<br/>
      </div>
      <div class="slogans-right">
        <img src="../assets/img/animation.gif" width="563px" height="506px">
      </div>
    </section>

    <section class="flex-row card-wall-container">
      <template v-for="item in cardWalls">
        <div style="width: 292px; height: 190px; overflow: hidden; margin-right: 11px;">
          <CardWall :key="item.id" :item="item" @on-mouse="handleHoverCard"></CardWall>
        </div>
      </template>
    </section>

    <LabelGap label="ABOUT US" line_width="147.5"></LabelGap>
    <section class="about-us flex-row align-items-center">
      <div class="left">
        <label>SPARKERS服务于你的品牌建设及用户增<br/>长，我们帮助您共同挖掘业务难题，并以创造<br/>性的方式解决他们。</label>
        <p>
          <span class="label-know-more">了解更多</span><br/>
          <img src="../assets/img/know-more-line.png" width="70%">
        </p>
      </div>
      <div class="right"></div>
    </section>

    <LabelGap label="ACHIEVEMENT" line_width="86"></LabelGap>

    <div class="flex-row achievements-container">
      <CardInfo v-for="item in achievements" :item="item"></CardInfo>
    </div>

    <LabelGap label="PARTNERS" line_width="125"></LabelGap>

    <div class="partner-container">
      <div class="partner-box"></div>
    </div>

    <LabelGap label="KEEPING TOUCH" line_width="62.5"></LabelGap>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      cardWalls: [
        {id: '1', label: '数字化营销', imageUrl: require('@/assets/img/digital-business.png')},
        {id: '2', label: '品牌设计', imageUrl: require('@/assets/img/brand-design.png')},
        {id: '3', label: '软件开发', imageUrl: require('@/assets/img/web-developer.png')},
      ],

      achievements: [
        {id: '1', title: '玩聚新年', subtitle: '星巴克春节线上营销有新招', imageUrl: require('@/assets/img/achievement-1.png')},
        {id: '2', title: '破冰寒潮', subtitle: '凌致时装集团销售额的逆势上扬', imageUrl: require('@/assets/img/achievement-2.png')},
        {id: '3', title: '竞争突围', subtitle: '汇丰银行玩转特色品牌文化', imageUrl: require('@/assets/img/achievement-3.png')},
        {id: '4', title: 'FIND MORE', subtitle: '汇丰银行玩转特色品牌文化', imageUrl: require('@/assets/img/achievement-4.png')},
      ]
    }
  },
  methods: {
    handleHoverCard({obj, flag}) {
      this.cardWalls.forEach(item => {
        if (item.id === obj.id) item.focus = flag;
      })
    }
  }
}
</script>
<style lang="scss" type="text/scss">
  .home {
    padding-top: 37px;
    padding-bottom: 87.5px;
    min-height: 100%;
    overflow-y: scroll;
    background-color: #000000;
    color: #fff;

    .slogans {
      padding-left: 121.5px;
      margin-top: 100px;
      margin-bottom: 100px;
      position: relative;

      .slogans-left {
        font-size: 46px;
        font-family: $font-family-en;
        font-weight: 900;
        color: rgba(255,255,255,1);
        line-height: 47px;
      }
      .slogans-right {
        position: absolute;
        left: 350px;
        top: -150px;
      }
    }

    .card-wall-container {
      padding-left: 121.5px;
      margin-bottom: 94.5px;
      overflow-x: hidden;
    }

    .about-us {
      margin: 34px 0 53px 121.5px;

      .left {
        width:353px;
        height:218px;
        font-size: 12px;
        background:rgba(142,219,200, .6);
        padding-top: 68px;
        padding-left: 62px;
        z-index: 10;
        position: relative;
        label {
          font-size:12px;
          font-family:Adobe Heiti Std;
          font-weight:normal;
          color:rgba(255,255,255,1);
          line-height:18px;
        }
        p {
          position: absolute;
          bottom: 37px;
          font-size: 16px;
          margin-top: 48px;
          font-family: PingFangSC;
          font-weight:100;
          color:rgba(255,255,255,1);
          line-height:18px;
        }
      }
      .right {
        width:414px;
        height:260px;
        margin-left: -50px;
        background-size: cover;
        background-image: url('../assets/img/about-us-right.png');
      }
    }

    .partner-container {
      margin: 49px 0 43px 121.5px;

      .partner-box {
        width: 100%;
        height: 189px;
        background-size: cover;
        background-position: center center;
        background-image: url("../assets/img/partners-group.png");
      }
    }

    .achievements-container {
      margin: 31px 0 41px 121.5px;
    }
  }
</style>
