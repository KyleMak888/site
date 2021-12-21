<template>
  <div id="why-us" class="bg py-4 px-6 sm:py-12 sm:px-24">
    <div class="text-primary text-xl sm:text-4xl font-bold">选择我们</div>
    <p class="w-4/5 text-center sm:text-xl mx-auto pt-2">以客户为中心，为企业保驾护航</p>
    <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
      <el-card
        class="w-64 h-80 flex flex-col overflow-visible mb-6"
        body-style="padding: 20px 0;"
        v-for="(flow, index) in dataList"
        :key="index"
      >
        <div class="w-full py-3 px-2 flex items-center bg-primary rounded-r-md shadow-lg transform -translate-x-4">
          <div class="text-5xl sm:text-6xl text-gray-100">{{index}}</div>
          <div class="text-2xl sm:text-4xl text-left text-white flex-1 pl-3 transform translate-y-1">{{flow.label}}</div>
        </div>
        <div class="pt-12">
          <div class="text-xl font-bold text-gray-700">{{flow.desc}}</div>
          <div class="text-xl pt-2">{{flow.subDesc}}</div>
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
          desc: '60+精英技术团队',
          subDesc: '实力雄厚'
        },
        {
          label: '经验丰富',
          desc: '20+行业应用解决方案',
          subDesc: '供您选择'
        },
        {
          label: '贴心服务',
          desc: '1对1专人对接需求',
          subDesc: '沟通无阻'
        },
        {
          label: '工匠精神',
          desc: '把握每一个细节',
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
