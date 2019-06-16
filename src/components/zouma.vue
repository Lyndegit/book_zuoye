<template >
  <a-carousel arrows >
    <div
      slot="prevArrow" 
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow" 
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <div><img src="../assets/goushu.jpg"  ></div>
    <div><img src="../assets/goushu1.jpg" ></div>
    <div><img src="../assets/goushu2.jpg" ></div>
    <div><img src="../assets/goushu3.jpg" ></div>
  </a-carousel>
</template>
<script>
export default {}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 400px;
  line-height: 400px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31,45,61,.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide  h3 {
  color: #fff;
}

</style>
