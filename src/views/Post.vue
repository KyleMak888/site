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
            <div class="pt-6 text-md">↓↓↓扫码添加微信↓↓↓</div>
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
      <div class="w-1/2 py-10 pl-6 text-2xl text-left text-black sm:w-2/5 sm:text-center sm:pl-0 sm:text-4xl">最新资讯</div>
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
