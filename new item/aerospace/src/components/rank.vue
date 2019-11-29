<template>
  <div>
    <div class="recommend">新词发现</div>
    <el-card class="box-card">
      <div class="text item" style="padding-top:0px">
        <ul class="jingzhun" style="margin-top:10px">
          <li v-for="(item,index) in newdate" :key="index" style="width:180px;height:30px;font-size:16px">
            <div style="">
              <el-button
                type="text"
                @click="gettimedate($event);centerDialogVisible1 = true"
                style="font-size:14px"
                :data-id="item.timeType"
                :id="item.time"
              >{{item.time}}新词</el-button>
              <el-dialog title="新词发现" :visible.sync="centerDialogVisible1" width="30%" center>
                <h2>{{neologism.time}}发现的新词有：</h2>
                <div class="data" style="padding:20px">
                  <span class="dataspan" v-for="(item,index) in neologism.data" :key="index">{{item}}</span>
                </div>
              </el-dialog>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
    <div class="recommend">知识图谱</div>
    <el-card class="box-card"></el-card>
    <div class="recommend">实时大数据分析</div>
    <el-card class="box-card">
      <div
        v-for="(item,index) in rankrealData"
        :key="index"
        class="text item"
        :data-id="item.con_title"
        @click="submitrank($event)"
        style="cursor:pointer"
      >{{item.title}}</div>
    </el-card>
    <div class="recommend">历史大数据分析</div>
    <el-card class="box-card">
      <div v-for="(item,index) in rankhistoryData" :key="index" class="kuai1">
        <h3>{{item.name}}</h3>
        <div
          v-for="(item1,index) in item.data"
          :key="index"
          class="text item"
          style="cursor:pointer"
          @click="submitrank1($event)"
          :data-id="item1.con_title"
          :id="item1.con_method"
        >{{item1.title}}</div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible1: false,
      timeurl:"",
      newdate:[
        {
          time:"本日",
          timeType:"day"
        },
        {
          time:"本周",
          timeType:"week"
        },
        {
          time:"本月",
          timeType:"month"
        },
      ],
      neologism:
        {
        data:['wowowowow','wowowowow','wowowowow','wowowowow','wowowowow','wowowowow','wowowowow','wowowowow',]
        }
        ,
      rankrealData: [
        {
          title: "按访问区域",
          con_title: "ipRank"
        },
        {
          title: "按访问请求状态",
          con_title: "stateRank"
        },
        {
          title: "按搜索来源",
          con_title: "fromRank"
        },
        {
          title: "按页面点击",
          con_title: "contentRank"
        }
      ],
      rankhistoryData: [
        {
          name: "按日排序",
          data: [
            {
              title: "按访问区域",
              con_title: "ipRank",
              con_method: "day"
            },
            {
              title: "按访问请求状态",
              con_title: "stateRank",
              con_method: "day"
            },
            {
              title: "按搜索来源",
              con_title: "fromRank",
              con_method: "day"
            },
            {
              title: "按页面点击",
              con_title: "contentRank",
              con_method: "day"
            }
          ]
        },
        {
          name: "按周排序",
          data: [
            {
              title: "按访问区域",
              con_title: "ipRank",
              con_method: "week"
            },
            {
              title: "按访问请求状态",
              con_title: "stateRank",
              con_method: "week"
            },
            {
              title: "按搜索来源",
              con_title: "fromRank",
              con_method: "week"
            },
            {
              title: "按页面点击",
              con_title: "contentRank",
              con_method: "week"
            }
          ]
        },
        {
          name: "按月排序",
          data: [
            {
              title: "按访问区域",
              con_title: "ipRank",
              con_method: "month"
            },
            {
              title: "按访问请求状态",
              con_title: "stateRank",
              con_method: "month"
            },
            {
              title: "按搜索来源",
              con_title: "fromRank",
              con_method: "month"
            },
            {
              title: "按页面点击",
              con_title: "contentRank",
              con_method: "month"
            }
          ]
        }
      ]
    };
  },
  methods: {
    submitrank(event) {
      let target = event.target || window.event.srcElement;
      let routeUrl1 = this.$router.resolve({
        path: "/list/ranklist",
        query: {
          con_title: target.getAttribute("data-id"),
          con_method: "realTime"
        }
      });
      window.open(routeUrl1.href, "_blank");
    },
    submitrank1(event) {
      let target = event.target || window.event.srcElement;
      let routeUrl2 = this.$router.resolve({
        path: "/list/ranklist",
        query: {
          con_title: target.getAttribute("data-id"),
          con_method: target.getAttribute("id")
        }
      });
      window.open(routeUrl2.href, "_blank");
    },
    gettimedate(event){
      let target = event.currentTarget 
      let timeType = target.getAttribute("data-id")
      let time = target.getAttribute("id")
      let data1={time:time,recommendType:timeType};
       this.$ajax
          .post(this.timeurl, data1)
          .then(res => {
            this.neologism = res.data
            console.log(neologism)
          })
          .catch(res => {
            console.log(res);
          });
    }
  }
};
</script>
<style>
.box-card {
  border-radius: 5px;
}
.text {
  font-size: 14px;
}
.el-card__body {
  padding-top: 10px;
}
.item {
  padding: 12px 0 0;
}
.recommend {
  background: #e3ecfd;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  font-weight: 900;
  border: 1px solid;
  border-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 25px;
  font-size: 18px;
  color: #333;
}
.r-list {
  margin: 15px auto 0px;
}
.r-list li {
  margin: 10px auto;
}
.item:hover {
  color: #409eff !important;
  cursor: pointer !important;
}
.text a:hover {
  text-decoration: none;
}
.text a {
  color: #053357 !important;
  line-height: 15px;
}
.kuai1 {
  margin: 20px 0 30px;
}
.kuai1 h3 {
  font-size: 18px;
  font-weight: 900;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  color: rgb(102, 102, 102);
  margin-bottom: 10px;
}
.item {
  font-family: Calibri, "\5B8B\4F53";
  letter-spacing: 1px;
}
.dataspan{
  font-size: 14px;
display: inline-block;
margin-right: 5px;
margin-bottom: 10px;
background: #F1F1F1;
text-decoration: none;
color: #333;
padding: 5px;
}
</style>