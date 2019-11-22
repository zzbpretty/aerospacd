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
            <h1>美高官：将说服韩方续签日韩《军事情报保护协定》</h1>
            <p>任石、张璐璐</p>
            <div class="c-data">2019年11月07日15:32</div>
        </div>
        <div class="c-c-content">
            <p>中新网11月7日电 据日本放送协会(NHK)报道,《日韩军事情报保护协定》将于23日失效。对此，6日，美国国防部助理部长薛瑞福在接受日媒采访时表示，将继续说服韩国撤回不与日本续签该协定的决定。</p>
            <p>据报道，关于韩国决定不延长日韩《军事情报保护协定》一事，薛瑞福在采访中说，如果该协定失效，将对美日韩三国的合作等造成重大影响。</p>
            <p>薛瑞福还说：“韩国尚有重新审视该问题的时间。为维护这项协定给我们带来的一切利益，我们将继续说服韩国续签《日韩军事情报保护协定》。”</p>
            <p>2016年11月23日，韩国和日本正式签署《军事情报保护协定》。2019年8月22日，韩国宣布决定不延长韩日《军事情报保护协定》，而该协定是韩日间唯一有关军事方面的协定。</p>
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