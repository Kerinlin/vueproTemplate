<template>
  <div class="wrapper">
    <div class="formContainer">
      <h1 class="formTitle">{{title}}</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" class="login">
        <FormItem prop="email" class="email">
          <Input type="email" v-model="formInline.email" placeholder="Email">
          <Icon size="20" type="ios-email" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon size="20" type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary"  class="button" @click="handleSubmit('formInline')">Login</Button>
        </FormItem>
        <div class="formBottom">
        <router-link to="/register">
          <span>Create an account</span>
        </router-link>
        <span>|</span>
        <router-link to="/forgetPassword">
          <span>Forgot the password</span>
        </router-link>
      </div>
      </Form>
    </div>
  </div>
</template>

<script>
import rules from "@/config/rules.js"
export default {
  name: "Login",
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$router.push({path:'/home'});
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  data() {
    return {
      title: "Login",
      formInline: {
        email: "",
        password: ""
      },
      ruleInline: rules
    };
  }
};
</script>

<style lang="less">
@import '../layouts/default/mixin/common.less';
.wrapper {
  position: relative;
  min-height: 500px;
  background-color: #eaedf1;
  .formContainer{
    .wh(100%,50%);
    .vc();
    .formTitle{
      font-weight: bold;
      font-size: 23px;
      margin-bottom: 30px;
      text-align: center;
    }
    .login{
      .media(320px,767px,96vw);
      .media(768px,1025px,40vw);
      .media(1026px,1440px,28vw);
      .hc();
      Input{
          height: 40px;
          border-style: solid;
          border-width: 1px 1px 1px 0px;
          font-size: 14px;
          // outline: none; 
        }
      .ivu-input-group-prepend{
        background-color: #fff;      
      }
      .email{
        margin-bottom: 30px;
      }
      .password{
        margin-bottom: 30px;
      }
      .button{
        height: 34px;
        font-size: 16px;
      }
      .formBottom{
        text-align: center;
        font-size: 14px;
    }
    }
  }
}
</style>
