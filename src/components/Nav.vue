<template>
  <div class="nav">
    <section class="navbar-section">
      <div class="container">
        <VueNavigationBar
          :options="navbarOptions"
          @vnb-item-clicked="vnbItemClicked"
        >
        </VueNavigationBar>
      </div>
    </section>
  </div>
</template>

<script>
import VueNavigationBar from 'vue-navigation-bar'
import "vue-navigation-bar/dist/vue-navigation-bar.css"
import { mapActions } from 'vuex'

export default {
  name: 'Nav',
  components: {
    VueNavigationBar
  },
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 820,
        brandImagePath: "/",
        brandImage: require("@/assets/logo_final_lr.png"),
        brandImageAltText: "logo",
        collapseButtonOpenColor: "#000",
        collapseButtonCloseColor: "#000",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        tooltipPlacement: "bottom",
        menuOptionsLeft: [],
        menuOptionsRight: [
          // {
          //   type: "link",
          //   text: '合作案例',
          //   path: '/case'
          // },
          // {
          //   type: 'hr'
          // },
          {
            type: "link",
            text: '首页',
            path: '/'
          },
          {
            type: 'hr'
          },
          {
            type: "link",
            text: 'APP开发',
            path: '/app'
          },
          {
            type: 'hr'
          },
          {
            type: "link",
            text: '小程序开发',
            path: '/mp'
          },
          {
            type: 'hr'
          },
          {
            type: "link",
            text: '关于我们',
            path: '/about'
          },
          {
            type: 'hr'
          },
          {
            type: "button",
            text: '联系我们',
            path: '/contact'
          }
        ]
      }
    }
  },
  props: {},
  methods: {
    async vnbItemClicked(text) {
      console.log(text)
      // if (text === '联系我们') {
      //   this.showContactForm()
      // }
    },
    ...mapActions([
      'showContactForm'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav {
  height: 100%;
  width: 100%;
  line-height: 1.5;
}
// https://github.com/johndatserakis/vue-navigation-bar/blob/develop/example/App.vue#L294
.navbar-section {
  background: #fff;

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 640px) {
      max-width: 640px;
    }

    @media (min-width: 820px) {
      max-width: 820px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    @media (min-width: 1024px) {
      max-width: 1024px;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    @media (min-width: 1280px) {
      max-width: 1280px;
    }

    .vnb {
      &__brand-image-wrapper {
        transform: scale(2.2, 2);
      }
      &__popup {
        &__top {
          display: flex;
          justify-content: space-between;
          &__close-button {
            position: initial !important;
            &__image {
              max-width: 15px !important;
            }
          }
        }
      }
    }
  }
}
</style>
