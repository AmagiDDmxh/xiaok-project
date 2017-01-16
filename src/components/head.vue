<template>
<div id="head">
  <div class="logo">
    <div class="logo-left">

      <router-link to="/index"><img  src="../assets/logo.png" alt="" /></router-link>
      <span id="des">{{ msg }}</span>
    </div>
    <div class="logo-right">
      <ul>
        <li class="border">  <a  href="">登录钱包</a></li>
        <li>  <a href="">创建钱包</a></li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="md-col-12">

    </div>
  </div>
<div class="container" style="height:50px">
  <div class="row">
  <nav class="navbar navbar-default" role="navigation">
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
        <ul class="nav navbar-nav">
          <li class="frist "><a class="menu "><router-link to="/home">分类资产</router-link>
            <ul class="menulist">
              <li><a href="">小蚁股</a></li>
              <li><a href="">小蚁币</a></li>
              <li><a href="">开拍币</a></li>
            </ul>
          </a>
          </li>
          <li><a class="menu active"><router-link to="/home">首 &nbsp  页</router-link></a></li>
            <li><a class="menu"><router-link to="/home">免费挂单</router-link></a></li>
        <li><a class="menu"><router-link to="/home">加入社群 </router-link></a></li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="资产关键词">
          </div>
          <button type="submit" class="btn btn-default">
            <router-link to="/searchResult"  style="color:#000;text-decoration:none">搜索</router-link></button>
        </form>
      </div><!-- /.navbar-collapse -->
  </nav>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'h',
  data () {
    return {
      msg: '基于智能合约的数字资产C2C平台'
    }
  }
}
</script>
<style>
.btn-default a{
  text-decoration: none;
}
#header {
  width: 100%;
  background: #fff;
}
.logo {
  height: 148px;
  padding: 50px;
}
.logo img {
  margin: 0 10px 0 10px;
}
.logo-left{
  float: left;
  margin-top: 20px;
}
.logo-right{
  float: right;
  padding: 50px 20px 0 0;
}
.logo-right li{
  list-style: none;
  float: left;
  border-right: 1px solid #dadada;
}
.logo-right .border{
  border-left: 1px solid #dadada;
}
.logo-right .border a{
  color: #009cfd;
}
.logo-right li a{
  color: #7c7c7c;
  margin: 0 13px;
}
.logo-right li a:hover{
  color: #009cfd;
}
.navbar{
  background-color: #000 !important;
  border:none !important;
  border-radius: 0 !important;
  font-family: "微软雅黑"
}
.navbar-nav .active{
  background: #009cff;
}
.form-control,.form-group{
  width: 255px!important;
}
.container-fluid{
  width:1200px;
  margin:0 auto;
}
.nav{
  width: 65%;

}
ul>.frist{
  background: none;
}

ul>li>.menu{
  color:#fff !important;
  font-size: 1.2em;
  background: none;
  padding-left: 30px !important;
  padding-right: 30px !important;
}
.navbar-nav li:hover{
  background: #009cff;

}
.navbar-nav li:hover a{
  color: #fff;
    text-decoration: none;
}
.menu:hover ul{
  display: block;
}

.menulist>li{
  list-style: none;
  background: #555;
  width: 160px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #666;
}
.menulist>li:hover{
  background: #333
}
.menulist>li:hover a{
  color: #337ab7
}
.menulist>li>a{
  color: #fff!important;
}
.menulist{
  position: absolute;
  top:50px;
  left:0;
  z-index: 100;
  padding: 0;
  display: none;
}

.search{
  display: inline-block;
}
#des {
  display: inline-block;
  height: 100%;
  line-height: 100%;
  font-weight: 500;
  font-size: 1.2
}
.navbar-default{
  margin:15px!important;
}
.navbar-collapse{
  padding: 0;
}
</style>
