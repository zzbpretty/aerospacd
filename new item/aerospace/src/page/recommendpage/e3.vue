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
            <h1>俄进步M-12M货运飞船发射失败未能进入预定轨道</h1>
        </div>
        <div class="c-c-content">
            <p>新华网莫斯科8月24日电 (记者 耿锐斌) 俄罗斯联邦航天署24日发布消息说，俄当天在哈萨克斯坦境内拜科努尔发射场发射的“进步M－12M”货运飞船未能进入预定轨道。</p>
            <p>　俄航天署说，搭载着货运飞船的“联盟－U”型运载火箭于莫斯科时间24日17时(北京时间21时)在发射场点火升空。据专家初步判断，在升空325秒后，火箭第三级的动力设备发生故障导致了此次发射失败。</p>
            <p>俄媒体援引航天界人士的话说，在火箭升空后，其燃料箱压力意外降低，此后地面与航天器的联系中断。目前，俄航天兵所属的所有地面观测点正在确定货运飞船的位置。</p>
            <p> “进步M－12M”是俄罗斯今年发射的第四艘货运飞船。按计划，这艘载有2.5吨各类物资的飞船将于26日与国际空间站“码头”号对接舱对接。</p>
            <p>　俄航天兵发言人维塔利·维亚特金表示，俄将于26日在普列谢茨克航天发射场使用“联盟－2”运载火箭发射“格洛纳斯”导航卫星。这次飞船发射事故不会影响到该卫星的发射准备工作。</p>
            <p>俄罗斯在一周内已遭遇两次航天器发射失败事故。本月18日，俄“快车－AM4”通信卫星搭乘“质子－M”运载火箭在拜科努尔发射场发射升空。然而，在火箭推进器完成第4次，也就是倒数第二次点火后，地面同卫星失去联系。俄航天部门随后表示，在“快车－AM4”卫星发射失败原因查明前，将暂停“质子”系列火箭的发射。</p>
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