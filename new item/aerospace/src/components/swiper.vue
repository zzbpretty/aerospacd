<template>
  <div class="swiper">
    <div class="swiper-box">
      <div class="content">
        <!-- left -->
        <div class="category-left category-cooperatelib">
          <h1 style="color:#0ba2eb">学术文献总库包括</h1>
          <ul class="all-docdata">
            <li>
              <span>SCI：</span> 1500余篇
            </li>
            <li>
              <span>AIAA：</span> 博士X篇；硕士X余篇
            </li>
            <li>
              <span>EI：</span> 中国专利0项；海外专利0项
            </li>
            <li>
              <span>专利：</span> 国内0篇；国际会议0篇
            </li>
            <li style="border-bottom:1px solid;padding-bottom:20px;margin-bottom:20px">
              <span>专业网站：</span> 3.1万余篇
            </li>
            <li>
              <span>年鉴：</span> 0篇
            </li>
            <li>
              <span>专利：</span> 中国专利0项；海外专利0项
            </li>

          </ul>
        </div>
        <!-- right -->
        <div class="category-right">
          <!-- swiper -->
          <div class="sw-content">
            <span class="btn-prev1"></span>
            <span class="btn-next1"></span>
          <div class="win">
            <ul class="ul">
              <li>
                <img src="../assets/img/xinhangtian1.png" alt />
              </li>
              <li>
                <img src="../assets/img/xinhangtian2.png" alt />
              </li>
              <li>
                <img src="../assets/img/xinhangtian3.png" alt />
              </li>
              <li>
                <img src="../assets/img/xinhangtian4.png" alt />
              </li>
              <li>
                <img src="../assets/img/xinhangtian1.png" alt />
              </li>
            </ul>
            <ol style="display:none">
              <li class="li active"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
            </ol>
          </div>
         </div>
          <!-- waiwen -->
          <div class="world-cnki">
            <div class="subcaption">
              <i></i>
              <b>外文资源</b>
              <i></i>
            </div>
            <div class="link">
              <a href="#" target="_blank">
                <img src="../assets/img/en-resources-logo.png" alt="外文资源" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="javascript:void(0)" class="is-down" title="收起"></a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let bool = true;

    $(".is-down").on("click", function() {
      if (bool) {
        $(".content")
          .stop()
          .slideUp();
        $(".is-down")
          .removeClass("is-down")
          .addClass("is-up");
        bool = !bool;
      } else {
        $(".content")
          .stop()
          .slideDown();
        $(".is-up")
          .removeClass("is-up")
          .addClass("is-down");
        bool = !bool;
      }
    });

  // swiper
var index = 0;
var timer;
var otimer;

$(".btn-next1").click(function() {
  clearInterval(timer);
  clearTimeout(otimer);
  
  if (index == 4) {
    $(".ul").css("left", "0px");
    index = 1;
  } else {
    index++;
  }
  $(".ul")
    .stop()
    .animate(
      {
        left: -index * 500 + "px"
      },
      1000
    );
  if (index == 4) {
    $(".li")
      .eq(0)
      .prop("class", "li active")
      .siblings()
      .prop("class", "li");
  } else {
    $(".li")
      .eq(index)
      .prop("class", "li active")
      .siblings()
      .prop("class", "li");
  }
  ys();
});

$(".btn-prev1").click(function() {
  clearInterval(timer);
  clearTimeout(otimer);
  if (index == 0) {
    $(".ul").css("left", "-2000px");
    index = 3;
  } else {
    index--;
  }
  $(".ul")
    .stop()
    .animate(
      {
        left: -index * 500 + "px"
      },
      1000
    );
  $(".li")
    .eq(index)
    .prop("class", "li active")
    .siblings()
    .prop("class", "li");
  ys();
});

$(".li").mouseenter(function() {
  clearInterval(timer);
  clearTimeout(otimer);
  index = $(this).index();
  $(this)
    .prop("class", "li active")
    .siblings()
    .prop("class", "li");
  $(".ul")
    .stop()
    .animate(
      {
        left: -index * 500 + "px"
      },
      1000
    );
});
$(".li").mouseout(function() {
  ys();
});

var bian = function() {
  $(".li").prop("class", "li");
  if (index == 4) {
    $(".ul").css("left", "0px");
    index = 1;
  } else {
    index++;
  }
  $(".li").prop("class", "li active");
  $(".ul")
    .stop()
    .animate(
      {
        left: -index * 500 + "px"
      },
      1000
    );
  if (index == 4) {
    $(".li")
      .eq(0)
      .prop("class", "li active")
      .siblings()
      .prop("class", "li");
  } else {
    $(".li")
      .eq(index)
      .prop("class", "li active")
      .siblings()
      .prop("class", "li");
  }
};

var ds = function() {
  timer = setInterval(bian, 4000);
};
var ys = function() {
  otimer = setTimeout(ds, 2000);
};
ds()
this.$once('hook:beforeDestroy', () => {            
    clearInterval(timer);                                    
})
  }
};

</script>

<style>
.swiper {
    margin-top: 15px;
  margin-bottom: 40px;
}
/* .swiper-box {
  background: url("../assets/img/banner-bg.jpg") repeat-x center -75px #f3f7fa;
} */
.close {
  position: absolute;
  left: 95%;
  z-index: 1;
  width: 32px;
  height: 35px;
  margin-top: -18px;
  background: url("../assets/img/icon-btns.png") no-repeat -30px -126px;
}
.content {
  width: 1200px;
  height: 380px;
  margin: 0 auto;
  padding-bottom: 15px;
}
.category-left {
  float: left;
  width: 455px;
  margin-top: 20px;
}
.swiepr h1 {
  padding-top: 15px;
  margin-right: 70px;
}
.swiper h1,
.swiper h2,
.swiper h3 {
  font-size: 20px;
  line-height: 44px;
  color: #4e4e4e;
  /* font-weight: normal; */
}
.all-docdata {
  width: 415px;
  margin-top: 10px;
}
.all-docdata li {
  display: block;
  min-width: 163px;
  line-height: 30px;
  color: #e8fbfa;
}
.all-docdata li span {
  margin-right: 5px;
  font-size: 15px;
  color: #61eee5;
}

.is-down {
  margin-top: -18px;
  background-position: 0 -130px;
  display: block;
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(../assets/img/icon-btns.png);
  background-repeat: no-repeat;
  opacity: 0.4;
}
.is-up {
  margin-top: 5 px;
  background-position: 0 -160px;
  display: block;
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(../assets/img/icon-btns.png);
  background-repeat: no-repeat;
  opacity: 0.4;
}

.category-right {
  float: right;
  width: 745px;
  height: 230px;
}
.category-right .slider3d {
  width: 708px;
}
.btn-prev1:hover {
    background-position: left top;
}
.btn-next1:hover{
    background-position: right top;
}
.btn-prev1 {
  left: -25px;
  background-position: left -67px;
  display: block;
  z-index: 7;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  width: 54px;
  height: 54px;
  top: 80px;
  background-image: url(../assets/img/icon-btns.png);
  background-repeat: no-repeat;
  opacity: 0.4;
}
.btn-next1 {
  right: -25px;
  background-position: right -67px;
  display: block;
  z-index: 7;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  width: 54px;
  height: 54px;
  top: 80px;
  background-image: url(../assets/img/icon-btns.png);
  background-repeat: no-repeat;
  opacity: 0.4;
}

.world-cnki {
  width: 745px;
  padding-top: 30px;
}
.subcaption {
  height: 24px;
}
.subcaption i {
  display: inline-block;
  width: 326px;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
}
.subcaption b {
  padding: 0 3px;
  font-size: 14px;
  color: #545454;
  font-weight: normal;
}
.world-cnki .link {
  position: relative;
  margin-top: 5px;
  margin-left: 7px;
}
a {
  text-decoration: none;
  color: #666;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
.sw-content{
    position: relative;
}
.win {
  width: 500px;
  height: 200px;
  margin: 40px auto 0;
  position: relative;
  overflow: hidden;
  opacity: 0.8;
}
.win-content{
    width: 500px;
    height: 200px;
    margin: 0 auto;
}
.ul {
  width: 2500px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
}
.ul > li {
  width: 500px;
  height: 200px;
  float: left;
  text-align: center;
  line-height: 200px;
  font-size: 100px;
  font-weight: 700;
}

.left {
  top: 43%;
  left: 0;
}
.right {
  top: 43%;
  right: 0;
}
ol {
  width: 80px;
  height: 10px;
  position: absolute;
  bottom: 30px;
  z-index: 50;

  left: 38%;
}
ol > li {
  width: 10px;
  height: 10px;
  float: left;
  margin-right: 10px;
  background-color: white;
  border-radius: 50%;
}

</style>