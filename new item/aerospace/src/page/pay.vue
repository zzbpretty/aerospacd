<template>
  <div>
    <Header></Header>
    <Search></Search>
    <div class="c-content">
      <div class="c-title">
        <h1>{{abstractData.con_title}}</h1>
        <p>{{abstractData.con_author}}</p>
        <div class="c-data">{{abstractData.con_time}}</div>
      </div>
      <div class="c-c-content">
        <p>摘要：{{abstractData.keysentence}}</p>
        <p>关键词：{{abstractData.entity}}</p>
        <p>文件来源：{{abstractData.con_from}}</p>
      </div>
      <div class="itempay item2">
        <p>[计 费] 5 元/篇</p>
        <!-- wwc del -->
        <p>[页 数] 5 页（ 第82-86页 ）</p>
        <p>[价 格] 5 元</p>
      </div>
      <div class="c-c-footer">
        <div class="wxzf">
          <a href="javascript:void(0)"></a>
        </div>
        <div class="zfbzf">
          <a href="javascript:void(0)"></a>
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
      payurl:"http://192.168.100.44:8070/search/abstract/"
    };
  },
  mounted() {
    let data1 = { data_id: this.$route.query.con_title };
    this.$ajax
      .get(this.payurl+ data1.data_id)
      .then(res => {
        this.abstractData = res.data;
        this.abstractData.con_time = this.abstractData.con_time.substr(
          0,
          this.abstractData.con_time.indexOf("T")
        );
        console.log(this.abstractData);
      })
      .catch(res => {
        console.log(res);
      });
  }
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
  margin: 50px 0px;
  border-bottom: #d3d3d3 1px solid;
}
.c-c-content p {
  margin: 25px 0;
  color: #222;
  line-height: 180%;
  font: normal 18px/200% "Microsoft Yahei";
  word-wrap: break-word;
  width: 100%;
}
.c-c-footer {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
}
.wxzf a {
  position: absolute;
  left: 30%;

  /* background-color: rgb(39, 177, 51); */
  text-align: center;

  display: block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto 18px;
  padding-left: 38px;
  background: url("../assets/img/wxzf.png") no-repeat;
}
.wxzf a:hover {
  background: url("../assets/img/wxzf1.png") no-repeat;
  color: white;
}
.zfbzf a {
  position: absolute;
  right: 30%;

  /* background-color: rgb(44, 123, 241); */
  text-align: center;

  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto 18px;
  padding-left: 38px;
  background: url("../assets/img/zfbzf.png") no-repeat;
}
.zfbzf a:hover {
  background: url("../assets/img/zfbzf1.png") no-repeat;
  color: white;
}
.itempay{
  margin: 50px 30px;
}
.itempay p{
  height: 30px;
  text-align: left;
  padding-left: 360px;
  font-size: 18px;
}
</style>