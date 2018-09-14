<template>
  <div class="wrapper">
    <div class="formContainer">
      <h1 class="formTitle">{{title}}</h1>
      <p>{{introduce}}</p>
      <Form ref="formInline" :model="formInline" label-position="top" :rules="ruleInline" class="login">

        <FormItem label="Your Full Name *" prop="fullname" class="fullname">
          <Input type="text" v-model="formInline.email" placeholder="Full Name">
          </Input>
        </FormItem>

        <FormItem label="Your telephone number *" prop="telephone" class="telephone">
          <Input type="text" v-model="formInline.telephone" placeholder="telephone">
          </Input>
        </FormItem>

        <FormItem label="Your Nationality *" prop="Nationality" class="Nationality">
          <Select v-model="formInline.nation" class="select">
            <Option v-for="item in nations" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>

        <FormItem label="Your Passport ID/Citizen ID/Driving License *" prop="telephone" class="telephone">
          <Input type="text" v-model="formInline.telephone" placeholder="telephone">
          </Input>
        </FormItem>

      </Form>
    </div>
  </div>
</template>

<script>
import rules from "@/config/rules.js";
export default {
  name: "Login",
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$router.push({ path: "/home" });
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  data() {
    return {
      title: "Welcome to Lambda whitelist process",
      formInline: {
        fullname: "",
        telephone: "",
        nation:""
      },
      ruleInline: rules,
      introduce: "The whitelisting process is mandatory for those who would like to participate in our community",
      nations: [{
        value: 'New York',
        label: 'New York'
      },
      {
        value: 'London',
        label: 'London'
      },
      {
        value: 'Sydney',
        label: 'Sydney'
      },
      {
        value: 'Ottawa',
        label: 'Ottawa'
      },
      {
        value: 'Paris',
        label: 'Paris'
      },
      {
        value: 'Canberra',
        label: 'Canberra'
      }]
    };
  }
};
</script>

<style lang="less">
@import "../layouts/default/mixin/common.less";

.wrapper {
  position: relative;
  min-height: 1000px;
  background-color: #eaedf1;

  .formContainer {
    .wh(100%, 50%);
    .vc();

    p {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 30px;
      .fsc(14px, #666666);
    }

    .formTitle {
      font-weight: bold;
      font-size: 23px;
      margin-bottom: 30px;
      text-align: center;
    }

    .login {
      .media(320px, 767px, 96vw);
      .media(768px, 1025px, 40vw);
      .media(1026px, 1440px, 28vw);
      .hc();

      Input {
        height: 40px;
        border-style: solid;
        border-width: 1px 1px 1px 0px;
        font-size: 14px;
        // outline: none;
      }

      .ivu-input-group-prepend {
        background-color: #fff;
      }

      .email {
        margin-bottom: 30px;
      }

      .password {
        margin-bottom: 30px;
      }

      .button {
        height: 34px;
        font-size: 16px;
      }

      .formBottom {
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
