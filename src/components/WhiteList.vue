<template>
  <div class="wrapper">
    <div class="formContainer">
      <h1 class="formTitle">{{title}}</h1>
      <p class="introduce">{{introduce}}</p>
      <Form ref="formInline" :model="formInline" label-position="top" :rules="ruleInline" class="login">

        <FormItem label="Your Full Name" prop="fullname" class="fullname">
          <Input type="text" v-model="formInline.email" placeholder="Full Name">
          </Input>
        </FormItem>

        <FormItem label="Your telephone number" prop="telephone" class="telephone">
          <Input type="text" v-model="formInline.telephone" placeholder="telephone">
          </Input>
        </FormItem>

        <FormItem label="Your Nationality" prop="nationality" class="nationality">
          <Select v-model="formInline.nationality" class="select">
            <Option v-for="item in nations" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>

        <FormItem label="Your Passport ID/Citizen ID/Driving License" prop="telephone" class="license">
          <Input type="text" v-model="formInline.License" placeholder="License">
          </Input>
        </FormItem>

        <FormItem label="Proof of Identity" prop="identity" class="identity upload">
          <my-upload v-model="formInline.identity"></my-upload>
        </FormItem>

        <FormItem label="Selfie with the proof" prop="proof" class="proof upload">
          <my-upload v-model="formInline.proof"></my-upload>
        </FormItem>

        <FormItem label="Enter your address" prop="address" class="address">
          <Input type="text" v-model="formInline.address" placeholder="address">
          </Input>
        </FormItem>

        <FormItem label="How much you intend to invest in ETH？" prop="invest" class="invest">
          <Input type="text" v-model="formInline.invest" placeholder=" ">
          </Input>
        </FormItem>

        <FormItem label="Your ETH wallet addresses" prop="wallet" class="wallet">
          <Input type="text" v-model="formInline.wallet" placeholder=" ">
          </Input>
        </FormItem>

        <div class="notice">
          <p class="content">{{noticeContent}}</p>
        </div>

        <FormItem>
          <Button type="primary" class="button" @click="handleSubmit('formInline')">Submit</Button>
        </FormItem>

        <div class="formBottom">
          <router-link to="/home">
            <span>back to home</span>
          </router-link>
        </div>

      </Form>
    </div>
  </div>
</template>

<script>
import rules from "@/config/rules.js";
import myUpload from "./common/Upload"
export default {
  name: "whiteList",
  data() {
    return {
      title: "Welcome to Lambda whitelist process",
      formInline: {
        fullname: "",
        telephone: "",
        nationality: "",
        license: "",
        proof:"",
        identity:"",
        address: "",
        invest: "",
        wallet:""
      },
      ruleInline: rules,
      noticeContent: "Please notice ETH Address MUST be an ERC-20 compatible wallet. Do not send from an exchange or smart contract.",
      introduce: "The whitelisting process is mandatory for those who would like to participate in our community",
      nations: [
        {
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
        }],

    };

  },
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
  components: {
    myUpload
  },
};
</script>

<style lang="less">
@import "../layouts/default/mixin/common.less";

.wrapper {
  position: relative;
  min-height: 1365px;
  background-color: #eaedf1;

  .formContainer {
    .wh(100%, 50%);
    .move(0,9%);

    .introduce {
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

    .formBottom {
      text-align: center;
      font-size: 14px;
    }

    .login {
      .media(320px, 767px, 96vw);
      .media(768px, 1025px, 40vw);
      .media(1026px, 1440px, 28vw);
      .hc();
      color: rgb(93, 94, 97);
      input {
        height: 40px;
        border-style: solid;
        border-width: 1px;
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
      .notice {
        .content {
          .fsc(13px,rgb(93, 94, 97));
        }
      }
      .button {
        height: 38px;
        font-size: 16px;
      }
    }
  }
}
</style>
