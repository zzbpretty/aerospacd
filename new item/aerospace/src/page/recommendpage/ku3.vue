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
            <h1>钱学森论坛首次落地西安 将举行“钱学森智库专刊”全球发布仪式</h1>
        </div>
        <div class="c-c-content">
            <p>三秦都市报—三秦网讯（通讯员 李建辉 记者 李佳）作为2019全球硬科技创新大会的重要学术活动，第十八期钱学森论坛将于10月30日在西安举办。届时，国资委原监事会主席刘顺达，中国航天钱学森决策顾问委员会主任委员钱永刚，20多位院士以及500多名政界、学界人士将齐聚西安，为中国科技创新发展、产业转型升级贡献智慧和力量。</p>
            <p>钱学森论坛是中国航天系统科学与工程研究院为打造钱学森思想智库而设立的高端论坛，它与中国人民解放军国防大学的将军论坛紧密配合，共同打造成我国智库建设的系列巅峰论坛。第十八期钱学森论坛落地西安，巧遇2019全球硬科技创新大会，与往期相比，科技感更足，亮点更多。</p>
            <p>第十八期钱学森论坛以“钱学森智库聚焦硬科技产业高质量发展”为主题，旨在深入贯彻落实习近平总书记关于科技创新的重要指示，加快推进实施创新驱动发展战略。论坛以钱学森系统工程思想为指导，邀请国家主管部门领导、院士、著名专家和企业家齐聚一堂，围绕人工智能、航空航天、生物技术、光电芯片、信息技术、新材料、新能源、智能制造等硬科技前沿领域开展研讨，凝聚各方智慧，汇聚各方力量，谋划我国核心技术创新和产业转型升级行动路径，为以硬科技推动实体经济发展和科技强国、制造强国、网络强国建设贡献智慧力量。</p>
            <p> 据了解，中国工程院院士刘经南、中国工程院院士许建民、中国工程院院士俞梦孙、中国科学院院士管晓宏等4位领域内顶级专家将在钱学森论坛上作报告，分享他们最新的成果和看法。

在第十八期钱学森论坛上，将举行《Science》“钱学森智库专刊”全球发布仪式。这是继2016年，中国航天系统科学与工程研究院与全球顶级学术期刊《Science》杂志联手打造介绍中国系统工程学科发展情况的专刊《The Rise of Systems Engineering in China》（译名：系统工程在中国）之后，《Science》再次面向全球推出的一期重量级专刊《The Hsue-Shen Tsien Think Tank: Adopting a Systems Science Approach to Address Complex Problems》（译名：钱学森智库：用系统科学解决复杂性问题）。这一次，钱学森智库重新审视、解构、探索并阐述了系统科学对于当代人类文明发展的至关重要的作用。</p>
            <p>本次论坛将举行钱学森创新教育平台体系发布仪式。钱学森创新教育平台体系以我国航天事业奠基人、杰出科学家钱学森命名，致力于打造钱学森班、钱学森学院和小学、初中、高中十二年一贯制学校等形式的创新人才培养高地，以弘扬钱学森精神，提升学生科技、人文等各方面综合素养，培养后备科技人才。</p>
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