<template>
    <div id="appma">
<transition
leave-active-class="bounceOut"
>
  <div class="jumbotron" v-if="flag"  >
  <h1>Hello, Everyone!</h1>
  <p>Welcome to the book website</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button" @click.prevent="flag=!flag">Learn more</a></p>
 </div> 
</transition>
<div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header><span class="imgg"><img src="../assets/logo1.0.png" > 购书网站</span>
        <zouma></zouma>
      </a-layout-header>
      <a-layout-content>
     <div id="pinpai">
        <div class="panel panel-primary">
              
            
            <div class="panel-body form-inlie">
              <h3 class="hh">添加图书</h3>
            <label>
                Id:
                <input type="text" class="form-control" v-model="id">
            </label>
            <label>
                Name:
                <input type="text" class="form-control" v-model="name">
            </label>
            <label>
               Time
                <input type="text" class="form-control" v-model="time">
            </label>
             <!--在vue中，使用事件绑定机制，为元素指定处理函数的时候，如果加了小括号，就可以给函数传参了-->
            <input type="button" value="添加" class="btn btn-primary" @click="add()">
            <label>
                搜索图书关键字：
                <input type="text" class="form-control  guanjian" v-model="keywords">
            </label>
        </div>
        </div>
      <table class="table table-bordered table-hover table-striped">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>name</th>
                  <th>Ctime</th>
                  <th>Operation</th>
              </tr>
          </thead>
          <transition-group appear tag="tbody" > 
              <tr v-for="item in search(keywords)" :key="item.id" >
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.ctime | dataFormate}}</td>
                  <td><a href="" @click.prevent="del(item.id)">删除</a></td>
              </tr>
          </transition-group>
      </table>
    </div><carousel class="car"></carousel>
      </a-layout-content> 
      <a-layout-footer class="footer">lynn的购书网站</a-layout-footer>
    </a-layout>
</div>
</div>
</template>
<script>
import zouma from './zouma.vue'
export default {
     data(){
    return{
      flag:true,
       id: '',
            name: '',
            time: '',
            keywords: '', //搜索关键字
            list: [
                { id: 1 ,name: '语文' ,ctime: "2018-1-2"},
                { id: 2 ,name: '数学' ,ctime: "2018-6-23"},
                { id: 3 ,name: '英语' ,ctime: "2017-9-23"},
                { id: 4 ,name: 'c语言',ctime: "2018-9-6" }
            ]
    }
  },
  methods:{
      add(){  //添加的方法
                //console.log('ok')
                //分析
                //1.获取到id和name，直接从data上面获取
                //2.组织出一个对象
                //3.把这个对象，调用数组的相关方法，添加到当前data上的list中
                //4.注意：在vue中，已经实现了数据的双向绑定，每当我们修改了data中的数据，vue会默认
                //监听数据的改动，自动把最新的数据，应用到页面上。
                //5.入门Vue，我们更多的是在进行VM中Model数据的操作，同时，在操作Model数据的时候，指定的业务逻辑操作
              var car = { id: this.id, name: this.name, ctime: this.time }
              this.list.push(car)
              this.id=this.name='' //将输入的样式清空
            },
            //方法一
            //   del(id){ //根据id删除数据
            //      //分析：
            //      //1.如何根据id，找到要删除这一项的索引
            //      //2.如果找到索引了，直接调用数组的splice方法
            //      this.list.some((item,i)=>{
            //          if(item.id == id){
            //              this.list.splice(i, 1);
            //              return true;
            //          }
            //      }) //在数组的some方法中根据指针条件来判断，如果返回true，some会被终止

            //  }
            //方法二
            del(id){
            var index = this.list.findIndex(item=>{
                if(item.id == id){
                    return true;
                }
            })
            this.list.splice(index, 1)
        },
    search(keywords){ //根据关键字进行数据的搜索
        // var newlist=[];
        // this.list.forEach(item=>{
        //    if(item.name.indexof(keywords) !=-1){
        //        newlist.push(item);
        //    }
        // })    
        // return newlist;     //方法一
        //forEach some filter findIndex 这些都属于数组的新方法
        //都会对数组的每一项遍历然后进行相关操作
        var newlist=this.list.filter(item=>{
            //if(item.name.indexof(keywords) !=-1)
            //注意：在es6中，为字符串提供了一个新方法，叫做 String.prototype.includes('要包含的字符串')
            //如果包含，则返回true，否则返回false
            //
            if(item.name.includes(keywords)){
                return item;
            }
        })
       return newlist;
    },
  },
  name: 'main',
  components:{
    zouma,
  }
}
</script>
<style>
#appma {
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

