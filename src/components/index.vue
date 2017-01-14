<template>
  <div class="index">
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <div id="myCarousel" class="carousel slide">

          <!-- 轮播（Carousel）项目 -->
          <div class="carousel-inner">
              <img class="item active" src="http://www.runoob.com/wp-content/uploads/2014/07/slide1.png" alt="First slide">
              <div class="item " v-for="index,img in imgs">
              </div>
          </div>
          <!-- 轮播（Carousel）导航 -->
          <a class="carousel-control left" href="#myCarousel"
              data-slide="prev">&lsaquo;
          </a>
          <a class="carousel-control right" href="#myCarousel"
              data-slide="next">&rsaquo;
          </a>
        </div>
      </div>
    </div>

    <div class="row content-1">
      <p></p>
      <div class="col-sm-6 col-lg-6">
        <a href="###">
          <span></span>
          <img src="../assets/images/content_03.png" alt="">
        </a>
      </div>
        <div class="col-sm-6 col-lg-6">
          <a href="###">
            <span></span>
            <img src="../assets/images/content_05.png" alt="">
          </a>
        </div>
    </div>

    <div class="row content-2">
      <p></p>
      <div class="col-sm-6 col-lg-6">
        <a href="###">
            <span></span>
          <img src="../assets/images/content_09.png" alt=""></a>
      </div>
        <div class="col-sm-6 col-lg-6">
          <a href="###">
            <span></span>
            <img src="../assets/images/content_11.png" alt=""></a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [
        'http://www.runoob.com/wp-content/uploads/2014/07/slide1.png',
        'http://www.runoob.com/wp-content/uploads/2014/07/slide2.png',
        'http://www.runoob.com/wp-content/uploads/2014/07/slide3.png'
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="css">
.carousel-control{
  background: #8e8e8e;
  height: 114px;
  line-height: 114px;
  font-size: 50px!important;
  width: 51px!important;
  margin-top: 140px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0);
  background-image: url('../assets/banner-left.png') no-repeat;
}

.carousel-inner img{
  width: 100%;
  height: 400px;
}
.content-1 img{
  width: 100%;
  height: 100%;
}
.content-1 p{
  height:45px;
  margin:30px 15px 10px 15px;
  background: url('../assets/contetn-header-1.png') no-repeat;
  border-bottom: 1px solid #666;
}
.content-1 a{
  display: block;
  height: 100%;
  width: 100%;
  position: relative;
}
.content-1 a:hover  span{
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #000;
    opacity: 0.3;
}

.content-2 p{
  height:45px;
  margin:30px 15px 10px 15px;
  background: url('../assets/contetn-header-2.png') no-repeat;
  border-bottom: 1px solid #666;
}
.content-2 img{
  width: 100%;
  height: 100%;
}
.content-2 a{
  display: block;
  height: 100%;
  width: 100%;
  position: relative;
}
.content-2 a:hover  span{
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #000;
    opacity: 0.3;
    box-shadow: 5px 5px 5px #000;
}

</style>
