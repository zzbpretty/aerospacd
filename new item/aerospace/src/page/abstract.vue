<template>
  <div>
    <!-- 遮罩 -->
    <div class="zhezhao"></div>
    <!-- 下载 -->
    <div class="alert-box download_box">
        <div class="download_content">
          <a href="javascript:;" class="pop_close">X</a>
          <div class="resource_title">
            <h3>{{abstractData.con_title}}</h3>
          </div>

          <div class="normal_tips">
            <ul>
              <li>
                <p class="asset_name">资源所需积分</p>
                <p class="asset_point color_y">15</p>
              </li>
              <li>
                <p class="asset_name">当前拥有积分</p>
                <p class="asset_point color_r">168</p>
              </li>
            </ul>

            <p class="cost_tips">下载本篇内容会消耗15积分</p>
          </div>

          <div class="dl_xunlei_tips">为了良好体验，不建议使用迅雷下载</div>
          <div class="resource_dl_btn">
            <a download="this.$route.query.con_title+'.txt'" :href="'http://192.168.100.44:8070/search/context/'+ this.$route.query.con_title" class="dl_btn">立即下载</a>
          </div>
        </div>
    </div>
    <!-- 阅读 -->
    <div class="alert-img">
        <a href="javascript:void(0)" class="pop_close1">X</a>
        <img :src="'http://192.168.100.44:8070/search/downloadFile/' + this.$route.query.con_title" alt="">
    </div>
    <Header></Header>
    <Search></Search>
    <!-- 内容 -->
    <div class="c-content">
      <div class="c-title">
        <h1>{{abstractData.con_title}}</h1>
        <p>{{abstractData.con_author}}</p>
        <div class="c-data">{{abstractData.con_time}}</div>
      </div>
      <div class="c-c-content">
        <p v-html="abstractData.keysentence"><span>摘要：&nbsp;</span>
        {{abstractData.keysentence}}
        </p>
        <p><span>关键字：&nbsp;</span>{{abstractData.keyword}}</p>
      </div>
      <div class="c-c-footer">
        <div class="download">
            <a href="javascritp:void(0)" class="downloadshow">
          <span>立即下载</span>
          </a>
        </div>
        <div class="read">
          <a href="javascript:void(0)"  class="readstart">
            <span>开始阅读</span>
          </a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";
export default {
  components: {
    Header,
    Footer,
    Search
  },
  data() {
    return {
      abstractData: [],
      datatype:"",
      abstracturl:"http://192.168.100.44:8070/search/abstract/",
      pdfurl:'http://192.168.100.44:8070/search/downloadFile/',
      // abstractContent:abstractData.con_title
    };
  },

  create(){
    
  },
  methods:{
    download(){

    }
  },
  mounted(){
      this.datatype = this.$route.query.data_type
     let data1 = { data_id: this.$route.query.con_title };
     this.$ajax
      .get(this.abstracturl+data1.data_id)
      .then(res => {
        this.abstractData = res.data;
        this.abstractData.con_time = this.abstractData.con_time.substr(
          0,
          this.abstractData.con_time.indexOf("T")
        );
        
        console.log(this.abstractData.keysentence)
      })
      .catch(res => {
        // console.log(res);
      });
      $('.downloadshow').click(function(){
          $('.zhezhao').attr('style','display:block')
          $('.download_box').attr('style','display:block')
      })
      $('.pop_close').click(function(){
          $('.zhezhao').attr('style','display:none')
          $('.download_box').attr('style','display:none') 
      })
      // console.log(this.datatype)
      var self = this;
      $('.readstart').click(function(){
        if(self.datatype == "pdf" ){
           window.open('../../static/pdf.js-gh-pages/web/viewer.html?file='+ self.pdfurl +self.$route.query.con_title,'PDF','width:50%;height:50%;top:0;left:100;');
        }else{
           $('.zhezhao').attr('style','display:block')
           $('.alert-img').attr('style','display:block')
        }
      })
      $('.pop_close1').click(function(){
          $('.zhezhao').attr('style','display:none')
          $('.alert-img').attr('style','display:none')
      })
  },
  
};


</script>
<style >
.c-content {
  width: 1000px;
  margin: 25px auto;
  padding-bottom: 100px;

  /* background-color:salmon; */
}
.c-title {
  border-bottom: #d3d3d3 1px solid;
  padding-bottom: 15px;
  word-break: break-all;
  text-align: center;
}
.c-title h1 {
  margin: 5px auto 10px;
  color: #222;
  font: bold 38px/150% "Microsoft Yahei";
  clear: both;
}
.c-title p {
  font-size: 16px;
  font-family: "Microsoft Yahei";
}
.c-data {
  height: 36px;
  font: normal 12px/200% "Microsoft Yahei";
  line-height: 44px;
  color: #666;
}
.c-c-content {
  margin: 30px 100px;
}
.c-c-content p {
  margin: 25px 0;
  color: #222;
  line-height: 180%;
  text-indent: 2em;
  font: normal 18px/200% "Microsoft Yahei";
  font: 16px/2 "Microsoft Yahei";
}
.c-c-content p span{
  color: #666;
  font-weight: 800;
}
.c-c-footer {
  width: 1000px;
  margin: 0 auto;
  margin-top: 44px;
  text-align: center;
  position: relative;
}
.download a {
  position: absolute;
  left: 30%;
  width: 135px !important;
  height: 40px !important;
  display: block;
  border-radius: 10px;
  /* background-color: rgb(39, 177, 51); */
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: black !important;
  border: #999 1px solid;
  background-image: url("../assets/img/downloadJL.png");
  background-repeat: no-repeat;
  background-position: -430px 0;
  line-height: 40px;
}
.read a {
  position: absolute;
  left: 60%;
  width: 135px !important;
  height: 40px !important;
  display: block;
  border-radius: 10px;
  /* background-color: rgb(44, 123, 241); */
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: black !important;
  border: #999 1px solid;
  background-image: url("../assets/img/downloadJL.png");
  background-repeat: no-repeat;
  background-position: -287px 0;
  line-height: 40px;
}
.download a:hover {
  background-position: -430px -46px;
  text-decoration: none;
}
.read a:hover {
  background-position: -287px -46px;
  text-decoration: none;
}
.download a span {
  display: inline-block;
  margin-left: 36px;
  color: #eff7ff;
}
.read a span {
  display: inline-block;
  margin-left: 40px;

  color: #eff7ff;
}
.zhezhao {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10000;
  display: none;
}
.download_box {
    width: 500px;
    transform: none;
    margin-left: -250px;
    top: 20%;
    display: none;
}
.alert-box {
    padding: 16px;
    position: fixed;
    left: 50%;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e3e3e3;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    z-index: 10001;
}
.download_box .download_content {
    position: relative;
}
.download_content .pop_close {
    position: absolute;
    color: #333;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    right: 0;
    background: #e5e5e5;
    top: -44px;
    text-align: center;
    line-height: 28px;
    font-size: 16px;
}
.download_box .download_content .pop_close:after {
    content: '';
    display: block;
    width: 2px;
    height: 20px;
    background-color: #e5e5e5;
    top: 28px;
    position: absolute;
    left: 13px;
}
.download_box .download_content .resource_title h3 {
    padding-top: 20px;
    font-size: 18px;
    line-height: 28px;
    height: 48px;
    color: #4f4f4f;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.download_box .download_content .normal_tips {
    margin-top: 15px;
}
.download_box .download_content .normal_tips ul {
    line-height: 28px;
    text-align: center;
}
.download_box .download_content .normal_tips ul li {
    display: inline-block;
    width: 120px;
}
.download_box .download_content .normal_tips ul li .asset_name {
    font-size: 14px;
    color: #999;
}
.download_box .download_content .normal_tips ul li .asset_point {
    font-size: 20px;
    font-weight: 400;
}
.download_box .download_content .normal_tips .color_y {
    color: #f90;
}
.download_box .download_content .normal_tips .color_r {
    color: #ca0c16;
}
.download_box .download_content .normal_tips .cost_tips {
    font-size: 18px;
    color: #4d4d4d;
    text-align: center;
    margin: 8px 0;
}
.download_box .download_content .dl_xunlei_tips {
    text-align: center;
    font-size: 12px;
    color: #333;
    margin-top: 8px;
}
.download_box .download_content .resource_dl_btn {
    text-align: center;
    padding: 20px 0 30px;
}
.download_box .download_content .resource_dl_btn .dl_btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 44px;
    background: #ca0c16;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
}
.alert-img{
    position: absolute;
    width: 90%;
    /* height: 2000px; */
    left: 50%;
    margin-left: -45%;
    z-index: 100002;
    display: none;
    text-align: center;
}
.alert-img img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.pop_close1 {
    position: absolute;
    color: #333;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    right: -30px;
    background: #e5e5e5;
    top: 0x;
    text-align: center;
    line-height: 28px;
    font-size: 16px;
}
</style>