<template>
  <div id="contact">
    <div class="contact md-auto px-6 sm:px-24 pt-28 pb-0 overflow-x-hidden">
      <div class="text-xl sm:text-4xl font-bold">欢迎来撩</div>
      <div class="text-md text-gray-300">
        请发送表单或发邮至 chreta.com@gmail.com 与我们进行联系
      </div>
      <div class="relative max-w-xl mx-auto pt-12">
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
            <div class="text-md font-bold text-left leading-6">称呼</div>
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <div class="text-md font-bold text-left leading-6">电话号码</div>
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="mail">
            <div class="text-md font-bold text-left leading-6">邮箱</div>
            <el-input v-model="form.mail" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="company">
            <div class="text-md font-bold text-left leading-6">
              公司名称(选填)
            </div>
            <el-input v-model="form.company" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="content">
            <div class="text-md font-bold text-left leading-6">业务需求</div>
            <el-input
              type="textarea"
              v-model="form.content"
              autocomplete="off"
              rows="5"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" type="primary" @click="submit('form')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>

    <section class="py-4 px-6 sm:py-12 sm:px-24 sm:pb-24">
      <div class="flex flex-wrap items-center justify-around pt-6 sm:pt-10">
        <div
          class="w-full md:w-1/4 flex flex-wrap flex-col items-center justify-center pt-6"
          v-for="(contact, index) in contactList"
          :key="index"
        >
          <el-image
            class="w-20 h-20 sm:w-24 sm:h-24 block"
            :src="contact.icon"
            fit="fill"
          ></el-image>
          <div class="text-lg md:text-xl md:pt-3">{{ contact.label }}</div>
          <div class="text-xl md:text-2xl md:pt-3 truncate w-full">
            {{ contact.content }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
          content: "chreta.com@gmail.com"
        },
        {
          icon: require("@/assets/icons/map.png"),
          label: "联系地址",
          content: "广州市白云区天健创意园302"
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
        this.$api.postContact(data)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
