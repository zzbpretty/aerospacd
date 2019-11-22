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
            <h1>中国航天科技集团进博会签署采购“新订单”</h1>
            <p>赵竹青</p>
            <div class="c-data">2019年11月06日16:26</div>
        </div>
        <div class="c-c-content">
            <p>人民网北京11月6日电（赵竹青）继在首届中国国际进口博览会与全球20家企业签署24个项目的采购合同或协议后，中国航天科技集团有限公司在近日举行的第二届进博会上又亮出了采购“新订单”。11月6日，中国航天科技集团所属企业与来自德国、美国的企业分别签署了粉煤流量计、杜邦氟膜等采购合同和协议，并与意大利、德国和中国香港的企业进行展位签约。至此，航天科技进博会“朋友圈”增至24家、“购物车”扩大至29个项目。</p>
            <p>其中，在集中采购签约仪式上，中国航天科技集团一院航天长征化学工程股份有限公司（简称“航天工程”）与德国SWR测量技术工程有限公司签署了数百万美元的粉煤流量计产品采购协议。据了解，航天工程是我国首个拥有独立自主知识产权的粉煤加压气化技术的上市公司，其核心设备是由火箭技术衍生而来的“航天炉”，具有安全、稳定、绿色、环保等优势。德国SWR公司的粉煤流量计可在高浓相粉煤输送条件下，有效保证粉煤流量的精确计量，对航天炉稳定运行具有重要意义。</p>
            <p>同时，中国航天科技集团有限公司所属的乐凯胶片股份有限公司（简称“乐凯胶片”）与美国杜邦公司达成进博会二度合作，签署了氟膜产品采购协议。杜邦氟膜是该公司全球独家的专利性产品，以其为核心原材料制作的太阳能电池背板，是老牌胶片企业乐凯胶片股份有限公司转型发展的重点项目，也是其打造新能源材料系统服务商的重要方向之一。</p>
            <p>“首届进博会以来一系列采购合同与合作协议的签署，代表了航天科技集团愿本着平等互利、优势互补、资源共享、共同发展的原则与全球合作伙伴携手，也意味着航天科技集团与各家企业为代表的全球产业链，联系更加紧密、合作更加深化、创新更加协同。”中国航天科技集团有限公司总经理袁洁在接受采访时说。</p>
            <p>袁洁表示，中国航天事业的发展成就既是中国人民智慧的结晶，同时也得益于全世界优秀企业和产品的协同支持与广泛合作。当前，航天科技集团正在加快推进航天强国建设，努力建设世界一流航天企业集团。航天科技集团愿与全世界优秀企业一道，不断拓展合作领域、创新合作模式、提高合作水平，构建互利共赢合作关系，共同促进世界经济和贸易繁荣。</p>
            
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