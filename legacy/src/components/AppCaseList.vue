<template>
  <div id="app-case-list" class="px-6 py-4 bg sm:py-12 sm:px-24">
    <h2 class="text-xl font-bold text-primary sm:text-4xl">項目案例</h2>
    <!-- WSC場地預約 -->
    <div class="p-5 mt-3 bg-white rounded">
      <div class="flex flex-wrap pt-3">
        <el-image class="w-full sm:w-1/2" :src="appBookingImg" />
        <div class="flex-1 p-3 text-xl text-left">
          <h1 class="pb-5 text-2xl font-bold text-center">WSC场地预约</h1>
          <p class="mb-5">WSC场地预约APP旨在让用户能够轻松预约球场，提供一个方便快捷的平台，让爱好运动的人们能够更轻松地享受到打球的乐趣。</p>
          <p class="mb-5">基于LBS定位技术，用户可以轻松找到附近的球场，并查看球场的详细资讯，例如价格、开放时间、场地大小、设施等。利于用户更好地做出符合自己需求的选择。</p>
          <p class="mb-5">APP提供了简单又方便的预约流程。用户只需要点击几个按钮，就可以轻松预约心仪的球场。 APP支持即时预约和提前预约，让用户有更多的弹性。用户可以选择预约一小时、两小时甚至整天的时间，满足不同用户的需求。</p>
        </div>
      </div>
    </div>
    <!-- 山姆会员卡 -->
    <div class="p-5 mt-3 bg-white rounded">
      <div class="flex flex-wrap pt-3">
        <el-image class="w-full sm:w-1/2" :src="appSamsClubImg" />
        <div class="flex-1 p-3 text-xl text-left">
          <h1 class="pb-5 text-2xl font-bold text-center">山姆会员卡</h1>
          <p class="mb-5">山姆会员卡APP提供了山姆会员商店实体会员卡的电子版本。用户可以在APP上绑定他们的会员卡号，将积分、优惠券等同步到线上，而无需携带实体卡片。</p>
          <p class="mb-5">该APP还提供了会员专属的促销活动和优惠券。用户可以通过APP获取到最新的促销信息和优惠券，使用户可以享受到更多的福利和优惠。</p>
          <p class="mb-5">此外，领燕科技为APP实现了完善的数据系统。通过对用户数据的分析，山姆会员商店可以了解用户的消费习惯和喜好，并根据这些数据来制定更有效的促销策略。还可以通过分析用户的反馈和评价来改进产品，提供更好的用户体验。</p>
          <p class="mb-5">领燕科技为山姆会员商店从功能、用户体验和数据分析等多方面来提升产品的价值和用户满意度。吸引更多的会员加入并提高他们对山姆会员商店的忠诚度。</p>
        </div>
      </div>
    </div>
    <!-- 珠寶商城 -->
    <div class="p-5 mt-3 bg-white rounded">
      <div class="flex flex-wrap pt-3">
        <el-image class="w-full sm:w-1/2" :src="appJewelryEcomImg" />
        <div class="flex-1 p-3 text-xl text-left">
          <h1 class="pb-5 text-2xl font-bold text-center">Pascal珠宝商城</h1>
          <p class="mb-5">领燕科技为Pascal研发的线上珠宝商城APP具有直观且易于使用的界面设计，让用户可以轻松寻找和选购心仪的珠宝产品。 APP提供了丰富的珠宝分类和搜索功能，以及详细的产品展示页面，让用户可以全面了解每款珠宝的特点、材质和价格等相关信息。</p>
          <p class="mb-5">我们与可靠的物流合作伙伴合作，提供物流追踪功能，让用户随时了解订单的送货进度。此外，建立了完善的售后服务系统，处理用户的退换货、维修和投诉等事宜，确保用户的权益得到保护。</p>
          <p class="mb-5">除了购物功能，APP还提供了丰富的珠宝相关内容。用户可以在APP上浏览珠宝的历史和文化知识，了解不同文化中对珠宝的特殊意义和传统，增加用户对珠宝的情感联系。</p>
          <p class="mb-5"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Case',
  props: {
    bg: {
      type: String,
      default: 'white'
    },
    img: {
      type: String
    },
    desc: {
      type: String
    }
  },
  data() {
    return {
      appBookingImg: require('@/assets/case/app-booking.png'),
      appSamsClubImg: require('@/assets/case/app-sams-club.png'),
      appJewelryEcomImg: require('@/assets/case/app-jewelry-ecom.png'),
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
