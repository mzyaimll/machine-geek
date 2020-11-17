<!--
 *  ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 *  │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 *  └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 *  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 *  │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 *  ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 *  │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 *  ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 *  │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 *  ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 *  │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 *  ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 *  │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 *  └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 * 
 * @Author: JackM
 * @Date: 2020-11-14 19:34:32
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-17 19:16:38
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
                <a-button type="primary" html-type="submit" @click="submit(e)">
                  Submit
                </a-button>
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

<script lang="ts">
import { defineComponent, reactive } from "vue";
import api from "/@/api/index";
// import md5 from "js-md5";

export default {
  setup() {
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
    function resetForm() {
      state.ruleForm = {
        username: "",
        password: "",
      };
    }
    function submit(values: any) {
      // console.log("md5_password", md5(values));
      console.log("submit", values);
    }
    function submitFailed(errors: any) {
      console.log("submitFailed", errors);
    }
    return {
      state,
      resetForm,
      submit,
      submitFailed,
    };
  },
};
</script>

<style lang="scss" scoped>
.login_body {
  width: 100vw;
  height: 100vh;
  background-image: url("/@/assets/bg.jpeg");
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
