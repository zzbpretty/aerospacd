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
            <h1>郑磊：区块链服务实体经济 应联合其他技术打“组合拳”</h1>
            <p>徐天晓</p>
            <div class="c-data">2019年11月07日09:29 </div>
        </div>
        <div class="c-c-content">
            <p>新技术得以广泛运用的最终场景，是要为实体经济赋能。作为新技术的代表，区块链将如何与实体经济深度融合？《证券日报》记者就此采访了全球金融科技实验室（由深圳瀚德共享科技实验室有限公司、香港中文大学（深圳）高等金融研究院、中国人民大学国际货币研究所联合创立）专家顾问郑磊博士，并请他就如何正确认识区块链与数字货币的关系，以及区块链如何与实体产业融合表达了观点。</p>
            <p>《证券日报》：很多人认识区块链源自“数字加密币”，这种认知，对区块链来说是不是有很大的偏差？我们应如何看待区块链对经济发展的影响？</p>
            <p>郑磊：区块链技术目前没有成形，引发了一些争议，比如有人认为只有比特币这类数字加密币才会是区块链技术真正成熟的应用，这种静态看待技术进步的观点是不足取的。“数字加密币”只是区块链技术初级阶段（1.0）的应用。区块链技术很难固定为一种技术，而且之前也有类似的技术积累，但是其分布式、去中心化的核心特征将要求现有技术不断迭代升级，并会逐步推动社会形成一种新的成本更低的生产关系。而这种生产关系由于其先进性，必然会进一步推动生产力的快速发展，这才是区块链真正强大之处。</p>
            <p>随着相关技术的发展，区块链的技术将发生迭代，未来成熟的技术未必和现在相同。而且随着技术演进，区块链的应用场景将不仅仅局限于金融领域，还将向更多的实体经济领域渗透，这就是“区块链+”的含义，即以区块链技术应用提升实体经济的运行。</p>
            <p>我在所著的《区块链+时代》书中专门提过，区块链与其他金融科技技术的组合，比如区块链与大数据、云计算、人工智能、物联网等的结合，是“区块链+”的引申内含。比如区块链+人工智能可以为互联网赋能；区块链+大数据让个人数据真正成为个人拥有的数字资产和财富；区块链+云计算让区块链成为各种服务d而基础设施，大大拓展了云服务范围。让5G量子计算为区块链加速，我们将进入“区块链+时代”，一个真正实现个人价值和社会繁荣昌盛的时代。</p>
            <p>《证券日报》：区块链给传媒行业预计会带来哪些改变呢？</p>
            <p>郑磊：区块链通过分布式记账的方式将数据信息记录在一个不可篡改的公开账本上，所有用户都能享受到真实可靠的信息。这项技术不仅有助于文创行业确权、流通、追溯交易，对于内容生产、传播、以及内容变现、收益分享、内容监管等都将有极大的促进作用。</p>
            <p>将区块链用于新闻生产，可使新闻生产分发流程更扁平化，区块链技术使内容生产者能够通过智能合约直接对内容定价，获得打赏费用和内容订阅费用，形成一种新型的内容付费形式，调动内容生产者的积极性。使用区块链还可增加反馈效率，通过分布式数据库，实现精准对接信息使用者，使媒体从业者能够对报道模式和内容进行重新架构，为需求方提供更为准确高效的信息服务。在媒体的区块链网络上实现新闻线索协同记录、新闻线索共同分享和采编前后方实时沟通，建设全程透明的“流水线”工作协同平台也并不遥远。</p>
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