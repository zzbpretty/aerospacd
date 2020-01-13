<template>
    <div>
        <!-- 页面底部栏 -->
        <div class="footer">
            <div class="foot-top">
                <ul class="foot-content">
                    <li>
                        <b>读者服务</b>
                        <a target="_blank" href="javascript:void(0)">购买航天卡</a>
                        <a target="_blank" href="javascript:void(0)">充值中心</a>
                        <a target="_blank" href="javascript:void(0)">我的CASC</a>
                        <a target="_blank" href="javascript:void(0)">帮助中心</a>
                    </li>
                    <li>
                        <b>常用软件下载</b>
                        <a target="_blank" href="javascript:void(0)">CAJViewer浏览器</a>
                        <a target="_blank" href="javascript:void(0)">数字化学习平台</a>
                        <a target="_blank" href="javascript:void(0)">工具书桌面检索软件</a>
                    </li>
                    <li>
                        <b>特色服务</b>
                        <a target="_blank" href="javascript:void(0)">手机航天</a>
                        <a target="_blank" href="javascript:void(0)">杂志订阅</a>
                        <a target="_blank" href="javascript:void(0)">数字出版物订阅</a>
                        <a target="_blank" href="javascript:void(0)">编创服务</a>
                    </li>
                    <li>
                        <b>客服咨询</b>
                        <span>订卡热线：400-819-9993</span>
                        <span>服务热线：400-810-9888</span>
                        <span>在线咨询：<a target="_blank" href="javascript:void(0)">help.casa.net</a></span>
                        <span>邮件咨询：<a target="_blank" href="javascript:void(0)">help@casa.net</a></span>
                    </li>
                    <li class="weibo">
                        <a target="_blank" href="javascript:void(0)">
                            <img src="//piccache.cnki.net/kdn/index/kns7/nimages/logo_xl.png" alt="新浪微博客服">
                            <span>新浪微博客服</span>
                        </a>
                        <a target="_blank" href="javascript:void(0)">
                            <img src="//piccache.cnki.net/kdn/index/kns7/nimages/logo_tx.png" alt="腾讯微博客服">
                            <span>腾讯微博客服</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="foot-bot clearfix">
                <div class="t">
                    
                    <p class="mid">
                        <span>
                            <a target="_blank" href="javascript:void(0)">关于我们</a>
                            <a target="_blank" href="javascript:void(0)">CASC 荣誉</a>
                            <a target="_blank" href="javascript:void(0)">版权公告</a>
                            <a target="_blank" href="javascript:void(0)">客服中心</a>
                            <a target="_blank" href="javascript:void(0)">在线咨询</a>
                            <a target="_blank" href="javascript:void(0)">用户建议</a>
                            <a target="_blank" href="javascript:void(0)">航天招聘</a>
                            <a target="_blank" href="javascript:void(0)">航天推广</a>
                        </span>
                        <span id="copyright">© 2016-2019 中国航天系统科学与工程研究院第707所</span>
                    </p>
                    <p class="right">
                        <a id="___szfw_logo___" href="javascript:void(0)" target="_blank">
                            <img alt="可信网站" src="//piccache.cnki.net/kdn/index/kns7/nimages/kxwz.jpg" width="86" height="33"></a>
                    </p>
                </div>
                <div class="b">
                    <span>京 ICP 证 040431 号<a target="_blank" href="javascript:void(0)">网络出版服务许可证 (总)网出证(京)字第 271 号</a><a target="_blank" href="javascript:void(0)">出版物经营许可证</a> 京公网安备 11010802020460 号</span>
                    <span>《中国学术期刊（光盘版）》电子杂志社有限公司</span>
                    <span>KDN 平台基础技术由 KBASE 11.0 提供.</span>
                </div>
            </div>
        </div>
    <!-- 页面底部栏 -->

    </div>
</template>
<script>
export default {

}
</script>
<style>
 /* footer */
.footer {
    width: 100%;
    color: #a4acb7;
    font-family: "Microsoft Yahei";
    line-height: 22px;
    background-color: #1c2b40;
}
.foot-top {
    width: 100%;
    height: 181px;
    padding-top: 28px;
    clear: both;
    background:  #e6e9ee;
}
.foot-top .foot-content {
    width: 1140px;
    margin: 0 auto;
    overflow: hidden;
}
.foot-top li {
    float: left;
}
.foot-top b {
    display: block;
    font-size: 14px;
    color: #54627a;
    line-height: 44px;
}
.foot-top a, .foot-top span {
    display: block;
    color: #66758d;
}
.footer a {
    color: #66758d;
    font-family: "Microsoft Yahei";
}
.foot-top li + li {
    margin-left: 80px;
}
.foot-top .weibo {
    height: 90px;
    padding-top: 30px;
    padding-left: 65px;
    margin-top: 17px;
    border-left: 1px solid #506581;
}
.foot-top .weibo a {
    display: inline-block;
    line-height: 40px;
    text-align: center;
}
.foot-top .weibo img {
    width: 40px;
    height: 40px;

}
.foot-top .weibo a + a {
    margin-left: 35px;
}
.foot-bot {
    width: 1140px;
    margin: 0 auto;
    overflow: hidden;
    color: #a4acb7;
}
.foot-bot .t {
    height: 60px;
    padding-top: 27px;
    border-bottom: 1px solid #2e435e;
}
.foot-bot .t > img {
    float: left;
    width: 110px;
}
.foot-bot .t .mid {
    float: left;
    margin-left: 20px;
}
.foot-bot .t .mid span {
    display: block;
}
.foot-bot .t a {
    color: #a4acb7;
}
.foot-bot .t .right {
    float: right;
}
.foot-bot .t .right img {
    height: 32px;
    margin-left: 17px;
}
.foot-bot .b {
    width: 670px;
    padding-top: 16px;
}
.foot-bot .b a, .foot-bot .b span {
    color: #6a7481;
    white-space: nowrap;
    margin-right: 5px;
}
.foot-bot .b a, .foot-bot .b span {
    color: #6a7481;
    white-space: nowrap;
    margin-right: 5px;
}
.foot-bot .b a {
    margin-left: 5px;
}
a{
    line-height: 22px;
}
.footer{
    font-size: 12px !important
}
</style>

