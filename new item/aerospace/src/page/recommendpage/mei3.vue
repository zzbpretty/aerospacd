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
            <h1>Orson John: A NASA Pathways Student Becomes a Reliability Engineer</h1>
        </div>
        <div class="c-c-content">
             <p style="text-align:center"><img src="../../assets/img/mei7.jpg" alt=""></p>
          
            <p>Orson John started his career at NASA as a summer intern, continued as a NASA Pathways student, and began a career at NASA's Goddard Space Flight Center as an engineer after college. He earned a Bachelor of Science degree in physics in 2010 from the New Mexico Institute of Mining & Technology and now works as a reliability engineer in the Reliability & Risk Assessment Branch performing failure mode, fault and risk analyses for NASA spacecraft and instruments.</p>
            <p>In this image, he is on the left and is preparing the Ice, Cloud and land Elevation Satellite-2 (ICESat-2) for encapsulation in the United Launch Alliance Delta II payload fairing on Sept. 4, 2018, at Space Launch Complex 2 at Vandenberg Air Force Base in California. At the time, the satellite was being prepared for its scheduled launch on the final Delta II rocket. ICESat-2 measures the height of a changing Earth, one laser pulse at a time, 10,000 laser pulses a second. The satellite carried the Advanced Topographic Laser Altimeter System (ATLAS). ICESat-2 is helping scientists investigate why, and how much our planet's frozen and icy areas, called the cryosphere, are changing in a warming climate.</p>
            <p>In honor of Native American Heritage Month, learn more about Orson John, his Navajo Nation origins and his love for STEM.</p>
            <p>#NativeAmericanHeritageMonth</p>
            <p>Image Credit: USAF 30th Space Wing/Daniel Herrera</p>
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