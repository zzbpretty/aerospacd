<template>
<!-- 首页 -->
  <div class="backgound-home">
    <!-- header start -->
    <Header></Header>
    <!-- header end -->
    <!-- searchmain -->
    <Search></Search>
    <!-- searchmain -->
    <!-- swiper -->
    <Swiper></Swiper>
    <!-- swiper -->
    <!-- choose -->
    <div class="choose">
      <div class="choose-content">
        <div class="choose-content-left">
          <ul class="menus">
                <li id="focus" class=""><a href="javascript:void(0)"><i class="icon icon-wdgz"></i>我的关注</a></li>
                <li id="recmd"><a href="javascript:void(0)"><i class="icon icon-jctj"></i>精彩推荐</a></li>
                <li class="active" id="hot"><a href="javascript:void(0)"><i class="icon icon-rmwx"></i>热门文献</a></li>
            </ul>
            <div class="personal-links">
                <h6><span>个人书房</span></h6>
                <ul>
                    <li data-id="fav_paper"><a href="javascript:void(0)">我的收藏</a></li>
                    <li data-id="citationTracking"><a href="javascript:void(0)">引文跟踪</a></li>
                    <li data-id="myAchievement"><a href="javascript:void(0)">我的成果</a></li>
                </ul>
                <ul>
                    <li data-id="history_search"><a href="javascript:void(0)">检索历史</a></li>
                    <li data-id="history_download"><a href="javascript:void(0)">下载历史</a></li>
                    <li data-id="history_brown"><a href="javascript:void(0)">浏览历史</a></li>
                </ul>
            </div>
        </div>
        <div class="choose-content-right">
           <Choose></Choose>
        </div>
      </div>
    </div>
   
    <!-- choose -->
    <!-- to top -->
    
    <!-- to top -->
    <Footer></Footer>
  </div>
</template>
<script>
import Search from "../components/search";
import Footer from "../components/footer";
import Header from "../components/header";
import Swiper from "../components/swiper";
import Choose from "../components/choose";

export default {
  components: {
    Header,
    Search,
    Footer,
    Swiper,
    Choose
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style>
.choose {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 100%;
  padding-bottom: 100px;
  font-size: 12px;
  font-family: "Microsoft yahei";
  background-color: #fff;
  clear: both;
  margin-top: 25px;
  opacity: .9;
  
}
.choose-content{
  width: 1200px;
  margin: 50px auto 0;
  display: flex;
}
.choose-content-left{
  flex: 1;
  margin-right: 30px;
}
.choose-content-right{
  flex: 5;
  /* background-color: rgb(216, 216, 247) */
}

.menus {
    padding: 13px 0;
    margin-bottom: 9px;
    background-color: #eaf2fd;
}
.menus li {
    padding: 0 25px;
    text-align: center;
    font-size: 16px;
    line-height: 48px;
}
.menus a {
    display: block;
    color: #676767;
}
.icon-wdgz {
    background-position: 0 0;
}
.icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 13px;
    background: url("../assets/img/icon-sprite.png") no-repeat;
        background-position-x: 0%;
        background-position-y: 0%;
}
.icon-jctj {
    background-position: -20px 0;
}
.active .icon-rmwx {
    background-position: -40px -20px;
}
a:hover{
  text-decoration: none
}
#hot a{
  color:#1a63d3;
}
.menus a:hover{
  color: #1a63d3;
}
.personal-links {
    padding: 10px 7px 25px;
    text-align: center;
    background-color: #eaf2fd;
}
.personal-links h6 {
    margin-bottom: 12px;
    line-height: 16px;
    font-size: 12px;
    color: #dd9183;
    font-weight: normal;
}
.personal-links h6 span {
    display: block;
    line-height: 26px;
    font-size: 18px;
    color: #1a63d3;
}
.personal-links ul {
    padding: 11px 17px 4px;
    background-color: #fff;
}
.personal-links li a {
    display: block;
    line-height: 36px;
    color: #62676e;
    font-size: 14px;
    text-align: center;
}
.personal-links li + li {
    border-top: 1px dashed #d4d4d4;
}
.personal-links ul + ul {
    padding-top: 7px;
    padding-bottom: 46px;
    background-image: url("../assets/img/icon-side-personal.png");
    background-repeat: no-repeat;
    background-position: top center;
}
.backgound-home{
  width: 1920px;
  margin: 0 auto;
  background: url('../assets/img/gloable.jpg') no-repeat ;
  background-size: 1920px 100%  ;
}
</style>