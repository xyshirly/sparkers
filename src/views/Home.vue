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
        <div class="card-box" :key="item.id">
          <CardWall :item="item" @on-mouse="handleHoverCard"></CardWall>
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
      <template v-for="item in achievements">
        <div class="info-box" :key="item.id">
          <CardInfo :item="item"></CardInfo>
        </div>
      </template>
    </div>

    <LabelGap label="PARTNERS" line_width="125"></LabelGap>

    <div class="partner-container">
      <div class="partner-box flex-row justify-content-between flex-wrap">
        <img src="../assets/img/brand-4.png">
        <img src="../assets/img/brand-1.png">
        <img src="../assets/img/brand-3.png">
        <img src="../assets/img/brand-2.png">
      </div>
    </div>

    <LabelGap label="KEEPING TOUCH" line_width="62.5"></LabelGap>

    <Footer></Footer>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: 'home',
    data() {
      return {
        cardWalls: [
          {id: '1', label: '品牌服务', imageUrl: require('@/assets/img/service-1.png')},
          {id: '2', label: '营销服务', imageUrl: require('@/assets/img/service-2.png')},
          {id: '3', label: '增长服务', imageUrl: require('@/assets/img/service-3.png')},
        ],

        achievements: [
          {id: '1', title: '玩聚新年', subtitle: '星巴克春节线上营销有新招', imageUrl: require('@/assets/img/achievement-1.png')},
          {id: '2', title: '破冰寒潮', subtitle: '凌致时装集团销售额的逆势上扬', imageUrl: require('@/assets/img/achievement-2.png')},
          {id: '3', title: '竞争突围', subtitle: '汇丰银行玩转特色品牌文化', imageUrl: require('@/assets/img/achievement-3.png')},
          {id: '4', title: 'FIND MORE', subtitle: '汇丰银行玩转特色品牌文化', imageUrl: require('@/assets/img/achievement-4.png')},
        ],
        listener: null
      }
    },
    mounted() {
      this.listener = $(document).mousemove((e) => {
        const docWidth = $('body').width();
        const slidesWidth = $('.card-wall-container').width();
        const mouseX = e.pageX,
            offset = mouseX / docWidth * slidesWidth - mouseX / 2;
        let $images = $('.card-wall-container .card-box');

        $images.css({
          '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
          'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
      });

      const infoBoxW = $('.info-box').width();
      $('.info-box').css({'height': infoBoxW+'px'});

      const carBoxW = $('.card-box').width();
      $('.card-box').css({'height': (carBoxW*2/3) +'px'});

      window.onresize = function() {
        const infoBoxW = $('.info-box').width();
        $('.info-box').css({'height': infoBoxW+'px'});

        const carBoxW = $('.card-box').width();
        $('.card-box').css({'height': (carBoxW*2/3) +'px'});
      }
    },
    destroy() {
      removeEventListener('mousemove', this.listener);
    },
    methods: {
      handleHoverCard({obj, flag}) {
        this.cardWalls.forEach(item => {
          if (item.id === obj.id) item.focus = flag;
        })
      },
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
    position: relative;

    .slogans {
      padding-left: 121.5px;
      margin-top: 100px;
      margin-bottom: 100px;
      position: relative;

      .slogans-left {
        font-size: 46px;
        font-family: $font-family-en;
        font-weight: 900;
        color: rgba(255, 255, 255, 1);
        line-height: 47px;
      }

      .slogans-right {
        position: absolute;
        left: 350px;
        top: -150px;
      }
    }

    .card-wall-container {
      width: calc(100% - 121.5px);
      align-items: stretch;
      margin-left: 121.5px;
      margin-bottom: 94.5px;
      overflow-x: hidden;

      .card-box {
        min-width: calc(105% / 3);
        width: calc(105% / 3);
        overflow: hidden;
        margin-right: 20px;
      }
    }

    .about-us {
      margin: 34px 0 53px 121.5px;

      .left {
        width: 353px;
        height: 218px;
        font-size: 12px;
        background: rgba(142, 219, 200, .6);
        padding-top: 68px;
        padding-left: 62px;
        z-index: 10;
        position: relative;

        label {
          font-size: 12px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          color: rgba(255, 255, 255, 1);
          line-height: 18px;
        }

        p {
          position: absolute;
          bottom: 37px;
          font-size: 16px;
          margin-top: 48px;
          font-family: PingFangSC;
          font-weight: 100;
          color: rgba(255, 255, 255, 1);
          line-height: 18px;
        }
      }

      .right {
        width: 414px;
        height: 260px;
        margin-left: -50px;
        background-size: cover;
        background-image: url('../assets/img/about-us-right.png');
      }
    }

    .partner-container {
      margin: 49px 0 43px 121.5px;

      .partner-box {
        padding: 56px 61px 0 61px;
        background-color: #fff;
        img {
          margin-right: 52px;
          margin-bottom: 52px;
        }
      }
    }

    .achievements-container {
      margin: 31px 0 41px 121.5px;
      width: calc(100% - 121.5px);
      align-items: stretch;
      overflow-x: hidden;

      .info-box {
        min-width: calc(112% / 4);
        width: calc(112% / 4);
        overflow: hidden;
        margin-right: 11.5px;
      }
    }
  }
</style>
