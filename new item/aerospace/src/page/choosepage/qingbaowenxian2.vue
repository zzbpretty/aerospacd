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
            <h1>普京高度评价俄战备水平和反恐情报工作</h1>
            <p>李婷(实习生)、贾文婷</p>
            <div class="c-data">2019年11月07日10:43</div>
        </div>
        <div class="c-c-content">
            <p>　新华社莫斯科11月6日电（记者栾海）俄罗斯总统普京6日在莫斯科高度评价俄军战备水平和安全执法机构的反恐及情报工作，并对相关领域的工作提出重点安排。</p>
            <p>据俄总统网站6日发布的消息，普京当天在克里姆林宫出席部分军官、检察官职级晋升仪式时说，今年以来俄军演习次数同比增加四分之一，战备水平不断提高。俄将继续加强国防力量，使高超音速武器、激光武器和其他最新装备参加战斗值班。</p>
            <p>普京指出，俄增强军力是为了在当前所面临威胁增大的背景下保障自身安全，同时俄“准备力所能及地推动裁军进程”。俄将进一步提高军队指战员职业素养，增强纪律性，提升士气，以确保俄军战斗力。</p>
            <p>　关于俄安全执法部门工作，普京指出，今年1至9月俄及时制止了39起具有恐怖主义倾向的犯罪活动；在反敌特方面取得良好战果；俄对外情报局深入分析各类威胁，为俄做出正确的战略决策提供了准确依据。同时俄内务部还需要继续改进关键工作，设法提升其社会信任度。</p>
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
    width: 1000px ;
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