import BottomMenu from './general/bottomMenu'
import FloorMenu from './general/floorMenu'
import BaseForm from './general/form'
import GridMenu from './general/gridMenu'
import BaseImage from './general/image'
import BaseText from './general/text'
import Timeout from './general/timeout'

import ScrollLeft from './swiper/scrollLeft'
import SwiperBanner from './swiper/swiperBanner'

import HorizontalList from './list/horizontalList'
import VerticalList from './list/verticalList'

import PageFaq from './pageModule/pageFaq'
import PageIntro from './pageModule/pageIntro'
import PageParagraph from './pageModule/pageParagraph'
import PageTitle from './pageModule/pageTitle'

import NewsMarquee from './animate/newsMarquee'

import GoodsSearch from './shopping/goodsSearch'
import Coupon from './shopping/coupon'

export default {
  install (Vue) {
    Vue.component(BottomMenu.name, BottomMenu)
    Vue.component(FloorMenu.name, FloorMenu)
    Vue.component(BaseForm.name, BaseForm)
    Vue.component(GridMenu.name, GridMenu)
    Vue.component(BaseImage.name, BaseImage)
    Vue.component(BaseText.name, BaseText)
    Vue.component(Timeout.name, Timeout)
    Vue.component(NewsMarquee.name, NewsMarquee)
    Vue.component(ScrollLeft.name, ScrollLeft)
    Vue.component(SwiperBanner.name, SwiperBanner)
    Vue.component(HorizontalList.name, HorizontalList)
    Vue.component(VerticalList.name, VerticalList)
    Vue.component(PageFaq.name, PageFaq)
    Vue.component(PageIntro.name, PageIntro)
    Vue.component(PageParagraph.name, PageParagraph)
    Vue.component(PageTitle.name, PageTitle)
    Vue.component(GoodsSearch.name, GoodsSearch)
    Vue.component(Coupon.name, Coupon)
  }
}
