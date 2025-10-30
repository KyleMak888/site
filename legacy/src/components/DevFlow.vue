<template>
  <div id="dev-flow" class="py-4 px-6 sm:py-12 sm:px-24">
    <div class="text-primary text-xl sm:text-4xl font-bold">服务流程</div>
    <p class="w-4/5 text-center sm:text-xl mx-auto pt-2">专业的服务造就一流的软件</p>
    <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
      <div class="flex flex-col items-center justify-center" v-for="(flow, index) in flowList" :key="index">
        <el-image class="w-20 h-20 sm:w-24 sm:h-24 block" :src="flow.icon" fit="fill"></el-image>
        <div class="text-xl sm:text-2xl">{{flow.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevFlow',
  data() {
    return {
      flowList: [
        {
          icon: require('@/assets/icons/flow-contact.svg'),
          label: '1.初步沟通'
        },
        {
          icon: require('@/assets/icons/flow-requirements.svg'),
          label: '2.需求分析'
        },
        {
          icon: require('@/assets/icons/flow-ui-design.svg'),
          label: '3.UI设计'
        },
        {
          icon: require('@/assets/icons/flow-coding.svg'),
          label: '4.迭代开发'
        },
        {
          icon: require('@/assets/icons/flow-debug.svg'),
          label: '5.测试&优化'
        },
        {
          icon: require('@/assets/icons/flow-release.svg'),
          label: '6.上线运营'
        },
        {
          icon: require('@/assets/icons/flow-maintenance.svg'),
          label: '7.后期维护'
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
