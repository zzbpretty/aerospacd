<template>
    <div>
        <div class="m-all">
          <div class="topnav">
			<ul class="nav">
                  <router-link to="/" class="link-home">
                    <div style="height:71px;float:left;position:absolute;top:-1px">
                        <div style="height:45px;line-height:45px;font-size:18px;font-weight:900;color:white">中国航天系统科学与工程研究院四所</div>
                        <div style="color:white">China Aerospace Academy of Systems Science and Engineering</div>
                    </div>
                </router-link>
				 <li><a href="javascript:void(0)">常见问题</a></li>
				 <li><a href="javascript:void(0)">使用帮助</a></li>
				 <li><a href="javascript:void(0)">下载</a></li>
				 <li class="current"><a href="/">首页</a></li>
			</ul>
          </div>
          <div class="downbox">
			<div class="down">
				<div class="text">
					<div>
                        
                    </div>
				</div>
				<div class="downlebox">
					<div class="downle">
						<a href="javascript:void(0)"  title="前往苹果官方商店下载" class="downiphone"></a>
						<a href="javascript:void(0)"  class="downandr"></a>
					</div>
					<div class="kbcode">
						<img src="../assets/img/erweima1.png">
					</div>
				</div>
			</div>
			<div class="phone">
				<img src="../assets/img/iphone.png">
			</div>
		  </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../components/footer'
export default {
    components:{
        Footer
    }
}
</script>
<style>
.m-all {
    background: url('../assets/img/top_bj.png') no-repeat;
    background-size: 1920px 100%;
    background-position: center;
    width: 100%;
    height: 768px;
    margin: 0 auto;
}
.topnav{
    margin: 0 auto;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
}
.nav {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.nav li {
    float: right;
    font-size: 14px;
    color: #fff;
    margin: 0 20px;
    padding: 29px 0 22px 0;
    padding-top: 29px;
    font-weight: normal;
    border-bottom: 4px transparent solid
}
.nav li:hover {
    border-bottom: 4px #23A3FF solid;
}
.nav li a {
    display: block;
    font-size: 18px;
    color: #fff;
}
.downbox {
    width: 1200px;
    margin: 0 auto;
    padding-left: 40px;
    overflow: hidden;
}
.down {
    float: left;
    padding-top: 140px;
    padding-left: 40px;
}
.text {
    margin-bottom: 60px;
}
.text div {
    width: 356px;
    height: 114px;
}
.downlebox {
    overflow: hidden;
}
.downle {
    float: left;
}
.downle a {
    display: block;
    margin-top: 20px;
    width: 170px;
    height: 46px;
}
.downle a.downiphone {
    background: url('../assets/img/but_pc_iphone_default.png') no-repeat;
        background-size: auto;
    background-size: 170px 46px;
}
.downle a.downandr {
    background: url('../assets/img/but_pc_android_default.png') no-repeat;
        background-size: auto;
    background-size: 170px 46px;
}
.kbcode {
    float: right;
}
.kbcode img {
    width: 154px;
    height: 154px;
}
.phone {
    float: right;
    padding-top: 107px;
    padding-right: 70px;
}
.phone img {
    width: 438px;
    /* height: 444px; */
}
</style>