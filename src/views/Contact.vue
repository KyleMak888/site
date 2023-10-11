<template>
  <div id="contact">
    <div class="px-6 pb-0 overflow-x-hidden contact md-auto sm:px-24 pt-28">
      <div class="text-xl font-bold sm:text-4xl">欢迎来撩</div>
      <div class="text-gray-300 text-md">
        请发送表单或发邮至 kyle@linkendtech.com 与我们进行联系
      </div>
      <div class="relative max-w-xl pt-12 mx-auto">
        <svg
          fill="none"
          viewBox="0 0 404 404"
          width="404"
          height="404"
          class="absolute transform translate-x-1/2 left-full 2xl:translate-x-3/4"
        >
          <defs>
            <pattern
              id="square"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                fill="currentColor"
                class="text-gray-200"
              ></rect>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#square)"></rect>
        </svg>
        <svg
          fill="none"
          viewBox="0 0 404 404"
          width="404"
          height="404"
          class="absolute bottom-0 transform -translate-x-1/2 2xl:-translate-x-3/4 right-full"
        >
          <defs>
            <pattern
              id="square"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                fill="currentColor"
                class="text-gray-200"
              ></rect>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#square)"></rect>
        </svg>
        <el-form
          :model="form"
          ref="form"
          :rules="rules"
          label-position="right"
          label-width="auto"
        >
          <el-form-item prop="name">
            <div class="font-bold leading-6 text-left text-md">称呼</div>
            <el-input v-model="form.name" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <div class="font-bold leading-6 text-left text-md">电话号码</div>
            <el-input v-model="form.phone" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item prop="mail">
            <div class="font-bold leading-6 text-left text-md">邮箱</div>
            <el-input v-model="form.mail" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item prop="company">
            <div class="font-bold leading-6 text-left text-md">
              公司名称(选填)
            </div>
            <el-input v-model="form.company" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item prop="content">
            <div class="font-bold leading-6 text-left text-md">业务需求</div>
            <el-input
              type="textarea"
              v-model="form.content"
              autocomplete="off"
              disabled
              rows="5"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" type="primary" @click="submit('form')" disabled
              >系统维护中, 请通过电话或邮箱联系</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>

    <section class="px-6 py-4 sm:py-12 sm:px-24 sm:pb-24">
      <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
        <div
          class="flex flex-col flex-wrap items-center justify-center w-full pt-6 md:w-1/4"
          v-for="(contact, index) in contactList"
          :key="index"
        >
          <el-image
            class="block w-20 h-20 sm:w-24 sm:h-24"
            :src="contact.icon"
            fit="fill"
          ></el-image>
          <div class="text-lg md:text-xl md:pt-3">{{ contact.label }}</div>
          <div class="w-full text-xl truncate md:text-2xl md:pt-3">
            {{ contact.content }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: "Contact",
  metaInfo: {
    title: '联系我们',
    meta: [
      {
        property: 'og:title',
        vmid: 'og:title',
        content: '联系我们',
      },
      {
        vmid: 'description',
        name: 'description',
        content: '广州领燕科技有限公司是一家热衷于创新技术服务的企业，我们为品牌和传统企业提供信息化建设和数字化转型的方案咨询，并提供一站式产品研发服务。我们的研发业务包括 APP、小程序、3D应用、H5互动营销页面定制、企业系统及物联网产品等。自2015年以来，我们已服务 Nike、Adidas、Burberry、Starbucks、Converse、Lululemon、GOAT、Tiffany、山姆会员商店、宝马等多个世界知名品牌，并成功帮助客户在中国市场赢得巨大的增长。我们追求极致卓越，力求为客户提供最优质的服务，打造最优质的产品，助力客户落实信息化建设和数字化转型，为其提升自身的盈利能力，实现双赢。'
      }
    ]
  },
  data() {
    const validateContact = (rule, value, callback) => {
      this.$refs["form"].clearValidate(["phone", "mail"]);
      if (!this.form.phone && !this.form.mail) {
        callback(new Error("请输入电话号码或邮箱"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        phone: "",
        mail: "",
        company: "",
        content: ""
      },
      rules: {
        name: [{ required: true, message: "请输入称呼", trigger: "blur" }],
        phone: [{ validator: validateContact, trigger: "blur" }],
        mail: [{ validator: validateContact, trigger: "blur" }]
      },
      contactList: [
        {
          icon: require("@/assets/icons/phone.png"),
          label: "联系电话",
          content: "150 0203 2816"
        },
        {
          icon: require("@/assets/icons/wechat-dotted.png"),
          label: "微信号",
          content: "150 0203 2816"
        },
        {
          icon: require("@/assets/icons/mail.png"),
          label: "邮箱",
          content: "kyle@linkendtech.com"
        },
        {
          icon: require("@/assets/icons/map.png"),
          label: "联系地址",
          content: "广州市白云区天健创意园2栋302A"
        }
      ]
    };
  },
  props: {},
  computed: {},
  methods: {
    async submit() {
      this.$refs["form"].validateField(["name", "phone"]);
      if (this.form.name && (this.form.phone || this.form.mail)) {
        const { name, phone, mail: email, company, content: need } = this.form;
        const data = {
          name,
          phone,
          email,
          company,
          need
        };
        const resp = await this.$api.postContact(data)
        if (resp.code == 0) {
          Message({
            message: '提交成功!',
            type: 'success',
            showClose: true,
            center: true,
            offset: 120
          })
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
