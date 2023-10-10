<template>
  <div id="home">
    <section class="relative flex items-center w-screen banner">
      <el-image class="absolute z-0 w-screen h-full opacity-30" :src="banner" fit="cover"></el-image>
      <div class="z-10 px-10 text-2xl font-bold tracking-wide text-left text-white md:px-32 sm:text-6xl">
        <h2>
          <span>全方位互联网</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400">解決方案</span>
        </h2>
        <h2 class="pt-5">解锁商业价值，助力企业迈向成功</h2>
      </div>
    </section>

    <section class="w-screen">
      <div class="flex flex-wrap justify-around px-8 sm:px-20">
        <div class="pb-8 w-96" v-for="(service, index) in serviceList" :key="index">
          <el-card class="relative px-6 py-4 tracking-wide text-left transform border-none shadow-2xl bg-gradient-blue -translate-y-1/4">
            <el-image class="absolute bottom-0 left-0 right-0 z-0 w-full h-3/4" :src="homeCap" fit="fill"></el-image>
            <div class="pb-6 text-xl font-bold text-white truncate">{{service.type}}</div>
            <div class="flex items-center pb-3 text-gray-200" v-for="(s, i) in service.dataList" :key="i">
              <i class="block text-blue-600 transform scale-125 fill-current el-icon-success"></i>
              <div class="pl-3 truncate">{{s}}</div>
            </div>
          </el-card>
        </div>
      </div>
    </section>

    <!-- <section>
      <div class="text-2xl text-center text-black sm:text-4xl">适用领域</div>
      <el-divider class="w-1/2 mx-auto"></el-divider>
      <div class="flex flex-wrap justify-around pb-8">
        <div
          v-for="(c, index) in catalogList"
          :key="index"
          class="flex items-center justify-center w-full pb-8 bg-catalog case md:w-1/3"
          :class="index > 2 ? 'hidden md:flex' : ''">
          <div class="flex items-center justify-center w-32 h-32 text-white">
            <el-image class="logo" :class="c.name" :src="c.logo" fit="fill"></el-image>
          </div>
        </div>
      </div>
    </section> -->

    <section>
      <h2 class="text-2xl text-center text-black sm:text-4xl">合作客户</h2>
      <el-divider class="w-1/2 mx-auto"></el-divider>
      <div class="flex flex-wrap justify-around pb-8">
        <div
          v-for="(c, index) in caseList"
          :key="index"
          class="flex items-center justify-center w-full pb-8 case md:w-1/3"
          :class="index > 2 ? 'hidden md:flex' : ''">
          <div class="flex items-center justify-center w-32 h-32 text-white">
            <el-image class="logo" :class="c.name" :src="c.logo" fit="fill"></el-image>
          </div>
        </div>
      </div>
    </section>

    <section>
      <WhyUs></WhyUs>
    </section>

    <section class="px-6 py-10 sm:py-16 sm:px-24">
      <div class="flex items-center justify-between py-6">
        <div class="flex flex-row-reverse items-center w-0 lg:w-1/4">
          <el-image class="block w-1/2 h-1/2" :src="logo" fit="fill"></el-image>
        </div>
        <div class="w-full text-left lg:w-3/4 lg:pl-36">
          <h1 class="text-2xl font-bold text-black sm:text-4xl">广州领燕科技有限公司</h1>
          <div class="pt-3 leading-relaxed tracking-wide sm:pt-6">广州领燕科技有限公司是一家热衷于创新技术服务的企业，我们为品牌和传统企业提供信息化建设和数字化转型的方案咨询，并提供一站式产品研发服务。我们的研发业务包括 APP、小程序、3D应用、H5互动营销页面定制、企业系统及物联网产品等。自2015年以来，我们已服务 Nike、Adidas、Burberry、Starbucks、Converse、Lululemon、GOAT、Tiffany、山姆会员商店、宝马等多个世界知名品牌，并成功帮助客户在中国市场赢得巨大的增长。我们追求极致卓越，力求为客户提供最优质的服务，打造最优质的产品，助力客户落实信息化建设和数字化转型，为其提升自身的盈利能力，实现双赢。</div>
          <div class="pt-3 font-bold text-gray-800">地址：广州市白云区天健创意园2栋302A</div>
        </div>
      </div>

      <el-divider></el-divider>

      <div class="flex items-center justify-between pt-6">
        <div class="flex flex-row-reverse items-center w-0 lg:w-1/4">
          <el-image class="block w-1/2 logo-wcl h-1/2" :src="logoWCL" fit="fill"></el-image>
        </div>
        <div class="w-full text-left lg:w-3/4 lg:pl-36">
          <div class="text-2xl font-bold text-black sm:text-4xl">Wiredcraft（合作伙伴）</div>
          <div class="pt-1 leading-relaxed tracking-wide">- Wiredcraft位于上海市中心，是一家数字应用程序研发商，为企业品牌实现全渠道、跨界或数字化转型方面的策略，发展并建立自己的产品文化。</div>
          <div class="pt-3 leading-relaxed tracking-wide sm:pt-6">
            <a class="link-primary" href="https://wiredcraft.com/" target="_blank">官方网站</a>
          </div>
          <div class="pt-3 font-bold text-gray-800">地址：上海市铜仁路258号，4F</div>
        </div>
      </div>
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

    <section class="flex flex-wrap items-center py-8 bg">
      <h2 class="w-1/2 py-10 pl-6 text-2xl text-left text-black sm:w-2/5 sm:text-center sm:pl-0 sm:text-4xl">最新资讯</h2>
      <div class="flex-1 px-6 text-left sm:pr-10 sm:pl-0">
        <!-- <div class="text-xl leading-tight text-black sm:text-4xl">We bring tech, design, data and business chops together to deliver software solutions to tens of millions of users.</div> -->
        <!-- <el-button class="mt-6">查看更多</el-button> -->
        <el-divider class="mx-auto"></el-divider>
        <div class="post-group">
          <el-card class="mt-6 border-none cursor-pointer bg" v-for="(post, i) in postList" :key="i" shadow="hover" @click.native="tapToPost(i)">
            <div class="flex">
              <el-image class="w-16 h-16" :src="post.thumbnail ? require('@/assets/post/' + post.thumbnail) : logoFinal" fit="fill"></el-image>
              <div class="flex-1 pl-6 pr-0 sm:pl-8 sm:pr-8">
                <div class="text-xl font-bold text-black sm:text-2xl" to="/post">{{post.title}}</div>
                <div class="text-sm sm:text-md">{{post.subTitle}}</div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import WhyUs from '@/components/WhyUs.vue'
import { postList } from '@/posts/postList'

export default {
  name: 'Home',
  metaInfo: {
    title: '首页',
  },
  data() {
    return {
      banner: require('@/assets/home-banner-bg.jpg'),
      homeCap: require('@/assets/home-cap.png'),
      logoFinal: require('@/assets/logo_final.png'),
      logo: require('@/assets/logo_final_tb.png'),
      logoWCL: require('@/assets/logo/wcl.svg'),
      catalogList: [
        {
          logoPosition: '',
          title: '',
          subTitle: '',
          pointList: []
        },
      ],
      serviceList: [
        {
          type: '我们的服务',
          dataList: ['APP及小程序开发', '3D应用定制', '互动营销页面制作']
        },
        {
          type: '数据分析',
          dataList: ['埋点检测', '商业智能', '孪生预测']
        },
        {
          type: '商业资讯',
          dataList: ['行业解决方案', '市场机遇探索', '最佳实践']
        }
      ],
      caseList: [
        {
          name: 'goat',
          logo: require('@/assets/logo/goat.png')
        },
        {
          name: 'lululemon',
          logo: require('@/assets/logo/lululemon.png')
        },
        {
          name: 'burberry',
          logo: require('@/assets/logo/burberry.svg')
        },
        {
          name: 'starbucks',
          logo: require('@/assets/logo/starbucks.svg')
        },
        {
          name: 'nike',
          logo: require('@/assets/logo/nike.svg')
        },
        // {
        //   name: 'adidas',
        //   logo: require('@/assets/logo/adidas.png')
        // },
        {
          name: 'sams',
          logo: require('@/assets/logo/sams.png')
        },
        {
          name: 'converse',
          logo: require('@/assets/logo/converse.jpg')
        },
        {
          name: 'xyy',
          logo: require('@/assets/logo/xyy.png')
        },
        // {
        //   name: 'emaar',
        //   logo: require('@/assets/logo/emaar.svg')
        // },
        {
          name: 'bmw',
          logo: require('@/assets/logo/bmw.png')
        }
      ],
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
          content: '广州市白云区天健创意园2栋302A'
        }
      ],
      postList,
    }
  },
  components: {
    WhyUs,
  },
  methods: {
    tapToPost(id) {
      this.$router.push({
        name: 'Post',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style scope lang="scss">
#home {
  .banner {
    height: 75vh;
    /* background: #00342f; */
    background: #001847;
  }
  .bg-gradient-blue {
    background-image: linear-gradient(to bottom right,#32496d,#001847);
    /* background-image: linear-gradient(to bottom right, #18BC9C, #02463a); */
  }
  .bg-catalog {
  }
  .case {
    .logo {
      width: 100%;
    }
    .lululemon {
      transform: scale(0.78);
    }
    .burberry,
    .nike {
      transform: scale(1.25);
    }
    .starbucks {
      transform: scale(0.8);
    }
    .adidas {
      border-radius: 50%;
    }
    .sams {
      position: relative;
      transform: scale(1.35);
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 6px solid #fff;
      }
    }
    .xyy {
      border-radius: 50%;
      transform: scale(0.80);
    }
    .emaar {
      transform: scale(1.1);
    }
    .bmw {
      transform: scale(0.95);
    }
  }
}
</style>
