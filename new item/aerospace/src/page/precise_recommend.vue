<template>
  <!-- 精准推荐详情页 -->
  <div style="background:#f7f7f7">
    <!-- 头部内容 -->
    <Header></Header>
    <!-- 精准推荐页内容 -->
    <div class="pre_rec-container">
      <table style="margin:0 auto">
        <!-- 表头 -->
        <thead>
          <tr class="thead_tr">
            <th class="th-01">序号</th>
            <th class="th-02">题名</th>
            <th class="th-03">作者</th>
            <th class="th-04">来源</th>
            <th class="th-06"></th>
          </tr>
        </thead>
        <!-- 表格内容 -->
        <tbody>
          <tr class v-for="(item,index) in pre_recData" :key="index">
            <td class="td-01">{{index+1}}</td>
            <td
              class="td-02"
              v-html="item.con_title"
              :data-id="item.data_id"
              @click="toabstract($event)"
              :id="item.data_type"
              style="cursor:pointer"
            >{{item.con_title}}</td>
            <td class="td-03" v-html="item.con_author">{{item.con_author}}</td>
            <td class="td-04">{{item.con_from}}</td>
            <td class="td-06" v-if="index >= 0 && index <=4">
              <i class="icon-txt icon-txt-hot">热</i>
            </td>
            <td class="td-06" v-if="index > 4 && index <= 14">
              <i class="icon-txt icon-txt-jian">荐</i>
            </td>
            <td class="td-06" v-if="index > 14 && index <= 20">
              <i class="icon-txt icon-txt-new">新</i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      //精准推荐数据
      pre_recData: [] ,
      recommendurl:"http://192.168.100.44:8070/search/match"
    };
  },
  //实例创建后执行的函数   
  created() {
    let data1 = {
      type: this.$route.query.value,      //搜索类型
      keyword: this.$route.query.keyword, //搜索关键词
      size: 20,                           //每页显示多少条
      start: 0                            //从哪页开始
    };

    this.$ajax
      .post(this.recommendurl, data1)
      .then(res => {
        this.pre_recData = res.data.data;
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {
    //跳转详情页
    toabstract(event) {
      let target = event.target || window.event.srcElement;
      let abstracthref = this.$router.resolve({
        path: "/list/abstract",
        query: {
          con_title: target.getAttribute("data-id"),
          data_type: target.getAttribute("id")
        }
      });
      //打开新页面   
      window.open(abstracthref.href, "_blank");
    }
  }
};
</script>
<style>
.pre_rec-container {
  width: 980px;
  min-height: 400px;
  padding: 20px;
  background: #fff;
  margin: 50px auto 100px;
  border: 1px solid #dedede;
}
.pre_rec-container table {
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
}
.pre_rec-container th.th-01 {
  width: 80px;
}
.pre_rec-container th.th-02 {
  width: 380px;
  text-align: center;
}
.pre_rec-container th.th-03 {
  width: 200px;
  text-align: center;
}
.pre_rec-container th.th-04 {
  width: 120px;
  text-align: center;
}
.pre_rec-container th.th-06 {
  width: 100px;
  text-align: center;
}
.pre_rec-container th {
  line-height: 30px;
  border-bottom: solid 1px #fbfbfb;
  color: #999;
}
.pre_rec-container tbody tr:hover {
  background: #f2f2f5;
}
.pre_rec-container td {
  border-bottom: solid 1px #f2f2f5;
  line-height: 36px;
  padding: 0 5px;
}
.pre_rec-container td.td-01 {
  color: #f26d5f;
  text-align: center;
}
.pre_rec-container td.td-02 {
  color: #0078b6;
  text-align: left;
}

.pre_rec-container td.td-03 {
  color: #999;
  text-align: left;
  word-wrap: break-word;
  word-break: keep-all;
  overflow: hidden;
}
.pre_rec-container td.td-04 {
  color: #053597;
  text-align: left;
}
.pre_rec-container td.td-06 {
  text-align: center;
}
.icon-txt {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  border-radius: 2px;
  text-align: center;
}
.icon-txt-hot {
  background: red;
}
.icon-txt-jian {
  background: #ff9406;
}
.icon-txt-new {
  background: #00b7ee;
}
</style>