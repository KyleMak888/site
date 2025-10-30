<template>
  <div id="contact-form">
    <el-drawer
      title="联系我们"
      :visible="displayContactForm"
      direction="rtl"
      :show-close="false"
      @close="handleClose"
      size="50%"
    >
      <div class="px-6">
        <el-form :model="form" ref="form" :rules="rules" label-position="right" label-width="auto">
          <el-form-item label="称呼" prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="phone">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="mail">
            <el-input v-model="form.mail" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司" prop="company">
            <el-input v-model="form.company" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="业务需求" prop="content">
            <el-input type="textarea" v-model="form.content" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit('form')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ContactForm',
  props: {},
  data() {
    const validateContact = (rule, value, callback) => {
      this.$refs['form'].clearValidate(['phone', 'mail'])
      if (!this.form.phone && !this.form.mail) {
        callback(new Error('请输入电话号码或邮箱'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        phone: '',
        mail: '',
        company: '',
        content: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入称呼', trigger: 'blur' }
        ],
        phone: [
          { validator: validateContact, trigger: 'blur' }
        ],
        mail: [
          { validator: validateContact, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  computed: {
    ...mapState([
      'displayContactForm'
    ])
  },
  methods: {
    ...mapActions([
      'hideContactForm'
    ]),
    async handleClose() {
      await this.hideContactForm()
    },
    async submit() {
      this.$refs['form'].validateField(['name', 'phone'])
      if (this.form.name && (this.form.phone || this.form.mail)) {
        console.log('submit!!')
        console.log(this.form)
      }
    }
  }
}
</script>
