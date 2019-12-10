<template>
  <div>
    <!-- 为你推荐 -->
    <div class="recommend">为你推荐</div>
    <el-card class="box-card">
      <div v-for="(item,index) in recommendData" :key="index" class="text item">
        <h4
          style="border-bottom:1px solid black;padding-bottom:15px;color:#666;padding-left:10px"
        >{{ item.title }}</h4>
        <ul class="r-list">
          <li v-for="(item1,index) in item.content" :key="index">
            <router-link :to="item1.to" target="_blank">{{item1.list}}</router-link>
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
      //为你推荐数据
      recommendData: [
        {
          title: "航天12院",
          content: [
            { list: "研究院简介", to: "suo1" },
            { list: "历史沿革", to: "suo2" },
            { list: "组织机构", to: "suo3" }
          ]
        },
        {
          title: "钱学森智库",
          content: [
            { list: "钱学森智库为我国软实力的提升提供素材和依据", to: "ku1" },
            { list: "站在更高起点谋划硬科技未来", to: "ku2" },
            {
              list: "钱学森论坛首次落地西安 将举行“钱学森智库专刊”全球发布仪式",
              to: "ku3"
            }
          ]
        },
        {
          title: "情报-美",
          content: [
            { list: "CIA’s Mi-17 Helicopter Comes Home", to: "mei1" },
            {
              list:
                "A Series of Spacewalks Four Years in the Making Will Attempt to Revive a Scientific Experiment",
              to: "mei2"
            },
            {
              list:
                "Orson John: A NASA Pathways Student Becomes a Reliability Engineer",
              to: "mei3"
            }
          ]
        },
        {
          title: "情报-俄",
          content: [
            { list: "俄罗斯将恢复发射货运飞船", to: "e1" },
            { list: "俄罗斯推迟发射格洛纳斯导航卫星", to: "e2" },
            { list: "俄进步M-12M货运飞船发射失败未能进入预定轨道", to: "e3" }
          ]
        },
        {
          title: "情报-欧洲",
          content: [
            {
              list:
                "European boost to the all-in-one Bartolomeo service for the Space Station",
              to: "ou1"
            },
            {
              list: "Apollo astronaut champions Hera for planetary defence",
              to: "ou2"
            },
            { list: "A decade probing the Sun", to: "ou3" }
          ]
        }
      ]
    };
  },
  created() {},
  methods: {}
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
.r-list {
  margin: 15px auto 0px;
}
.r-list li {
  margin: 10px auto;
}
.text a:hover {
  color: #409eff !important;
  cursor: pointer !important;
}
.text a:hover {
  text-decoration: none !important;
}
.text a {
  color: #053357 !important;
  line-height: 15px;
}
.text h4 {
  font-size: 120%;
  font-family: "Microsoft yahei";
}
.r-list a {
  font-family: Calibri, "宋体";
  letter-spacing: 1px;
}
.r-list li {
  /* background-color: #e6efff; */
  border-radius: 5px;
  /* height: 20px; */
  line-height: 20px;
  padding-left: 15px;
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
.el-dialog {
  border-radius: 10px;
}
.el-dialog__header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 15px;
  background: #4286ec;
}
.el-dialog__title {
  font-family: "Microsoft YaHei", "微软雅黑";
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
}
.el-dialog__close {
  color: white !important;
}
.tbody_tr:nth-child(odd) {
  background-color: #f4f4f5;
}
</style>