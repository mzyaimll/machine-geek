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
 * @LastEditTime: 2020-11-14 22:02:31
 -->

<template>
  <div class="login_body">
    <div class="login_content">
      <div class="login_form">
        <div class="login_form_head">Enter your account</div>
        <div class="login_form_input">
          <a-form
            name="custom-validation"
            ref="ruleForm"
            :model="ruleForm"
            v-bind="layout"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
          >
            <a-form-item label="Username" name="user">
              <a-input v-model:value="ruleForm.pass" type="text" />
            </a-form-item>
            <a-form-item label="Password" name="Password">
              <a-input v-model:value="ruleForm.checkPass" type="password" />
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
</template>

<script lang="ts">
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    handleFinish(values: any) {
      console.log(values);
    },
    handleFinishFailed(errors: any) {
      console.log(errors);
    },
    resetForm() {
      this.ruleForm = {
        pass: "",
        checkPass: "",
        age: "",
      };
    },
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
    background-color: rgba($color: #000000, $alpha: 0.35);
  }
  .login_form {
    width: 500px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: calc(50% - 250px);
    left: 400px;
    padding: 10px;
    .login_form_head {
      font-size: 14px;
      text-align: start;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
