<template>
  <div id="marketing">
    <section class="relative flex items-center justify-center w-screen banner">
      <el-image class="absolute z-0 w-screen h-full opacity-30" :src="banner" fit="cover"></el-image>
      <div class="z-10 px-8 text-xl tracking-wide text-center text-white md:px-32 sm:text-4xl">
        <h3 class="w-1/2 py-2 mx-auto text-xl border border-gray-100 border-solid">H5互动营销</h3>
        <div class="pt-6">
          <div>营销是品牌的主心骨，互动是营销的催化剂</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="px-6 py-4 text-center sm:py-12 sm:px-24">
      <h1 class="text-xl font-bold text-primary sm:text-4xl">H5互动营销</h1>
      <p class="w-4/5 pt-6 mx-auto text-left sm:text-xl"><span v-html="space"></span>品牌离不开营销，领燕科技结合品牌元素，为各类品牌提供营销活动页面的设计和研发服务。H5互动营销比起传统的广告投放具有自发裂变的优势，用户可以通过打卡或者将互动结果分享到社交媒体上，从而吸引更多的用户参与到活动中来。H5互动营销可以收集用户的行为数据，通过分析这些数据可以了解用户的兴趣和喜好，从而精准地进行销售和推广。这种数据驱动的营销方式可以大大提高品牌的转化率和ROI。</p>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">寻礼游戏</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="giftFinderImg" />
        <div class="flex-1 p-3 text-left sm:text-xl sm:pl-16">
          <p class="mb-1">这是领燕科技为Tiffany在2022年上线的一个互动营销小游戏。在游戏开始后，会不断掉落着各种时尚饰品和精心挑选的词语，饰品和词语会受到重力的影响而移动，仿佛置于真实世界之中！该游戏还融合了品牌与节日的元素，利于用户在交互过程中对品牌留下深刻的印象。</p>
          <p class="mb-1">寻礼游戏为品牌与用户之间提供了更深层次互动的机会。用户通过选择喜爱的词语，将得到一份个性化的商品推荐列表，从而不再为购买决策而犹豫不决。</p>
          <p class="mb-1">在游戏过程中，我们还为Tiffany详细记录了用户的行为数据。活动结束后通过对数据进行分析，更好地了解目标客户的喜好和需求，为日后实行更加精准的营销提供支撑。</p>
        </div>
      </div>
    </section>

    <!-- <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">贺卡活动</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <div class="flex-1 p-3 text-left sm:text-xl sm:pr-16">
          <p class="mb-1">在活动期间</p>
          <p class="mb-1"></p>
          <p class="mb-1"></p>
        </div>
        <el-image class="w-full rounded-md digital-human-img h-fit sm:w-1/2" :src="giftCardImg" fit="cover" />
      </div>
    </section> -->

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">天天红包</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <div class="flex-1 p-3 text-left sm:text-xl sm:pr-16">
          <p class="mb-1">红包营销是一种简单而有效的策略，通过给予用户奖励，吸引用户参与和推广，从而提高品牌或产品的知名度和影响力。红包营销有以下作用：</p>
          <p class="mb-1">（1）拉新。基于人的天性，大部分用户容易被免费或小利所吸引，通过红包对用户进行补贴，用户获得红包进而产生消费行为。获得新用户的同时，也起到了培养用户习惯，占领市场份额的作用，典型的如滴滴刚崛起时发的乘客红包。</p>
          <p class="mb-1">（2）提升转化率。通过向目标用户发放红包，鼓励用户产生或尽快完成购买下单的行为，从而提高订单转化率。</p>
          <p class="mb-1">（3）促活。红包还有一个重要的作用，提升产品的用户活跃度和日活。如签到红包、抽奖红包等，让用户持续使用产品，从而达到目的。</p>
          <p class="mb-1">（4）完成某些指标。有时候运营部门为了完成某些任务和指标，也会向用户发放红包，当用户完成了指定的行为之后获得或激活红包。通常发生在提高注册率、激活量、绑卡量等场景中。</p>
        </div>
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="redPacketImg" fit="cover" />
      </div>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">数据及行为分析</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="dataDashboardImg" />
        <div class="flex-1 p-3 text-left sm:text-xl sm:pl-16">
          <p class="mb-1">基于H5的互动营销是为企业与用户互动的重要方式。而在当今数字化时代，数据收集和用户行为分析的重要性和优点绝不可忽视。通过数据收集，企业能够深入了解用户的喜好、需求和行为模式，从而更加精准地满足用户的期待。这种数据驱动的营销策略让企业能够基于事实而非猜测来制定营销决策。</p>
          <p class="mb-1">其次，数据收集和用户行为分析的优点在于实现个性化营销。通过分析用户行为和偏好，企业可以根据不同用户的需求和兴趣进行定向推送和个性化推荐，从而提高用户参与度和转化率。这种精准的个性化营销不仅能够增强用户对品牌的粘性，还能够提升用户体验，让用户感受到个体化的关怀。</p>
          <p class="mb-1">领燕科技以丰富的经验和专业的能力，已经成功为多个品牌定制了H5互动营销活动。我们懂得如何通过合理的数据收集方法和高效的用户行为分析手段，洞察用户需求，深入了解用户行为，从而为品牌提供最具针对性的营销解决方案。</p>
        </div>
      </div>
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
  name: 'Marketing',
  metaInfo: {
    title: 'H5互动营销',
  },
  data() {
    return {
      banner: require('@/assets/app-banner-bg.jpg'),
      space: '&emsp;&emsp;',
      shortSpace: '&emsp;',
      giftFinderImg: require('@/assets/marketing-gift-finder.png'),
      giftCardImg: require('@/assets/marketing-gift-card.png'),
      redPacketImg: require('@/assets/marketing-red-packet.png'),
      dataDashboardImg: require('@/assets/marketing-data-dashboard.png'),
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
#marketing {
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
