<!--
 * @Autor: GeekMzy
 * @Date: 2021-01-14 10:30:02
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-14 13:36:23
 * @FilePath: /machine-geek/src/views/Login/index.vue
-->
<template>
  <div class="login_body">
    <div class="login_content">
      <div class="content_left">
        <svg class="icon login_logo" aria-hidden="true">
          <use xlink:href="#iconloginlogo"></use>
        </svg>
      </div>
      <div class="content_right">
        <div class="login_form">
          <div class="login_form_head">Enter your account</div>
          <div class="login_form_container">
            <a-form
              class="login_form_table"
              name="custom-validation"
              ref="ruleForm"
              :model="state.ruleForm"
              v-bind="state.layout"
              @finish="submit"
              @finishFailed="submitFailed"
            >
              <a-form-item label="Username" name="username">
                <a-input v-model:value="state.ruleForm.username" type="text" />
              </a-form-item>
              <a-form-item label="Password" name="password">
                <a-input
                  v-model:value="state.ruleForm.password"
                  type="password"
                />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" html-type="submit"> Submit </a-button>
                <a-button style="margin-left: 10px" @click="resetForm">
                  Reset
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import api from "/@/api/index";
import lockr from "/@/utils/lockr";
import { message } from "ant-design-vue";
import md5 from "/@/utils/md5";

export default defineComponent({
  setup () {
    const state = reactive({
      ruleForm: {
        username: "",
        password: "",
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    });
    function resetForm () {
      state.ruleForm = {
        username: "",
        password: "",
      };
    }

    return {
      state,
      resetForm,
    };
  },
  methods: {
    submit (values) {
      let data = {
        username: values.username,
        password: md5(values.password).toUpperCase(),
      };
      console.log(data.password);
      api.common.system_login(data).then((res) => {
        if (res.success) {
          lockr.set("Token", res.data.accessToken);
          lockr.set("refreshToken", res.data.refreshToken);
          this.$router.push("/Home");
          message.info("登陆成功");
        }
      });
    },
    submitFailed (errors) {
      console.log("submitFailed", errors);
    },
  },
});
</script>

<style lang="scss" scoped>
.login_body {
  width: 100vw;
  height: 100vh;
  background-image: url('/src/assets/bg.jpeg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-width: 1220px;
  min-height: 1220px;
  .login_content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgba($color: #000000, $alpha: 0.35);
    .content_left {
      flex: 1;
      position: relative;
      background-color: rgba($color: #000000, $alpha: 0.35);

      .login_logo {
        width: 800px;
        height: 800px;
        position: absolute;
        left: calc(50% - 400px);
        top: 20%;
      }
    }
    .content_right {
      flex: 1;
      position: relative;
      .login_form {
        width: 500px;
        position: absolute;
        padding: 10px;
        left: calc(50% - 250px);
        top: calc(50% - 145px);
        background-color: white;
        border-radius: 10px;
        .login_form_head {
          font-size: 14px;
          text-align: start;
          border-bottom: 1px solid #ccc;
        }
        .login_form_table {
          font-size: 14px;
          padding: 40px 10px 10px 10px;
          .login_form {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
