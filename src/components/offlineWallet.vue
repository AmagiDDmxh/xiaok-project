<template>
  <div class="row">
      <div class="col-sm-12 col-lg-12">
    <div class="prohibitBox"></div>
     <div class="viewBoundary viewBoundary-left"></div>
     <div class="viewBoundary viewBoundary-right"></div>
     <div class="pageCenter">
         <p class="pageTitle">您已登录个人离线钱包</p>
         <div class="pageBody">
             <div class="pageCenter-l">
                 <ul class="list-unstyled">
                     <li class="menu">菜单</li>
                     <li class="colorDepth">资产列表</li>
                     <li>我的挂单</li>
                     <li>待付款</li>
                     <li>个人中心</li>
                 </ul>
             </div>
             <div class="pageCenter-r">
                 <div class="menu2">
                     <span>资产类型</span>
                     <span>总量</span>
                     <span>冻结量</span>
                     <span>可用量</span>
                 </div>
                 <!--转账弹窗start-->
                 <div class="popup">
                     <div class="formBox">
                         <form name="transferAccountsForm" id="transferAccountsForm" action="#" method="post">
                             <div class="row01">
                                 <p>
                                     <span>资产类型：</span><span class="assetType">小蚁币</span>
                                 </p>
                                 <p>
                                     <span>可用量：</span><span class="availableAmount">2382</span>
                                 </p>
                             </div>
                             <div class="row02">
                                 <label>转账数量：</label>
                                 <input class="form-control inp" name="transferQuantity" id="transferQuantity" type="text" placeholder="请输入转账数量">
                                 <span class="numMsg">数量错误</span>
                             </div>
                             <div class="row02 row03">
                                 <label>转账地址：</label>
                                 <input class="form-control inp" name="transferQuantity" id="transferAddress" type="text" placeholder="请输入转账地址">
                                 <span class="numMsg">地址错误</span>
                             </div>
                             <input type="submit" class="form-control sub" value="确认转账">
                         </form>
                     </div>
                 </div>
                 <!--转账弹窗end-->
                 <!--交易弹窗start-->
                 <div class="transactionPopup">
                     <div class="formBox formBox02">
                         <form action="#" method="post" id="transactionForm">
                             <div class="row01">
                                 <p>
                                     <span>资产类型：</span><span class="assetType">小蚁币</span>
                                 </p>

                                 <p>
                                     <span>市场价：</span><span class="availableAmount valid">0.99</span> CNY
                                 </p>
                                 <p>
                                     <span>可用量：</span><span class="availableAmount current_price">2382</span>
                                 </p>
                             </div>
                             <div class="row02">
                                 <label>出售量：</label>
                                 <input class="form-control inp" name="transferQuantity" id="transactionQuantity" type="text" placeholder="请输入数量">
                                 <span class="numMsg">数量错误</span>
                             </div>
                             <div class="row02 row03">
                                 <label>出售价：</label>
                                 <input class="form-control inp" name="transferQuantity" id="transactionPrice" type="text" placeholder="请输入价格">
                             </div>
                             <input id="transactionBtn" type="submit" class="form-control sub" value="确认挂单">
                         </form>
                     </div>
                 </div>
                 <!--交易弹窗end-->
                 <div class="pageCenter-r-cont">

                     <div class="trueHeight">
                       <!-- <div class="pageCenter-r-cont-in" v-for="item,index in items">
                           <span>{{item.name}}</span>
                           <span>{{item.total}}</span>
                           <span>{{item.frozen}}</span>
                           <span>{{item.valid}}</span>
                           <span v-if="index==0?'ok':''" class="rechargeBtn">充 值 </span>
                           <span  v-else class="transaction" dataIndex = "1">
                               <a href="javascript:void(0);">交易</a>
                           </span>
                           <span v-if="index==0?'ok':''" class="withdrawalsBtn">提 现</span>
                           <span  v-else class="transferAccounts" dataIndex = "1">
                               <a href="javascript:void(0);">转账</a>
                           </span>
                       </div> -->
                       <!-- <div class="pageCenter-r-cont-in">
                            <span>人民币</span>
                            <span>1000.25</span>
                            <span>0.00</span>
                            <span>1000.25</span>
                            <span class="rechargeBtn">充 值</span>
                            <span class="withdrawalsBtn">提 现</span>
                        </div>
                        <div class="pageCenter-r-cont-in">
                            <span>小蚁币</span>
                            <span>236.42541235</span>
                            <span>100</span>
                            <span>136.42541235</span>
                            <span class="transaction" dataIndex = "1">
                                <a href="javascript:void(0);">交易</a>
                            </span>
                            <span class="transferAccounts" dataIndex = "1">
                                <a href="javascript:void(0);">转账</a>
                            </span>
                        </div>

                         <div class="pageCenter-r-cont-in">
                             <span>小蚁股</span>
                             <span>4382</span>
                             <span>2000</span>
                             <span>2382</span>
                             <span class="transaction" dataIndex = "2"><a href="javascript:void(0);">交易</a> </span>
                             <span class="transferAccounts" dataIndex = "2"><a href="javascript:void(0);">转账</a></span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>开拍币</span>
                             <span>25315</span>
                             <span>0.00</span>
                             <span>25315</span>
                             <span class="transaction" dataIndex = "3"><a href="javascript:void(0);">交易</a> </span>
                             <span class="transferAccounts" dataIndex = "3"><a href="javascript:void(0);">转账</a></span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>小蚁币</span>
                             <span>236.42541235</span>
                             <span>100</span>
                             <span>136.42541235</span>
                             <span class="transaction" dataIndex = "4">
                                 <a href="javascript:void(0);">交易</a>
                             </span>
                             <span class="transferAccounts" dataIndex = "4">
                                 <a href="javascript:void(0);">转账</a>
                             </span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>小蚁股</span>
                             <span>4382</span>
                             <span>2000</span>
                             <span>2382</span>
                             <span class="transaction" dataIndex = "5"><a href="javascript:void(0);">交易</a> </span>
                             <span class="transferAccounts" dataIndex = "5"><a href="javascript:void(0);">转账</a></span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>开拍币</span>
                             <span>25315</span>
                             <span>0.00</span>
                             <span>25315</span>
                             <span class="transaction" dataIndex = "6"><a href="javascript:void(0);">交易</a> </span>
                             <span class="transferAccounts" dataIndex = "6"><a href="javascript:void(0);">转账</a></span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>小蚁币</span>
                             <span>236.42541235</span>
                             <span>100</span>
                             <span>136.42541235</span>
                             <span class="transaction" dataIndex = "7">
                                 <a href="javascript:void(0);">交易</a>
                             </span>
                             <span class="transferAccounts" dataIndex = "7">
                                 <a href="javascript:void(0);">转账</a>
                             </span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>小蚁股</span>
                             <span>4382</span>
                             <span>2000</span>
                             <span>2382</span>
                             <span class="transaction" dataIndex = "8"><a href="javascript:void(0);">交易</a> </span>
                             <span class="transferAccounts" dataIndex = "8"><a href="javascript:void(0);">转账</a></span>
                         </div>
                         <div class="pageCenter-r-cont-in">
                             <span>开拍币</span>
                             <span>25315</span>
                             <span>0.00</span>
                             <span>25315</span>
                             <span class="transaction" dataIndex = "9"><a href="javascript:void(0);">交易</a> </span>
                             <span class="transferAccounts" dataIndex = "9"><a href="javascript:void(0);">转账</a></span>
                         </div> -->
                     </div>
                 </div>
                 <div class="page-number">
                     <ul class="list-inline">
                         <li class="colorDepth">1</li>
                     </ul>
                 </div>
                 <footer class="pageFooter">离线钱包由小蚁区块链提供技术支持</footer>
             </div>
         </div>
     </div>

</div>
  </div>
</template>
  <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
  <script  src="../utils/offineWallet.js"></script>
    <!-- <script>
    import Vue from 'vue'
    var vueResource = require('vue-resource')
    Vue.use(vueResource)
    export default {
      data () {
        return {
          items: []
        }
      },
      mounted: function () {
        this.$http.get('http://otcgo.cn/api/v1/balances/AHZDq78w1ERcDYVBWjU5owWcbFZKLvhg7X').then((res) => {
          console.log(res.data)
          this.$data.items = res.data.balances
        }, (res) => {
          console.log(res)
        })
        console.log(this.$data.items)
      }
    }

    </script> -->
<style>
body{
    height: 100%;
    font-family: "黑体";
}
.viewBoundary{
    position: absolute;
    height: 100%;
    width: 16px;

}
.viewBoundary-left{
    left: 0;
}
.viewBoundary-right{
    right: 0;
}


.pageCenter{
    width: 1188px;
    margin-left: auto;
    margin-right: auto;
}
.pageTitle{
    width: 1140px;
    background-color: #f2f2f2;
    margin-top: 20px;
    font-size: 14.87px;
    line-height: 35px;
    padding-left: 27px;
    color: #009cff;
    border-radius: 5px;
}

.pageBody{
    margin-top: 70px;
}
.pageCenter-l,.pageCenter-r{
    float: left;
}
.pageCenter-l{
    width: 274px;
    letter-spacing: 2px;

}
.pageCenter-l ul li{
    padding-left: 109px;
    line-height: 39px;
    background: #f2f2f2;
    margin-bottom: 1px;
    font-size: 14.87px;
    color: #939393;
}
.pageCenter-l ul li.menu{
    background: #009cff;
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 2em;
}



.pageCenter-r{
    margin-left: 30px;
    width: 836px;

}
.menu2{
    width: 100%;
    height: 39px;
    line-height: 39px;
    background: #eeeeee;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    font-weight: bold;
    color: #515151;
    font-size: 14.67px;
}
.menu2 span:nth-child(1){
    margin-left: 22px;
}
.menu2 span:nth-child(2){
    margin-left: 81px;
}
.menu2 span:nth-child(3){
    margin-left: 143px;
}
.menu2 span:nth-child(4){
    margin-left: 124px;
}

.pageCenter-r-cont{
    height: 244px;
    overflow: hidden;
}
.pageCenter-r-cont-in{
    width: 100%;
    height: 61px;
    line-height: 61px;
    border-bottom: 1px solid #e8e8e8;
    font-size: 14.67px;
    color: #8c8c8c;
}
.pageCenter-r-cont-in div{
    display: inline-block;
}
.pageCenter-r-cont-in span:nth-child(1){
    border-top: none;
}
.pageCenter-r-cont-in:nth-child(even){
    background: #f8f8f8;
}
.pageCenter-r-cont-in span{
    display: inline-block;
}
.pageCenter-r-cont-in span:nth-child(1){
    width: 153px;
    padding-left: 32px;
}
.pageCenter-r-cont-in span:nth-child(2){
    width: 189px;
}
.pageCenter-r-cont-in span:nth-child(3){
    width: 163px;
}
.pageCenter-r-cont-in span:nth-child(4){
    width: 166px;
}
.rechargeBtn,.withdrawalsBtn{
    width: 60px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #009cff;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}
.rechargeBtn:hover,.withdrawalsBtn:hover{
  background: #008be3
}
.withdrawalsBtn{
    margin-left: 7px;
}
.transaction,.transferAccounts{
    width: 49px;
    height: 14.67px;
    line-height: 14.67px;
    color: #009cff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
}

.transaction{
    margin-left: 32px;
    border-left: 1px solid #dadada;
    border-right: 1px solid #dadada;
}
.transferAccounts{
    border-right: 1px solid #dadada;
    margin-left: -6px;
}
.popup{
    width: 486px;
    height: 256px;
    background: url("../assets/Popup.png");
    position: absolute;
    left: 610px;
    display: none;
    z-index: 999;
}
.formBox{
    margin-left: 46px!important;
    margin-top: 35px!important;
    width: 362px!important;
    height: 174px!important;
    color: #656565!important;
    font-size: 14.62px!important;
}
.row01,.row02{
    padding-left: 16px!important;
}
.row01 p{
    font-weight: bold!important;
    display: inline-block!important;
}
.row01 p:nth-child(2){
    margin-left: 64px!important;
}
.row02{
    margin-top: 8px!important;
    line-height: 28px!important;
}
.row02 label{
    font-weight: normal!important;
}
.inp,.sub{
    width: 203px!important;
    display: inline-block!important;
    font-size: 13.29px!important;
    color: #a3a3a3!important;
}
.row03{
    margin-top: 19px!important;
}
.numMsg{
    font-size: 13.29px!important;
    color: #ff0101!important;
    display: none!important;
}
.sub{
    margin: 18px 97px!important;
    height: 28px!important;
    line-height: 13px!important;
    font-size: 14.67px!important;
    background: #009cff!important;
    color: #ffffff!important;
}


.transactionPopup{
    width: 420px;
    height: 281px;
    background: url("../assets/transactionPopup.png");
    position: absolute;
    left: 630px;
    display: none;
    z-index: 999;
}
.formBox02{
    margin-left: 68px!important;
    margin-top: 36px!important;
}
.formBox02 .row01 p{
    display: block!important;
    margin-left: 0px!important;
}
.formBox02 .row01 p{
    display: block!important;
    margin-left: 0px!important;
    margin-bottom: 15px!important;
}
.formBox02 .row02{
    margin-top: -4px!important;
}
.formBox02 .row03{
    margin-top: 3px!important;
}
.formBox02 .inp{
    width: 138.81px!important;
    height: 27.91px!important;
}
.formBox02 .sub{
    width: 139px!important;
    height: 28px!important;
    margin-top: 7px!important;
    margin-left: 79px!important;
}
.page-number{
    width: 100%!important;
    height: 136px!important;
}
.page-number ul{
    margin-top: 55px!important;
    float: right!important;
}
.page-number ul li{
    float: left;
    background: #eeeeee;
    width: 25px;
    height: 25px;
    text-align: center;
    margin-right: 1px;
    color: #8c8c8c;
    font-size: 16px;
    line-height: 25px;
    padding: 0px;
    cursor: pointer;
}
.pageFooter{
    font-size: 13.33px;
    color: #b1b1b1;
    border-top: 1px solid #d3d3d3;
    padding-top: 9px;
}
/*Color depth*/

.pageCenter-l li.colorDepth{
    background: #e3e3e3;
}
.page-number ul li.colorDepth{
    background: #009cff;
    color: #ffffff;
}
/*hover*/
.pageCenter-l li:not(:nth-child(1)):hover{
    background:#ececec;
    cursor: pointer;
}

.prohibitBox{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 99;
    background: rgba(0,0,0,0.1);
    display: none;
}

</style>
