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
            <h1>俄罗斯将恢复发射货运飞船</h1>
        </div>
        <div class="c-c-content">
            <p>　新华网莫斯科9月13日电 (记者耿锐斌)俄罗斯联邦航天署13日宣布，俄下一艘“进步”货运飞船将于10月30日升空，飞赴国际空间站。它将有望成为俄连续两次航天发射失败后首次升空的航天器。</p>
            <p>据俄航天署介绍，今年10月30日和明年1月26日俄将发射两艘货运飞船，今年11月12日和12月20日两艘载人飞船也将飞向太空，为国际空间站送去“换岗”的宇航员。目前，俄美两国航天部门正就国际空间站的运行事项进行磋商。</p>
            <p>俄罗斯在今年8月连续两次实施航天发射均以失败告终，导致一颗通信卫星无法服役和“进步M－12M”货运飞船在俄境内坠毁。事故发生后，用于发射这些航天器的“质子”和“联盟”运载火箭被紧急“叫停”，多项发射计划被推迟。俄部门间调查委员会认为，“质子”火箭的推进器控制系统程序编写错误造成8月份发射的那颗通信卫星未能入轨，而“联盟”运载火箭第三级发动机燃料供应系统堵塞是“进步M－12M”货运飞船坠毁的原因。</p>
            <p> 　尽管俄方表示货运飞船发射失败不会影响6名国际空间站宇航员的生活，然而俄罗斯是目前唯一负责向国际空间站运送宇航员的国家，其载人飞船发射使用的是“联盟”运载火箭，因此相关国家还是对国际空间站能否正常运行表达了疑虑。美国航天局已开始拟订国际空间站人员撤离计划，并表示不排除国际空间站在今年11月中旬后将处于无人驻守的“空巢”状态。</p>
            <p>俄罗斯是世界主要的航天器发射国，目前每年进行航天发射的次数占全球的40%左右。俄总理普京在今年4月提出目标，俄计划在不远的将来把这一发射数字再提高10个百分点。</p>
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