<template>
  <div id="why-us" class="px-6 py-4 bg sm:py-12 sm:px-24">
    <div class="text-xl font-bold text-primary sm:text-4xl">选择我们</div>
    <p class="w-4/5 pt-2 mx-auto text-center sm:text-xl">以客户为中心，为企业保驾护航</p>
    <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
      <el-card
        class="flex flex-col w-64 mb-6 overflow-visible h-80"
        body-style="padding: 20px 0;"
        v-for="(flow, index) in dataList"
        :key="index"
      >
        <div class="flex items-center w-full px-2 py-3 transform -translate-x-4 shadow-lg bg-primary rounded-r-md">
          <div class="text-5xl text-gray-100 sm:text-6xl">{{index}}</div>
          <div class="flex-1 pl-3 text-2xl text-left text-white transform translate-y-1 sm:text-4xl">{{flow.label}}</div>
        </div>
        <div class="pt-12">
          <div class="text-xl font-bold text-gray-700">{{flow.desc}}</div>
          <div class="pt-2 text-xl">{{flow.subDesc}}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUs',
  data() {
    return {
      dataList: [
        {
          label: '专业人员',
          desc: '10年以上技术团队',
          subDesc: '实力雄厚'
        },
        {
          label: '经验丰富',
          desc: '80+行业应用解决方案',
          subDesc: '供您选择'
        },
        {
          label: '贴心服务',
          desc: '1对1专人对接需求',
          subDesc: '沟通无阻'
        },
        {
          label: '工匠精神',
          desc: '把握每一个细节',
          subDesc: '精益求精'
        }
      ]
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scope lang="scss">
</style>
