<!--炫酷登录界面-->
      <!-- <div>
// //           <input type="button" value="点我" v-on:click="fun">         
// //            <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
// //             <h1 v-if="flag" @click="flag=!flag" id="myh1">
// //                 hhh
// //             </h1>
// //             </transition>
// //       </div> -->
<!-- <div class="flex-container" id="login" :style="{height: screenHeight+'px'}"> 
    <div class="canvaszz" :style="{height: screenHeight+'px'}">
    </div> 
     <canvas id="canvas" :style="{height: screenHeight+'px'}">
    </canvas> 
 </div>
</template> -->
// // import $ from  'jquery'
// // export default {
// // data(){
// //     return{
// //    flag: true,
// //    }
// // },
// // methods:{
// //     fun:()=>{
// //       $('#myh1').text("555")
// //     }
// // }
// // }
// // </script>
// // animated infinite bounce delay-2s
<!-- <script> >
// export default {
//      data () { 
//          return {
//               screenHeight: window.innerHeight // 屏幕高度 
//              } 
//         },
//          watch: { 
//              'screenHeight': function (val) { // 监听屏幕高度变化 
//              var oIframe = document.getElementById('login') 
//              oIframe.style.height = Number(val) + 'px' // '120'是页面布局调整，可去除
//               }
//          },
//          mounted () {
//               var _this = this 
//               window.onresize = function () { // 定义窗口大小变更通知事件 
//               _this.screenHeight = document.documentElement.clientHeight // 窗口高度
//                }
//                 var canvas = document.getElementById('canvas')
//                  var ctx = canvas.getContext('2d')
//                   var w = canvas.width = window.innerWidth 
//                   var h = canvas.height = window.innerHeight
//                    var hue = 217 
//                    var stars = [] 
//                    var count = 0 
//                    var maxStars = 1300 // 星星数量 
//                    var canvas2 = document.createElement('canvas') 
//                    var ctx2 = canvas2.getContext('2d')
//                     canvas2.width = 100 
//                     canvas2.height = 100
//                     var half = canvas2.width / 2 
//                     var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half) 
//                     gradient2.addColorStop(0.025, '#CCC') 
//                     gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)') 
//                     gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)') 
//                     gradient2.addColorStop(1, 'transparent') 
//                     ctx2.fillStyle = gradient2 
//                     ctx2.beginPath() 
//                     ctx2.arc(half, half, half, 0, Math.PI * 2) 
//                     ctx2.fill() // End cache 
//                     function random (min, max) {
//                          if (arguments.length < 2) {
//                             max = min
//                             min = 0 
//                             } 
//                             if (min > max) { 
//                                 var hold = max 
//                                 max = min 
//                                 min = hold 
//                                 } 
//                                 return Math.floor(Math.random() * (max - min + 1)) + min 
//                                 } 
//                     function maxOrbit (x, y) { 
//                         var max = Math.max(x, y) 
//                         var diameter = Math.round(Math.sqrt(max * max + max * max)) 
//                         return diameter / 2 // 星星移动范围，值越大范围越小， 
//                         }
//                         var Star = function () { 
//                             this.orbitRadius = random(maxOrbit(w, h)) 
//                             this.radius = random(60, this.orbitRadius) / 8 // 星星大小 
//                             this.orbitX = w / 2 
//                             this.orbitY = h / 2 
//                             this.timePassed = random(0, maxStars) 
//                             this.speed = random(this.orbitRadius) / 50000 // 星星移动速度 
//                             this.alpha = random(2, 10) / 10 
//                             count++ 
//                             stars[count] = this 
//                             } 
//                         Star.prototype.draw = function () {
//                              var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX 
//                              var y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY 
//                              var twinkle = random(10) 
//                              if (twinkle === 1 && this.alpha > 0) {
//                                   this.alpha -= 0.05 
//                                   } else if (twinkle === 2 && this.alpha < 1) { 
//                                       this.alpha += 0.05 } ctx.globalAlpha = this.alpha 
//                                       ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, 
//                                       this.radius, this.radius) 
//                                       this.timePassed += this.speed } 
//                                       for (var i = 0; i < maxStars; i++) { /* eslint-disable no-new */ 
//                                       new Star() 
//                                       } 
//                                       function animation () { 
//                                           ctx.globalCompositeOperation = 'source-over' 
//                                           ctx.globalAlpha = 0.5 // 尾巴 
//                                           ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)' 
//                                           ctx.fillRect(0, 0, w, h) 
//                                           ctx.globalCompositeOperation = 'lighter' 
//                                           for (var i = 1, l = stars.length; i < l; i++) { 
//                                               stars[i].draw() 
//                                               }; 
//                                               window.requestAnimationFrame(animation) 
//                                         } 
//                                         animation() 
//                                     }, 
//                                     created () { 
//                                         this.$http.get('/api/users').then((response) => { 
//                                             console.log(response) }).catch((error) => { 
//                                                 console.log(error) 
//                                                 }) 
//                                                 }, 
//                                                 methods: { 
//                                                     addClass (val) { 
//                                                         document.getElementById(val).style.color = 'black' 
//                                                         // document.getElementById('register').style.color = 'black' 
//                                                         }, 
//                                                         deleteClass (val) { 
//                                                             document.getElementById(val).style.color = '' 
//                                                             } 
//                                                             } 
//                                                             }
// </script>
// <style lang="scss" scoped>
//  canvas { width: 100%; height: auto /*默认全屏显示 可自己设置高度640px*/;
//   display: inline-block; 
//   vertical-align: baseline; 
//   position: absolute; 
//   z-index: -1; 
//   } 
//   .canvaszz { 
//       width: 100%; 
//       background: 
//       url(../../../static/img/in_top_bj.jpg) 
//       no-repeat; // height: 640px; 
//       position: absolute; 
//       z-index: 10; 
//       filter: alpha(opacity=40); 
//       -moz-opacity: 0.4; 
//       -khtml-opacity: 0.4; 
//       opacity: 0.4; 
//       } 
// </style>

