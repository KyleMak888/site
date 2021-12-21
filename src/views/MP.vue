<template>
  <div id="mp">
    <section class="banner relative flex items-center justify-center w-screen">
      <el-image class="absolute w-screen h-full opacity-30 z-0" :src="banner" fit="cover"></el-image>
      <div class="px-8 md:px-32 text-xl sm:text-4xl text-center text-white tracking-wide z-10">
        <div class="w-1/2 mx-auto text-xl border border-solid border-gray-100 py-2">小程序定制开发</div>
        <div class="pt-6">
          <div>低成本、跨平台、轻量级、开箱即用</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="py-4 px-6 sm:py-12 sm:px-24 text-center">
      <div class="text-primary text-xl sm:text-4xl font-bold">小程序定制开发</div>
      <p class="w-4/5 text-left sm:text-xl mx-auto pt-6"><span v-html="space"></span>小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。也体现了“用完即走”的理念。小程序能够实现消息通知、线下扫码、公众号关联等七大功能。其中，通过公众号关联，用户可以实现公众号与小程序之间相互跳转。</p>
      <p class="w-4/5 text-left sm:text-xl mx-auto pt-1"><span v-html="space"></span>小程序是近年来最大的移动互联网商机，率先上线小程序，抢占流量红利，实现营收激增。目前，微信端小程序已支持互动直播。</p>
    </section>

    <section class="bg py-4 px-6 sm:py-12 sm:px-24 text-center">
      <div class="text-primary text-xl sm:text-4xl font-bold">小程序核心优势</div>
      <p class="w-4/5 text-center sm:text-xl mx-auto pt-2">丰富的使用场景，离用户更近一步</p>
      <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
        <el-card
          class="flow items-center flow-col pt-6 px-2 w-40 sm:w-48 h-80 mb-6"
          body-style="padding: 0;"
          shadow="hover"
          v-for="(advantage, index) in advantageList"
          :key="index"
        >
          <el-image class="w-20 h-20 sm:w-24 sm:h-24" :src="advantage.icon" fit="fill"></el-image>
          <div class="font-bold text-center text-gray-800 py-3">{{advantage.title}}</div>
          <div class="text-md text-center">{{advantage.desc}}</div>
        </el-card>
      </div>
    </section>

    <section class="bg py-4 px-6 sm:py-12 sm:px-24 text-center">
      <div class="text-primary text-xl sm:text-4xl font-bold">行业解决方案</div>
      <p class="w-4/5 text-center sm:text-xl mx-auto pt-2">定制化行业需求，打造专属产品</p>
      <div class="py-8 flex flex-wrap justify-around">
        <div
          v-for="(solution, index) in solutionList"
          :key="index"
          class="w-40 md:w-64 h-40 md:h-64 p-1 flex items-center justify-center"
          :class="index > 5 ? 'hidden md:flex' : ''"
          @mouseover="shadow = index + 1"
          @mouseleave="shadow = 0"
        >
          <div class="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <el-image class="absolute inset-0 z-0" :src="solution.bg" fit="cover"></el-image>
            <div class="absolute inset-0 z-0 bg-opacity-60 bg-black"></div>
            <div
              class="absolute inset-0 z-0 bg-opacity-40 delay-100 duration-500 transition-transform transform bg-green-600"
              :class="shadow == index + 1 ? 'translate-y-0' : 'translate-y-full'"
            ></div>
            <el-image class="w-14 h-16 md:w-20 md:h-24 z-10" :src="solution.icon" fit="fill"></el-image>
            <div class="text-xl md:text-2xl font-bold text-center pt-3 text-white z-10">{{solution.label}}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg py-8 flex items-center flex-wrap">
      <div class="w-1/2 text-left pl-6 sm:w-2/5 sm:text-center sm:pl-0 text-2xl sm:text-4xl text-black py-10">开发资讯</div>
      <div class="flex-1 text-left px-6 sm:pr-10 sm:pl-0">
        <!-- <div class="text-xl sm:text-4xl text-black leading-tight">We bring tech, design, data and business chops together to deliver software solutions to tens of millions of users.</div> -->
        <!-- <el-button class="mt-6">查看更多</el-button> -->
        <el-divider class="mx-auto"></el-divider>
        <div class="post-group">
          <el-card class="mt-6 bg cursor-pointer border-none" v-for="(post, i) in postList" :key="i" shadow="hover" @click.native="tapToPost(i)">
            <div class="flex">
              <el-image class="w-16 h-16" :src="post.thumbnail ? require('@/assets/post/' + post.thumbnail) : logoFinal" fit="fill"></el-image>
              <div class="flex-1 pl-6 pr-0 sm:pl-8 sm:pr-8">
                <div class="text-xl sm:text-2xl text-black font-bold" to="/post">{{post.title}}</div>
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
          desc: '扫码即可打开小程序，实现线上线下相互导流'
        },
        {
          icon: require('@/assets/icons/mp-advantage-2.png'),
          title: '微信搜索',
          desc: '微信聊天主界面下拉即可搜索小程序，可见小程序地位之高'
        },
        {
          icon: require('@/assets/icons/mp-advantage-3.png'),
          title: '分享裂变',
          desc: '用户可将小程序转发给好友、群聊和朋友圈'
        },
        {
          icon: require('@/assets/icons/mp-advantage-4.png'),
          title: '公众号关联',
          desc: '从公众号关联小程序'
        },
        {
          icon: require('@/assets/icons/mp-advantage-5.png'),
          title: '历史列表',
          desc: '使用过的小程序保存在小程序列表，下次使用时可直接打开'
        },
        {
          icon: require('@/assets/icons/mp-advantage-6.png'),
          title: '附近的小程序',
          desc: '展示附近五公里内的门店'
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
</style>
