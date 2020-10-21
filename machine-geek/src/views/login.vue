<template>
  <div class="login">
    <div class="animate"></div>
    <div class="login-form">
      <a-form
        name="custom-validation"
        ref="ruleForm"
      >
      <h3>登录</h3>
      <a-form-item required has-feedback label="用户名"  name="name">
          <a-input
            v-model:value="ruleForm.username"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item required has-feedback label="密码" name="pass">
          <a-input
            v-model:value="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="login"> 登录 </a-button>
          <a-button style="margin-left: 10px" @click="resetForm">
            重置
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue'

const Component = defineComponent({
  props:{},
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
      }
    }
  },
  methods: {
    login() {
      console.log("click");
    },
    resetForm() {
      console.log("reset");
      
    },
  }
})

export default Component

</script>
<style lang="scss" scoped>
.login-form {
  height: 400px;
  width: 480px;
  position: relative;
  background-color: #36393f;
  border-radius: 6px;
  top: 400px;
  left: 300px;
  box-shadow: 3px 3px 3px rgba($color: #36393f, $alpha: .75);
  padding: 20px;
  h3{
    color: whitesmoke;
    font-weight: 600;
    font-size: 24px;
  }
  form{
    margin-top: 20px;
    input {
      // background-color: #36393f;
      // border: none;
    }
  }
}
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("./../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 30px;
}
</style>