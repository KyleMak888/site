<template>
  <div id="home">
    <section class="banner relative flex items-center w-screen">
      <el-image class="absolute w-screen h-full opacity-30 z-0" :src="banner" fit="cover"></el-image>
      <div class="px-10 md:px-32 text-2xl sm:text-6xl text-left text-white tracking-wide font-bold z-10">
        <div>全方位互联网解决方案</div>
        <div class="pt-5">解锁商业价值，助力企业迈向成功</div>
      </div>
    </section>

    <section class="w-screen">
      <div class="px-8 sm:px-20 flex flex-wrap justify-around">
        <div class="w-96 pb-8" v-for="(service, index) in serviceList" :key="index">
          <el-card class="relative border-none bg-gradient-blue px-6 py-4 text-left tracking-wide shadow-2xl transform -translate-y-1/4">
            <el-image class="absolute left-0 right-0 bottom-0 w-full h-3/4 z-0" :src="homeCap" fit="fill"></el-image>
            <div class="text-xl text-white pb-6 truncate">{{service.type}}</div>
            <div class="flex items-center pb-3 text-gray-300" v-for="(s, i) in service.dataList" :key="i">
              <i class="block el-icon-success fill-current text-blue-600 transform scale-125"></i>
              <div class="pl-3 truncate">{{s}}</div>
            </div>
          </el-card>
        </div>
      </div>
    </section>

    <!-- <section>
      <div class="text-center text-2xl sm:text-4xl text-black">适用领域</div>
      <el-divider class="w-1/2 mx-auto"></el-divider>
      <div class="pb-8 flex flex-wrap justify-around">
        <div
          v-for="(c, index) in catalogList"
          :key="index"
          class="bg-catalog case w-full md:w-1/3 pb-8 flex items-center justify-center"
          :class="index > 2 ? 'hidden md:flex' : ''">
          <div class="w-32 h-32 flex items-center justify-center text-white">
            <el-image class="logo" :class="c.name" :src="c.logo" fit="fill"></el-image>
          </div>
        </div>
      </div>
    </section> -->

    <section>
      <div class="text-center text-2xl sm:text-4xl text-black">合作案例</div>
      <el-divider class="w-1/2 mx-auto"></el-divider>
      <div class="pb-8 flex flex-wrap justify-around">
        <div
          v-for="(c, index) in caseList"
          :key="index"
          class="case w-full md:w-1/3 pb-8 flex items-center justify-center"
          :class="index > 2 ? 'hidden md:flex' : ''">
          <div class="w-32 h-32 flex items-center justify-center text-white">
            <el-image class="logo" :class="c.name" :src="c.logo" fit="fill"></el-image>
          </div>
        </div>
      </div>
    </section>

    <section class="bg py-8 flex items-center flex-wrap">
      <div class="w-1/2 text-left pl-6 sm:w-2/5 sm:text-center sm:pl-0 text-2xl sm:text-4xl text-black py-10">最新资讯</div>
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
// @ is an alias to /src
import { postList } from '@/posts/postList'

export default {
  name: 'Home',
  data() {
    return {
      banner: require('@/assets/home-banner-bg.jpg'),
      homeCap: require('@/assets/home-cap.png'),
      logoFinal: require('@/assets/logo_final.png'),
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
          dataList: ['APP及小程序开发', '物联网及大数据', '定制化软件']
        },
        {
          type: '数据分析',
          dataList: ['埋点检测', '洞察发现', '建模预测']
        },
        {
          type: '商业咨询',
          dataList: ['解决方案', '市场机遇探索', '执行辅助']
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
      postList,
    }
  },
  components: {
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
    background: #001847;
  }
  .bg-gradient-blue {
    background-image: linear-gradient(to bottom right,#32496d,#001847);
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
