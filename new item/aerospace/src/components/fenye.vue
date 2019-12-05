<template>
  <div class="container">
    <!-- 左侧推荐栏 -->
    <div class="container-left">
      <Recommend></Recommend>
    </div>
    <!-- 搜索内容栏 -->
    <div class="container-content">
      <el-tabs type="border-card">
        <el-tab-pane label="列表">
          <el-table :data="tableData" style="width: 100%;text-align:center">
            <!-- 题名列 -->
            <el-table-column label="题名" width="300" style="text-align:left">
              <template slot-scope="scope">
                <span
                  v-html="scope.row.con_title"
                  :data-id="scope.row.data_id"
                  @click="toabstract($event)"
                  :id="scope.row.data_type"
                  style="cursor:pointer"
                ></span>
              </template>
            </el-table-column>
            <!-- 作者列 -->
            <el-table-column prop="con_author" label="作者" width="150" style="text-align:left">
              <template slot-scope="scope">
                <span
                  v-html="scope.row.con_author"
                  style="line-height: 1.5;word-wrap: break-word;color: #222;font-size:12px"
                ></span>
              </template>
            </el-table-column>
            <!-- 来源列 -->
            <el-table-column prop="con_from" label="来源" width="120" style="text-align:center"></el-table-column>
            <!-- 发表时间列 -->
            <el-table-column label="发表时间" width="120" style="text-align:center">
              <template slot-scope="scope">
                <span>{{scope.row.con_time.substr(0,scope.row.con_time.indexOf('T'))}}</span>
              </template>
            </el-table-column>
            <!-- 下载列 -->
            <el-table-column label="下载" width="100" style="text-align:center">
                <template slot-scope="scope">
                <i class="fa fa-arrow-circle-down" aria-hidden="true" style="color:#14a218;cursor:pointer"  
                  :data-id="scope.row.data_id"
                  @click="toabstract($event)"
                  :id="scope.row.data_type"></i>
                  </template>
            </el-table-column>
            <!-- 阅读列 -->
            <el-table-column label="阅读" width="100" style="text-align:center">
               <template slot-scope="scope">
                <i class="datatype" style="color:#f60;cursor:pointer"  
                  :data-id="scope.row.data_id"
                   @click="toabstract($event)"
                  :id="scope.row.data_type">{{scope.row.data_type}}</i>
                  </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="block" style="width:100%;text-align:center">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[10, 20, 50]"
              :page-size="20"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <!-- 摘要 -->
        <el-tab-pane label="摘要">
            <div class="choose-box" v-for="(item,index) in tableData" :key="index">
               <h3 v-html="item.con_title" :data-id="item.data_id"
                  @click="toabstract($event)"
                  :id="item.data_type" >{{item.con_title}}</h3>
               <p class="choose-p">
                 <span>作者：{{item.con_author}}</span>|
                 <span>来源：{{item.con_from}}</span>
               <!-- <em>{{item1[4].con_type}}</em> -->
                </p>
               <p class="abstract" v-html="item.con_text">{{item.con_text}}</p>
               <div class="choose-bottom">
                 <span style="color:#f60">发表时间：{{item.con_time.substr(0,item.con_time.indexOf('T'))}}</span>
                 <ul>
                   <li style="cursor:pointer" :data-id="item.data_id"  @click="toabstract($event)" :id="item.data_type">
                     <i class="fa fa-book" aria-hidden="true" style="color:#74a2f2" title="查看"></i>&ensp;<span>查&nbsp;看</span>
                   </li>
                   <li style="cursor:pointer" :data-id="item.data_id"  @click="toabstract($event)" :id="item.data_type">
                     <i class="fa fa-arrow-circle-down" aria-hidden="true" style="color:#14a218" title="下载"></i>&ensp;<span>下&nbsp;载</span>
                   </li>
                  </ul>
               </div>
          </div>
          <!-- 分页 -->
          <div class="block" style="width:100%;text-align:center">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[10, 20, 50]"
              :page-size="20"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 右侧功能栏 -->
    <div class="container-right">
      <Rank></Rank>
    </div>
  </div>
</template>
<script>
import Bus from "../assets/Bus";     //引入公共js，兄弟传值
import Recommend from "./recommend";
import Rank from "./rank";
export default {
  components: {
    Recommend,
    Rank
  },
  data() {
    return {
      tableData: [],    //搜索数据
      currentPage4: 1,  //当前页
      size: 20,         //每页多少条数据
      total: 0         //总共多少条数据
    };
  },

  methods: {
    handleSizeChange(val) {        //改变每页多少条数据

      let data1 = {
        type: this.$route.query.value,
        keyword: this.$route.query.keyword,
        size: val,
        start: 0
      };

      this.size = val;

      this.$ajax
        .post("http://192.168.100.44:8070/search/match", data1)
        .then(res => {
          this.tableData = res.data.data;
          this.total = res.data.total;
        })
        .catch(res => {
          console.log(res);
        });
    },
    handleCurrentChange(val) {    //改变当前第几页
      
      let data1 = {
        type: this.$route.query.value,
        keyword: this.$route.query.keyword,
        size: this.size,
        start: (val - 1) * this.size
      };

      this.$ajax
        .post("http://192.168.100.44:8070/search/match", data1)
        .then(res => {
          this.tableData = res.data.data;
          this.total = res.data.total;
        })
        .catch(res => {
          console.log(res);
        });
    },

    toabstract(event) {        //跳转到详情页，并将数据信息绑定在url中
      let target = event.currentTarget ;
      let abstracthref= this.$router.resolve({
        path: "/list/abstract",
        query: { con_title: target.getAttribute("data-id"),data_type:target.getAttribute("id") }
      });
      window.open(abstracthref.href,'_blank')
    },

    topay(event){             //跳转到支付页，并将数据信息绑定在url中
      let target = event.currentTarget;
      let payhref= this.$router.resolve({
        path: "/list/pay",
        query: { con_title: target.getAttribute("data-id"),data_type:target.getAttribute("id") }
      });
      window.open(payhref.href,'_blank')
    }
  },

   created() {
    var self = this;      //改变this指向
    Bus.$on("send", function(val) {
      self.tableData = val.data;
      self.total = val.total;
      // console.log(val.total)
    });
  },
  mounted(){
    let data = {
        type: this.$route.query.value,
        keyword: this.$route.query.keyword,
        size: 20,
        start: 0
      };
      
    this.$ajax
        .post("http://192.168.100.44:8070/search/match", data)
        .then(res => {
          this.tableData = res.data.data;
          this.total = res.data.total;
        })
        .catch(res => {
          console.log(res);
        });
  }
};
</script>
<style >
.container {
  width: 1400px;
  margin: 30px auto;
  display: flex;
}
.advertisement {
  width: 200px;
  height: 200px;
  position: relative;
  margin-bottom: 25px;
}
.container-left {
  flex: 1;
  margin-right: 20px;
  /* background-color: #cedef3; */
}
.container-content {
  flex: 4;
  margin-right: 20px;
  margin-top: 25px;
}
.container-right {
  flex: 1;
  /* background-color: aquamarine */
}
.GridTableContent {
  width: 100%;
  background: #fff;
  border: #d1dff4 solid 1px;
  table-layout: fixed;
  font-size: 12px;
}
.GridTableContent td {
  padding: 8px 3px;
  line-height: 1.5;
  word-wrap: break-word;
  color: #222;
}
.GTContentTitle td {
  font-size: 14px;
  font-weight: normal;
  color: #0642b0;
  padding: 5px 3px;
  background-color: #dfebfe;
  border-top: #fff solid 1px;
  border-bottom: 1px solid #d1dff4;
}
.GridTableContent input {
  margin-right: 3px;
}
.GridTableContent .GTContentTitle td {
  font-size: 14px;
  font-weight: normal;
  color: #0642b0;
  padding: 5px 3px;
  background-color: #dfebfe;
  border-top: #fff solid 1px;
  border-bottom: 1px solid #d1dff4;
  line-height: 1.5;
  word-wrap: break-word;
}
.GridTableContent tbody tr:nth-child(odd) {
  background-color: #ffffff;
}
.GridTableContent tbody tr:nth-child(even) {
  background-color: #969799;
}
.commend {
  margin: -1px 0;
  padding: 0px 0px;
  word-wrap: break-word;
  border: 1px solid #e0e0e0;
}
.commend h4 {
  display: block;
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
  background: #eaf2fd;
  font-weight: 600;
  border: 1px solid #cedef3;
  border-top-color: rgb(206, 222, 243);
  border-right-color: rgb(206, 222, 243);
  border-bottom-color: rgb(206, 222, 243);
  border-left-color: rgb(206, 222, 243);
  background: #f3f3f3;
  border-color: #e0e0e0;
}
.commend-content {
  margin: 10px 5px;
}
.commend-content a {
  margin: 10px 5px;
  color: black;
}
.el-table tr:nth-child(odd) {
  background-color: #f6f7fb;
}
.el-table tr:nth-child(even) {
  background-color: #ffffff;
}
.cell {
  text-align: center;
}
.cell span em {
  color: red;
}
.el-table_1_column_3 .cell {
  color: #053597;
}
/* 摘要 */
.choose-box {
  padding-top: 10px;
  border-bottom: 1px solid #eee;
}
.choose-box h3 {
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #2267c7;
}
.choose-box h3 em{
    color: red;
}
.choose-box h3:hover {
  color: #53a2e3;
  
  cursor: pointer;
}
.choose-box a{
  text-decoration: none !important;
}
.choose-p {
  margin-bottom: 5px;
  line-height: 24px;
  font-size: 14px;
  color: #3f4a5e;
}
.choose-p span:nth-child(1) {
  padding-right: 15px;
  margin-right: 20px;
}
.choose-p span:nth-child(2) {
  padding-left: 15px;
  padding-right: 15px;
}
.choose-p span:nth-child(3) {
  padding-left: 15px;
  padding-right: 15px;
}
.choose-p em {
  padding-left: 30px;
  color: #999;
}
.abstract {
  line-height: 20px;
  color: #777;
  word-break: break-all;
  text-justify: inter-ideograph;
  text-align: justify;
}
.abstract em{
    color: red;
}
.choose-bottom{
    height: 20px;
    padding: 19px 0;
    text-align: left;
    line-height: 20px;

}
.choose-bottom span{
    height: 20px;
    padding: 19px 0;
    text-align: left;
    line-height: 20px;
    color:#9999a2;
}
.choose-bottom ul{
    float: right;
}
.choose-bottom ul li{
    float: right;
    margin-right: 20px;
    color: #999999;
   
    
}
.choose-bottom ul li:nth-child(2){
     border-right:#9999a2 1px solid ;
     padding-right: 20px;
     cursor: pointer;
}
.choose-bottom ul li i {
    margin-right: 5px;
}
.datatype{
    font-style: normal;
}
.el-table .cell{
    word-break: normal;
}
.container-content tbody .el-table_1_column_1 .cell {
  text-align:left
}

</style>