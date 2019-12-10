<template>
  <div>
    <!-- 智能分析 -->
    <div class="recommend">
      <el-button type="text" @click="analyze1;centerDialogVisible2 = true">智能分析</el-button>
    </div>
    <el-dialog title="智能分析" :visible.sync="centerDialogVisible2" width="40%" center>
      <div style="width:92%;margin:0 auto;margin-top:30px;margin-bottom:25px;text-align:right">
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8}"
          placeholder="请输入一段内容"
          v-model="textarea2"
          style="border:none !important"
        ></el-input>

        <ul v-for="(item,index) in analyze" :key="index" style="float:left;margin:5px auto 20px">
          <li style="float: left;margin-left:26px">
            <el-button
              type="primary"
              style="margin-top:10px;"
              :data-id="item.sendname"
              @click="realAnalyze($event)"
            >{{item.realname}}</el-button>
          </li>
        </ul>
      </div>
      <div
        class="analyzeData"
        style="width:90%;margin:0 auto;min-height:120px;max-height:300px;overflow-y:scroll;box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);"
      >
        <span
          v-for="(item,index) in realAnalyzeData.segmentation"
          v-html="item"
          :key="index"
          v-show="(analyzeData_sendname == 'segmentation')"
        >{{item}}</span>
        <span
          v-for="(item,index) in realAnalyzeData.keyWord"
          v-html="item"
          :key="index"
          v-show="(analyzeData_sendname == 'keyWord')"
        >{{item}}</span>
        <span
          v-for="(item,index) in realAnalyzeData.entity"
          v-html="item"
          :key="index"
          v-show="(analyzeData_sendname == 'entity')"
        >{{item}}</span>
        <ul class="keysentence" v-if="analyzeData_sendname == 'keySentence'">
          <li
            v-for="(item,index) in realAnalyzeData.keySentence"
            v-html="item"
            :key="index"
          >{{item}}</li>
        </ul>
        <ul class="keysentence" v-if="analyzeData_sendname == 'machineTranslation'">
          <li
            v-for="(item,index) in realAnalyzeData.machineTranslation"
            v-html="item"
            :key="index"
          >{{item}}</li>
        </ul>
      </div>
    </el-dialog>

    <!-- 知识图谱 -->
    <div class="recommend" @click="toKnowledge" style="cursor:pointer">
      <span>知识图谱</span>
    </div>
    <!-- 用户画像 -->
    <div class="recommend">
      <el-button type="text" @click="centerDialogVisible3 = true;getbingtu()">用户画像</el-button>
    </div>
    <div
      v-show="centerDialogVisible3"
      @click="centerDialogVisible3 = false"
      style="position:fixed;width:100%;height:100%;background:#000;left:0;top:0;z-index:2000;opacity:0.5"
    ></div>
    <div
      v-show="centerDialogVisible3"
      style="position:fixed;width:90%;min-height:65%;background:#fff;left:50%;top:15%;margin-left:-45%;z-index:2001;border-radius:10px"
    >
      <div
        class="hauxiang-head"
        style="position:relative;padding: 20px 20px 10px;text-align: center;padding-bottom: 15px;background: #4286ec;width:100%;height:60px;box-sizing:border-box;border-top-left-radius: 10px;border-top-right-radius: 10px;"
      >
        <span
          style="font-family:'Microsoft YaHei','\5FAE\8F6F\96C5\9ED1';color: #ffffff;font-weight: 800;font-size: 20px;"
        >用户画像</span>
        <i
          class="el-dialog__close el-icon el-icon-close"
          style="position:absolute;right:30px;top:42%;cursor:pointer;font-size:16px"
          @click="centerDialogVisible3 = false"
        ></i>
      </div>
      <div class="huaxiang" style="padding:10px 20px">
        <div class="huaxiangitem" style="width:297px;height:600px"></div>
        <div class="huaxiangitem" style="width:297px;height:600px"></div>
        <div class="huaxiangitem" style="width:297px;height:600px"></div>
        <div class="huaxiangitem" style="width:297px;height:600px"></div>
        <div class="huaxiangitem" style="width:297px;height:600px"></div>
      </div>
    </div>
    <!-- 精准推荐 -->
    <div class="recommend">
      <el-button type="text" @click="centerDialogVisible = true">精准推荐</el-button>
    </div>
    <el-dialog title="精准推荐" :visible.sync="centerDialogVisible" width="45%" center>
      <div class="data" style="padding:20px">
        <table style="table-layout: fixed;border-collapse: collapse;border-spacing: 0;">
          <thead>
            <tr class="thead_tr">
              <th class="th-01" style="width:50px;text-align:center">序号</th>
              <th class="th-02" style="width:100px;text-align:center">姓名</th>
              <th class="th-03" style="width:400px;text-align:center">常搜关键词</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tbody_tr" v-for="(item,index) in afteruser" :key="index">
              <td style="width:100px;text-align:center;color: #f26d5f;font-size:16px">{{index+1}}</td>
              <td
                style="width:120px;text-align:center;color:#0078b6;font-size:16px"
              >{{item.userName}}</td>
              <td style="width:520px;text-align:left;color:#0078b6;font-size:16px">
                <span
                  v-for="(item1,index) in item.recommendResult"
                  :key="index"
                  :data-id="item1.value"
                  @click="topre_rec($event)"
                  style="cursor:pointer"
                >{{item1.value}}&ensp;</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-dialog>
    <!-- 新词发现 -->
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
              <el-dialog title="新词发现" :visible.sync="centerDialogVisible1" width="40%" center>
                <h2
                  v-if="(neologism.timeType == 'day'||neologism.timeType == 'week'||neologism.timeType == 'month')"
                >{{neologism.timeName}}发现的新词有：</h2>
                <!-- <div class="data" style="padding:20px">
                  <span class="dataspan" v-html="item.newEntity" v-for="(item,index) in neologism.newWord" :key="index">{{item.newEntity}}</span>
                </div>-->
                <div
                  class="xinci"
                  style="padding:20px"
                  v-if="(neologism.timeType == 'day'||neologism.timeType == 'week'||neologism.timeType == 'month')"
                >
                  <table>
                    <thead>
                      <tr style="margin:5px 0">
                        <th class="th-01" style="width:200px;text-align:center">时间</th>
                        <th class="th-02" style="width:485px;text-align:left">新词</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style v-for="(item,index) in neologism.newWord" :key="index">
                        <td
                          style="width:200px;text-align:center;color: #f26d5f;font-size:16px"
                        >{{item.conTime}}</td>
                        <td style="width:300px;text-align:left;color:#0078b6;font-size:16px">
                          <span
                            v-for="(item1,index) in item.newEntity"
                            :key="index"
                            v-html="item1"
                          >{{item1}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- 自定义 -->
                <!-- 日期 -->
                <el-date-picker
                  v-if="!(neologism.timeType == 'day'||neologism.timeType == 'week'||neologism.timeType == 'month')"
                  style="margin-left:50px"
                  v-model="value2"
                  type="daterange"
                  align="right"
                  value-format="yyyy-MM-dd"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
                <el-button
                  type="primary"
                  v-if="!(neologism.timeType == 'day'||neologism.timeType == 'week'||neologism.timeType == 'month')"
                  plain
                  style="margin-left:150px"
                  @click="getzdyword()"
                >搜索</el-button>

                <div
                  class="xinci"
                  style="padding:20px"
                  v-if="!(neologism.timeType == 'day'||neologism.timeType == 'week'||neologism.timeType == 'month')"
                >
                  <table>
                    <thead>
                      <tr style="margin:5px 0">
                        <th class="th-01" style="width:200px;text-align:center">时间</th>
                        <th class="th-02" style="width:485px;text-align:left">新词</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style v-for="(item,index) in neologism.newWord" :key="index">
                        <td
                          style="width:200px;text-align:center;color: #f26d5f;font-size:16px"
                        >{{item.conTime}}</td>
                        <td style="width:300px;text-align:left;color:#0078b6;font-size:16px">
                          <span
                            v-for="(item1,index) in item.newEntity"
                            :key="index"
                            v-html="item1"
                          >{{item1}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <el-pagination
                  style="margin:0 auto"
                  v-if="neologism.timeType == 'month' ||neologism.timeType == 'part' "
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage5"
                  :page-sizes="[5, 10, 20]"
                  :page-size="5"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="count"
                ></el-pagination>
              </el-dialog>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
    <!-- 实时大数据分析 -->
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
    <!-- 历史大数据分析 -->
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
import echarts from "echarts";
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  data() {
    return {
      // 时间选择器
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      //时间选择器的内容
      value2: "",
      //智能分析输入框的内容
      textarea2: "",
      //当前第1页
      currentPage5: 0,
      //每页多少条数据
      size: 5,
      //总共多少条数据
      count: 0,
      //精准推荐的用户信息
      frontuser: [
        {
          userName: "小明",
          userId: "110000"
        },
        {
          userName: "安东",
          userId: "310000"
        },
        {
          userName: "Alice",
          userId: "440000"
        },
        {
          userName: "Jack",
          userId: "320000"
        },
        {
          userName: "小李",
          userId: "330000"
        }
      ],
      afteruser: [], //精准推荐后端返回的数据
      bingtu0: "", //用户画像的饼图实例0
      bingtu1: "", //用户画像的饼图实例1
      bingtu2: "", //用户画像的饼图实例2
      bingtu3: "", //用户画像的饼图实例3
      bingtu4: "", //用户画像的饼图实例4
      centerDialogVisible: false, //提示框默认隐藏
      centerDialogVisible1: false, //提示框默认隐藏
      centerDialogVisible2: false, //提示框默认隐藏
      centerDialogVisible3: false, //提示框默认隐藏
      //精准推荐的后端接口
      idurl: "http://192.168.100.41:8772/searchPage/recommendResult",
      //新词发现的后端接口
      timeurl: "http://192.168.100.41:8772/searchPage/newWord",
      //智能分析的后端接口关键词
      analyzeurl: "",
      //新词发现数据
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
        },
        {
          time: "自定义时间段",
          timeType: "part"
        }
      ],
      //新词发现后端返回的数据
      neologism: [],
      //实时大数据分析数据
      rankrealData: [
        {
          title: "区域热点分析",
          con_title: "ipRank"
        },
        {
          title: "状态热点分析",
          con_title: "stateRank"
        },
        {
          title: "来源热点分析",
          con_title: "fromRank"
        },
        {
          title: "内容热点分析",
          con_title: "contentRank"
        }
      ],
      //历史大数据分析数据
      rankhistoryData: [
        {
          name: "日热点分析",
          data: [
            {
              title: "区域热点分析",
              con_title: "ipRank",
              con_method: "day"
            },
            {
              title: "状态热点分析",
              con_title: "stateRank",
              con_method: "day"
            },
            {
              title: "来源热点分析",
              con_title: "fromRank",
              con_method: "day"
            },
            {
              title: "内容热点分析",
              con_title: "contentRank",
              con_method: "day"
            }
          ]
        },
        {
          name: "周热点分析",
          data: [
            {
              title: "区域热点分析",
              con_title: "ipRank",
              con_method: "week"
            },
            {
              title: "状态热点分析",
              con_title: "stateRank",
              con_method: "week"
            },
            {
              title: "来源热点分析",
              con_title: "fromRank",
              con_method: "week"
            },
            {
              title: "内容热点分析",
              con_title: "contentRank",
              con_method: "week"
            }
          ]
        },
        {
          name: "月热点分析",
          data: [
            {
              title: "区域热点分析",
              con_title: "ipRank",
              con_method: "month"
            },
            {
              title: "状态热点分析",
              con_title: "stateRank",
              con_method: "month"
            },
            {
              title: "来源热点分析",
              con_title: "fromRank",
              con_method: "month"
            },
            {
              title: "内容热点分析",
              con_title: "contentRank",
              con_method: "month"
            }
          ]
        }
      ],
      //智能分析数据
      analyze: [
        {
          realname: "分词抽取",
          sendname: "segmentation"
        },
        {
          realname: "关键词抽取",
          sendname: "keyWord"
        },
        {
          realname: "摘要抽取",
          sendname: "keySentence"
        },
        {
          realname: "实体抽取",
          sendname: "entity"
        },
        {
          realname: "智能翻译",
          sendname: "machineTranslation"
        }
      ],
      //绑定选项卡与提示框的realname
      analyzeData_realname: "",
      //绑定选项卡与提示框的sendname
      analyzeData_sendname: "",
      //智能分析返回的数据
      realAnalyzeData: []
    };
  },
  // 实例创建后执行的方法
  created() {
    let data1 = { userName: "小明", userId: 110000, recommendType: "realTime" };
    let data2 = { userName: "安东", userId: 310000, recommendType: "realTime" };
    let data3 = {
      userName: "Alice",
      userId: 440000,
      recommendType: "realTime"
    };
    let data4 = { userName: "Jack", userId: 320000, recommendType: "realTime" };
    let data5 = { userName: "小李", userId: 330000, recommendType: "realTime" };
    this.$ajax
      .post(this.idurl, data1)
      .then(res => {
        this.afteruser.push(res.data);
      })
      .catch(res => {
        console.log(res);
      });
    this.$ajax
      .post(this.idurl, data2)
      .then(res => {
        this.afteruser.push(res.data);
      })
      .catch(res => {
        console.log(res);
      });
    this.$ajax
      .post(this.idurl, data3)
      .then(res => {
        this.afteruser.push(res.data);
      })
      .catch(res => {
        console.log(res);
      });
    this.$ajax
      .post(this.idurl, data4)
      .then(res => {
        this.afteruser.push(res.data);
      })
      .catch(res => {
        console.log(res);
      });
    this.$ajax
      .post(this.idurl, data5)
      .then(res => {
        this.afteruser.push(res.data);
        console.log(this.afteruser);
      })
      .catch(res => {
        console.log(res);
      });
  },
  // 定义的方法
  methods: {
    // 跳转到知识图谱页面
    toKnowledge() {
      window.open("http://192.168.100.37:8002", "_blank");
    },
    //自定义时间段新词搜索
    getzdyword() {
      let data = {
        userName: "小明",
        userID: 110000,
        timeName: "time",
        timeType: "part",
        startTime: this.value2[0],
        endTime: this.value2[1],
        limit: "5",
        offset: "0"
      };

      this.$ajax
        .post(this.timeurl, data)
        .then(res => {
          this.neologism = res.data;
          this.count = res.data.count;
          //  console.log(this.neologism)
        })
        .catch(res => {
          console.log(res);
        });
    },
    //改变每页显示多少条
    handleSizeChange(val) {
      let data = {
        userName: "小明",
        userID: 110000,
        timeName: "time",
        timeType: this.neologism.timeType,
        startTime: this.value2[0],
        endTime: this.value2[1],
        limit: val,
        offset: 0
      };
      //传递当前每页多少条
      this.size = val;

      this.$ajax
        .post(this.timeurl, data)
        .then(res => {
          this.neologism = res.data;
          this.count = res.data.count;
          //  console.log(this.neologism)
        })
        .catch(res => {
          console.log(res);
        });
    },
    //改变当前多少页
    handleCurrentChange(val) {
      let data = {
        userName: "小明",
        userID: 110000,
        timeName: "time",
        timeType: this.neologism.timeType,
        startTime: this.value2[0],
        endTime: this.value2[1],
        limit: this.size,
        offset: (val - 1) * this.size
      };

      this.$ajax
        .post(this.timeurl, data)
        .then(res => {
          this.neologism = res.data;
          this.count = res.data.count;
          // console.log(this.neologism)
        })
        .catch(res => {
          console.log(res);
        });
    },
    //将实时大数据分析的点击元素的信息传给ranklist
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
    //将历史大数据分析的点击元素的信息传给ranklist
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
    //获取新词发现具体时间具体数据
    gettimedate(event) {
      this.neologism = [];
      let target = event.currentTarget;
      let timeType = target.getAttribute("data-id");
      let time = target.getAttribute("id");
      let data1 = {
        userName: "小明",
        userID: 110000,
        timeName: time,
        timeType: timeType,
        startTime: 1,
        endTime: 1,
        offset: 0,
        limit: 5
      };

      this.$ajax
        .post(this.timeurl, data1)
        .then(res => {
          this.neologism = res.data;
          this.count = res.data.count;
          // console.log(this.neologism)
        })
        .catch(res => {
          console.log(res);
        });
    },
    //传递智能分析选项卡与提示框的关系(清空输入框内容)
    analyze1() {
      this.textarea2 = "";
      this.realAnalyzeData = [];
    },
    //获取智能分析数据
    realAnalyze(event) {
      let target = event.currentTarget;
      this.analyzeData_sendname = target.getAttribute("data-id");

      let data1 = { text: this.textarea2 };
      this.analyzeurl = "";

      // console.log(this.analyzeData_sendname)
      if (this.analyzeData_sendname == "segmentation") {
        this.analyzeurl = "segmentation";
      } else if (this.analyzeData_sendname == "keyWord") {
        this.analyzeurl = "keyWord";
      } else if (this.analyzeData_sendname == "keySentence") {
        this.analyzeurl = "keySentence";
      } else if (this.analyzeData_sendname == "entity") {
        this.analyzeurl = "entity";
      } else {
        this.analyzeurl = "machineTranslation";
      }
      // console.log(this.analyzeurl)
      this.$ajax
        .post("http://192.168.100.41:80/ds/" + this.analyzeurl, data1)
        .then(res => {
          this.realAnalyzeData = res.data;
          // console.log(this.realAnalyzeData)
        })
        .catch(res => {
          console.log(res);
        });
    },
    //将精准推荐信息参数传递到precise_recommend页
    topre_rec(event) {
      let target = event.target || window.event.srcElement;
      let abstracthref = this.$router.resolve({
        path: "/list/precise_recommend",
        query: {
          keyword: target.getAttribute("data-id"),
          label: "全文",
          value: "all"
        }
      });
      window.open(abstracthref.href, "_blank");
    },
    // 画饼图
    getbingtu() {
      // 基于准备好的dom，初始化echarts实例
      this.bingtu0 = echarts.init(
        document.getElementsByClassName("huaxiangitem")[0]
      );
      this.bingtu1 = echarts.init(
        document.getElementsByClassName("huaxiangitem")[1]
      );
      this.bingtu2 = echarts.init(
        document.getElementsByClassName("huaxiangitem")[2]
      );
      this.bingtu3 = echarts.init(
        document.getElementsByClassName("huaxiangitem")[3]
      );
      this.bingtu4 = echarts.init(
        document.getElementsByClassName("huaxiangitem")[4]
      );

      // 绘制图表
      this.chartOption0 = {
        title: {
          text: this.afteruser[0].userName, //主标题
          subtext: "", //副标题
          x: "center", //x轴方向对齐方式
          left: 0,
          top: 25
        },
        tooltip: {
          trigger: "item",
          formatter(params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            let name, value;
            if (params.data) {
              name = params.data.name;
              value = params.data.value;
            } else {
              // 为了防止没有定义数据的时候报错写的
              name = 0;
              value = 0;
            }

            let htmlStr = `
               <div style='font-size:18px;margin-bottom:10px;'> ${name}</div>
               <p style='text-align:left;margin-top:-10px;'>
               搜索次数：${value}<br/>
               </p>`;

            return htmlStr;
          }
        },
        legend: {
          orient: "vertical",
          right: "right",
          width: "200px",
          bottom: "50px",
          data: [],
          itemWidth: 24, // 设置图例图形的宽
          formatter: name => {
            return name;
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0%", "70%"],
            center: ["40%", "30%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 50,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}次"
              }
            }
          }
        ]
      };

      for (let i = 0; i < this.afteruser[0].recommendResult.length; i++) {
        this.chartOption0.series[0].data.push({
          name: this.afteruser[0].recommendResult[i].value,
          value: this.afteruser[0].recommendResult[i].count
        });
        this.chartOption0.legend.data.push(
          this.afteruser[0].recommendResult[i].value
        );
      }

      // 绘制图表
      this.chartOption1 = {
        title: {
          text: this.afteruser[1].userName, //主标题
          subtext: "", //副标题
          x: "center", //x轴方向对齐方式
          left: 0,
          top: 25
        },
        tooltip: {
          trigger: "item",
          formatter(params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            let name, value;
            if (params.data) {
              name = params.data.name;
              value = params.data.value;
            } else {
              // 为了防止没有定义数据的时候报错写的
              name = 0;
              value = 0;
            }

            let htmlStr = `
               <div style='font-size:18px;margin-bottom:10px;'> ${name}</div>
               <p style='text-align:left;margin-top:-10px;'>
               搜索次数：${value}<br/>
               </p>`;

            return htmlStr;
          }
        },
        legend: {
          orient: "vertical",
          right: "right",
          width: "200px",
          bottom: "50px",
          data: [],
          itemWidth: 24, // 设置图例图形的宽
          formatter: name => {
            return name;
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0%", "70%"],
            center: ["40%", "30%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 50,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}次"
              }
            }
          }
        ]
      };

      for (let i = 0; i < this.afteruser[0].recommendResult.length; i++) {
        this.chartOption1.series[0].data.push({
          name: this.afteruser[1].recommendResult[i].value,
          value: this.afteruser[1].recommendResult[i].count
        });
        this.chartOption1.legend.data.push(
          this.afteruser[1].recommendResult[i].value
        );
      }

      // 绘制图表
      this.chartOption2 = {
        title: {
          text: this.afteruser[2].userName, //主标题
          subtext: "", //副标题
          x: "center", //x轴方向对齐方式
          left: 0,
          top: 25
        },
        tooltip: {
          trigger: "item",
          formatter(params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            let name, value;
            if (params.data) {
              name = params.data.name;
              value = params.data.value;
            } else {
              // 为了防止没有定义数据的时候报错写的
              name = 0;
              value = 0;
            }

            let htmlStr = `
               <div style='font-size:18px;margin-bottom:10px;'> ${name}</div>
               <p style='text-align:left;margin-top:-10px;'>
               搜索次数：${value}<br/>
               </p>`;

            return htmlStr;
          }
        },
        legend: {
          orient: "vertical",
          right: "right",
          width: "200px",
          bottom: "50px",
          data: [],
          itemWidth: 24, // 设置图例图形的宽
          formatter: name => {
            return name;
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0%", "70%"],
            center: ["40%", "30%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 50,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}次"
              }
            }
          }
        ]
      };

      for (let i = 0; i < this.afteruser[0].recommendResult.length; i++) {
        this.chartOption2.series[0].data.push({
          name: this.afteruser[2].recommendResult[i].value,
          value: this.afteruser[2].recommendResult[i].count
        });
        this.chartOption2.legend.data.push(
          this.afteruser[2].recommendResult[i].value
        );
      }

      // 绘制图表
      this.chartOption3 = {
        title: {
          text: this.afteruser[3].userName, //主标题
          subtext: "", //副标题
          x: "center", //x轴方向对齐方式
          left: 0,
          top: 25
        },
        tooltip: {
          trigger: "item",
          formatter(params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            let name, value;
            if (params.data) {
              name = params.data.name;
              value = params.data.value;
            } else {
              // 为了防止没有定义数据的时候报错写的
              name = 0;
              value = 0;
            }

            let htmlStr = `
               <div style='font-size:18px;margin-bottom:10px;'> ${name}</div>
               <p style='text-align:left;margin-top:-10px;'>
               搜索次数：${value}<br/>
               </p>`;

            return htmlStr;
          }
        },
        legend: {
          orient: "vertical",
          right: "right",
          width: "200px",
          bottom: "50px",
          data: [],
          itemWidth: 24, // 设置图例图形的宽
          formatter: name => {
            return name;
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0%", "70%"],
            center: ["40%", "30%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 50,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}次"
              }
            }
          }
        ]
      };

      for (let i = 0; i < this.afteruser[0].recommendResult.length; i++) {
        this.chartOption3.series[0].data.push({
          name: this.afteruser[3].recommendResult[i].value,
          value: this.afteruser[3].recommendResult[i].count
        });
        this.chartOption3.legend.data.push(
          this.afteruser[3].recommendResult[i].value
        );
      }

      // 绘制图表
      this.chartOption4 = {
        title: {
          text: this.afteruser[4].userName, //主标题
          subtext: "", //副标题
          x: "center", //x轴方向对齐方式
          left: 0,
          top: 25
        },
        tooltip: {
          trigger: "item",
          formatter(params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            let name, value;
            if (params.data) {
              name = params.data.name;
              value = params.data.value;
            } else {
              // 为了防止没有定义数据的时候报错写的
              name = 0;
              value = 0;
            }

            let htmlStr = `
               <div style='font-size:18px;margin-bottom:10px;'> ${name}</div>
               <p style='text-align:left;margin-top:-10px;'>
               搜索次数：${value}<br/>
               </p>`;

            return htmlStr;
          }
        },
        legend: {
          orient: "vertical",
          right: "right",
          width: "200px",
          bottom: "50px",
          data: [],
          itemWidth: 24, // 设置图例图形的宽
          formatter: name => {
            return name;
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0%", "70%"],
            center: ["40%", "30%"],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 20,
                shadowOffsetX: 50,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{c}次"
              }
            }
          }
        ]
      };

      for (let i = 0; i < this.afteruser[0].recommendResult.length; i++) {
        this.chartOption4.series[0].data.push({
          name: this.afteruser[4].recommendResult[i].value,
          value: this.afteruser[4].recommendResult[i].count
        });
        this.chartOption4.legend.data.push(
          this.afteruser[4].recommendResult[i].value
        );
      }

      this.bingtu0.setOption(this.chartOption0);
      this.bingtu1.setOption(this.chartOption1);
      this.bingtu2.setOption(this.chartOption2);
      this.bingtu3.setOption(this.chartOption3);
      this.bingtu4.setOption(this.chartOption4);
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
.analyzeData {
  padding: 5px 10px;
}
.analyzeData span:nth-child(odd) {
  color: red;
  margin-left: 7px;
  margin-right: 7px;
}
.analyzeData span:nth-child(even) {
  color: blue;
}
.keysentence {
  text-indent: 2em;
}
.keysentence li {
  margin: 2px 0;
  list-style: square !important;
}
.recommend span {
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 25px;
  font-size: 18px;
  color: #409eff;
}
.huaxiang {
  width: 1650px;
  margin: 0 auto;
  min-height: 550px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.huaxiangitem {
  flex: 0 0 18%;
  width: 320px;
  min-height: 250px;
  margin-bottom: 10px;
}
</style>