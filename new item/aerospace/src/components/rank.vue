<template>
  <div>
    <div class="recommend">新词发现</div>
    <el-card class="box-card">
      <div class="text item" style="padding-top:0px">
        <ul class="jingzhun" style="margin-top:10px">
          <li
            v-for="(item,index) in newdate"
            :key="index"
            style="width:180px;height:30px;font-size:16px"
          >
            <div style>
              <el-button
                type="text"
                @click="gettimedate($event);centerDialogVisible1 = true"
                style="font-size:14px"
                :data-id="item.timeType"
                :id="item.time"
              >{{item.time}}新词</el-button>
              <el-dialog title="新词发现" :visible.sync="centerDialogVisible1" width="30%" center>
                <h2>{{neologism.timeName}}发现的新词有：</h2>
                <!-- <div class="data" style="padding:20px">
                  <span class="dataspan" v-html="item.newEntity" v-for="(item,index) in neologism.newWord" :key="index">{{item.newEntity}}</span>
                </div>-->
                <div class="xinci" style="padding:20px">
                  <table>
                    <thead>
                      <tr style="margin:5px 0">
                        <th class="th-01" style="width:200px;text-align:center">时间</th>
                        <th class="th-02" style="width:300px;text-align:left">新词</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style v-for="(item,index) in neologism.newWord" :key="index">
                        <td
                          style="width:200px;text-align:center;color: #f26d5f;font-size:16px"
                        >{{item.conTime}}</td>
                        <td
                          style="width:300px;text-align:left;color:#0078b6;font-size:16px"
                          v-html="item.newEntity"
                        >{{item.newEntity}}</td>
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
    <!-- 智能分析 -->
    <div class="recommend">智能分析</div>
    <el-card class="box-card">
      <div class="text item" style="padding-top:0px">
        <ul class="jingzhun" style="margin-top:10px">
          <li
            v-for="(item,index) in analyze"
            :key="index"
            style="width:180px;height:30px;font-size:16px"
          >
            <div style>
              <el-button
                type="text"
                @click="analyze1($event);centerDialogVisible2 = true"
                style="font-size:14px"
                :data-id="item.realname"
                :id="item.sendname"
              >{{item.realname}}</el-button>
              <el-dialog title="智能分析" :visible.sync="centerDialogVisible2" width="40%" center>
                <div style="text-align:center">
                  <h2 style="font-family:'PingFang SC';font-size:20px">{{analyzeData[0].realname}}</h2>
                </div>
                <div style="width:90%;margin:0 auto;margin-top:30px;margin-bottom:20px">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 8}"
                    placeholder="请输入一段内容"
                    v-model="textarea2"
                    style="border:none !important"
                  >
                  </el-input>
                  <el-button type="primary" style="margin-top:5px;" @click="realAnalyze">分析</el-button>
                </div>
                <div class="analyzeData" style="width:90%;margin:0 auto;min-height:120px;max-height:300px;overflow-y:scroll;box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);" v-html="realAnalyze1.segmentation">
                   {{realAnalyze1.segmentation}}
                </div>
              </el-dialog>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      textarea2:"",
      timeurl: "http://192.168.100.41:8772/searchPage/newWord",
      newdate: [
        {
          time: "本日",
          timeType: "day"
        },
        {
          time: "本周",
          timeType: "week"
        },
        {
          time: "本月",
          timeType: "month"
        }
      ],
      neologism: {
        data: []
      },
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
      ],
      analyze: [
        {
          realname: "分词抽取",
          sendname: "abstract"
        },
        {
          realname: "关键词抽取",
          sendname: "keyword"
        },
        {
          realname: "摘要抽取",
          sendname: "abstract"
        },
        {
          realname: "实体抽取",
          sendname: "entity"
        },
      ],
      analyzeData: [
        {
          realname: "",
          sendname: ""
        }
      ],
      realAnalyze1:""
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
    gettimedate(event) {
      let target = event.currentTarget;
      let timeType = target.getAttribute("data-id");
      let time = target.getAttribute("id");
      let data1 = {
        userName: "小明",
        userID: 110000,
        timeName: time,
        timeType: timeType
      };
      this.$ajax
        .post(this.timeurl, data1)
        .then(res => {
          this.neologism = res.data;
        })
        .catch(res => {
          console.log(res);
        });
    },
    analyze1(event) {
      let target = event.currentTarget;
      let realname = target.getAttribute("data-id");
      let sendname = target.getAttribute("id");
      this.analyzeData[0].realname = realname;
      this.analyzeData[0].sendname = sendname;
    },
    realAnalyze(){
      let data1 = {text:this.textarea2}
      this.$ajax
        .post('http://192.168.100.41:80/ds/segmentation', data1)
        .then(res => {
          this.realAnalyze1 = res.data;
          console.log(this.realAnalyze1)
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

.dataspan span {
  font-size: 14px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 10px;
  background: #f1f1f1;
  text-decoration: none;
  color: #333;
  padding: 5px;
}
.xinci th {
  line-height: 30px;
  border-bottom: solid 1px #f1eeee;
  color: #999;
}
.xinci tr {
  line-height: 30px;
  border-bottom: solid 1px #f2f2f5;
  color: #999;
}
.xinci tr td span {
  font-size: 14px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  background: #f1f1f1;
  text-decoration: none;
  color: #333;
  padding: 3px;
  margin-top: 5px;
}
.analyzeData span:nth-child(odd){
  margin:0 5px;
  color:red;
}
.analyzeData span:nth-child(even){
  margin:0 3px;
  color:blue;
}
</style>