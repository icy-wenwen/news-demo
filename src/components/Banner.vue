<template>
    <div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt="">
                <div class="text-box">
                    <h2>还可以降低首款健身房11111</h2>
                    <p>刘德华111</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt="">
                <div class="text-box">
                    <h2>还可以降低首款健身房22222</h2>
                    <p>刘德华222</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt="">
                <div class="text-box">
                    <h2>还可以降低首款健身房33333</h2>
                    <p>刘德华333</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
    export default{
        mounted(){
         this.slider();
        },
        methods:{
        slider(){
        $(function(){
          var mySwipe=Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function(index,element){
              $('.banner ol li').removeClass('active');
              $('.banner ol li').eq(index).addClass('active');

            }
          })
        });
      }
    }
    }
</script>