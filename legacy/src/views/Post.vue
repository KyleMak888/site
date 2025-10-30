<template>
  <div id="post" class="px-6">
    <section class="flex w-full pb-12 sm:pb-24">
      <div class="w-0 sm:w-2/5"></div>
      <div class="w-full pt-16 text-6xl text-left sm:w-3/5 sm:pt-24">
        <div class="text-3xl font-bold sm:text-6xl">{{postList[id].title}}</div>
        <div class="pt-3 text-lg sm:text-2xl">{{postList[id].subTitle}}</div>
        <div class="pt-3 pl-1 text-sm text-gray-600 sm:text-sm">{{postList[id].postDate}}</div>
      </div>
    </section>

    <section>
      <el-image class="w-full" :src="require('@/assets/post/' + postList[id].poster)" fit="contain"></el-image>
    </section>

    <section>
      <div class="flex flex-col-reverse flex-wrap w-full py-6 pt-12 md:flex-row md:pt-28">
        <div class="w-full h-full pl-6 md:w-2/5 md:sticky top-24">
          <div class="flex items-center w-full py-5 pl-3 border-t border-b md:w-3/4">
            <div class="w-16 h-16 bg-gray-100 rounded-full bg">
              <el-image class="w-16 h-16 rounded-full" :src="logoFinal" fit="fill"></el-image>
            </div>
            <div class="pl-8 text-left">
              <div class="text-lg font-bold">Kyle Mai</div>
              <div class="text-md">CEO</div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="pt-6 text-md">↓↓↓掃碼添加微信↓↓↓</div>
            <el-image class="w-32 mt-5" :src="wechatCode" fit="fill"></el-image>
          </div>
        </div>

        <div class="w-full text-left md:w-3/5">
          <div class="pt-5" v-for="(content, i) in postList[id].contentList" :key="i">
            <!-- hashtag -->
            <div v-if="content.type === 'hashtag'">
              <div class="px-3 py-3 m-auto text-center w-fit bg-secondary text-primary">{{content.value}}</div>
            </div>
            <!-- image -->
            <div v-else-if="content.type === 'image'">
              <el-image class="w-full" :src="require('@/assets/post/' + content.value)" fit="contain"></el-image>
            </div>
            <!-- text -->
            <div v-else-if="content.type === 'textList'">
              <div v-for="(copy, i) in content.value" :key="i">
                <p class="pt-2">{{copy}}</p>
              </div>
            </div>
            <!-- code -->
            <!-- https://github.com/elisiondesign/vue-code-highlight -->
            <div class="overflow-x-scroll" v-else-if="content.type === 'code'">
              <vue-code-highlight :language="content.lang">
                {{content.value}}
              </vue-code-highlight>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-wrap items-center py-8">
      <div class="w-1/2 py-10 pl-6 text-2xl text-left text-black sm:w-2/5 sm:text-center sm:pl-0 sm:text-4xl">最新資訊</div>
      <div class="flex-1 px-6 text-left sm:pr-10 sm:pl-0">
        <el-divider class="mx-auto"></el-divider>
        <div class="post-group">
          <el-card class="mt-6 border-none cursor-pointer" v-for="(post, i) in postList.slice(0, 3)" :key="i" shadow="hover" @click.native="tapToPost(i)">
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
import { component as VueCodeHighlight } from 'vue-code-highlight';
import { postList } from '@/posts/postList'

export default {
  name: 'Post',
  metaInfo: {
    title: '',
    titleTemplate: null
  },
  metaInfo() {
    return {
      title: this.postList[this.id].title,
      meta: [
        {
          property: 'og:title',
          vmid: 'og:title',
          content: this.postList[this.id].title,
        },
        {
          vmid: 'description',
          name: 'description',
          content: this.getMetaInfoDescription(),
        }
      ]
    }
  },
  data() {
    return {
      logoFinal: require('@/assets/logo_final.png'),
      wechatCode: require('@/assets/wechat_qrcode.png'),
      postList,
    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  components: {
    VueCodeHighlight,
  },
  methods: {
    getMetaInfoDescription() {
      switch (this.id) {
        case 0:
          return '美国东部时间 2 月 8 日，Rust 基金会 宣布 正式成立。  Rust 基金会是一个新的独立的非盈利组织，负责管理Rust编程语言及生态。该组织将致力于为那些管理和开发该项目的维护者提供支持。Rust 基金会将于美东时间 2 月 9 日下午 4 点举行第一次董事会会议。'
        case 1:
          return 'Backend For Frontend，即服务于前端的后端。  面对越来越复杂的多端应用的需求，后端提供的 RESTful 接口形式难以应对多变的页面需求，这时候需要一层专门的 BFF 层来弥合这部分差异。  例如同样一个商品详情页，在 App 端上和 PC 端上，两者的展示样式就有很多的不同。以往前后端分离的方式可能有几种做法。'
        case 2:
          return '作为技术负责人，如何从0搭建公司后端技术栈。  今天要说的后台是大后台的概念，放在服务器上的东西都属于后台的东西，比如使用的框架，语言，数据库，服务，操作系统等等。'
        default:
          return this.postList[this.id].title
      }
    },
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
.w-fit {
  width: fit-content;
}
</style>
