<template>
    <div>
      <Header></Header>
      <div class="s-top">
          <div class="s-top-left">
              <img src="../../assets/img/timg.jpg" alt="" style="width:90px;height:80px;line-height:60px;margin-left:50px;margin-bottom:15px;border-radius:50%">
          </div>
          <div class="s-top-right">.
          <Search></Search>
          </div>
      </div>

      <div class="c-content">
        <div class="c-title">
            <h1>俄罗斯推迟发射格洛纳斯导航卫星</h1>
        </div>
        <div class="c-c-content">
            <p>新华网莫斯科8月25日电 (记者刘恺) 俄罗斯航天兵司令奥列格·奥斯塔片科25日说，由于“进步M—12M”货运飞船发射失败原因目前正在调查中，原定于26日凌晨进行的“格洛纳斯”导航卫星发射计划被推迟。</p>
            <p>奥斯塔片科对媒体说，俄原定于26日凌晨在普列谢茨克航天发射场用“联盟－2”运载火箭发射“格洛纳斯－M”导航卫星，但由于货运飞船发射失败，相关部门已决定，推迟发射“格洛纳斯－M”导航卫星，并将对“联盟－2”运载火箭、导航卫星等航天器进行全面检查，但发射推迟不会对“格洛纳斯”卫星在轨集群造成大的影响。</p>
            <p>　奥斯塔片科同时表示，目前还未确定“格洛纳斯－M”导航卫星的下次发射时间，预计有可能是9月上旬，但具体日期需要在货运飞船发射失败原因调查结束后才能确定。</p>
            <p> “格洛纳斯”系统由俄罗斯单独研制部署，其研发始于上世纪70年代。这一系统至少需要18颗卫星为俄全境提供卫星定位和导航服务，如要提供全球服务，则需24颗卫星在轨工作，另有6颗卫星在轨备用。</p>
            <p>莫斯科时间24日17时(北京时间24日21时)，俄航天部门在位于哈萨克斯坦境内的拜科努尔发射场使用“联盟－U”型运载火箭将“进步M－12M”货运飞船发射升空，但未能将货运飞船送入预定轨道。飞船碎片坠落在俄西伯利亚南部阿尔泰共和国境内的森林地区，目前碎片搜寻工作正在进行中。</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from "../../components/header"
import Footer from "../../components/footer"
import Search from "../../components/search"
export default {
    components:{
        Header,
        Footer,
        Search
    }
}
</script>
<style >
.s-top{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.s-top-left{
    flex:1;
    margin-right: 30px;
    
}
.s-top-right{
    flex:5;
    padding-bottom: 35px;
}
.c-content{
    width: 1200px ;
    margin: 25px auto;
    padding-bottom: 100px;
    
    /* background-color:salmon; */
}
.c-title{
    border-bottom: #d3d3d3 1px solid;
padding-bottom: 15px;
word-break: break-all;
text-align: center;
}
.c-title h1{
margin: 5px auto 10px;
color: #222;
font: bold 38px/150% "Microsoft Yahei";
clear: both;
}
.c-title p{
    font-size: 16px;
    font-family: "Microsoft Yahei";
    
}
.c-data{
    height: 36px;
    font: normal 12px/200% "Microsoft Yahei";
    line-height: 44px;
color: #666;
}
.c-c-content{
    margin: 30px 100px;
}
.c-c-content p{
    margin: 25px 0;
    color: #222;
line-height: 180%;
text-indent: 2em;
font: normal 18px/200% "Microsoft Yahei";
}
</style>