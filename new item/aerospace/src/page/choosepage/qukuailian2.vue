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
            <h1>行业巨头抢滩区块链 基础设施布局成首选</h1>
            <p>孙忠</p>
            <div class="c-data">2019年11月07日08:56</div>
        </div>
        <div class="c-c-content">
            <p>落地案例日渐增多、产业环境渐趋成形，区块链迎来新一轮大发展。而在区块链技术落地的三个层次（工具、平台、基础设施）中，随着行业发展步入快车道，金融科技巨头纷纷选择在高端的基础设施层次上持续发力，以构建更深的“护城河”。</p>
            <p>上证报记者昨日获悉，中钞区块链技术研究院日前与国家技术转移东部中心在上海启动合作，推广络谱区块链登记开放平台（下称络谱平台）。该平台将为实体企业提供可信区块链底层技术。同时，银联与中国移动合作的区块链服务网络（BSN）内测已经启动，这个国内目前最大的跨行业、跨市场、跨地域的区块链基础技术平台预计将于明年4月正式启用。</p>
            <p> 近期，银联、中钞区块链技术研究院等金融科技企业不断加码和优化区块链技术布局。虽然彼此路径并不相同，但对于区块链技术的基础设施建设皆是格外重视。

“此次区块链测试平台将是国内最大的平台，不仅可以容纳多种区块链底层语言，还可以在全国任何一个城市进行接入。这是一个跨公网、跨地域、跨机构的全国性区块链服务基础设施。”中国银联电子支付研究院区块链负责人周钰向记者表示。</p>
            <p> 据悉，此次银联并非单枪匹马，而是联合国家信息中心和中国移动一同推进。

业内人士认为，基础设施层是区块链产业发展的基石，为区块链上层应用的研发和运作提供重要的支持，技术准入门槛较高，头部效应明显。对于中小微企业而言，采用区块链技术难度也不小，不仅人才短缺，同时技术理解也难以统一。

周钰表示，由于中国移动的参与，区块链服务网络（BSN）基本上可以覆盖全国各个重要地区，使其成为国内最重要的区块链平台之一。同时，这个平台计划兼容不同的区块链底层技术，多种主流区块链技术都将逐步融合到平台的技术框架中。</p>
            <p>内测6个月后，将有望正式商用。”周钰透露。

浦东改革与发展研究院金融研究室主任刘斌表示，银联启动的区块链服务网络优势在于利用中国移动各地云资源，建设一个区块链基础服务网络，这个网络上可能会给开发者提供即插即用的服务，能集成很多区块链技术应用平台。</p>
            <p> 此前，腾讯和阿里等互联网公司各自拥有BAAS（Blockchain as a Service）平台，为企业提供简单快捷布局区块链的服务。

周钰表示，国内区块链行业内还没有构建起得到一致认可并可共同使用的区块链底层环境。业界对于建立一个各方均认可的区块链公共基础设施呼声很高。而银联有望在这一领域取得突破。

据悉，这一超级平台拥有掌握底层核心的关键技术，也可以推动国家以及行业标准建设。</p>
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