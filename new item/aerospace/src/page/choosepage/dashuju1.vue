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
            <h1>阿斯利康与中金资本成立医疗健康产业基金 拟融资10亿美元</h1>
            <p>刘卿</p>
            <div class="c-data">2019年11月07日15:26</div>
        </div>
        <div class="c-c-content">
            <p>近年来，中国药品审评审批制度改革不断深化，“救命药”优先审评审批政策不断完善和落实，整个监管流程大幅提速，这使得在中国上市的创新药物数量持续攀升，也吸引了全球各大药企、金融资本等不断加大在中国的研发创新投入。</p>
            <p>2019年11月6日，阿斯利康与中金资本在进博会上宣布将联合成立全球医疗健康产业基金，未来预期融资规模目标达到10亿美元，该基金将聚焦包括全球新药研发、生产运营及商业化发展的全产业链，为海内外创新企业提供全方位支持。该基金是阿斯利康在全球募集的首个、迄今为止规模最大的医疗健康产业基金，也是阿斯利康产融结合在中国嫁接的首次实践。</p>
            <p>据了解，新成立的医疗健康产业基金将落户江苏无锡，面向海内外医疗健康产业创新项目提供支持。该基金将推动海内外顶级产业与资本资源的聚合，聚焦患者亟待满足的健康需求，投资和孵化全球范围内更多医疗健康产业创新项目；同时，该基金也将不断尝试和探索前沿科技与医疗健康深入结合迸发出的新机遇，推动海内外产业优势互补，聚力支持全球优质创新项目的孵化及成果转化，汇聚全球优质创新资源引进中国的同时，也为本土成长和孵化的创新型企业注入活力，推动中国本土创新成果惠及全球。</p>
            <p>“中国开放创新的土壤，让更多对于医疗健康产业未来的设想成为现实。物联网、大数据、AI等新兴科技在中国的蓬勃发展为医疗行业提供了难得的机遇。中国已经成为阿斯利康创新版图的重要战略堡垒。” 阿斯利康全球首席执行官苏博科表示，“在过去的两年中，阿斯利康在中国的创新实践为全球范围内打造创新健康生态体系提供了切实可行的思路与经验，已逐步实现跨行业、跨领域的一体化价值链的聚合和扩充，让全球智慧接轨中国创新，为全球范围的患者带来福祉。此次，携手中金资本是我们全球创新战略中的又一个重要里程碑。阿斯利康将利用我们在全球的资源和网络，进一步打通中国与全球在医疗领域的优势对接，助力中国提升医疗研发及创新实力。”</p>
            <p>阿斯利康全球执行副总裁，国际业务及中国总裁王磊谈到：“此次在进博会上宣布基金的成立有着特别的意义，这是阿斯利康在中国引进海内外优质创新资源，迈出的又一大步，将为更多有未来发展前景的海内外中小型医疗创新企业注入生命力，让他们在中国这片创新热土上得到长足发展。阿斯利康愿意继续扎根中国，同时携手全球资源和力量，为推动中国健康事业发展发挥贡献力量，也让源于中国的‘创新’造福更多全球患者。”</p>
            <p>对于此次合作，中金公司首席执行官及管理委员会主席毕明建表示：“中金公司是阿斯利康在中国长期可信赖的投资银行合作伙伴，此次和阿斯利康携手建立医疗健康产业基金，开启了全球领先药企与中国顶尖的国际化投资银行在产业基金深度合作的新里程。”中金资本董事长丁玮也表示：“中金资本一直布局新兴产业，特别是在医疗健康领域的投资。我相信，此次合作正是将中金公司及中金资本丰富的境内外投资管理和资本运作经验与阿斯利康深耕医疗产业和医疗创新领域的优势叠加，期望将该基金打造成中国最具代表性的医疗健康产业基金。” </p>
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