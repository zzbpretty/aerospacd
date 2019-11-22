<template>
  <div>
    <!-- 搜索逻辑 -->
    <div class="searchmain">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" id="keyword" v-model="keyword" class="input-with-select">
          <el-select
            v-model="type"
            id="type"
            slot="prepend"
            value-key="label"
            placeholder="请选择"
            @change="showMessage($event)"
          >
            <el-option
              v-for="(item,index) in options"
              :key="index"
              :label="item.label"
              :value="item"
            ></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="submit"></el-button>
        </el-input>
      </div>
      <el-alert
        title="输入内容不能为空"
        type="info"
        center
        show-icon
        class="alert"
        style="margin:10px auto;display:none"
      ></el-alert>
    </div>
  </div>
</template>
<script>
import Bus from "../assets/Bus";

export default {
  data() {
    return {
      keyword: "",
      type: {
        label: "题目",
        value: "con_title"
      },
      label: "",
      options: [
        {
          label: "题目",
          value: "con_title"
        },
        {
          label: "作者",
          value: "con_author"
        },
        {
          label: "来源",
          value: "con_from"
        },
        {
          label: "全文",
          value: "all"
        }
      ],
      stableData: [],
      url: "http://192.168.100.44:8070/search/match"
    };
  },
  methods: {
    showMessage(e) {
      this.label = e;
      // this.type=e.value
    },
    submit() {
      console.log();
      if ($("#keyword").val() == "") {
        $(".alert")
          .stop()
          .show(500, "linear");
      } else {
        let data1 = {
          type: this.type.value,
          keyword: this.keyword,
          size: 20,
          start: 0
        };
        this.$ajax
          .post(this.url, data1)
          .then(res => {
            Bus.$emit("send", res.data);
            // console.log(res.data)
          })
          .catch(res => {
            console.log(res);
          });
          
        this.$router.push("/list?keyword=" +this.keyword + "&label=" +this.type.label +"&value=" +  this.type.value
        );
      }
    }
  },
  mounted() {
    if (this.$route.query.keyword != undefined) {
      this.type = {
        label: this.$route.query.label,
        value: this.$route.query.value
      };
      this.keyword = this.$route.query.keyword;
    }
  }
};
</script>
<style >
.searchmain {
  width: 1005px;
  margin: 0 auto;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>