<template>
  <div>
    <!-- 首页下方推荐 -->
    <p class="result-tip">
      <router-link to="/cdetail">推荐新闻</router-link>
    </p>
    <!-- 推荐内容 -->
    <el-tabs v-model="activeTitle" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in chooseData" :key="index"  :label="item.title" :name="item.title">
        <div class="choose-box" v-for="(item1,index) in item.content" :key="index">
          <router-link :to=item1[7].con_read target='_blank'><h3>{{item1[0].con_title}}</h3></router-link>
          <p class="choose-p">
            <span>责编：{{item1[1].con_author}}</span>|
            <span>来源：{{item1[2].con_from}}</span>
          </p>
          <p class="abstract">{{item1[5].con_abstract}}</p>
          <div class="choose-bottom">
            <span>发表时间：{{item1[6].con_data}}</span>
            <ul>
              <li>
                <router-link :to=item1[7].con_read target='_blank'><i class="fa fa-book" aria-hidden="true" style="color:#74a2f2">&nbsp;查&nbsp;看</i></router-link>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 默认选中选项卡title
      activeTitle: "航天科技",
      // 模拟推荐新闻数据
      chooseData: [
        {
          title: "航天科技",
          content: [
            [
              { con_title: "进博会第二天：央企开启“买买买”模式" },
              { con_author: "李 拯" },
              { con_from: " 中国新闻网" },
              { con_size: 27 },
              { con_type: "学术期刊" },
              {
                con_abstract:
                  "  自第二届中国国际进口博览会开幕以来，面对琳琅满目的全球优质产品，不少中国企业签约、下单的热度逐渐攀升。进博会进入第二天，作为中国“买手团”的主力之一，许多中央企业亦开启“买买买”模式。6日，中国航天科技集团有限公司亮出其在本届进博会上的采购订单。当天，该集团所属企业与来自德国、美国的企业分别签署采购合同和协议，并与意大利、德国和中国香港企业进行展位签约。其中，中国航天科技集团所属的乐凯胶片股份有限公司与美国杜邦公司达成进博会二度合作，签署了氟膜产品采购协议..."
              },
              { con_data: "2019年11月07日09:00" },
              { con_read: "hangtian1" },
              { con_download: "www.baidu.com" }
            ],
            [
              { con_title: '进博会央企采购团"集合"2.1万人 签约扩至87个国家和地区'},
              { con_author: "阙天南 " },
              { con_from: "  证券日报" },
              { con_size: 12 },
              { con_type: "学术期刊" },
              {
                con_abstract:
                  " “今年中央企业采购签约将涉及到国家和地区87个，比去年增加近20个，供应商超过730家，比上年增加5%，拟签约的采购合同协议每一项金额都将比去年有较大幅度增长。”11月6日，国务院国资委党委书记、主任郝鹏在第二届中国国际进口博览会中外企业合作论坛上如是介绍。郝鹏表示，从合作内容看，供应链合作不断做实、产业链融合不断走深。南方电网、国机集团、通用技术集团、中国商飞等企业积极采购关键高端设备，中核集团、国家电投、中广核等企业积极开展国际多元化核能技术合作..."
              },
              { con_data: "2019年11月07日08:57" },
              { con_read: "hangtian2" },
              { con_download: "www.baidu.com" }
            ],
            [
              {
                con_title:
                  "中国航天科技集团进博会签署采购“新订单”"
              },
              { con_author: "赵竹青 " },
              { con_from: "  人民网-科技频道" },
              { con_size: 31 },
              { con_type: "学术期刊" },
              {
                con_abstract:
                  " 人民网北京11月6日电（赵竹青）继在首届中国国际进口博览会与全球20家企业签署24个项目的采购合同或协议后，中国航天科技集团有限公司在近日举行的第二届进博会上又亮出了采购“新订单”。11月6日，中国航天科技集团所属企业与来自德国、美国的企业分别签署了粉煤流量计、杜邦氟膜等采购合同和协议，并与意大利、德国和中国香港的企业进行展位签约。至此，航天科技进博会“朋友圈”增至24家、“购物车”扩大至29个项目..."
              },
              { con_data: "2019年11月06日16:26" },
              { con_read: "hangtian3" },
              { con_download: "www.baidu.com" }
            ]
          ]
        },
        {
          title: "大数据",
          content: [
            [
              { con_title: "阿斯利康与中金资本成立医疗健康产业基金 拟融资10亿美元" },
              { con_author: "刘卿 " },
              { con_from: " 人民网-人民健康网" },
              { con_size: 27 },
              { con_type: "学术期刊" },
              {
                 con_abstract:
                  "近年来，中国药品审评审批制度改革不断深化，“救命药”优先审评审批政策不断完善和落实，整个监管流程大幅提速，这使得在中国上市的创新药物数量持续攀升，也吸引了全球各大药企、金融资本等不断加大在中国的研发创新投入。 2019年11月6日，阿斯利康与中金资本在进博会上宣布将联合成立全球医疗健康产业基金，未来预期融资规模目标达到10亿美元..."
              },
              { con_data: "2019年11月07日15:26" },
              { con_read: "dashuju1" },
              { con_download: "www.baidu.com" }
            ],
            [
              { con_title: "郑磊：区块链服务实体经济 应联合其他技术打“组合拳”" },
              { con_author: "徐天晓" },
              { con_from: "  电子政务" },
              { con_size: 12 },
              { con_type: "证券日报" },
              {
                 con_abstract:
                  " 新技术得以广泛运用的最终场景，是要为实体经济赋能。作为新技术的代表，区块链将如何与实体经济深度融合？《证券日报》记者就此采访了全球金融科技实验室（由深圳瀚德共享科技实验室有限公司、香港中文大学（深圳）高等金融研究院、中国人民大学国际货币研究所联合创立）专家顾问郑磊博士，并请他就如何正确认识区块链与数字货币的关系..."
              },
              { con_data: "2019年11月07日09:29" },
              { con_read: "dashuju2" },
              { con_download: "www.baidu.com" }
            ],
            [
              {
                con_title:
                  "如何借助短视频创新政务信息传播？这堂课别错过"
              },
              { con_author: "袁勃" },
              { con_from: "  人民网-舆情频道" },
              { con_size: 31 },
              { con_type: "学术期刊" },
              {
                 con_abstract:
                  " “人民在线融媒体协同发展论坛×人民网融媒体系列线上课程”已开展至第三期。第三期将于11月8日下午在人民日报新媒体大厦举办，本次融媒体大讲堂由人民在线/人民网舆情数据中心、人民慕课主办，将邀请字节跳动政务运营总监王博分享“怎样利用抖音平台进行政务信息传播”。 利用抖音平台进行政务信息传播随着移动社交的升级..."
              },
              { con_data: "2019年11月07日09:14" },
              { con_read: "dashuju3" },
              { con_download: "www.baidu.com" }
            ]
          ]
        },
        {
          title: "区块链",
          content: [
            [
              { con_title: "中国的区块链雄心：舍我其谁" },
              { con_author: "黄玲丽、陈键" },
              { con_from: " 人民网-区块链频道" },
              { con_size: 27 },
              { con_type: "学术期刊" },
              {
                con_abstract:
                  " 中国高层的一席话，在全国掀起了区块链风潮。实际上，中国高层对区块链的“蓝图”和规划，早在五年前就已有了雏形。对于区块链，中国有着雄心与耐心，在试水之初，低调摸索，步步为营；在落地之时，步伐坚定，落地有声。在未来的区块链世界中，终究会有中国浓墨重彩的一笔。 2014年，央行内部低调筹建了一个神秘的研究团队..."
              },
              { con_data: "2019年11月07日10:48" },
              { con_read: "qukuailian1" },
              { con_download: "www.baidu.com" }
            ],
            [
              { con_title: "行业巨头抢滩区块链 基础设施布局成首选" },
              { con_author: "孙忠 " },
              { con_from: "  电子政务" },
              { con_size: 12 },
              { con_type: "上海证券报" },
              {
                con_abstract:
                  " 落地案例日渐增多、产业环境渐趋成形，区块链迎来新一轮大发展。而在区块链技术落地的三个层次（工具、平台、基础设施）中，随着行业发展步入快车道，金融科技巨头纷纷选择在高端的基础设施层次上持续发力，以构建更深的“护城河”。上证报记者昨日获悉，中钞区块链技术研究院日前与国家技术转移东部中心在上海启动合作..."
              },
              { con_data: "2019年11月07日08:56" },
              { con_read: "qukuailian2" },
              { con_download: "www.baidu.com" }
            ],
            [
              {
                con_title:
                  "区块链信息服务等列入鼓励产业"
              },
              { con_author: "陶凤 刘瀚琳" },
              { con_from: "  北京商报" },
              { con_size: 31 },
              { con_type: "学术期刊" },
              {
                con_abstract:
                  " “鼓励人工智能产业、区块链信息服务，将‘虚拟币挖矿’移出淘汰产业条目……”11月6日，国家发改委正式发布《产业结构调整指导目录（2019年本）》（以下简称《目录》）。该《目录》共涉及行业48个，条目1477条，修订面超50%。国家发改委产业发展司负责人表示，对鼓励类项目，将按照有关规定审批、核准或备案；而对淘汰类项目..."
              },
              { con_data: "2019年11月07日08:07 " },
              { con_read: "qukuailian3" },
              { con_download: "www.baidu.com" }
            ]
          ]
        },
        {
          title: "情报文献",
          content: [
            [
              { con_title: "美高官：将说服韩方续签日韩《军事情报保护协定》" },
              { con_author: "任石、张璐璐 " },
              { con_from: " 中国新闻网" },
              { con_size: 27 },
              { con_type: "学术期刊" },
              {
                 con_abstract:
                  " 中新网11月7日电 据日本放送协会(NHK)报道,《日韩军事情报保护协定》将于23日失效。对此，6日，美国国防部助理部长薛瑞福在接受日媒采访时表示，将继续说服韩国撤回不与日本续签该协定的决定。据报道，关于韩国决定不延长日韩《军事情报保护协定》一事，薛瑞福在采访中说，如果该协定失效，将对美日韩三国的合作等造成重大影响..."
              },
              { con_data: "2019年11月07日15:32" },
              { con_read: "qingbaowenxian1" },
              { con_download: "www.baidu.com" }
            ],
            [
              { con_title: "普京高度评价俄战备水平和反恐情报工作" },
              { con_author: "李婷(实习生)、贾文婷 " },
              { con_from: "  新华网" },
              { con_size: 12 },
              { con_type: "学术期刊" },
              {
                 con_abstract:
                  "新华社莫斯科11月6日电（记者栾海）俄罗斯总统普京6日在莫斯科高度评价俄军战备水平和安全执法机构的反恐及情报工作，并对相关领域的工作提出重点安排。据俄总统网站6日发布的消息，普京当天在克里姆林宫出席部分军官、检察官职级晋升仪式时说，今年以来俄军演习次数同比增加四分之一，战备水平不断提高。俄将继续加强国防力量，使高超音速武器、激光武器和其他最新装备参加战斗值班..."
              },
              { con_data: "2019年11月07日10:43" },
              { con_read: "qingbaowenxian2" },
              { con_download: "www.baidu.com" }
            ],
            [
              {
                con_title:
                  "美国会众议院首次公开针对特朗普弹劾调查的证词"
              },
              { con_author: "李婷(实习生)、贾文婷" },
              { con_from: "  新华网" },
              { con_size: 31 },
              { con_type: "学术期刊" },
              {
                 con_abstract:
                  "美国国会众议院三个委员会4日首次公开针对总统唐纳德·特朗普弹劾调查的证词。证词由两名证人提供，分别是美国前驻乌克兰大使玛丽·约万诺维奇和国务卿迈克·蓬佩奥的前任高级助理迈克尔·麦金利。主导弹劾调查的众议院情报委员会、外交委员会、监督和改革委员会4日公开约万诺维奇10月提供的证词。约万诺维奇2016年起出任驻乌克兰大使，今年5月应召回国..."
              },
              { con_data: "2019年11月06日09:06" },
              { con_read: "qingbaowenxian3" },
              { con_download: "www.baidu.com" }
            ]
          ]
        }
      ]
    };
  },
  methods: {
    // 切换选项卡方法
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
};
</script>
<style >
.result-tip {
  color: #999;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 10px;
}
.el-tabs__nav-scroll {
  position: relative;
  min-height: 38px;
  clear: both;
}
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
   color: #777;
}
.choose-p span:nth-child(1) {
  padding-right: 15px;
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
  color: #3f4a5e;
  word-break: break-all;
  text-justify: inter-ideograph;
  text-align: justify;
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
    color: #777;
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

</style>