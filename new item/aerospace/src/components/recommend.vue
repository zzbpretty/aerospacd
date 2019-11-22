<template>
  <div>
    <!-- 精准推荐 -->
    <div class="recommend">精准推荐</div>
    <el-card class="box-card">
      <div  class="text item">
        <h4 style="border-bottom:1px solid black;padding-bottom:15px;color:#666;padding-left:10px">用户名:</h4>
        <ul class="jingzhun" style="margin-top:10px">
         <li v-for="(item,index) in frontuser" :key="index" style="width:180px;height:40px">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="float:left"></el-avatar>
            <div style="float:left;margin-left:20px;">
              <el-button type="text" @click="centerDialogVisible = true;getusername($event)" style="font-size:14px" :data-id='item.username' :id='item.userid'>{{item.username}}</el-button> 
              <el-dialog
                 title="用户信息"
                 :visible.sync="centerDialogVisible"
                 width="30%"
                 center v-for="(item1,index) in afteruser" :key='index'>
                 <div style="margin:16px 0">
                   尊敬的<span style="color:red">{{item1.username}}</span>用户，您好!
                 </div>
                 <h2>根据您近期的搜索记录，为您精准推荐：</h2>
                 <div class="data" style="padding:20px">
                 <table style="table-layout: fixed;border-collapse: collapse;border-spacing: 0;">
                   <thead>
                      <tr class="thead_tr">
                         <th class="th-01" style="width:100px;text-align:center">序号</th>
                         <th class="th-02" style="width:380px;text-align:left">关键词</th>
                      </tr>
                   </thead>
                  <tbody>
                    <tr v-for="(item2,index) in item1.value" :key='index'>
                      <td style="width:100px;text-align:center;color: #f26d5f;font-size:16px">{{index}}</td>
                      <td style="width:380px;text-align:left;color:#0078b6;font-size:16px"  @click="tolist($event)" :data-id='item2'>{{item2}}</td>
                    </tr>
                  </tbody>
                 </table>
                 </div>
                 </el-dialog>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
    <!-- 为你推荐 -->
    <div class="recommend">为你推荐</div>
    <el-card class="box-card">
      <div v-for="(item,index) in recommendData" :key="index" class="text item">
        <h4 style="border-bottom:1px solid black;padding-bottom:15px;color:#666;padding-left:10px">{{ item.title }}</h4>
        <ul class="r-list">
         <li v-for="(item1,index) in item.content" :key="index"> <router-link :to=item1.to target='_blank'>{{item1.list}}</router-link></li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      frontuser:[{
             username:'小明',
             userid:"110000",
            },{
             username:'安东',
             userid:"310000",
            },{
             username:'Alice',
             userid:"440000",
            },{
             username:'Jack',
             userid:"320000",
            },{
             username:'小李',
             userid:"330000",
            },
               ],
      afteruser:[{
             username:'小明',
             userid:"110000",
             value:["aa",'bb']
            }],
      idurl:'',
      centerDialogVisible: false,
      recommendData: [
        {
          title: "航天12院",
          content: [            
            {list: "研究院简介",to:"suo1"},
            {list: "历史沿革",to:"suo2"},
            {list: "组织机构",to:"suo3"}
          ]
        },
         {
          title: "钱学森智库",
          content: [            
            {list: "钱学森智库为我国软实力的提升提供素材和依据",to:"ku1"},
            {list: "站在更高起点谋划硬科技未来",to:"ku2"},
            {list: "钱学森论坛首次落地西安 将举行“钱学森智库专刊”全球发布仪式",to:"ku3"}
          ]
        },
         {
          title: "情报-美",
          content: [            
            {list: "CIA’s Mi-17 Helicopter Comes Home",to:"mei1"},
            {list: "A Series of Spacewalks Four Years in the Making Will Attempt to Revive a Scientific Experiment",to:"mei2"},
            {list: "Orson John: A NASA Pathways Student Becomes a Reliability Engineer",to:"mei3"}
          ]
        },
         {
          title: "情报-俄",
          content: [            
            {list: "俄罗斯将恢复发射货运飞船",to:"e1"},
            {list: "俄罗斯推迟发射格洛纳斯导航卫星",to:"e2"},
            {list: "俄进步M-12M货运飞船发射失败未能进入预定轨道",to:"e3"}
          ]
        },
         {
          title: "情报-欧洲",
          content: [            
            {list: "European boost to the all-in-one Bartolomeo service for the Space Station",to:"ou1"},
            {list: "Apollo astronaut champions Hera for planetary defence",to:"ou2"},
            {list: "A decade probing the Sun",to:"ou3"}
          ]
        },
      ]
    };
  },
  created(){
   
  },
  methods:{
      tolist(event) {
      let target = event.target || window.event.srcElement;
      let abstracthref= this.$router.resolve({
        path: "/list",
        query: { keyword: target.getAttribute("data-id"),label:"全文",value:"all" }
      });
      window.open(abstracthref.href,'_blank')
    },
    getusername(event){
      // let target = event.target || window.event.srcElement;
      // let name = target.getAttribute("data-id")
      // let id = target.getAttribute("id")

      // let data1={username:name,userid:id};
      //  this.$ajax
      //     .post(this.idurl, data1)
      //     .then(res => {
      //       this.afteruser = res.data
      //       // console.log(res.data)
      //     })
      //     .catch(res => {
      //       console.log(res);
      //     });
    }
  }
};
</script>
<style >
.box-card {
  border-radius: 5px;
  
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0 0;
}
.r-list{
  margin:15px auto 0px;
}
.r-list li{
    margin: 10px auto;
}
.text a:hover{
    color: #409eff !important;
    cursor: pointer !important;
}
.text a:hover{
    text-decoration: none !important;
}
.text a{
    color: #053357 !important;
    line-height: 15px
}
.text h4{
  font-size: 120%;
  font-family: "Microsoft yahei";
}
.r-list a{
  font-family: Calibri,"宋体";
  letter-spacing: 1px;
}
.r-list li{
  /* background-color: #e6efff; */
  border-radius: 5px;
  /* height: 20px; */
  line-height: 20px;
  padding-left: 15px ;
  padding-top: 5px;
  background: url("../assets/img/listicon.gif") no-repeat scroll -2px 2px transparent;
}
.data th {
    line-height: 30px;
    border-bottom: solid 1px #f1eeee;
    color: #999;
}
.data tr {
    line-height: 30px;
    border-bottom: solid 1px #f2f2f5;
    color: #999;
}
</style>