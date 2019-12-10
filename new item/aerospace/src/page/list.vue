<template>
<!-- 搜索结果页 -->
    <div>
    <!-- 头部内容 -->
    <Header></Header>
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 搜索内容 -->
    <Fenye></Fenye>
    <!-- 底部内容 -->
    <Footer></Footer>
    </div>
</template>
<script>
import Search from "../components/search";
import Footer from '../components/footer';
import Header from '../components/header';
import Fenye from '../components/fenye';
export default {
  components: {
    Header,
    Search,
    Footer,
    Fenye,
  },
}

</script>
<style >

</style>