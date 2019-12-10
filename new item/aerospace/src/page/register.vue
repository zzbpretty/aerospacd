<template>
  <div class="body">
    <!-- 头部logo -->
    <div class="re-top">
      <h1 class="re-logo">
        <router-link to="/">
          <img src="../assets/img/hangtianlogo2.jpg" alt />
        </router-link>
      </h1>
    </div>
    <!-- 注册 -->
    <div class="re-main">
      <div class="main-left">
        <div class="overall">会员注册</div>
        <el-tabs class="register-tabs" type="border-card">
          <el-tab-pane label="手机号注册">
            <!-- 手机号注册 -->
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <!-- 手机号 -->
              <el-form-item label="手机号：" prop="tel">
                <el-col :span="18">
                  <el-input v-model="ruleForm.tel"></el-input>
                </el-col>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item label="密码：" prop="pass">
                <el-col :span="18">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-col>
              </el-form-item>
              <!-- 确认密码 -->
              <el-form-item label="确认密码：" prop="checkPass">
                <el-col :span="18">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-col>
              </el-form-item>
              <!-- 验证码 -->
              <el-form-item label="验证码：" prop="code">
                <el-col :span="8" style="margin-right:20px">
                  <el-input v-model="ruleForm.code"></el-input>
                </el-col>
                <el-col :span="4" style="margin-right:20px">
                  <div style="width:80px;height:40px;border-radius: 4px;">
                    <canvas id="canvas" width="80" height="40" style="width:100%;height：100%"></canvas>
                  </div>
                </el-col>
                <el-col
                  :span="4"
                  id="change1"
                  style="font-size:12px;color: #ADADAD;text-decoration: underline;"
                >
                  <span @click="changecode()">换一张</span>
                </el-col>
              </el-form-item>
              <!-- 短信验证码 -->
              <el-form-item label="短信验证码" prop="phonecode">
                <el-col :span="8" style="margin-right:20px">
                  <el-input v-model="ruleForm.checkPhoneCode"></el-input>
                </el-col>
                <el-col :span="8">
                  <button
                    @click="sendphonecode"
                    class="sendphonecode"
                    style="width:120px;height:40px;border: 1px solid #d7d7d7;font-size:12px;background-color: #f2f2f2;color: #323232;"
                  >获取验证码</button>
                </el-col>
              </el-form-item>
              <!-- 注册重置功能按钮 -->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 邮箱注册 -->
          <el-tab-pane label="邮箱注册">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <!-- 邮箱 -->
              <el-form-item label="邮箱：" prop="mailbox">
                <el-col :span="18">
                  <el-input v-model="ruleForm.mailbox"></el-input>
                </el-col>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item label="密码：" prop="pass">
                <el-col :span="18">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-col>
              </el-form-item>
              <!-- 确认密码 -->
              <el-form-item label="确认密码：" prop="checkPass">
                <el-col :span="18">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-col>
              </el-form-item>
              <!-- 验证码 -->
              <el-form-item label="验证码：" prop="code1">
                <el-col :span="8" style="margin-right:20px">
                  <el-input v-model="ruleForm.code1"></el-input>
                </el-col>
                <el-col :span="4" style="margin-right:20px">
                  <div style="width:80px;height:40px;border-radius: 4px;">
                    <canvas id="canvas1" width="80" height="40" style="width:100%;height：100%"></canvas>
                  </div>
                </el-col>
                <el-col
                  :span="4"
                  id="change1"
                  style="font-size:12px;color: #ADADAD;text-decoration: underline;"
                >
                  <span id="codesubmit" @click="changecode1()">换一张</span>
                </el-col>
              </el-form-item>
              <!-- 注册重置功能按钮 -->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 右侧合作网站快捷登录 -->
      <div class="main-right">
        <div class="inner">
          <div class="title">使用合作网站账号快速登录</div>
          <div class="block clearfix">
            <div class="login-block-shade left">
              <div class="login-block clearfix">
                <div class="icon-logo">
                  <a href="javascript:void(0)" name="third_login">
                    <img
                      src="../assets/img/register5-icon1.jpg"
                      style="cursor: pointer;"
                      width="54"
                      height="54"
                    />
                  </a>
                </div>
                <div class="icon-name" style="cursor: pointer;">
                  <a href="javascript:void(0)" name="third_login">QQ账号</a>
                </div>
              </div>
            </div>
            <div class="login-block-shade left">
              <div class="login-block clearfix">
                <div class="icon-logo">
                  <a href="javascript:void(0)" name="third_login">
                    <img
                      src="../assets/img/register5-icon2.jpg"
                      style="cursor: pointer;"
                      width="54"
                      height="54"
                    />
                  </a>
                </div>
                <div class="icon-name" style="cursor: pointer;">
                  <a href="javascript:void(0)" name="third_login">微信账号</a>
                </div>
              </div>
            </div>
            <div class="login-block-shade left">
              <div class="login-block clearfix">
                <div class="icon-logo">
                  <a href="javascript:void(0)" name="third_login">
                    <img
                      src="../assets/img/register5-icon3.jpg"
                      style="cursor: pointer;"
                      width="54"
                      height="54"
                    />
                  </a>
                </div>
                <div class="icon-name" style="cursor: pointer;">
                  <a href="javascript:void(0)" name="third_login">网易账号</a>
                </div>
              </div>
            </div>
            <div class="login-block-shade left">
              <div class="login-block clearfix">
                <div class="icon-logo">
                  <a href="javascript:void(0)" name="third_login">
                    <img
                      src="../assets/img/register5-icon4.jpg"
                      style="cursor: pointer;"
                      width="54"
                      height="54"
                    />
                  </a>
                </div>
                <div class="icon-name" style="cursor: pointer;">
                  <a href="javascript:void(0)" name="third_login">新浪账号</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tiaozhuan">
          已有账号，
          <a href="javascript:void(0)">快速登录>></a>
        </div>
      </div>
    </div>

    <!-- 底层背景动画 -->
    <div class="circle-box">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="element-1"></div>
      <div class="element-2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //手机号正则验证
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }, 1000);
    };

    //密码正则验证
    var validatePass = (rule, value, callback) => {
      //是否包含数字
      var ptr_digit = /^.*[0-9]+.*$/;
      //是否包含小写字母
      var ptr_lowcase = /^.*[a-z]+.*$/;
      //是否包含大写字母
      var ptr_upcase = /^.*[A-Z]+.*$/;
      //是否包含特殊字符（非数字、字母的字符）
      var ptr_special = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;
      // var ptr_special = /^.*[~`!@#$%^&*()_+|<>,.?/:;'\\[\\]{}\"]+.*$/;
      if (value.length < 6) {
        callback(new Error("密码至少6位"));
      } else if (
        (ptr_digit.test(value) &&
          ptr_lowcase.test(value) &&
          ptr_upcase.test(value) &&
          ptr_special.test(value)) ||
        (!ptr_digit.test(value) &&
          ptr_lowcase.test(value) &&
          ptr_upcase.test(value) &&
          ptr_special.test(value)) ||
        (ptr_digit.test(value) &&
          !ptr_lowcase.test(value) &&
          ptr_upcase.test(value) &&
          ptr_special.test(value)) ||
        (ptr_digit.test(value) &&
          ptr_lowcase.test(value) &&
          !ptr_upcase.test(value) &&
          ptr_special.test(value)) ||
        (ptr_digit.test(value) &&
          ptr_lowcase.test(value) &&
          ptr_upcase.test(value) &&
          !ptr_special.test(value))
      ) {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      } else {
        callback(
          new Error("至少包含大写字母、小写字母、数字、特殊字符中的三类字符")
        );
      }
    };

    //再次输入密码逻辑
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //手机注册验证码输入逻辑
    var checkCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value == this.allstr) {
        callback();
      } else {
        callback(new Error("请输入正确的验证码"));
      }
    };
    //邮箱注册验证码输入逻辑
    var checkCode1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value == this.allstr1) {
        callback();
      } else {
        callback(new Error("请输入正确的验证码"));
      }
    };
    //邮箱验证逻辑
    var checkMailbox = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱号码"));
      } else if (
        !/^[A-Za-z\d]+[A-Za-z\d\-_\.]*@([A-Za-z\d]+[A-Za-z\d\-]*\.)+[A-Za-z]{2,4}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的邮箱号码"));
      } else {
        callback();
      }
    };

    return {
      //接收手机注册页的canvas生成的验证码 
      allstr: "",
      //接收邮箱注册页的canvas生成的验证码 
      allstr1: "",
      //输入框前端逻辑变量名   
      ruleForm: {
        pass: "",
        checkPass: "",
        tel: "",
        code: "",
        code1: "",
        mailbox: ""
      },
      //输入框前端逻辑规则
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        code1: [{ validator: checkCode1, trigger: "blur" }],
        mailbox: [{ validator: checkMailbox, trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交注册数据
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("注册成功");
        } else {
          console.log("注册失败");
          return false;
        }
      });
    },
    // 重置填写内容
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 手机号注册页换一张验证码
    changecode() {
      //清空canvas生成的验证码
      this.allstr = "";

      let canvas = document.getElementById("canvas");

      let randomNumber = function(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
      };

      let randomColor = function(min, max) {
        let r = randomNumber(min, max);
        let g = randomNumber(min, max);
        let b = randomNumber(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
      };

      let ctx = canvas.getContext("2d");

      let width = canvas.width;
      let height = canvas.height;

      ctx.fillStyle = randomColor(100, 200);
      ctx.clearRect(0, 0, width, height);
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.strokeStyle = randomColor(20, 150);
        ctx.moveTo(randomNumber(0, width), randomNumber(0, height));
        ctx.lineTo(randomNumber(0, width), randomNumber(0, height));
        ctx.closePath();
        ctx.stroke();
      }

      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.strokeStyle = randomColor(150, 250);
        ctx.arc(
          randomNumber(0, width),
          randomNumber(0, height),
          1,
          2 * Math.PI,
          true
        );
        ctx.closePath();
        ctx.stroke();
      }

      let code = "123456789abcdefghijklmnopqrstuvwxyz";
      let str = "";

      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = "#000";
        ctx.font = "20px Songti SC";
        str = code.substr(randomNumber(0, code.length - 1), 1);
        ctx.fillText(
          str,
          randomNumber((i + 1) * 10, (i + 1) * 15),
          randomNumber(20, height - 20)
        );
        this.allstr += str;
      }
    },
    // 邮箱注册页换一张验证码
    changecode1() {
      this.allstr1 = "";

      let canvas1 = document.getElementById("canvas1");

      let randomNumber = function(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
      };

      let randomColor = function(min, max) {
        let r = randomNumber(min, max);
        let g = randomNumber(min, max);
        let b = randomNumber(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
      };

      let ctx1 = canvas1.getContext("2d");

      let width = canvas.width;
      let height = canvas.height;

      ctx1.fillStyle = randomColor(100, 200);
      ctx1.clearRect(0, 0, width, height);
      ctx1.fillRect(0, 0, width, height);

      for (let i = 0; i < 8; i++) {
        ctx1.beginPath();
        ctx1.strokeStyle = randomColor(20, 150);
        ctx1.moveTo(randomNumber(0, width), randomNumber(0, height));
        ctx1.lineTo(randomNumber(0, width), randomNumber(0, height));
        ctx1.closePath();
        ctx1.stroke();
      }

      for (let i = 0; i < 20; i++) {
        ctx1.beginPath();
        ctx1.strokeStyle = randomColor(150, 250);
        ctx1.arc(
          randomNumber(0, width),
          randomNumber(0, height),
          1,
          2 * Math.PI,
          true
        );
        ctx1.closePath();
        ctx1.stroke();
      }

      let code = "123456789abcdefghijklmnopqrstuvwxyz";
      let str1 = "";

      for (let i = 0; i < 4; i++) {
        ctx1.fillStyle = "#000";
        ctx1.font = "20px Songti SC";
        str1 = code.substr(randomNumber(0, code.length - 1), 1);
        ctx1.fillText(
          str1,
          randomNumber((i + 1) * 10, (i + 1) * 15),
          randomNumber(20, height - 20)
        );
        this.allstr1 += str1;
      }
    },
    sendphonecode() {
    //   console.log(1);
      return false;
    }
  },
  //实例挂载后执行的函数   
  mounted() {
    // canvas
    let canvas = document.getElementById("canvas");
    let canvas1 = document.getElementById("canvas1");

    let randomNumber = function(min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    };

    let randomColor = function(min, max) {
      let r = randomNumber(min, max);
      let g = randomNumber(min, max);
      let b = randomNumber(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    };

    let ctx = canvas.getContext("2d");
    let ctx1 = canvas1.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    ctx.fillStyle = randomColor(100, 200);
    ctx.fillRect(0, 0, width, height);

    ctx1.fillStyle = randomColor(100, 200);
    ctx1.fillRect(0, 0, width, height);

    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.strokeStyle = randomColor(20, 150);
      ctx.moveTo(randomNumber(0, width), randomNumber(0, height));
      ctx.lineTo(randomNumber(0, width), randomNumber(0, height));
      ctx.closePath();
      ctx.stroke();
    }

    for (let i = 0; i < 8; i++) {
      ctx1.beginPath();
      ctx1.strokeStyle = randomColor(20, 150);
      ctx1.moveTo(randomNumber(0, width), randomNumber(0, height));
      ctx1.lineTo(randomNumber(0, width), randomNumber(0, height));
      ctx1.closePath();
      ctx1.stroke();
    }

    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.strokeStyle = randomColor(150, 250);
      ctx.arc(
        randomNumber(0, width),
        randomNumber(0, height),
        1,
        2 * Math.PI,
        true
      );
      ctx.closePath();
      ctx.stroke();
    }

    for (let i = 0; i < 20; i++) {
      ctx1.beginPath();
      ctx1.strokeStyle = randomColor(150, 250);
      ctx1.arc(
        randomNumber(0, width),
        randomNumber(0, height),
        1,
        2 * Math.PI,
        true
      );
      ctx1.closePath();
      ctx1.stroke();
    }

    let code = "123456789abcdefghijklmnopqrstuvwxyz";
    let str = "";
    let str1 = "";

    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = "#000";
      ctx.font = "20px Songti SC";
      str = code.substr(randomNumber(0, code.length - 1), 1);
      ctx.fillText(
        str,
        randomNumber((i + 1) * 10, (i + 1) * 15),
        randomNumber(20, height - 20)
      );
      this.allstr += str;
    }

    for (let i = 0; i < 4; i++) {
      ctx1.fillStyle = "#000";
      ctx1.font = "20px Songti SC";
      str1 = code.substr(randomNumber(0, code.length - 1), 1);
      ctx1.fillText(
        str1,
        randomNumber((i + 1) * 10, (i + 1) * 15),
        randomNumber(20, height - 20)
      );
      this.allstr1 += str1;
    }
    // console.log(this.allstr);
    // console.log(this.allstr1);
    //   $('#codesubmit').addEventListener('click',function(e){  e = e||window.event; e.preventDefault();},false)
  }
};
</script>
<style>
.circle-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1000px;
  overflow: hidden;
}
.circle-box .circle-1 {
  position: absolute;
  left: 50%;
  margin: 0 0 0 -716px;
  top: 258px;
  width: 630px;
  height: 630px;
  background: url("../assets/img/circle-1.png") left center no-repeat;
  animation: clockwise 40s linear infinite;
}
@keyframes clockwise {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.circle-box .circle-2 {
  position: absolute;
  right: -308px;
  top: 202px;
  width: 616px;
  height: 616px;
  background: url("../assets/img/circle-2.png") left center no-repeat;
  animation: clockwise 40s linear infinite;
}
.circle-box .circle-3 {
  position: absolute;
  left: 50%;
  top: -590px;
  margin: 0 0 0 -590px;
  width: 1181px;
  height: 1181px;
  background: url("../assets/img/circle-3.png") left center no-repeat;
  animation: clockwise 40s linear infinite;
}
.circle-box .element-1 {
  position: absolute;
  left: 50%;
  top: 160px;
  margin: 0 0 0 450px;
  width: 269px;
  height: 417px;
  background: url("../assets/img/element1.png") left center no-repeat;
  animation: down_float 10s linear infinite;
}
@keyframes down_float {
  0% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  50% {
    transform: translate(0px, 25px);
    opacity: 0.5;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
.circle-box .element-2 {
  position: absolute;
  left: 50%;
  top: 350px;
  margin: 0 0 0 -590px;
  width: 1446px;
  height: 207px;
  background: url("../assets/img/element2.png") left center no-repeat;
  animation: up_float 10s linear infinite;
}
@keyframes up_float {
  0% {
    transform: translate(0px, 0px);
    opacity: 0.3;
  }
  50% {
    transform: translate(0px, 25px);
    opacity: 1;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 0.3;
  }
}
img {
  border: 0;
}
.body {
  background: url("../assets/img/animate-bg.jpg") #fff center top no-repeat;
  min-width: 1002px;
  width: 100%;
  height: 1000px;
  position: relative;
}
.re-top {
  width: 818px;
  margin: 0 auto 40px;
  padding: 100px 0 0;
  position: relative;
  z-index: 10;
}
/* re-main */
.re-main {
  position: absolute;
  left: 50%;
  margin-left: -500px;
  width: 1000px;
  height: 600px;
  /* background-color: rgba(221, 221, 221, 0.685); */
  z-index: 100;
  display: flex;
  /* border: 1px solid #7cbcda; */
  border-radius: 5px;
}
.main-left {
  flex: 7;
  padding-left: 95px;
  background: rgba(244, 244, 244, 0.6);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.overall {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
  padding-top: 20px;
  color: #676767;
}

.main-right {
  flex: 3;
  background: rgba(244, 244, 244, 0.6);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
}
.inner {
  width: 290px;
  margin: 0 auto;
  padding-top: 97px;
}
.title {
  color: #999;
  font-size: 14px;
  border-bottom: dashed 1px #ccc;
  padding-bottom: 40px;
  text-align: center;
  font-family: "宋体";
}
.block {
  padding-top: 40px;
}
.login-block-shade {
  background-repeat: no-repeat;
  float: left;
  height: 89px;
  width: 145px;
  cursor: pointer;
}
.login-block {
  width: 127px;
  height: 71px;
  margin-top: 9px;
  margin-left: 9px;
  background-color: #fafafa;
}
.icon-logo {
  float: left;
}
.icon-logo a {
  padding: 8px 0 8px 11px;
  display: block;
}
.icon-name {
  float: left;
  height: 54px;
  line-height: 54px;
  color: #797979;
  font-size: 12px;
}
.icon-name a {
  color: #797979;
  display: block;
  padding: 8px 0 8px 5px;
  width: 56px;
}
.icon-name a:hover {
  text-decoration: underline;
}
.login-block-shade:hover {
  background: url("../assets/img/hover.jpg");
}
.register-tabs {
  margin: 10px 25px 10px 0px;
  height: 450px;
}
.tiaozhuan {
  color: #666;
  font-size: 12px;
  position: absolute;
  right: 25px;
  bottom: 100px;
}
.tiaozhuan a {
  color: #0091d5;
}
.tiaozhuan a:hover {
  text-decoration: underline;
}
.el-form {
  margin: 20px 0px 20px 20px;
}
#change1 {
  cursor: pointer;
}
#change1:hover {
  color: #0091d5 !important;
}
.sendphonecode:hover {
  background: #e8f7fe !important;
  border: 1px solid #9dd2f1 !important;
  color: #497193 !important;
}
</style>