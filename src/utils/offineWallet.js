(function(){
    $(document).ready(function(){
        data();
        var resdata=[];
        //20秒刷新一次
       window.setInterval(data,20000);
       function data(){
         $.ajax({
           url: 'http://otcgo.cn/api/v1/balances/AHZDq78w1ERcDYVBWjU5owWcbFZKLvhg7X',
           success:function(res){
             var html='';
             resdata=res.balances;
             for (var i = 0; i < res.balances.length; i++) {
               html+='<div class="pageCenter-r-cont-in">'
               html+='<span>'+ res.balances[i].name+'</span>'
               html+='<span>'+res.balances[i].total+'</span>'
               html+='<span>'+res.balances[i].frozen+'</span>'
               html+='<span>'+res.balances[i].valid+'</span>'
               if(i==0){
                 html+='<span class="rechargeBtn">充 值</span>'
                 html+='<span class="withdrawalsBtn">提 现</span>'
               }else{
                 html+='<span class="transaction" dataIndex = " '+i+' " data-asset="'+res.balances[i].asset+'"><a href="javascript:void(0);">交易</a></span>'
                 html+='<span class="transferAccounts" dataIndex = "'+i+'"><a href="javascript:void(0);">转账</a></span>'
               }

               html+='</div>'
             }
             $('.trueHeight').html(html);
             //ajax请求完执行操作
             var trueHeight = $('.trueHeight').height(),
                  multiple = trueHeight/244;
             if(multiple > 1){
                 multiple = Math.ceil(multiple);
                 for(var i = 1,indexNumber = 1 ; i < multiple ; i++){
                     indexNumber++;
                     $('.page-number ul').append('<li>'+indexNumber+'</li>');
                 }
             }

             $('.page-number ul li').click(function(){
                 var getClassAggregate = $('.page-number ul li'),
                     pageIndex = parseInt($(this).html());
                     $('.trueHeight').css('marginTop',-(pageIndex-1)*244+'px');

                 getClassAggregate.removeClass('colorDepth');
                 $(this).addClass('colorDepth');
             })

             $('.transaction').click(function(){
                 var transactionIndex = $(this).attr('dataIndex');
                 var matginT = -9+transactionIndex%4 * 61;
                 $('.transactionPopup').css('marginTop',matginT+'px');
                 $('.transactionPopup').css("display","block");
                 $('.prohibitBox').show();
             })
              $('.transaction').click(function(){
                  console.log($(this).data('asset'))
                  var temp=$(this).data('asset');
                   for (var i = 0; i < resdata.length; i++) {
                     if(resdata[i].asset==temp){
                       $('.current_price').text(resdata[i].current_price)
                       $('.valid').text(resdata[i].valid)
                     }
                   }
              })
             $('.transferAccounts').click(function(){
                 var transactionIndex = $(this).attr('dataIndex');
                 var matginT = -7+transactionIndex%4 * 61;
                 $('.popup').css('marginTop',matginT+'px');
                 $('.popup').css("display","block");
                 $('.prohibitBox').show();
             })

             $('.prohibitBox').click(function(){
                 $('.transactionPopup').hide();
                 $('.popup').hide();
                 $(this).hide();
             });
              //点击交易请求数据
              // $.ajax({
              //   url:'http://otcgo.cn/api/v1/order',
              //   type:'post',
              //   data:JSON.stringify({
              //       "assetid": "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b",
              //       "price": "2",
              //       "amount": "100",
              //       "client": "0383cdbc3f4d2213043c19d6bd041c08fbe0a3bacd43ef695500a1b33c609a9e8a",
              //       "way": true,
              //       "valueassetid": "5fd33b8d1ff8185b30f59c35313e60663d026eb8351d0dd9fd6f60eb279b301a",
              //       "hex_pubkey": "0483cdbc3f4d2213043c19d6bd041c08fbe0a3bacd43ef695500a1b33c609a9e8a180eee2ada65ddb65154863c57bac9ab1b89a61593235991d5fb6f627c0cadbd"
              //     }),
              //   success:function(res){
              //     console.log(res)
              //   }
              // })



           }
         })
       }



    })
})()
