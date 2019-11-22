<template>
  <div>
    <!-- 精准推荐 -->
    <div class="recommend">精准推荐</div>
    <el-card class="box-card">
      <div  class="text item">
        <h4 style="border-bottom:1px solid black;padding-bottom:15px;color:#666;padding-left:10px">用户名:</h4>
        <ul class="jingzhun">
         <li v-for="(item,index) in user" :key="index" style="height:40px;line-heitht:40px">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <div style="float:right;margin-right:110px;margin-top:5px">
              <el-button type="text" @click="centerDialogVisible = true">{{item.username}}</el-button> 
              <el-dialog
                 title="用户信息"
                 :visible.sync="centerDialogVisible"
                 width="30%"
                 center>
                 <div style="margin:16px 0">
                   尊敬的<span>{{item.username}}</span>用户，您好!
                 </div>
                 <h2>根据您近期的搜索记录，为您精准推荐：</h2>
                 <div v-for="(item1,index) in item.value" :key='index' style="margin:8px 0;color:#8dc271" @click="tolist" :data-id='item1'>
                   &emsp;&emsp;{{item1}}
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
      user:[{username:'11',
             userid:"",
             value:[
               "大数据",
               "区块链"
               ]}],
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
    // let data1={};
    // this.$ajax
    //       .post(this.idurl, data1)
    //       .then(res => {
    //         this.user = res.data
    //         // console.log(res.data)
    //       })
    //       .catch(res => {
    //         console.log(res);
    //       });
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

</style>