<template>
  <div>
    <Header></Header>
    <div class="rank-content">
      <div class="ranktitle">
          <h1>{{ranktitle}}</h1>
      </div>
    <el-tabs :tab-position="tabPosition" v-model="activeTab" @tab-click="handleClick" style="">
      <el-tab-pane label="实时排序" name="realTime" >
        <el-tabs type="border-card">
          <!-- 地图 -->
          <el-tab-pane v-if="this.$route.query.con_title == 'ipRank'" label="地图">
             <div class="realmap" style="width:1200px;height:650px">
                
             </div>
          </el-tab-pane>
          <!-- 饼图 -->
          <el-tab-pane v-if="!(this.$route.query.con_title == 'ipRank')" label="饼图">
               <div class="bingtu" style="width:1200px;height:650px">
                
               </div>
          </el-tab-pane>
          <!-- 数据 -->
          <el-tab-pane label="数据">
            <el-table ref="singleTable"  :data="rankData" highlight-current-row @current-change="handleCurrentChange"  style="width: 100%"> 
              <el-table-column  type="index" label="序号"  width="100"> </el-table-column>
              <el-table-column   :label=content  width="400" style="text-align:center"> 
              <template slot-scope="scope">
                <div :class="classname" style="width:100%;height:100%">
                 <span >{{scope.row.value}}</span>
                </div>  
              </template>  
              </el-table-column>
              <el-table-column property="count"  label="访问次数"  width="300">  </el-table-column>
              <el-table-column property="date" label="实时时间" >  </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
          
      </el-tab-pane>
      <el-tab-pane label="按日排序" name="day">
          <el-tabs type="border-card">
          <!-- 地图 -->
          <el-tab-pane v-if="this.$route.query.con_title == 'ipRank'" label="地图">
             <div class="realmap" style="width:1200px;height:650px">
                
             </div>
          </el-tab-pane>
          <!-- 饼图 -->
          <el-tab-pane v-if="!(this.$route.query.con_title == 'ipRank')" label="饼图">
             <div class="bingtu" style="width:1200px;height:650px">
                
             </div>
          </el-tab-pane>
          <!-- 数据 -->
          <el-tab-pane label="数据">
            <el-table ref="singleTable"  :data="rankData" highlight-current-row @current-change="handleCurrentChange"  style="width: 100%"> 
              <el-table-column  type="index" label="序号"  width="100"> </el-table-column>
              <el-table-column   :label=content  width="400" style="text-align:center"> 
              <template slot-scope="scope">
                <div :class="classname" style="width:100%;height:100%">
                 <span >{{scope.row.value}}</span>
                </div>  
              </template>  
              </el-table-column>
              <el-table-column property="count"  label="访问次数"  width="300">  </el-table-column>
              <el-table-column property="start_date" label="开始时间" width="300">  </el-table-column>
              <el-table-column property="end_date" label="结束时间">              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="按周排序" name="week">
         <el-tabs type="border-card">
          <!-- 地图 -->
          <el-tab-pane v-if="this.$route.query.con_title == 'ipRank'" label="地图">
             <div class="realmap" style="width:1200px;height:650px">
                
             </div>
          </el-tab-pane>
          <!-- 饼图 -->
          <el-tab-pane v-if="!(this.$route.query.con_title == 'ipRank')" label="饼图">
             <div class="bingtu" style="width:1200px;height:650px">
                
             </div>
          </el-tab-pane>
          <!-- 数据 -->
          <el-tab-pane label="数据">
            <el-table ref="singleTable"  :data="rankData" highlight-current-row @current-change="handleCurrentChange"  style="width: 100%"> 
              <el-table-column  type="index" label="序号"  width="100"> </el-table-column>
              <el-table-column   :label=content  width="400" style="text-align:center"> 
              <template slot-scope="scope">
                <div :class="classname" style="width:100%;height:100%">
                 <span >{{scope.row.value}}</span>
                </div>  
              </template>  
              </el-table-column>
              <el-table-column property="count"  label="访问次数"  width="300">  </el-table-column>
              <el-table-column property="start_date" label="开始时间" width="300">  </el-table-column>
              <el-table-column property="end_date" label="结束时间">              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="按月排序" name="month">
         <el-tabs type="border-card">
          <!-- 地图 -->
          <el-tab-pane v-if="this.$route.query.con_title == 'ipRank'" label="地图">
             <div class="realmap" style="width:1200px;height:650px">
                
             </div>
          </el-tab-pane>
          <!-- 饼图 -->
          <el-tab-pane v-if="!(this.$route.query.con_title == 'ipRank')" label="饼图" >  
            <div class="bingtu" style="width:1200px;height:650px;">
                
             </div>      
          </el-tab-pane>
          <!-- 数据 -->
          <el-tab-pane label="数据">
            <el-table ref="singleTable"  :data="rankData" highlight-current-row @current-change="handleCurrentChange"  style="width: 100%"> 
              <el-table-column  type="index" label="序号"  width="100"> </el-table-column>
              <el-table-column   :label=content  width="400" style="text-align:center"> 
              <template slot-scope="scope">
                <div :class="classname" style="width:100%;height:100%">
                 <span >{{scope.row.value}}</span>
                </div>  
              </template>  
              </el-table-column>
              <el-table-column property="count"  label="访问次数"  width="300">     </el-table-column>
              <el-table-column property="start_date" label="开始时间" width="300">  </el-table-column>
              <el-table-column property="end_date" label="结束时间">                </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
import echarts from 'echarts'
require('echarts/map/js/china')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')


export default {
    components:{
        Header,
        Footer
    },
  data() {
    return {
      rankData: [],
      tabPosition: "left",
      activeTab:"",
      content:"",
      ranktitle:"",
      rankurl:"http://192.168.100.41:8772/searchPage/bigDataExhibition",
      con_title:"",
      classname:"",
      chinachart0:"",
      chinachart1:"",
      chinachart2:"",
      chinachart3:"",
      bingtu1:"",
      bingtu2:"",
      bingtu3:"",
      bingtu4:""
    };
  },
   methods:{
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
        
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        console.log(val)

      },

      // 切换实时排序
      async changeReal(){
      let data1 = { exhibitionType: "realTime" };
      await this.$ajax
      .post(this.rankurl, data1)
      .then(res => {
        this.rankData = res.data.exhibitionResult[this.$route.query.con_title];
        console.log(res.data.exhibitionResult)
      })
      .catch(res => {
        console.log(res);
      });

      // 改变请求回来的数据
       if(this.$route.query.con_title == 'ipRank'){
         for(let i=0;i<this.rankData.length;i++){    
          if(this.rankData[i].value == 10000){
          this.rankData[i].value = "中国"
        }else if( this.rankData[i].value == 110000){
          this.rankData[i].value = "北京"
        }else if( this.rankData[i].value == 120000){
          this.rankData[i].value= "天津"
        }else if( this.rankData[i].value == 130000){
          this.rankData[i].value = "河北"
        }else if( this.rankData[i].value == 140000){
          this.rankData[i].value = "山西"
        }else if( this.rankData[i].value == 150000){
          this.rankData[i].value = "内蒙古"
        }else if( this.rankData[i].value == 210000){
          this.rankData[i].value = "辽宁"
        }else if( this.rankData[i].value == 220000){
          this.rankData[i].value = "吉林"
        }else if( this.rankData[i].value == 230000){
          this.rankData[i].value = "黑龙江"
        }else if( this.rankData[i].value == 310000){
          this.rankData[i].value = "上海"
        }else if( this.rankData[i].value == 320000){
          this.rankData[i].value = "江苏"
        }else if( this.rankData[i].value == 330000){
          this.rankData[i].value = "浙江"
        }else if( this.rankData[i].value == 340000){
          this.rankData[i].value = "安徽"
        }else if( this.rankData[i].value == 350000){
          this.rankData[i].value = "福建"
        }else if( this.rankData[i].value == 360000){
          this.rankData[i].value = "江西"
        }else if( this.rankData[i].value == 370000){
          this.rankData[i].value = "山东"
        }else if( this.rankData[i].value == 410000){
          this.rankData[i].value = "河南"
        }else if( this.rankData[i].value == 420000){
          this.rankData[i].value = "湖北"
        }else if( this.rankData[i].value == 430000){
          this.rankData[i].value = "湖南"
        }else if( this.rankData[i].value == 440000){
          this.rankData[i].value = "广东"
        }else if( this.rankData[i].value == 450000){
          this.rankData[i].value = "广西"
        }else if( this.rankData[i].value == 460000){
          this.rankData[i].value = "海南"
        }else if( this.rankData[i].value == 500000){
          this.rankData[i].value = "重庆"
        }else if( this.rankData[i].value == 510000){
          this.rankData[i].value = "四川"
        }else if( this.rankData[i].value == 520000){
          this.rankData[i].value = "贵州"
        }else if( this.rankData[i].value == 530000){
          this.rankData[i].value =  "云南"
        }else if( this.rankData[i].value == 540000){
          this.rankData[i].value = "西藏"
        }else if( this.rankData[i].value == 610000){
          this.rankData[i].value = "陕西"
        }else if( this.rankData[i].value == 620000){
          this.rankData[i].value = "甘肃"
        }else if( this.rankData[i].value == 630000){
          this.rankData[i].value = "青海"
        }else if( this.rankData[i].value == 640000){
          this.rankData[i].value = "宁夏"
        }else{
          this.rankData[i].value= "新疆"
        }
      }
      this.getrealchart();
      }else if(this.$route.query.con_title == "stateRank"){
        for(let i = 0;i<this.rankData.length;i++){
        if(this.rankData[i].value<=200){
        this.rankData[i].value = "请求成功"
      }else if(this.rankData[i].value == 201){
        this.rankData[i].value ="已创建"
      }else if(this.rankData[i].value ==202){
        this.rankData[i].value = "已接受"
      }else if(this.rankData[i].value == 203){
        this.rankData[i].value ="非授权信息"
      }else if(this.rankData[i].value == 204){
        this.rankData[i].value= "无内容"
      }else if(this.rankData[i].value>204 && this.rankData[i].value<300){
        this.rankData[i].value= "重置内容"
      }else if(this.rankData[i].value>=300 && this.rankData[i].value<400){
        this.rankData[i].value= "多种选择"
      }else if(this.rankData[i].value==400){
        this.rankData[i].value= "错误请求"
      }else if(this.rankData[i].value ==401){
        this.rankData[i].value= "身份验证错误"
      }else if(this.rankData[i].value==402){
        this.rankData[i].value= "保留头响应"
      }else if(this.rankData[i].value==403){
        this.rankData[i].value= "禁止"
      }else if(this.rankData[i].value==404){
        this.rankData[i].value= "未找到"
      }else if(this.rankData[i].value>404&&this.rankData[i].value<500){
        this.rankData[i].value= "方法禁用"
      }else if(this.rankData[i].value ==500){
        this.rankData[i].value= "服务器内部错误"
      }else if(this.rankData[i].value ==501){
        this.rankData[i].value ="尚未实施"
      }else if(this.rankData[i].value ==502){
        this.rankData[i].value ="错误网关"
      }else if(this.rankData[i].value >=503&&this.rankData[i].value<600){
        this.rankData[i].value ="服务不可用"
      }else{
        this.rankData[i].value="无响应"
      }
        }
         
      }else if(this.$route.query.con_title=="contentRank"){
          for(let i = 0;i<this.rankData.length;i++){
            this.rankData[i].value = this.rankData[i].value
          }
      }

      this.getbingtu();
      
      
      // console.log(this.rankRealdata)
      
      },

      //切换按日排序
     async changeDay(){
        let data2 = { exhibitionType: "day" };
      await  this.$ajax
      .post(this.rankurl, data2)
      .then(res => {
        // console.log(res)
        this.rankData = res.data.exhibitionResult[this.$route.query.con_title];
        
      })
      .catch(res => {
        console.log(res);
      });

      // 改变请求回来的数据
      if(this.$route.query.con_title == 'ipRank'){
         for(let i=0;i<this.rankData.length;i++){    
          if(this.rankData[i].value == 10000){
          this.rankData[i].value = "中国"
        }else if( this.rankData[i].value == 110000){
          this.rankData[i].value = "北京"
        }else if( this.rankData[i].value == 120000){
          this.rankData[i].value= "天津"
        }else if( this.rankData[i].value == 130000){
          this.rankData[i].value = "河北"
        }else if( this.rankData[i].value == 140000){
          this.rankData[i].value = "山西"
        }else if( this.rankData[i].value == 150000){
          this.rankData[i].value = "内蒙古"
        }else if( this.rankData[i].value == 210000){
          this.rankData[i].value = "辽宁"
        }else if( this.rankData[i].value == 220000){
          this.rankData[i].value = "吉林"
        }else if( this.rankData[i].value == 230000){
          this.rankData[i].value = "黑龙江"
        }else if( this.rankData[i].value == 310000){
          this.rankData[i].value = "上海"
        }else if( this.rankData[i].value == 320000){
          this.rankData[i].value = "江苏"
        }else if( this.rankData[i].value == 330000){
          this.rankData[i].value = "浙江"
        }else if( this.rankData[i].value == 340000){
          this.rankData[i].value = "安徽"
        }else if( this.rankData[i].value == 350000){
          this.rankData[i].value = "福建"
        }else if( this.rankData[i].value == 360000){
          this.rankData[i].value = "江西"
        }else if( this.rankData[i].value == 370000){
          this.rankData[i].value = "山东"
        }else if( this.rankData[i].value == 410000){
          this.rankData[i].value = "河南"
        }else if( this.rankData[i].value == 420000){
          this.rankData[i].value = "湖北"
        }else if( this.rankData[i].value == 430000){
          this.rankData[i].value = "湖南"
        }else if( this.rankData[i].value == 440000){
          this.rankData[i].value = "广东"
        }else if( this.rankData[i].value == 450000){
          this.rankData[i].value = "广西"
        }else if( this.rankData[i].value == 460000){
          this.rankData[i].value = "海南"
        }else if( this.rankData[i].value == 500000){
          this.rankData[i].value = "重庆"
        }else if( this.rankData[i].value == 510000){
          this.rankData[i].value = "四川"
        }else if( this.rankData[i].value == 520000){
          this.rankData[i].value = "贵州"
        }else if( this.rankData[i].value == 530000){
          this.rankData[i].value =  "云南"
        }else if( this.rankData[i].value == 540000){
          this.rankData[i].value = "西藏"
        }else if( this.rankData[i].value == 610000){
          this.rankData[i].value = "陕西"
        }else if( this.rankData[i].value == 620000){
          this.rankData[i].value = "甘肃"
        }else if( this.rankData[i].value == 630000){
          this.rankData[i].value = "青海"
        }else if( this.rankData[i].value == 640000){
          this.rankData[i].value = "宁夏"
        }else{
          this.rankData[i].value= "新疆"
        }
      }
      this.getrealchart();
      }else if(this.$route.query.con_title == "stateRank"){
        for(let i = 0;i<this.rankData.length;i++){
        if(this.rankData[i].value<=200){
        this.rankData[i].value = "请求成功"
      }else if(this.rankData[i].value == 201){
        this.rankData[i].value ="已创建"
      }else if(this.rankData[i].value ==202){
        this.rankData[i].value = "已接受"
      }else if(this.rankData[i].value == 203){
        this.rankData[i].value ="非授权信息"
      }else if(this.rankData[i].value == 204){
        this.rankData[i].value= "无内容"
      }else if(this.rankData[i].value>204 && this.rankData[i].value<300){
        this.rankData[i].value= "重置内容"
      }else if(this.rankData[i].value>=300 && this.rankData[i].value<400){
        this.rankData[i].value= "多种选择"
      }else if(this.rankData[i].value==400){
        this.rankData[i].value= "错误请求"
      }else if(this.rankData[i].value ==401){
        this.rankData[i].value= "身份验证错误"
      }else if(this.rankData[i].value==402){
        this.rankData[i].value= "保留头响应"
      }else if(this.rankData[i].value==403){
        this.rankData[i].value= "禁止"
      }else if(this.rankData[i].value==404){
        this.rankData[i].value= "未找到"
      }else if(this.rankData[i].value>404&&this.rankData[i].value<500){
        this.rankData[i].value= "方法禁用"
      }else if(this.rankData[i].value ==500){
        this.rankData[i].value= "服务器内部错误"
      }else if(this.rankData[i].value ==501){
        this.rankData[i].value ="尚未实施"
      }else if(this.rankData[i].value ==502){
        this.rankData[i].value ="错误网关"
      }else if(this.rankData[i].value >=503&&this.rankData[i].value<600){
        this.rankData[i].value ="服务不可用"
      }else{
        this.rankData[i].value="无响应"
      }
        }
         
      }else if(this.$route.query.con_title=="contentRank"){
          for(let i = 0;i<this.rankData.length;i++){
            this.rankData[i].value = this.rankData[i].value
          }
      }

      this.getbingtu();
      
      // console.log(this.rankDaydata)
      
      },

      // 切换按周排序
     async changeWeek(){
        let data3 = { exhibitionType: "week" };
     await   this.$ajax
      .post(this.rankurl, data3)
      .then(res => {
        this.rankData = res.data.exhibitionResult[this.$route.query.con_title];
        for(let i =0;i<this.rankData.length;i++){
     this.chartOption.series[0].data.push({name:this.rankData[i].value,value:this.rankData[i].rank})
  }
        
      })
      .catch(res => {
        console.log(res);
      });
      
      // 改变请求回来的数据
      if(this.$route.query.con_title == 'ipRank'){
         for(let i=0;i<this.rankData.length;i++){    
          if(this.rankData[i].value == 10000){
          this.rankData[i].value = "中国"
        }else if( this.rankData[i].value == 110000){
          this.rankData[i].value = "北京"
        }else if( this.rankData[i].value == 120000){
          this.rankData[i].value= "天津"
        }else if( this.rankData[i].value == 130000){
          this.rankData[i].value = "河北"
        }else if( this.rankData[i].value == 140000){
          this.rankData[i].value = "山西"
        }else if( this.rankData[i].value == 150000){
          this.rankData[i].value = "内蒙古"
        }else if( this.rankData[i].value == 210000){
          this.rankData[i].value = "辽宁"
        }else if( this.rankData[i].value == 220000){
          this.rankData[i].value = "吉林"
        }else if( this.rankData[i].value == 230000){
          this.rankData[i].value = "黑龙江"
        }else if( this.rankData[i].value == 310000){
          this.rankData[i].value = "上海"
        }else if( this.rankData[i].value == 320000){
          this.rankData[i].value = "江苏"
        }else if( this.rankData[i].value == 330000){
          this.rankData[i].value = "浙江"
        }else if( this.rankData[i].value == 340000){
          this.rankData[i].value = "安徽"
        }else if( this.rankData[i].value == 350000){
          this.rankData[i].value = "福建"
        }else if( this.rankData[i].value == 360000){
          this.rankData[i].value = "江西"
        }else if( this.rankData[i].value == 370000){
          this.rankData[i].value = "山东"
        }else if( this.rankData[i].value == 410000){
          this.rankData[i].value = "河南"
        }else if( this.rankData[i].value == 420000){
          this.rankData[i].value = "湖北"
        }else if( this.rankData[i].value == 430000){
          this.rankData[i].value = "湖南"
        }else if( this.rankData[i].value == 440000){
          this.rankData[i].value = "广东"
        }else if( this.rankData[i].value == 450000){
          this.rankData[i].value = "广西"
        }else if( this.rankData[i].value == 460000){
          this.rankData[i].value = "海南"
        }else if( this.rankData[i].value == 500000){
          this.rankData[i].value = "重庆"
        }else if( this.rankData[i].value == 510000){
          this.rankData[i].value = "四川"
        }else if( this.rankData[i].value == 520000){
          this.rankData[i].value = "贵州"
        }else if( this.rankData[i].value == 530000){
          this.rankData[i].value =  "云南"
        }else if( this.rankData[i].value == 540000){
          this.rankData[i].value = "西藏"
        }else if( this.rankData[i].value == 610000){
          this.rankData[i].value = "陕西"
        }else if( this.rankData[i].value == 620000){
          this.rankData[i].value = "甘肃"
        }else if( this.rankData[i].value == 630000){
          this.rankData[i].value = "青海"
        }else if( this.rankData[i].value == 640000){
          this.rankData[i].value = "宁夏"
        }else{
          this.rankData[i].value= "新疆"
        }
      }
      this.getrealchart();
      }else if(this.$route.query.con_title == "stateRank"){
        for(let i = 0;i<this.rankData.length;i++){
        if(this.rankData[i].value<=200){
        this.rankData[i].value = "请求成功"
      }else if(this.rankData[i].value == 201){
        this.rankData[i].value ="已创建"
      }else if(this.rankData[i].value ==202){
        this.rankData[i].value = "已接受"
      }else if(this.rankData[i].value == 203){
        this.rankData[i].value ="非授权信息"
      }else if(this.rankData[i].value == 204){
        this.rankData[i].value= "无内容"
      }else if(this.rankData[i].value>204 && this.rankData[i].value<300){
        this.rankData[i].value= "重置内容"
      }else if(this.rankData[i].value>=300 && this.rankData[i].value<400){
        this.rankData[i].value= "多种选择"
      }else if(this.rankData[i].value==400){
        this.rankData[i].value= "错误请求"
      }else if(this.rankData[i].value ==401){
        this.rankData[i].value= "身份验证错误"
      }else if(this.rankData[i].value==402){
        this.rankData[i].value= "保留头响应"
      }else if(this.rankData[i].value==403){
        this.rankData[i].value= "禁止"
      }else if(this.rankData[i].value==404){
        this.rankData[i].value= "未找到"
      }else if(this.rankData[i].value>404&&this.rankData[i].value<500){
        this.rankData[i].value= "方法禁用"
      }else if(this.rankData[i].value ==500){
        this.rankData[i].value= "服务器内部错误"
      }else if(this.rankData[i].value ==501){
        this.rankData[i].value ="尚未实施"
      }else if(this.rankData[i].value ==502){
        this.rankData[i].value ="错误网关"
      }else if(this.rankData[i].value >=503&&this.rankData[i].value<600){
        this.rankData[i].value ="服务不可用"
      }else{
        this.rankData[i].value="无响应"
      }
        }
         
      }else if(this.$route.query.con_title=="contentRank"){
          for(let i = 0;i<this.rankData.length;i++){
            this.rankData[i].value = this.rankData[i].value
          }
      }
      this.getbingtu();
       
      // console.log(this.rankWeekdata)
      
      },
      //切换按月排序
      async changeMonth(){
        let data4 = { exhibitionType: "month" };
      await this.$ajax
      .post(this.rankurl, data4)
      .then(res => {
        this.rankData = res.data.exhibitionResult[this.$route.query.con_title];
        for(let i =0;i<this.rankData.length;i++){
     this.chartOption.series[0].data.push({name:this.rankData[i].value,value:this.rankData[i].rank})
      }
        // console.log(res.data)
      })
      .catch(res => {
        console.log(res);
      });

     // 改变请求回来的数据
       if(this.$route.query.con_title == 'ipRank'){
        for(let i=0;i<this.rankData.length;i++){    
          if(this.rankData[i].value == 10000){
          this.rankData[i].value = "中国"
        }else if( this.rankData[i].value == 110000){
          this.rankData[i].value = "北京"
        }else if( this.rankData[i].value == 120000){
          this.rankData[i].value= "天津"
        }else if( this.rankData[i].value == 130000){
          this.rankData[i].value = "河北"
        }else if( this.rankData[i].value == 140000){
          this.rankData[i].value = "山西"
        }else if( this.rankData[i].value == 150000){
          this.rankData[i].value = "内蒙古"
        }else if( this.rankData[i].value == 210000){
          this.rankData[i].value = "辽宁"
        }else if( this.rankData[i].value == 220000){
          this.rankData[i].value = "吉林"
        }else if( this.rankData[i].value == 230000){
          this.rankData[i].value = "黑龙江"
        }else if( this.rankData[i].value == 310000){
          this.rankData[i].value = "上海"
        }else if( this.rankData[i].value == 320000){
          this.rankData[i].value = "江苏"
        }else if( this.rankData[i].value == 330000){
          this.rankData[i].value = "浙江"
        }else if( this.rankData[i].value == 340000){
          this.rankData[i].value = "安徽"
        }else if( this.rankData[i].value == 350000){
          this.rankData[i].value = "福建"
        }else if( this.rankData[i].value == 360000){
          this.rankData[i].value = "江西"
        }else if( this.rankData[i].value == 370000){
          this.rankData[i].value = "山东"
        }else if( this.rankData[i].value == 410000){
          this.rankData[i].value = "河南"
        }else if( this.rankData[i].value == 420000){
          this.rankData[i].value = "湖北"
        }else if( this.rankData[i].value == 430000){
          this.rankData[i].value = "湖南"
        }else if( this.rankData[i].value == 440000){
          this.rankData[i].value = "广东"
        }else if( this.rankData[i].value == 450000){
          this.rankData[i].value = "广西"
        }else if( this.rankData[i].value == 460000){
          this.rankData[i].value = "海南"
        }else if( this.rankData[i].value == 500000){
          this.rankData[i].value = "重庆"
        }else if( this.rankData[i].value == 510000){
          this.rankData[i].value = "四川"
        }else if( this.rankData[i].value == 520000){
          this.rankData[i].value = "贵州"
        }else if( this.rankData[i].value == 530000){
          this.rankData[i].value = "云南"
        }else if( this.rankData[i].value == 540000){
          this.rankData[i].value = "西藏"
        }else if( this.rankData[i].value == 610000){
          this.rankData[i].value = "陕西"
        }else if( this.rankData[i].value == 620000){
          this.rankData[i].value = "甘肃"
        }else if( this.rankData[i].value == 630000){
          this.rankData[i].value = "青海"
        }else if( this.rankData[i].value == 640000){
          this.rankData[i].value = "宁夏"
        }else{
          this.rankData[i].value= "新疆"
        }
      }
       this.getrealchart();
       }else if(this.$route.query.con_title == "stateRank"){
        for(let i = 0;i<this.rankData.length;i++){
        if(this.rankData[i].value<=200){
        this.rankData[i].value = "请求成功"
      }else if(this.rankData[i].value == 201){
        this.rankData[i].value ="已创建"
      }else if(this.rankData[i].value ==202){
        this.rankData[i].value = "已接受"
      }else if(this.rankData[i].value == 203){
        this.rankData[i].value ="非授权信息"
      }else if(this.rankData[i].value == 204){
        this.rankData[i].value= "无内容"
      }else if(this.rankData[i].value>204 && this.rankData[i].value<300){
        this.rankData[i].value= "重置内容"
      }else if(this.rankData[i].value>=300 && this.rankData[i].value<400){
        this.rankData[i].value= "多种选择"
      }else if(this.rankData[i].value==400){
        this.rankData[i].value= "错误请求"
      }else if(this.rankData[i].value ==401){
        this.rankData[i].value= "身份验证错误"
      }else if(this.rankData[i].value==402){
        this.rankData[i].value= "保留头响应"
      }else if(this.rankData[i].value==403){
        this.rankData[i].value= "禁止"
      }else if(this.rankData[i].value==404){
        this.rankData[i].value= "未找到"
      }else if(this.rankData[i].value>404&&this.rankData[i].value<500){
        this.rankData[i].value= "方法禁用"
      }else if(this.rankData[i].value ==500){
        this.rankData[i].value= "服务器内部错误"
      }else if(this.rankData[i].value ==501){
        this.rankData[i].value ="尚未实施"
      }else if(this.rankData[i].value ==502){
        this.rankData[i].value ="错误网关"
      }else if(this.rankData[i].value >=503&&this.rankData[i].value<600){
        this.rankData[i].value ="服务不可用"
      }else{
        this.rankData[i].value="无响应"
      }
        }
         
      }else if(this.$route.query.con_title=="contentRank"){
          for(let i = 0;i<this.rankData.length;i++){
            this.rankData[i].value = this.rankData[i].value
          }
      }
      
      this.getbingtu();

      },

      //切换tab 
      handleClick(tab,event){
         if(tab.name == 'realTime'){
           this.changeReal()
         }else if(tab.name == 'day'){
           this.changeDay()
         }else if(tab.name == 'week'){
           this.changeWeek()
         }else{
           this.changeMonth()
         }
      },

      //获取con_title
      getcontitle(){
        return this.$route.con_title
      },

      // 画中国地图
      getrealchart(){
        // console.log(this.rankData+2)

        if(this.$route.query.con_title == 'ipRank'){
        // 初始化echarts实例
         this.chinachart0 = echarts.init(document.getElementsByClassName('realmap')[0])
         this.chinachart1 = echarts.init(document.getElementsByClassName('realmap')[1])
         this.chinachart2 = echarts.init(document.getElementsByClassName('realmap')[2])
         this.chinachart3 = echarts.init(document.getElementsByClassName('realmap')[3])
         // 进行相关配置
         
         this.chartOption = {
       title : {
              text: this.content,//主标题
              subtext: '',//副标题
              x:'center',//x轴方向对齐方式
              left: 'center',
              top:20
          },
       tooltip: { // 鼠标移到图里面的浮动提示框
       // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
       formatter (params, ticket, callback) { 
        // params.data 就是series配置项中的data数据遍历
        let name,rank,count
        if (params.data) {
          name = params.data.name
          rank = params.data.rank
          count = params.data.count
        } else { // 为了防止没有定义数据的时候报错写的
          name = ""
          rank = 0
          count = 0
        }

        let htmlStr = `
          <div style='font-size:18px;margin-bottom:5px;'> ${params.name}</div>
          <p style='text-align:left;margin-top:-10px;'>
	          该地区访问次数排名：${rank}<br/>
	          该地区具体访问次数：${count}<br/>
          </p>
        `
        return htmlStr
        }

        },
         
      // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
       visualMap: { // 左下角的颜色区域
      type: 'piecewise', // 定义为分段型 visualMap
      min: 1,
      max: 20,
      itemWidth: 40,
      bottom: 60,
      left: 20,
      pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
        {gt: 17, lte: 20, label: '访问次数极多', color: 'orangered'},
        {gt: 13, lte: 17, label: '访问次数很多', color: '#ff9800'}, 
        {gt: 7, lte: 13, label: '访问次数一般', color: '#ffeb3b'},
        {gt: 3, lte: 7, label: '访问次数很少', color: '#9adcfa'}, 
        {gt: 0, lte: 3, label: '访问次数极少', color: '#6ad86e'}, 
        {value: 0, label: '暂无数据', color: '#999'}, // [0]
      ]
      },
      // geo配置详解： https://echarts.baidu.com/option.html#geo
      geo: { // 地理坐标系组件用于地图的绘制
      map: 'china', // 表示中国地图
      // roam: true, // 是否开启鼠标缩放和平移漫游
      zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
      label: {
        show: true
      },
      itemStyle: { // 地图区域的多边形 图形样式。
        borderColor: 'rgba(0, 0, 0, 0.2)',
        emphasis: { // 高亮状态下的多边形和标签样式
          color:'rgba(255,0,0,0.5)' ,
          shadowBlur: 20,
          shadowColor: 'rgba(255, 0, 0, 1)'
        }
      }
      },
      series: [
      {
        name: this.content, // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
        type: 'map',
        geoIndex: 0,
        label: {
          show: true
        },
        // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
        data: []
      }
      ]
     }
      for(let i =0;i<this.rankData.length;i++){
        let rankvalue = (this.rankData.length+1)-(this.rankData[i].rank)
        this.chartOption.series[0].data.push({name:this.rankData[i].value,value:rankvalue,count:this.rankData[i].count,rank:this.rankData[i].rank})
      }

     // 使用刚指定的配置项和数据显示地图数据
     this.chinachart0.setOption(this.chartOption)
     this.chinachart1.setOption(this.chartOption)
     this.chinachart2.setOption(this.chartOption)
     this.chinachart3.setOption(this.chartOption)
     }
    },
    
    getbingtu(){
      if(this.$route.query.con_title != 'ipRank'){
      // 基于准备好的dom，初始化echarts实例
      this.bingtu0 = echarts.init(document.getElementsByClassName('bingtu')[0]);
      this.bingtu1 = echarts.init(document.getElementsByClassName('bingtu')[1]);
      this.bingtu2 = echarts.init(document.getElementsByClassName('bingtu')[2]);
      this.bingtu3 = echarts.init(document.getElementsByClassName('bingtu')[3]);
      // 绘制图表
      this.chartOption1 = {
          title : {
              text: this.content,//主标题
              subtext: '',//副标题
              x:'center',//x轴方向对齐方式
              left:500,
              top:30
          },
          tooltip : {
              trigger: 'item',
              formatter (params, ticket, callback) { 
              // params.data 就是series配置项中的data数据遍历
              let name,value,rank
              if (params.data) {
                 name = params.data.name
                 value = params.data.value
                 rank = params.data.rank
              } else { // 为了防止没有定义数据的时候报错写的
               name = ""
               value = 0
               rank = 0
              }

               let htmlStr = `
               <div style='font-size:18px;margin-bottom:10px;'> ${name}</div>
               <p style='text-align:left;margin-top:-10px;'>
               访问次数：${value}<br/>
               访问排名：${rank}<br/>
               </p>`
        
                return htmlStr
          }
          },
          legend: {
              orient: 'vertical',
              right: 'right',
              width:'200px',
              top: '150px',
              data:[],
              itemWidth: 24,   // 设置图例图形的宽
              formatter: function (name) {
                return name.substr(0,18)+'...'
               },
             
          },
          series : [
              {
                  name: '',
                  type: 'pie',
                  radius : ['30%','55%'],
                  center: ['45%', '50%'],
                  data:[],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 20,
                          shadowOffsetX: 50,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ],
      };
      
      for(let i =0;i<this.rankData.length;i++){
        this.chartOption1.series[0].data.push({name:this.rankData[i].value,value:this.rankData[i].count,rank:this.rankData[i].rank})
        this.chartOption1.legend.data.push(this.rankData[i].value)
      }

        this.bingtu0.setOption(this.chartOption1)
        this.bingtu1.setOption(this.chartOption1)
        this.bingtu2.setOption(this.chartOption1)
        this.bingtu3.setOption(this.chartOption1)

      }
    }
   

  },


  async created(){
    //修改页头标题
    if (this.$route.query.con_title=='ipRank'){
      this.content = "访问区域" 
      this.ranktitle = "访问区域排序"
      }else if(this.$route.query.con_title=='stateRank'){
      this.content = "访问请求状态"
      this.ranktitle = "访问请求状态排序"
      }else if(this.$route.query.con_title=='fromRank'){
       this.content = "搜索来源"
       this.ranktitle = "搜索来源排序"
      }else if(this.$route.query.con_title=='contentRank'){
      this.content = "页面点击"
      this.ranktitle = "页面点击排序"
      }
    //修改不同标题样式
    this.activeTab=this.$route.query.con_method
    this.con_title = this.$route.query.con_title 
    if(this.con_title == "ipRank"){
      this.classname = "iptext"
    }else if(this.con_title == "stateRank"){
      this.classname = "statetext"
    }else if(this.con_title == "fromRank"){
      this.classname = "fromtext"
    }else{
      this.classname = "contenttext"
    }
    
    //初始化数据，地图
    let data0 = { exhibitionType: this.$route.query.con_method };
    await this.$ajax
      .post(this.rankurl, data0)
      .then(res => {
           this.rankData = res.data.exhibitionResult[this.$route.query.con_title];
        
          // console.log(this.rankData)  
      })
      .catch(res => {
        console.log(res);
      })
      // 初始化数据
      if(this.$route.query.con_title == 'ipRank'){
         for(let i=0;i<this.rankData.length;i++){    
          if(this.rankData[i].value == 10000){
          this.rankData[i].value = "中国"
        }else if( this.rankData[i].value == 110000){
          this.rankData[i].value = "北京"
        }else if( this.rankData[i].value == 120000){
          this.rankData[i].value= "天津"
        }else if( this.rankData[i].value == 130000){
          this.rankData[i].value = "河北"
        }else if( this.rankData[i].value == 140000){
          this.rankData[i].value = "山西"
        }else if( this.rankData[i].value == 150000){
          this.rankData[i].value = "内蒙古"
        }else if( this.rankData[i].value == 210000){
          this.rankData[i].value = "辽宁"
        }else if( this.rankData[i].value == 220000){
          this.rankData[i].value = "吉林"
        }else if( this.rankData[i].value == 230000){
          this.rankData[i].value = "黑龙江"
        }else if( this.rankData[i].value == 310000){
          this.rankData[i].value = "上海"
        }else if( this.rankData[i].value == 320000){
          this.rankData[i].value = "江苏"
        }else if( this.rankData[i].value == 330000){
          this.rankData[i].value = "浙江"
        }else if( this.rankData[i].value == 340000){
          this.rankData[i].value = "安徽"
        }else if( this.rankData[i].value == 350000){
          this.rankData[i].value = "福建"
        }else if( this.rankData[i].value == 360000){
          this.rankData[i].value = "江西"
        }else if( this.rankData[i].value == 370000){
          this.rankData[i].value = "山东"
        }else if( this.rankData[i].value == 410000){
          this.rankData[i].value = "河南"
        }else if( this.rankData[i].value == 420000){
          this.rankData[i].value = "湖北"
        }else if( this.rankData[i].value == 430000){
          this.rankData[i].value = "湖南"
        }else if( this.rankData[i].value == 440000){
          this.rankData[i].value = "广东"
        }else if( this.rankData[i].value == 450000){
          this.rankData[i].value = "广西"
        }else if( this.rankData[i].value == 460000){
          this.rankData[i].value = "海南"
        }else if( this.rankData[i].value == 500000){
          this.rankData[i].value = "重庆"
        }else if( this.rankData[i].value == 510000){
          this.rankData[i].value = "四川"
        }else if( this.rankData[i].value == 520000){
          this.rankData[i].value = "贵州"
        }else if( this.rankData[i].value == 530000){
          this.rankData[i].value = "云南"
        }else if( this.rankData[i].value == 540000){
          this.rankData[i].value = "西藏"
        }else if( this.rankData[i].value == 610000){
          this.rankData[i].value = "陕西"
        }else if( this.rankData[i].value == 620000){
          this.rankData[i].value = "甘肃"
        }else if( this.rankData[i].value == 630000){
          this.rankData[i].value = "青海"
        }else if( this.rankData[i].value == 640000){
          this.rankData[i].value = "宁夏"
        }else{
          this.rankData[i].value= "新疆"
        }
      }
      }else if(this.$route.query.con_title == "stateRank"){
        for(let i = 0;i<this.rankData.length;i++){
        if(this.rankData[i].value<=200){
        this.rankData[i].value = "请求成功"
      }else if(this.rankData[i].value == 201){
        this.rankData[i].value ="已创建"
      }else if(this.rankData[i].value ==202){
        this.rankData[i].value = "已接受"
      }else if(this.rankData[i].value == 203){
        this.rankData[i].value ="非授权信息"
      }else if(this.rankData[i].value == 204){
        this.rankData[i].value= "无内容"
      }else if(this.rankData[i].value>204 && this.rankData[i].value<300){
        this.rankData[i].value= "重置内容"
      }else if(this.rankData[i].value>=300 && this.rankData[i].value<400){
        this.rankData[i].value= "多种选择"
      }else if(this.rankData[i].value==400){
        this.rankData[i].value= "错误请求"
      }else if(this.rankData[i].value ==401){
        this.rankData[i].value= "身份验证错误"
      }else if(this.rankData[i].value==402){
        this.rankData[i].value= "保留头响应"
      }else if(this.rankData[i].value==403){
        this.rankData[i].value= "禁止"
      }else if(this.rankData[i].value==404){
        this.rankData[i].value= "未找到"
      }else if(this.rankData[i].value>404&&this.rankData[i].value<500){
        this.rankData[i].value= "方法禁用"
      }else if(this.rankData[i].value ==500){
        this.rankData[i].value= "服务器内部错误"
      }else if(this.rankData[i].value ==501){
        this.rankData[i].value ="尚未实施"
      }else if(this.rankData[i].value ==502){
        this.rankData[i].value ="错误网关"
      }else if(this.rankData[i].value >=503&&this.rankData[i].value<600){
        this.rankData[i].value ="服务不可用"
      }else{
        this.rankData[i].value="无响应"
      }
        }
         
      }else if(this.$route.query.con_title=="contentRank"){
          for(let i = 0;i<this.rankData.length;i++){
            this.rankData[i].value = this.rankData[i].value
          }
      }
     

      

  },

  mounted(){
    // 画地图
   var yanshi = setTimeout(() => {
     this.getrealchart()
     this.getbingtu()
   }, 1500); 
  },
  destroyed(){
    clearTimeout(yanshi)
  }
  

}
</script>
<style>
.el-table td,.el-table th{
  text-align: center !important;
}
</style>
<style scoped>
.rank-content{
    width: 1400px;
    margin: 0 auto;
    margin-bottom: 100PX;
}
.ranktitle{
  width: 800px;
  margin: 50px auto;
  text-align: center;
}
.ranktitle h1{
  font-size: 30px;
  letter-spacing: 10px;
}
.statetext{
  text-align: left;
  padding-left: 150px;
}
.iptext{
  text-align: left;
  padding-left: 170px;
}
.fromtext{
  text-align: left;
  padding-left: 145px
}
.contenttext{
  text-align: left;
  padding-left:15px;
}
</style>