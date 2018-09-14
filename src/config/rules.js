const rules = {
  email: [
    {
      required: true,
      message: "Please fill in the Email",
      trigger: "blur"
    },
    {
      type: "string",
      max: 40,
      message: "The email length cannot be more than 40 bits",
      trigger: "blur"
    },
    {
      type: "email",
      message: "Please enter the correct email"
    }
  ],
  password: [
    {
      required: true,
      message: "Please fill in the password.",
      trigger: "blur"
    },
    {
      type: "string",
      min: 6,
      max: 16,
      message: "length cannot be less than 6 bits or more than 16 bits",
      trigger: "blur"
    },
    {
      validator: this.validatePass,
      trigger: "blur"
    }
  ],
  confirmPassword: [
    {
      validator: this.validateConfirmPass,
      trigger: "blur"
    }
  ],
  verification: [
    {
      required: true,
      message: "Please fill in the verification.",
      trigger: "blur"
    }
  ],
  fullname: [
    {
      required: true,
      message: "Please fill your fullname.",
      trigger: "blur"
    }
  ],
  telephone: [
    {
      required: true,
      message: "Please fill your telphone.",
      trigger: "blur"
    }
  ],
  nationality: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ],
  license: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ],
  identity: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ],
  proof: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ],
  address: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ],
  invest: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ],
  wallet: [
    {
      required: true,
      message: "Please chose your nationality.",
      trigger: "blur"
    }
  ]
};

export default rules;
