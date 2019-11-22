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
            <h1>A decade probing the Sun</h1>
        </div>
        <div class="c-c-content">
            <p>On 2 November, 2009, Proba2 began its journey on board a Rockot launcher from the Russian launch base, Plesetsk, and was inserted into a Sun-synchronous orbit around Earth.</p>
            <p>Tracing this ‘dusk-dawn’ line – where night meets day – Proba2 maintains a constant view of the Sun, keeping its batteries charged and its target in sight.</p>
            <p>The second in ESA’s ‘Project for Onboard Autonomy’ series, Proba2 is so advanced it is able to look after itself on a day-to-day basis, needing just a small team at the Agency’s control station at ESEC in Redu, Belgium, to run the mission.</p>
            <p> Proba2 has two main solar instruments, SWAP and LYRA, designed for studying events at the Sun that could impact Earth.

SWAP takes images of the Sun’s corona, the roughly 1 million degree plasma-filled atmosphere that surrounds the star.</p>
            <p>With an extremely wide field-of-view, SWAP is able to see structures around the edge of the Sun, such as huge outbursts of hot matter known as coronal mass ejections, sudden flares releasing enormous amounts of light as well as eerie ‘coronal holes’, dark shadowy regions spewing out fast-moving solar wind.

The LYRA instrument monitors the Sun’s ultraviolet output, and is able to make up to 100 measurements per second. This high rate means the instrument can make detailed studies of fast-moving ‘transient’ events such as solar flares.</p>
<p>One of the many mysteries of our star is the way its activity rises and falls in 11 year cycles. From one cycle to the next, the Sun’s north and south poles trade places and the number of flares, coronal mass ejections, sunspots and coronal loops fluctuate from many per day in active periods to weeks without any when it is quiet.</p>
<p>In 2020, the 11th year of the Proba2 mission, it will have been monitoring the Sun for a full solar cycle.

This landmark period will allow the satellite to probe the Sun's evolution over the long term, comparing the current quiet period with the last solar minimum, and ready for when the Sun again ‘wakes up’ in 2024/2025.</p>
<p>Unpredictable and temperamental, the Sun makes life on the innermost planets of the Solar System impossible due to intense radiation and colossal amounts of energetic material that it blasts in every direction, creating the ever-changing conditions in space known as ‘space weather’.

At Earth, extreme solar events have the potential to disrupt and damage infrastructure in space and on the ground, and intense bursts of radiation threaten future explorers to the Moon and Mars.</p>
<p>ESA’s Space Weather Office, part of the agency’s Space Safety activities, is working to help European operators of sensitive infrastructure including satellites, power lines, aviation and transport to avoid adverse impacts of space weather. The mission of the Space Weather Office is to develop a system that provides timely and accurate space weather information and forecasts to operational users and public in Europe.</p>
<p>Find out about ESA’s planned Lagrange mission to provide solar warning, here, and the Space Weather Service Network, getting the word out to those who need to know.</p>
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