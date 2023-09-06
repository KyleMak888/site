<template>
  <div id="mp">
    <section class="relative flex items-center justify-center w-screen banner">
      <el-image class="absolute z-0 w-screen h-full opacity-30" :src="banner" fit="cover"></el-image>
      <div class="z-10 px-8 text-xl tracking-wide text-center text-white md:px-32 sm:text-4xl">
        <h3 class="w-1/2 py-2 mx-auto text-xl border border-gray-100 border-solid">小程序定制开发</h3>
        <div class="pt-6">
          <div>低成本、跨平台、轻量级、开箱即用</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="px-6 py-4 text-center sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">小程序定制开发</h2>
      <p class="w-4/5 pt-6 mx-auto text-left sm:text-xl"><span v-html="space"></span>小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者通过微信首页下拉即可打开应用。也体现了“用完即走”的理念。小程序能够实现消息通知、线下扫码、公众号关联等七大功能。同时，微信小程序更加是推广和营销的优质渠道。</p>
      <p class="w-4/5 pt-1 mx-auto text-left sm:text-xl"><span v-html="space"></span>广州领燕科技深耕微信小程序研发多年，致力于为企业定制专属的小程序应用。我们团队拥有非常丰富的经验和专业知识，基于各个行业和业务场景提供不同的定制研发方案。我们理解客户的需求，将其落地为功能丰富、易于使用的小程序，并确保高质量交付和卓越的用户体验。</p>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <div class="text-xl font-bold text-primary sm:text-4xl">小程序核心优势</div>
      <p class="w-4/5 pt-2 mx-auto text-center sm:text-xl">丰富的使用场景，离用户更近一步</p>
      <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
        <el-card
          class="items-center w-40 px-2 pt-6 mb-6 flow flow-col sm:w-48 h-80"
          body-style="padding: 0;"
          shadow="hover"
          v-for="(advantage, index) in advantageList"
          :key="index"
        >
          <el-image class="w-20 h-20 sm:w-24 sm:h-24" :src="advantage.icon" fit="fill" :alt="advantage.alt"></el-image>
          <div class="py-3 font-bold text-center text-gray-800">{{advantage.title}}</div>
          <div class="text-center text-md">{{advantage.desc}}</div>
        </el-card>
      </div>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">行业解决方案</h2>
      <p class="w-4/5 pt-2 mx-auto text-center sm:text-xl">定制化行业需求，打造专属产品</p>
      <div class="flex flex-wrap justify-around py-8">
        <div
          v-for="(solution, index) in solutionList"
          :key="index"
          class="flex items-center justify-center w-40 h-40 p-1 md:w-64 md:h-64"
          :class="index > 5 ? 'hidden md:flex' : ''"
          @mouseover="shadow = index + 1"
          @mouseleave="shadow = 0"
        >
          <div class="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
            <el-image class="absolute inset-0 z-0" :src="solution.bg" fit="cover"></el-image>
            <div class="absolute inset-0 z-0 bg-black bg-opacity-60"></div>
            <div
              class="absolute inset-0 z-0 transition-transform duration-500 delay-100 transform bg-green-600 bg-opacity-40"
              :class="shadow == index + 1 ? 'translate-y-0' : 'translate-y-full'"
            ></div>
            <el-image class="z-10 h-16 w-14 md:w-20 md:h-24" :src="solution.icon" fit="fill"></el-image>
            <div class="z-10 pt-3 text-xl font-bold text-center text-white md:text-2xl">{{solution.label}}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-wrap items-center py-8 bg">
      <div class="w-1/2 py-10 pl-6 text-2xl text-left text-black sm:w-2/5 sm:text-center sm:pl-0 sm:text-4xl">开发资讯</div>
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
import { postList } from '@/posts/postList'

export default {
  name: 'MP',
  data() {
    return {
      banner: require('@/assets/mp-banner-bg.jpg'),
      space: '&emsp;&emsp;',
      logoFinal: require('@/assets/logo_final.png'),
      postList,
      advantageList: [
        {
          icon: require('@/assets/icons/mp-advantage-1.png'),
          title: '线下扫码',
          desc: '扫码即可打开小程序，实现线上线下相互导流',
          alt: '线下扫码'
        },
        {
          icon: require('@/assets/icons/mp-advantage-2.png'),
          title: '微信搜索',
          desc: '微信聊天主界面下拉即可搜索小程序，可见小程序地位之高',
          alt: '微信搜索'
        },
        {
          icon: require('@/assets/icons/mp-advantage-3.png'),
          title: '分享裂变',
          desc: '用户可将小程序转发给好友、群聊和朋友圈',
          alt: '分享裂变'
        },
        {
          icon: require('@/assets/icons/mp-advantage-4.png'),
          title: '公众号关联',
          desc: '从公众号关联小程序',
          alt: '公众号关联'
        },
        {
          icon: require('@/assets/icons/mp-advantage-5.png'),
          title: '历史列表',
          desc: '使用过的小程序保存在小程序列表，下次使用时可直接打开',
          alt: '历史列表'
        },
        {
          icon: require('@/assets/icons/mp-advantage-6.png'),
          title: '附近的小程序',
          desc: '展示附近五公里内的门店',
          alt: '附近的小程序'
        }
      ],
      solutionList: [
        {
          bg: require('@/assets/mp-solution-bg-1.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-1.png'),
          label: '电商'
        },
        {
          bg: require('@/assets/mp-solution-bg-2.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-2.png'),
          label: '教育'
        },
        {
          bg: require('@/assets/mp-solution-bg-3.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-3.png'),
          label: '餐饮'
        },
        {
          bg: require('@/assets/mp-solution-bg-4.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-4.png'),
          label: '零售'
        },
        {
          bg: require('@/assets/mp-solution-bg-5.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-5.png'),
          label: '酒店'
        },
        {
          bg: require('@/assets/mp-solution-bg-6.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-6.png'),
          label: '汽车'
        },
        {
          bg: require('@/assets/mp-solution-bg-7.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-7.png'),
          label: '美容'
        },
        {
          bg: require('@/assets/mp-solution-bg-8.jpg'),
          icon: require('@/assets/icons/mp-solution-icon-8.png'),
          label: '文娱'
        },
        // {
        //   bg: require('@/assets/mp-solution-bg-9.jpg'),
        //   icon: require('@/assets/icons/mp-solution-icon-9.png'),
        //   label: '健身'
        // }
      ],
      shadow: 0
    }
  },
  components: {
  },
  mounted () {
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
#mp {
  .banner {
    height: 50vh;
    background: #001847;
  }
  .h-contrast {
    height: 26rem;
  }
  .h-fit {
    height: fit-content;
  }
}
</style>
