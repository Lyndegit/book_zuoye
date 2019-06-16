<template>
<div id="app"> 
  <router-view></router-view>
</div>
</template>
 
<script>

export default {
} 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.jumbotron{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  opacity: 0.6;
}
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.imgg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.6;
  color:white;
  font-weight: bold; 
}
.imgg img{
  height: 80px;
}
 .v-enter, .v-leave-to{
         opacity: 0;
         transform: translateY(80px);
     }
     .v-enter-active, .v-leave-active{
         transition: all 0.6s ease; 
     }
     /*下面的 .v-move 和 .v-leave-active配合使用，能够实现列表后续的元素，渐渐地飘上来的效果*/
     .v-move {
        transition: all 0.6s ease; 
     }
     .v-leave-active{
         position: absolute;
     }
          td{
         border: 1px dashed #999;
         margin: 5px;
         line-height: 20px;
         padding-left: 5px;
         font-size: 15px;
         list-style: none;
         width: 300px;
     }
     td:hover{
         background-color:hotpink;
         transition: all 0.8s ease;
     }
     .footer{
       background:skyblue;
       color:white;
     }
     .hh{
       margin-left: 60px;
       margin-top: 10px;
       float: left;
     }
     .guanjian{
       margin-left: 50px;
     }
</style>
