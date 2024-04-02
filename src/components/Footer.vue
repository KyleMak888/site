<template>
  <div id="footer" class="bg-secondary py-8 px-10">
    <FlexBox
      justify="space-between"
      align="flex-end"
      wrap="wrap"
      class="pb-3 px-10"
    >
      <el-image class="block logo pt-10 transform md:-translate-x-1/4 translate-y-2" :src="logo" fit="fill"></el-image>
      <el-image class="mt-5 block w-32 h-32 transform translate-y-2" :src="wechatCode" fit="fill"></el-image>
      <CompanyInfo class="transform translate-y-2"></CompanyInfo>
      <!-- <el-button
        type="primary"
        class="border-none mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        @click="toContact"
      >联系我们</el-button> -->
    </FlexBox>

    <el-divider></el-divider>

    <FlexBox
      justify="center"
      align="center"
      class="py-3"
    >
      <div class="text-white">© 2024 <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022012773号-1</a></div>
    </FlexBox>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyInfo from '@/components/CompanyInfo.vue'
import FlexBox from '@/components/FlexBox.vue'

export default {
  name: 'Footer',
  data() {
    return {
      logo: require('@/assets/logo_final_tb.png'),
      wechatCode: require('@/assets/wechat_qrcode.png'),
    }
  },
  components: {
    CompanyInfo,
    FlexBox
  },
  methods: {
    // toContact() {
    //   this.$router.push('contact')
    // }
  }
}
</script>

<style scope lang="scss">
#footer {
  .logo {
    width: 160px;
    height: 160px;
  }
}
</style>
