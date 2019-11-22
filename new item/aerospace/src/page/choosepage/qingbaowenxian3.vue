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
            <h1>美国会众议院首次公开针对特朗普弹劾调查的证词</h1>
            <p>李婷(实习生)、贾文婷</p>
            <div class="c-data">2019年11月06日09:06</div>
        </div>
        <div class="c-c-content">
            <p>美国国会众议院三个委员会4日首次公开针对总统唐纳德·特朗普弹劾调查的证词。证词由两名证人提供，分别是美国前驻乌克兰大使玛丽·约万诺维奇和国务卿迈克·蓬佩奥的前任高级助理迈克尔·麦金利。</p>
            <p>主导弹劾调查的众议院情报委员会、外交委员会、监督和改革委员会4日公开约万诺维奇10月提供的证词。</p>
            <p>约万诺维奇2016年起出任驻乌克兰大使，今年5月应召回国。</p>
            <p>约万诺维奇说，美国助理国务卿菲利普·里克告诉她，特朗普连续多月想要让她“走人”，“令我震惊”。美国驻欧洲联盟大使戈登·桑德兰提醒她在社交媒体“推特”表达对特朗普的支持，否则乌纱帽不保。</p>
            <p>在约万诺维奇看来，她5月去职与特朗普支持者造谣不无关系。她提及特朗普的儿子和私人律师鲁迪·朱利安尼在社交媒体批评自己，说“如果你看到总统儿子说‘我们需要把这些小丑撤回来’……作为大使在他国便难以树立威望”。</p>
            <p>　约万诺维奇说，去年底首次得知朱利安尼插手美国对乌克兰政策。多名乌克兰政府官员当时提醒她，朱利安尼与时任乌克兰总检察长有联系。

　　约万诺维奇说，特朗普7月与乌克兰总统弗拉基米尔·泽连斯基通电话时提及她，说她“会经历某些事情”，令她“非常担心”、感受“威胁”。

　　那次通话触发众议院启动弹劾调查。调查重点是特朗普是否下令冻结对乌克兰将近4亿美元军事援助，以换取泽连斯基调查民主党总统竞选人乔·拜登和儿子亨特。</p>
            <p>麦金利是职业外交官，从业37年，曾经出任驻巴西、阿富汗等国大使，9月辞去国务卿高级助理职务。

　　麦金利告诉弹劾调查人员，促使他请辞的主要原因是，他发现当特朗普支持者中伤约万诺维奇时，国务院没有出面维护那名高级外交官。</p>
            <p>　麦金利说，他告诉蓬佩奥“这种情况让人无法接受”，先后三次要求蓬佩奥出面保住约万诺维奇，但对方无动于衷。

　　在麦金利看来，国务院及驻外使节遭到利用，“（从国外）获取负面政治信息，以服务国内政治目的”。他说，外交官驻外工作“本应不受（美国）党派政治”干扰。</p>
            <p>　众议院情报委员会、外交委员会、监督和改革委员会的主席在一份声明中说，公开证词说明美国外交政策服务于总统的个人和政治利益。

　　更多证词定于5日公开，由美国驻欧盟大使桑德兰和美国政府前乌克兰问题特使库尔特·沃尔克提供。</p>
            <p>受众议院传唤的4个人4日拒绝配合弹劾调查，包括国家安全委员会律师约翰·艾森伯格。

　　艾森伯格据信把美乌总统7月通话文字记录转移至白宫安全级别最高的加密电脑系统。

　　众议院情报委员会主席亚当·希夫说，白宫指示那4人不要配合弹劾调查，明显说明“他们的证词将更有力地证明总统有罪”。</p>
<p>同在4日，另一名关键证人改变想法，同意提供证词。

　　乌克兰裔美国商人列夫·帕纳斯与朱利安尼关系密切，10月拒绝接受三个众议院委员会闭门质询。他据信曾经协助朱利安尼联系乌方官员，以促使乌方调查拜登父子。

　　帕纳斯10月背负罪名，无关针对特朗普的弹劾调查。他涉嫌违反联邦竞选财务法，向支持特朗普2020年竞选连任的“美国优先行动”筹款委员会捐款。帕纳斯据信推动美国政府召回约万诺维奇。（杜鹃）（新华社专特稿）</p>
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