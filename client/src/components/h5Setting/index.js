import BaseText from './common/text'
import BaseImage from './common/image'
import BaseForm from './common/form'
import PageTitle from './common/pageTitle'
import PageParagraph from './common/pageParagraph'
import PageIntro from './common/pageIntro'
import Timeout from './common/timeout'
import FloorTitle from './common/floorTitle'
import PageFaq from './common/pageFaq'

import BottomMenu from './navLink/bottomMenu'
import GridMenu from './navLink/gridMenu'
import FloorMenu from './navLink/floorMenu'

import LayoutRepeat from './lay/layoutRepeat'
import LayoutLeft from './lay/layoutLeft'
import LayoutRight from './lay/layoutRight'

import GoodsSearch from './shopping/goodsSearch'
import Coupon from './shopping/coupon'
import Goods from './shopping/goods'

import SwiperBanner from './swiper/swiperBanner'
import ScrollLeft from './swiper/scrollLeft'

import HorizontalList from './list/horizontalList'
import VerticalList from './list/verticalList'

import NewsMarquee from './animate/newsMarquee'

export default {
  install (Vue) {
    Vue.component(BaseText.name, BaseText)
    Vue.component(BaseImage.name, BaseImage)
    Vue.component(BaseForm.name, BaseForm)
    Vue.component(PageTitle.name, PageTitle)
    Vue.component(PageParagraph.name, PageParagraph)
    Vue.component(PageIntro.name, PageIntro)
    Vue.component(Timeout.name, Timeout)
    Vue.component(FloorTitle.name, FloorTitle)
    Vue.component(PageFaq.name, PageFaq)

    Vue.component(BottomMenu.name, BottomMenu)
    Vue.component(GridMenu.name, GridMenu)
    Vue.component(FloorMenu.name, FloorMenu)

    Vue.component(LayoutRepeat.name, LayoutRepeat)
    Vue.component(LayoutLeft.name, LayoutLeft)
    Vue.component(LayoutRight.name, LayoutRight)

    Vue.component(GoodsSearch.name, GoodsSearch)
    Vue.component(Coupon.name, Coupon)
    Vue.component(Goods.name, Goods)

    Vue.component(SwiperBanner.name, SwiperBanner)
    Vue.component(ScrollLeft.name, ScrollLeft)

    Vue.component(HorizontalList.name, HorizontalList)
    Vue.component(VerticalList.name, VerticalList)

    Vue.component(NewsMarquee.name, NewsMarquee)
  }
}
