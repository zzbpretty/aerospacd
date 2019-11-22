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
            <h1>站在更高起点谋划硬科技未来</h1>
        </div>
        <div class="c-c-content">
            <p>10月30日，在2019西安全球硬科技创新大会期间，中国航天系统科学与工程研究院、中国航天工程科技发展战略研究院、西安市人民政府、西北工业大学和陕西空天动力研究院联合主办的第十八期钱学森论坛在西安举办。</p>
            <p>论坛以“钱学森智库聚焦硬科技产业高质量发展”为主题，钱学森系统工程思想为指导，围绕人工智能、航空航天、生物技术、光电芯片、信息技术、新材料、新能源、智能制造等硬科技前沿领域开展研讨，凝聚各方智慧，汇聚各方力量，谋划我国核心技术创新和产业转型升级行动路径，为以硬科技推动实体经济发展和科技强国、制造强国、网络强国建设贡献智慧力量。</p>
            <p>西安市市长李明远在致辞中指出，西安是西北科教、文化、军工重镇，钱学森科技报国的精神与西安的科教文化有不解之缘。此次论坛的举办，将有助于更好的应用系统思维和钱学森智库力量，加速释放自身综合实力，进一步提升西安硬科技的创新力、辐射力、竞争力，形成更多硬核技术，打造更多硬核产业。</p>
            <p> 国资委原监事会主席刘顺达致辞指出，网络化、信息化和信息物理融合，即两化一融合，是一个值得聚焦的技术方向。在管理层面，应该聚焦价值导向、组织协同、加强考核，加强钱学森大成智慧与总体设计部思想在管理层面的应用。</p>
            <p>中国航天系统科学与工程研究院薛惠锋院长报告指出，硬科技的实质是在基础科学引导下的关键核心技术，能够对国民经济起到引领带动作用，产生其他技术难以望其项背的巨大威慑力，要警惕硬科技可能引起的危机与焦虑，必须站在更高起点谋划硬科技的未来，运用科学理性的系统思维赋能硬科技，攻克难点、疏通堵点、治疗痛点，才能领跑未来。</p>
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