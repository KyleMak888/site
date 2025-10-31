<template>
  <div id="app">
    <section class="relative flex items-center justify-center w-screen banner">
      <el-image class="absolute z-0 w-screen h-full opacity-30" :src="banner" fit="cover"></el-image>
      <div class="z-10 px-8 text-xl tracking-wide text-center text-white md:px-32 sm:text-4xl">
        <h3 class="w-1/2 py-2 mx-auto text-xl border border-gray-100 border-solid">APP定制开发</h3>
        <div class="pt-6">
          <div>专业APP开发团队，助力企业成长</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="px-6 py-4 text-center sm:py-12 sm:px-24">
      <h1 class="text-xl font-bold text-primary sm:text-4xl">APP定制开发</h1>
      <p class="w-4/5 pt-6 mx-auto text-left sm:text-xl"><span v-html="space"></span>如今，手机作为移动终端已成为人们生活中不可替代的一环。在现阶段企业要寻求发展，不想沦为时代的炮灰，就不能故步自封，APP开发上线迫在眉睫。多个案例表明，商用APP会给企业带来更多效益。在传统行业与移动互联网融为一个整体的时候，企业和用户之间将可以非常方便地建立一个良性的闭环。</p>
      <!-- <p class="w-4/5 pt-1 mx-auto text-left sm:text-xl"><span v-html="space"></span>主流的APP运行环境有 iOS系统和 Android系统，最常用的开发技术分为原生开发与混合开发两种。</p> -->
    </section>

    <section class="px-6 py-4 bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">开发模式对比</h2>
      <div class="relative flex flex-wrap pt-6">
        <el-card class="w-full text-left h-contrast sm:w-1/2 text-primary bg-secondary" body-style="padding: 6% 8%;">
          <div class="font-bold text-md sm:text-2xl">原生开发</div>
          <p class="pt-6 text-sm font-medium leading-normal sm:text-md">原生APP开发（Native App）即我们所称的传统APP开发模式，该开发针对iOS、 Android等不同的手机操作系统采用不同的语言和框架进行开发，该模式通常是由“云服务器+APP应用客户端”两部份构成，APP应用所有的UI元素、数据内容、逻辑框架均安装在手机終端上。</p>
          <p class="pt-6 text-sm font-medium sm:text-md">原生APP开发的优点：</p>
          <p class="pt-6 text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>兼容性更高</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>流杨性更好</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>安全性更高</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>APP响应速度快</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>APP功能可以自定</p>
        </el-card>
        <div class="absolute w-full text-3xl font-black text-white transform -translate-x-1/2 -translate-y-1/2 h-fit inset-1/2">VS</div>
        <el-card class="w-full text-left h-contrast sm:w-1/2 text-secondary bg-primary" body-style="padding: 6% 8%;">
          <div class="font-bold text-md sm:text-2xl">混合开发</div>
          <p class="pt-6 text-sm font-medium leading-normal sm:text-md">混合APP开发是一种框架型APP开发模式（通常有 HTML5、React Native、Flutter 等），该开发模式具有跨平台的天然优势，通常由数据驱动。特别是对于使用H5模式开发的应用，用户只需安装APP客户端的框架部份，而应用的数据则是每次打开APP的时候，通过主动拉取云端数据呈现给手机用户。该模式既有每次更新无需通过应用商店等优点，也存在比较于原生APP其无法实现部分功能的缺点。</p>
          <p class="pt-6 text-sm font-medium sm:text-md">混合开发的优点：</p>
          <p class="pt-6 text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>跨平台，一套代码多平台应用</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>支持热更新</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>维护成本相对较低</p>
          <p class="text-sm font-medium sm:text-md">○ <span v-html="shortSpace"></span>生态更好</p>
        </el-card>
      </div>
    </section>

    <section>
      <DevFlow></DevFlow>
    </section>

    <section>
      <AppCaseList></AppCaseList>
    </section>

    <section class="flex flex-wrap items-center py-8 bg">
      <div class="w-1/2 py-10 pl-6 text-2xl text-left text-black sm:w-2/5 sm:text-center sm:pl-0 sm:text-4xl">最新资讯</div>
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
import DevFlow from '@/components/DevFlow.vue'
import AppCaseList from '@/components/AppCaseList.vue'
import { postList } from '@/posts/postList'

export default {
  name: 'App',
  metaInfo: {
    title: 'APP定制开发',
    meta: [
      {
        property: 'og:title',
        vmid: 'og:title',
        content: 'APP定制开发',
      },
      {
        vmid: 'description',
        name: 'description',
        content: '如今，手机作为移动终端已成为人们生活中不可替代的一环。在现阶段企业要寻求发展，不想沦为时代的炮灰，就不能故步自封，APP开发上线迫在眉睫。多个案例表明，商用APP会给企业带来更多效益。在传统行业与移动互联网融为一个整体的时候，企业和用户之间将可以非常方便地建立一个良性的闭环。',
      }
    ]
  },
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
    DevFlow,
    AppCaseList,
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
