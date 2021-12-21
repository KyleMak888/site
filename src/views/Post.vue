<template>
  <div id="post" class="px-6">
    <section class="flex w-full pb-12 sm:pb-24">
      <div class="w-0 sm:w-2/5"></div>
      <div class="w-full sm:w-3/5 pt-16 sm:pt-24 text-6xl text-left">
        <div class="text-3xl sm:text-6xl font-bold">{{postList[id].title}}</div>
        <div class="text-lg sm:text-2xl pt-3">{{postList[id].subTitle}}</div>
        <div class="text-sm sm:text-sm pt-3 pl-1 text-gray-600">{{postList[id].postDate}}</div>
      </div>
    </section>

    <section>
      <el-image class="w-full" :src="require('@/assets/post/' + postList[id].poster)" fit="contain"></el-image>
    </section>

    <section>
      <div class="flex flex-wrap flex-col-reverse md:flex-row w-full pt-12 md:pt-28 py-6">
        <div class="pl-6 w-full h-full md:w-2/5 md:sticky top-24">
          <div class="w-full md:w-3/4 flex items-center py-5 pl-3 border-t border-b">
            <div class="bg rounded-full w-16 h-16 bg-gray-100">
              <el-image class="rounded-full w-16 h-16" :src="logoFinal" fit="fill"></el-image>
            </div>
            <div class="text-left pl-8">
              <div class="text-lg font-bold">Kyle Mai</div>
              <div class="text-md">CEO</div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="text-md pt-6">↓↓↓扫码添加微信↓↓↓</div>
            <el-image class="mt-5 w-32" :src="wechatCode" fit="fill"></el-image>
          </div>
        </div>

        <div class="w-full md:w-3/5 text-left">
          <div class="pt-5" v-for="(content, i) in postList[id].contentList" :key="i">
            <!-- hashtag -->
            <div v-if="content.type === 'hashtag'">
              <div class="w-fit bg-secondary text-primary px-3 py-3 text-center m-auto">{{content.value}}</div>
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

    <section class="py-8 flex items-center flex-wrap">
      <div class="w-1/2 text-left pl-6 sm:w-2/5 sm:text-center sm:pl-0 text-2xl sm:text-4xl text-black py-10">最新资讯</div>
      <div class="flex-1 text-left px-6 sm:pr-10 sm:pl-0">
        <el-divider class="mx-auto"></el-divider>
        <div class="post-group">
          <el-card class="mt-6 cursor-pointer border-none" v-for="(post, i) in postList.slice(0, 3)" :key="i" shadow="hover" @click.native="tapToPost(i)">
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
import { component as VueCodeHighlight } from 'vue-code-highlight';
import { postList } from '@/posts/postList'

export default {
  name: 'Post',
  data() {
    return {
      logoFinal: require('@/assets/logo_final.png'),
      wechatCode: require('@/assets/wechat_qrcode.jpeg'),
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
