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
            <h1>进博会第二天：央企开启“买买买”模式</h1>
            <p>李 拯</p>
            <div class="c-data">2019年11月07日09:00</div>
        </div>
        <div class="c-c-content">
            <p style="text-align: center"><img src="../../assets/img/jinbo1.jpg" alt=""></p>
            <p style="text-align: center">11月5日，第二届中国国际进口博览会在上海国家会展中心开幕，各展馆迎来八方宾客。中新社记者 张亨伟 摄</p>
            <p>自第二届中国国际进口博览会开幕以来，面对琳琅满目的全球优质产品，不少中国企业签约、下单的热度逐渐攀升。进博会进入第二天，作为中国“买手团”的主力之一，许多中央企业亦开启“买买买”模式。</p>
            <p>6日，中国航天科技集团有限公司亮出其在本届进博会上的采购订单。当天，该集团所属企业与来自德国、美国的企业分别签署采购合同和协议，并与意大利、德国和中国香港企业进行展位签约。其中，中国航天科技集团所属的乐凯胶片股份有限公司与美国杜邦公司达成进博会二度合作，签署了氟膜产品采购协议。</p>
            <p>对此，中国航天科技集团有限公司总经理袁洁表示，中国航天事业发展成就既是中国人民智慧结晶，同时也得益于全世界优秀企业和产品的协同支持与广泛合作，航天科技集团愿与全世界优秀企业一道，不断拓展合作领域、创新合作模式、提高合作水平，构建互利共赢合作关系，共同促进世界经济和贸易繁荣。</p>
            <p>事实上，当天在进博会上有所“斩获”的央企不止中国航天科技集团有限公司。南航集团与英国罗尔斯-罗伊斯公司签署的采购意向书显示，2019年至2034年，英国罗尔斯-罗伊斯公司将为南航集团20架空客A350飞机发动机提供售后包修、备发支援及其他保障类服务；中国移动则与爱立信签署协议，商定2020年度中国移动拟向爱立信公司采购包括无线网主设备(5G、4G)、核心网主设备、各类网络优化及专业技术服务。此外，南方电网、国机集团、中国商飞等企业亦积极采购国外关键高端设备……</p>
            <p style="text-align: center"><img src="../../assets/img/jinbo2.jpg" alt=""></p>
            <p style="text-align: center">11月5日，第二届中国国际进口博览会在上海国家会展中心开幕，各展馆迎来八方宾客。中新社记者 张亨伟 摄</p>
            <p>在中国国务院国资委主任郝鹏看来，中国举办的进博会，吸引了世界各国和企业广泛积极的参与，已经成为全球贸易发展史上的一大创举、新时代国际合作的又一重要平台。中央企业在去年的基础上，进一步加大与各国企业合作力度，将要签约达成一系列采购协议，取得一系列合作成果。</p>
            <p>来自中国官方的数据显示，今年，共有97家中央企业组织1400余家下属企业将近2.1万名专业采购人员参加进博会，采购人员比去年增加4000人。</p>
            <p>郝鹏强调，经济全球化是历史潮流，开放合作是时代大势。站在新的起点上，中国将积极推动中央企业与各国企业深化务实合作，实现共同发展。(记者 陈康亮)</p>
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
.c-c-content img{
    margin: 0 auto;
}
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
    /* text-align: center; */
}
.c-c-content p{
    margin: 25px 0;
    color: #222;
line-height: 180%;
text-indent: 2em;
font: normal 18px/200% "Microsoft Yahei";
/* text-align: center; */
}

</style>