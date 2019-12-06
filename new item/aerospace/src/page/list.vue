<template>
<!-- 搜索结果页 -->
    <div>
    <Header></Header>
    <Search></Search>
    <!-- detail -->
    <Fenye></Fenye>
    
    <!-- detail -->
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