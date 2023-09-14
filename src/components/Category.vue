<template>
  <div id="online-chat" class="fixed">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Contact',
  data() {
    return {
      infoList: [
        {
          icon: 'phone-outline',
          text: '150 0203 2816'
        },
        {
          icon: 'message',
          text: 'kyle@linkendtech.com'
        },
        {
          icon: 'map-location',
          text: '广州市白云区天健创意园2栋302A'
        }
      ]
    }
  },
  components: {
    FlexBox
  }
}
</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>
