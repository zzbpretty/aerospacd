<template>
    <div>
        <div class="header">
            <div class="head-main">
                <router-link to="/" class="link-home">
                    <div style="height:71px;float:left;position:absolute;top:-1px">
                        <div style="height:45px;line-height:45px;font-size:18px;font-weight:900;color:white">中国航天系统科学与工程研究院第707所</div>
                        <div style="color:white">China Aerospace Academy of Systems Science and Engineering</div>
                    </div>
                </router-link>
                <div class="head-right">
                    <ul class="login-btns">
                        <li class="btn-login"><router-link to="/login" class="login-a" style="color:#ffffff" >登录</router-link></li>
                        <li class="btn-register"><router-link to="/register" class="login-a" style="color:#2b83ff">注册</router-link></li>
                    </ul>
                    <ul class="link-list">
                        <li><router-link to="/mobile" target='_blank' class="link-a" style="color:#ff9c00">手机版</router-link></li>
                        <li><router-link to="" class="link-a">ENGLISH</router-link></li>
                        <li><router-link to="" class="link-a">网站地图</router-link></li>
                        <li><router-link to="" class="link-a">帮助中心</router-link></li>
                        <li><router-link to="" class="link-a">购买年卡</router-link></li>
                        <li><router-link to="" class="link-a">充值中心</router-link></li>
                        <li><router-link to="" class="link-a">个人/机构</router-link></li>
                        <li><router-link to="" class="link-a">我的</router-link></li>
                    </ul>
                </div>
                <!--head-right-->
            </div>
            <!--head-main-->
    </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    width: 100%;
    height: 70px;
    margin-bottom: 40px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #3c80ef;
    background-image: url('../assets/img/banner1.jpg')
}
.header .head-main {
    width: 1220px;
    height: 70px;
    margin: 0 auto;
}
.header .link-home {
    float: left;
    width: 140px;
    height: 45px;
    margin-top: 2px;
    border-radius: 15px;
}
.header .head-right {
    float: right;
    padding-top: 14px;
}
.login-btns {
    float: right;
    margin-left: 40px;
    margin-top: 6px;
}
.login-btns li {
    display: inline-block !important;
    vertical-align: middle;
    color: #fff;
    line-height: 26px;
}
.login-btns .btn-login .login-a {
    display: inline-block;
    vertical-align: middle;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.login-btns li + li {
    margin-left: 10px;
}
.section1 .login-btns .btn-login:hover, .section1 .login-btns .btn-register {
    color: #2b83ff;
}
.login-btns .btn-login:hover, .login-btns .btn-register {
    background: rgba(255,255,255,.8);
}
.btn-login:hover a{
    color: #2b83ff !important;
}
.btn-register:hover{
    background:#2b83ff !important;
}
.btn-register:hover a{
    color:rgba(255,255,255,.8) !important;
}
.login-btns .btn-register, .login-btns .btn-login {
    display: block;
    padding: 2px 20px;
    border: 1px solid #fff;
    border-radius: 2px;
    cursor: pointer;
}
.login-btns a{
    font-size: 16px;
}
.header .link-list {
    float: right;
    padding-top: 14px;
    color: #fff;
}
.header .link-list li {
    display: inline-block;
    vertical-align: top;
    height: 14px;
    padding: 0 12px;
    line-height: 14px;
}
 .link-a {
    font-size: 14px;
    color: #ffffff;
    font-family: "Microsoft yahei";
}
</style>