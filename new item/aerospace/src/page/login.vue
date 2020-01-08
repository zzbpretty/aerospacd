<template>
<!-- 登录页 -->
    <div>
        {{div1}}
        <button @click="change()">按钮</button>
    </div>
</template>
<script>
export default {

data(){
    return{
        div1:"123"
    }
},

methods:{
  change(){
     this.div1 = "2"
  }
}
}

</script>
<style lang="">

</style>