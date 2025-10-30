<template>
  <div id="about">
    <section class="relative flex items-center justify-center w-screen banner">
      <el-image class="absolute z-0 w-screen h-full opacity-30" :src="banner" fit="cover"></el-image>
      <div class="z-10 w-full pl-8 tracking-wide text-left text-white lg:pl-80 text-md sm:text-2xl">
        <div class="pt-6">
          <div class="text-xl font-bold sm:text-4xl">广州领燕科技致力于一站式互联网建设服务</div>
          <div class="pt-3">专业开发团队，优秀软件定制开发</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="px-6 py-10 sm:py-16 sm:px-24">
      <div class="flex items-center justify-between py-6">
        <div class="flex flex-row-reverse items-center w-0 lg:w-1/4">
          <el-image class="block w-1/2 h-1/2" :src="logo" fit="fill"></el-image>
        </div>
        <div class="w-full text-left lg:w-3/4 lg:pl-36">
          <div class="text-2xl font-bold text-black sm:text-4xl">广州领燕科技有限公司</div>
          <div class="pt-3 leading-relaxed tracking-wide sm:pt-6">广州领燕科技有限公司是一家致力于移动互联网/创新物联网技术服务的高新技术企业，提供一站式互联网建设服务。业务包括 APP 开发、微信/支付宝/淘宝小程序开发、网站开发、系统开发及物联网研发等。自2015年以来，公司已服务 Nike、Adidas、Burberry、Starbucks、Converse、Lululemon、GOAT、山姆会员商店、宝马等多个世界知名品牌，并成功帮助客户在中国市场赢得巨大的增长。我们追求极致卓越，力求为客户打造最优质的产品，助力客户通过互联网赛道提升自身的盈利能力，实现双赢。</div>
          <div class="pt-3 font-bold text-gray-800">地址：广州市天河区林和中路188号附楼三楼A之E45</div>
        </div>
      </div>

      <el-divider></el-divider>

      <div class="flex items-center justify-between pt-6">
        <div class="flex flex-row-reverse items-center w-0 lg:w-1/4">
          <el-image class="block w-1/2 logo-wcl h-1/2" :src="logoWCL" fit="fill"></el-image>
        </div>
        <div class="w-full text-left lg:w-3/4 lg:pl-36">
          <div class="text-2xl font-bold text-black sm:text-4xl">Wiredcraft</div>
          <div class="pt-1 leading-relaxed tracking-wide">- Wiredcraft位于上海市中心，主要对接海外客户。</div>
          <div class="pt-3 leading-relaxed tracking-wide sm:pt-6">
            <a class="link-primary" href="https://wiredcraft.com/" target="_blank">官方网站</a>
          </div>
          <div class="pt-3 font-bold text-gray-800">地址：上海市延平路121号，15D</div>
        </div>
      </div>
    </section>

    <section>
      <WhyUs></WhyUs>
    </section>

    <section>
      <DevFlow></DevFlow>
    </section>

    <section class="px-6 py-4 bg sm:py-12 sm:px-24">
      <div class="text-xl font-bold text-primary sm:text-4xl">联系我们</div>
      <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
        <div class="flex flex-col flex-wrap items-center justify-center w-full pt-6 md:w-1/2" :class="index > 1 ? 'md:pt-16' : 'md:pt-0'" v-for="(contact, index) in contactList" :key="index">
          <el-image class="block w-20 h-20 sm:w-24 sm:h-24" :src="contact.icon" fit="fill"></el-image>
          <div class="text-lg md:text-xl md:pt-3">{{contact.label}}</div>
          <div class="w-full text-xl truncate md:text-2xl md:pt-3">{{contact.content}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WhyUs from '@/components/WhyUs.vue'
import DevFlow from '@/components/DevFlow.vue'

export default {
  name: 'About',
  metaInfo: {
    title: '关于我们',
  },
  data() {
    return {
      banner: require('@/assets/about-banner-bg.jpg'),
      logo: require('@/assets/logo_final_tb.png'),
      logoWCL: require('@/assets/logo/wcl.svg'),
      contactList: [
        {
          icon: require('@/assets/icons/phone.png'),
          label: '联系电话',
          content: '150 0203 2816'
        },
        {
          icon: require('@/assets/icons/wechat-dotted.png'),
          label: '微信号',
          content: '150 0203 2816'
        },
        {
          icon: require('@/assets/icons/mail.png'),
          label: '邮箱',
          content: 'kyle@linkendtech.com'
        },
        {
          icon: require('@/assets/icons/map.png'),
          label: '联系地址',
          content: '广州市天河区林和中路188号附楼三楼A之E45'
        }
      ]
    }
  },
  components: {
    WhyUs,
    DevFlow
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scope lang="scss">
#about {
  .banner {
    height: 50vh;
    background: #001847;
  }
  .logo-wcl {
    transform: scale(.7);
  }
}
</style>
