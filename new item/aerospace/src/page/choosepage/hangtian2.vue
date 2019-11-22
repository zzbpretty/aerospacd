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
            <h1>进博会央企采购团"集合"2.1万人 签约扩至87个国家和地区</h1>
            <p>阙天南</p>
            <div class="c-data">2019年11月07日08:57</div>
        </div>
        <div class="c-c-content">
            <p>“今年中央企业采购签约将涉及到国家和地区87个，比去年增加近20个，供应商超过730家，比上年增加5%，拟签约的采购合同协议每一项金额都将比去年有较大幅度增长。”11月6日，国务院国资委党委书记、主任郝鹏在第二届中国国际进口博览会中外企业合作论坛上如是介绍。</p>
            <p>郝鹏表示，从合作内容看，供应链合作不断做实、产业链融合不断走深。南方电网、国机集团、通用技术集团、中国商飞等企业积极采购关键高端设备，中核集团、国家电投、中广核等企业积极开展国际多元化核能技术合作，航天科技、航空工业集团等企业与多家欧洲企业在航空航天领域建立了紧密合作关系；从合作前景看，交流交往日益紧密、合作意愿愈发强烈。97家中央企业组织1400余家下属企业将近2.1万名专业采购人员参加进博会，采购人员比去年增加4000人。</p>
            <p>据《证券日报》记者了解，在当天的签约仪式上，中国中化集团有限公司（简称“中化集团”）和中国化工集团有限公司（简称“中国化工”）联合举办专场签约活动并发布交易成果。两家公司共与30家客户现场签订合作协议。其中，中化集团与11家外商签订协议，采购来自9个国家和地区的8种商品，以高端化学品和高品质原油、化肥为主。</p>
            <p>中化集团董事长、中国化工董事长宁高宁在签约仪式上表示，进博会作为中国主动扩大进口和开放市场的重大举措，为世界各国共享中国发展机遇、为各国企业开拓中国市场和深化互利合作提供了重要平台。当前，中化集团致力于打造成为一家以石油化工为基础、以生命科学和材料科学为引领、以环境科学为保障的世界一流综合性化工企业。中化集团将持续借助进博会这样一个国际开放平台，进口高质量产品和服务，满足公司生产所需，在满足人民群众对美好生活追求的同时，推动中国化工产业转型升级和高质量发展。</p>
            <p>除此之外，在第二届中国国际进口博览会期间，中储粮集团公司所属油脂公司与ADM公司、嘉吉国际、邦吉日内瓦、路易达孚日内瓦公司、丸红株式会社、易可达贸易有限公司等6家供应商现场签约采购进口大豆，产地主要为巴西、阿根廷、乌拉圭等南美地区；中核集团相关单位还与俄罗斯国家原子能集团公司签署了多项采购合同，进一步深化两国核能合作。</p>
            <p>郝鹏进一步表示，当前，国务院国资委正积极推动中央企业进一步深化改革，发展混合所有制经济，推进结构调整布局优化，加大科技创新力度，提升市场化、国际化、法治化水平，朝着高质量发展大步迈进，在这之中同样蕴含着大量合作机遇。(杜雨萌)</p>
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