import Header from './header/Header.vue'
import CardWall from './card/CardWall.vue'
import LabelGap from './gap/LabelGap.vue'
import Footer from './footer/Footer.vue'
import CardInfo from './card/CardInfo.vue'

const components = [
  Header,
  CardWall,
  LabelGap,
  Footer,
  CardInfo
];

export default (Vue) => {
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
}