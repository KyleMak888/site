<template>
  <div class="_404" id="_404">
    <h2 class="m-0">抱歉，页面未找到，<span>{{countDown}}</span>s后自动跳转到
        <a href="javascript:;" @click="goHome">首页</a>
    </h2>
    <img :src="bg" alt="页面未找到">
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  metaInfo: {
    title: '404',
    meta: [
      {
        property: 'og:title',
        vmid: 'og:title',
        content: '404',
      },
      {
        vmid: 'description',
        name: 'description',
        content: '404',
      }
    ]
  },
  data() {
    return {
      bg: require('@/assets/404.png'),
      countDown: 5,
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  created() {
    const id = setInterval(() => {
      if (this.countDown > 0) {
        this.countDown--
      } else {
        clearInterval(id)
        this.$router.push('/')
      }
    }, 1000)
  }
}
</script>

<style>
._404 {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: #dceebc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}

._404 img {
    width: 30rem;
}

._404 a {
    color: #010101;
}

._404 a:hover {
    color: skyblue;
}
</style>
