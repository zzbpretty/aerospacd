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
            <h1>European boost to the all-in-one Bartolomeo service for the Space Station</h1>
        </div>
        <div class="c-c-content">
            <p>The Bartolomeo service will provide end-to-end access for external payloads on the Station. A new community of start-ups and space entrepreneurs will benefit from an unobstructed view of Earth, direct control of experiments from the ground and the possibility of retrieving samples.</p>
            <p>The International Space Station has hosted around 370 European experiments over the last two decades. However, the demand for experiment slots far outstrips supply.</p>
            <p>“Bartolomeo offers an attractive and competitive space platform for new users looking to reduce costs and shorten turnaround times,” said David Parker, ESA’s Director of Human and Robotic Exploration, while signing a statement of intent at the 70th annual International Astronautical Congress.</p>
            <p> “Commercialisation is part of our vision to secure the continued presence of humans on the Space Station and beyond. This innovative, cost-effective approach is key for missions to the Moon and Mars,” he added.</p>
            <p>In a press statement, Airbus acknowledged it is “excited about the evolving interest of European customers,” following the signature of a partnership agreement with ESA last year.</p>
            <p>One of the main instruments to do this is an ultraviolet-visible spectrometer. Its technology was set to run for 75 days in the Station’s internal ICE Cubes facility to help refine the final product.</p>
            <p>Another experiment planned for Bartolomeo is being developed by France’s space agency CNES to investigate the ageing of new materials during spaceflight.</p>
            <p>Bartolomeo is set for launch in March 2020 on a SpaceX Dragon cargo ferry, the SpX-20 flight.</p>
            <p>During the first all-female spacewalk last Friday, NASA astronauts Jessica Meir and Cristina Koch completed the installation of the adapters on the outside of Europe’s Columbus laboratory to prepare for this new platform.</p>
            <p>ESA and Airbus are currently working to simplify the contracts for all scientific ESA missions on Bartolomeo.</p>
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