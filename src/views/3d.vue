<template>
  <div id="id-3d">
    <section class="relative flex items-center justify-center w-screen banner">
      <el-image class="absolute z-0 w-screen h-full opacity-50 el-img-object-top" :src="banner" fit="cover"></el-image>
      <div class="z-10 px-8 text-xl tracking-wide text-center text-white md:px-32 sm:text-4xl">
        <h3 class="w-1/2 py-2 mx-auto text-xl border border-gray-100 border-solid">3D应用研发</h3>
        <div class="pt-6">
          <div>为未来赋能</div>
          <div>服务热线：<span class="font-bold">150 0203 2816</span></div>
        </div>
      </div>
    </section>

    <section class="px-6 py-4 text-center sm:py-12 sm:px-24">
      <h1 class="text-xl font-bold text-primary sm:text-4xl">3D应用研发</h1>
      <p class="w-4/5 pt-6 mx-auto text-left sm:text-xl"><span v-html="space"></span>3D应用研发涉及到多个技术领域，如计算机图形学、计算机视觉、虚拟现实等。领燕科技掌握各种建模工具和渲染引擎，帮助客户创建出逼真的三维场景、角色、特效等。</p>
      <p class="w-4/5 pt-1 mx-auto text-left sm:text-xl"><span v-html="space"></span>同时，3D技术在各个行业中都有着很广泛的应用。比如，在直播行业中，结合AI诞生出了数字人，为主播们带来更丰富的内容与玩法；在建筑和工程领域，帮助设计师和工程师更好地可视化和模拟建筑项目；在医学领域，可以用来进行解剖学教学、手术模拟等。</p>
      <p class="w-4/5 pt-1 mx-auto text-left sm:text-xl"><span v-html="space"></span>随着虚拟现实和人工智能的发展，领燕科技通过丰富的行业知识和多年的技术沉淀与3D相结合，创造出更加智能和具现的应用，为以前我们只能在电影中看到的场景带来落地的可能性。</p>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">研发流程</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="serviceProcessImg" />
        <div class="flex-1 p-3 text-left sm:text-xl sm:pl-16">
          <p class="mb-5 font-bold">广州领燕科技致力于为客户提供高质量的3D应用研发服务</p>
          <li class="mb-1">我们通过深入沟通了解客户的需求，以确保全面理解最终的目标。</li>
          <li class="mb-1">我们针对特定的场景提供合适的采样方案，以低成本还原模型的轮廓和材质。</li>
          <li class="mb-1">我们使用先进技术和工具保证模型的准确性和细节。</li>
          <li class="mb-1">我们为模型添加逼真的光照和材质效果进行渲染，增强应用视觉吸引力。</li>
          <li class="mb-1">我们注重视觉呈现、操作方式、互动反馈等多方面因素，实现流畅和优秀的用户体验。</li>
          <li class="mb-1">我们确保应用无缝接入系统，兼容性稳定性完备。</li>
        </div>
      </div>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">数字人</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <div class="flex-1 p-3 text-left sm:text-xl sm:pr-16">
          <p class="mb-1">数字人（Digital Human）是指通过计算机生成的虚拟人物，他们拥有逼真的外貌、表情、动作和语音，几乎可以与真实人类无异。数字人技术是3D、计算机图形学、人工智能和机器学习等技术的结合，通过对人类外貌、动作和语音的模拟，创造出外观和行为上都与真实人类相似的虚拟角色。</p>
          <p class="mb-1">数字人技术的发展使得虚拟角色在直播、游戏、广告和虚拟现实应用等领域中得以广泛应用。数字人在直播中作为虚拟主播，具备低成本、24小时不间断的特点；在电影和动画中扮演角色，代替真实演员进行表演；在广告中作为代言人，吸引观众的注意力。</p>
          <p>目前腾讯、阿里、百度、华为等多个云服务商已经相继推出数字人底层服务，领燕科技与多家云厂商合作，为客户提供成熟的数字人应用技术方案与接入研发服务。</p>
        </div>
        <el-image class="w-full rounded-md digital-human-img h-fit sm:w-1/2" :src="digitalHumanImg" fit="cover" />
      </div>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">AR/VR/MR</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="arMarketing" />
        <div class="flex-1 p-3 text-left sm:text-xl sm:pl-16">
          <p class="mb-1">领燕科技帮助Burberry研发的AR营销应用将虛拟商品投入到真实环境中。通过该AR应用，消费者可以直接在实际环境中查看虚拟商品的样式、颜色、尺寸等，更可以通过手势互动近距离观察商品的精美细节，更准确地解商品，深度还原了线下的购物体验。此外，AR购物还可以为消费者提供更多的商品信息和推荐，比如价格、评论、相关商品等，为商家提供了更多的推广和销售机会，可以吸引更多的消费者并提高购买率。</p>
          <p class="mb-1">除了AR应用，领燕科技针对VR和MR也进行了充分的行业调研与研发试验，力求为客户提供专业的咨询方案。AR/VR/MR的应用前景非常广阔，随着相关技术的不断发展和普及，基于视觉、3D可视化与传感技术，虚拟世界与现实世界的相互融合将成为未来的重要趋势之一。</p>
        </div>
      </div>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">智慧行业/数字孪生</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <div class="flex-1 p-3 text-left sm:text-xl sm:pr-16">
          <p class="mb-1">数字孪生是基于WebGL+3D可视化技术搭建的3D模拟工厂、楼宇、园区等真实场景，把错综复杂的图纸、数据以三维虚拟数字整体复刻的形式展现给管理员，对于所要展示的数据可视化内容还原出真实场景，并实时接入数据，从更高维度来运筹帷幄，管理决策、交互互动展示。</p>
          <p>相比与传统的平面展示，数字孪生具备：（1）实时性：数字孪生能够实时地反映现实世界的状态和变化。通过与实际物体或系统的连接，可以实时更新和呈现数据，实时反馈变化。（2）交互性：数字孪生允许用户与虚拟模型进行交互，通过手势、触控等方式来探索和操作模型。用户可以对模型进行灵活的操作，以获取更详细的信息。（3）多维度展示：数字孪生可以同时展示多个维度的数据，如空间维度、时间维度、属性维度等。通过将不同维度的数据进行可视化，可以更全面地了解和分析模型。（4）可视化分析：领燕科技为数字孪生提供了丰富的分析工具和功能。使管理员可以通过可视化手段来发现模式、趋势和异常，从而做出更准确的决策。</p>
        </div>
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="screenImg" fit="cover" />
      </div>
    </section>

    <section class="px-6 py-4 text-center bg sm:py-12 sm:px-24">
      <h2 class="text-xl font-bold text-primary sm:text-4xl">元宇宙</h2>
      <div class="flex flex-wrap items-center pt-6 sm:text-center">
        <el-image class="w-full rounded-md h-fit sm:w-1/2" :src="metaverseImg" />
        <div class="flex-1 p-3 text-left sm:text-xl sm:pl-16">
          <p class="mb-1">元宇宙（Metaverse）是一个虚拟的、与现实世界相互连接的数字世界。它是一种由多个虚拟现实、增强现实和混合现实空间组成的网络，用户可以通过数字身份在其中交互、探索和创造。</p>
          <p class="mb-1">在元宇宙中，用户可以自由地探索各种虚拟环境，与其他用户交流、合作或竞争，还可以参与各种虚拟活动，如购物、娱乐、教育、工作等。元宇宙为用户提供独一无二的数字化身，让他们可以在虚拟世界中展示自己的兴趣、才能和个性。同时，元宇宙也为企业和创作者提供了全新的商机和创意发挥空间，比如在其中创造和销售各种虚拟产品和服务。</p>
          <p>目前，一些科技巨头和创业公司已经开始投资和开发元宇宙技术，以实现这一概念的商业化。元宇宙被认为是下一代互联网的演进方向，有望成为一个全新的数字化社交和经济系统。</p>
        </div>
      </div>
    </section>

    <section class="flex flex-wrap items-center py-8 bg">
      <div class="w-1/2 py-10 pl-6 text-2xl text-left text-black sm:w-2/5 sm:text-center sm:pl-0 sm:text-4xl">开发资讯</div>
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
import { postList } from '@/posts/postList'

export default {
  name: '3d',
  data() {
    return {
      banner: require('@/assets/3d-banner-bg.jpg'),
      space: '&emsp;&emsp;',
      logoFinal: require('@/assets/logo_final.png'),
      serviceProcessImg: require('@/assets/3d-service-process.png'),
      digitalHumanImg: require('@/assets/3d-digital-human.png'),
      arMarketing: require('@/assets/3d-ar-marketing.png'),
      screenImg: require('@/assets/3d-screen.png'),
      metaverseImg: require('@/assets/3d-metaverse.webp'),
      postList,
      shadow: 0
    }
  },
  components: {
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
#id-3d {
  .banner {
    height: 50vh;
    background: #001847;
    .el-img-object-top {
      img {
        object-position: top;
      }
    }
  }
  .h-contrast {
    height: 26rem;
  }
  .h-fit {
    height: fit-content;
  }
  .digital-human-img {
    img {
      transform: scale(1.05);
    }
  }
}
</style>
