<template>
  <div id="app">
    <section class="banner relative flex items-center justify-center w-screen">
      <el-image class="absolute w-screen h-full opacity-30 z-0" :src="banner" fit="cover"></el-image>
      <div class="px-8 md:px-32 text-xl sm:text-4xl text-center text-white tracking-wide z-10">
        <div class="w-1/2 mx-auto text-xl border border-solid border-gray-100 py-2">APP定制开发</div>
        <div class="pt-6">
          <div>专业APP开发团队，助力企业成长</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="py-4 px-6 sm:py-12 sm:px-24 text-center">
      <div class="text-primary text-xl sm:text-4xl font-bold">APP定制开发</div>
      <p class="w-4/5 text-left sm:text-xl mx-auto pt-6"><span v-html="space"></span>如今，手机作为移动终端已成为人们生活中不可替代的一环。在现阶段企业要寻求发展，不想沦为时代的炮灰，就不能故步自封，APP开发上线迫在眉睫。多个案例表明，商用APP会给企业带来更多效益。在传统行业与移动互联网融为一个整体的时候，企业和用户之间将可以非常方便地建立一个良性的闭环。</p>
      <p class="w-4/5 text-left sm:text-xl mx-auto pt-1"><span v-html="space"></span>主流的APP运行环境有 iOS系统和 Android系统，最常用的开发技术分为原生开发与混合开发两种。</p>
    </section>

    <section class="bg py-4 px-6 sm:py-12 sm:px-24">
      <div class="relative flex flex-wrap">
        <el-card class="w-full h-contrast sm:w-1/2 text-left text-primary bg-secondary" body-style="padding: 6% 8%;">
          <div class="text-md sm:text-2xl font-bold">原生开发</div>
          <p class="text-sm sm:text-md font-medium pt-6 leading-normal">原生APP开发（Native App）即我们所称的传统APP开发模式，该开发针对iOS、 Android等不同的手机操作系统采用不同的语言和框架进行开发，该模式通常是由“云服务器+APP应用客户端”两部份构成，APP应用所有的UI元素、数据内容、逻辑框架均安装在手机終端上。</p>
          <p class="text-sm sm:text-md font-medium pt-6">原生APP开发的优点：</p>
          <p class="text-sm sm:text-md font-medium pt-6">○ <span v-html="shortSpace"></span>兼容性更高</p>
          <p class="text-sm sm:text-md font-medium">○ <span v-html="shortSpace"></span>流杨性更好</p>
          <p class="text-sm sm:text-md font-medium">○ <span v-html="shortSpace"></span>安全性更高</p>
          <p class="text-sm sm:text-md font-medium">○ <span v-html="shortSpace"></span>APP响应速度快</p>
          <p class="text-sm sm:text-md font-medium">○ <span v-html="shortSpace"></span>APP功能可以自定</p>
        </el-card>
        <div class="w-full h-fit absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-black">VS</div>
        <el-card class="w-full h-contrast sm:w-1/2 text-left text-secondary bg-primary" body-style="padding: 6% 8%;">
          <div class="text-md sm:text-2xl font-bold">混合开发</div>
          <p class="text-sm sm:text-md font-medium pt-6 leading-normal">混合APP开发是一种框架型APP开发模式（通常有 HTML5、React Native、Flutter 等），该开发模式具有跨平台的天然优势，通常由数据驱动。特别是对于使用H5模式开发的应用，用户只需安装APP客户端的框架部份，而应用的数据则是每次打开APP的时候，通过主动拉取云端数据呈现给手机用户。该模式既有每次更新无需通过应用商店等优点，也存在比较于原生APP其无法实现部分功能的缺点。</p>
          <p class="text-sm sm:text-md font-medium pt-6">混合开发的优点：</p>
          <p class="text-sm sm:text-md font-medium pt-6">○ <span v-html="shortSpace"></span>跨平台，一套代码多平台应用</p>
          <p class="text-sm sm:text-md font-medium">○ <span v-html="shortSpace"></span>支持热更新</p>
          <p class="text-sm sm:text-md font-medium">○ <span v-html="shortSpace"></span>维护成本相对较低</p>
        </el-card>
      </div>
    </section>

    <section>
      <DevFlow></DevFlow>
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
import DevFlow from '@/components/DevFlow.vue'
import { postList } from '@/posts/postList'

export default {
  name: 'App',
  data() {
    return {
      banner: require('@/assets/app-banner-bg.jpg'),
      space: '&emsp;&emsp;',
      shortSpace: '&emsp;',
      logoFinal: require('@/assets/logo_final.png'),
      postList,
    }
  },
  components: {
    DevFlow
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
#app {
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
