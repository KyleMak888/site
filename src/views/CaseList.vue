<template>
  <div id="case-list">
    <section class="banner relative flex items-center justify-center w-screen">
      <el-image class="absolute w-screen h-full opacity-30 z-0" :src="banner" fit="cover"></el-image>
      <div class="px-8 md:px-32 text-xl sm:text-4xl text-center text-white tracking-wide z-10">
        <div class="pt-6">
          <div class="font-bold">合作案例</div>
          <div class="pt-8">服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="pt-10 px-6 sm:pt-16 sm:px-24 text-center">
      <div class="text-2xl sm:text-4xl py-6 font-bold">我们引以为傲的一些作品</div>
    </section>

    <section class="py-8 px-6 sm:py-12 sm:px-24 flex flex-wrap justify-around">
      <div class=" w-full md:w-2/5" v-for="(post, index) in postList" :key="index">
        <el-card class="cursor-pointer mx-auto mt-0 border-none" shadow="never" @click.native="readPost(index)">
          <div class="">
            <el-image class="w-full" :src="('@/assets/post/' + post.thumbnail)" fit="fill"></el-image>
            <div class="flex-1 self-start pl-2 pr-0 sm:pl-2 sm:pr-2 text-left py-2 md:py-5">
              <div class="text-xl sm:text-2xl text-black font-bold">{{post.title}}</div>
              <div class="text-sm sm:text-md">{{post.desc}}</div>
            </div>
            <!-- <div class="w-full">
              <el-image class="w-12 mx-auto" :src="rightArrow" fit="fill"></el-image>
            </div> -->
          </div>
        </el-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CaseList',
  metaInfo: {
    title: '合作案例',
  },
  data() {
    return {
      banner: require('@/assets/case-banner-bg.jpg'),
      rightArrow: require('@/assets/icons/right-arrow-cycle.svg'),
      postList: [
        {
          name: 'goat',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '够特线上店',
          desc: '文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述文章概述'
        },
        {
          name: 'lululemon',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: 'lululemon热汗生活',
          desc: '文章概述'
        },
        {
          name: 'burberry',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: 'BURBERRY线上精品店',
          desc: '文章概述'
        },
        {
          name: 'starbucks',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '星巴克APP&官网',
          desc: '文章概述'
        },
        {
          name: 'nike',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '耐克小程序',
          desc: '文章概述'
        },
        {
          name: 'adidas',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '阿迪达斯线上商城',
          desc: '文章概述'
        },
        {
          name: 'sams',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '山姆会员商店SamsClub',
          desc: '文章概述'
        },
        {
          name: 'converse',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '匡威答题日活动',
          desc: '文章概述'
        },
        {
          name: 'xyy',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '喜越益购车APP',
          desc: '文章概述'
        },
        {
          name: 'bmw',
          thumbnail: require('@/assets/app-banner-bg.jpg'),
          title: '宝马公益APP',
          desc: '文章概述'
        },
      ]
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    readPost(id) {
      console.log(id)
      this.$router.push({
        path: `/post/${id}`
      })
    }
  }
}
</script>

<style scope lang="scss">
</style>
