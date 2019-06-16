<template>
 <div class="container-fluid">
       <transition>
  <div class="animated  bounce delay">
     <h1>购书网站登录界面</h1> 
 <img src="../assets/book.jpg" alt="..." class="img-thumbnail">
 </div>
     </transition>
     <form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputEmail3" prop="name">name</label>
    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email" v-model="form.name">
  </div>
  <div class="form-group">
    <label class="sr-only" for="exampleInputPassword3" prop="password">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password" v-model="form.password">
  </div>
  <button type="submit" class="btn btn-danger" @click="submit">Sign in</button>
</form>
 </div>    
</template>
<script>
export default {
    data(){
    return{
          form:{
            name:'张三',
            password:'123456',
        },
    }
    },
    methods:{
        submit:function(){
          if(this.form.name==="张三"&&this.form.password==="123456"){
          this.$router.push({name: 'main'});
      }
          else
          alert("账号或密码错误")
      },

    }
}
</script>
<style>
.container-fluid{
    width: 100%;
    height: 1000px;
    background-color:darkkhaki;
}
.img-thumbnail{
    height: 140px;
    width: 140px;
    margin-top: 50px;
}
.form-inline{
    position: absolute;
    top: 300px;
    left:720px;
}
</style>
