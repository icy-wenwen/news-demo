<template>
    <div id="home">
        <div class="content mt30">
            <div class="newsList">
                <ul>
                    <li v-for="(item,index) in arrList">
                        <router-link :to="'/article/'+item.id">
                            <h2>{{index}}.{{item.title}}</h2>
                            <p>
                                {{item.detail}}
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                arrList:[]
            }
        },
        mounted(){
            // 获取数据
            this.fetchData()
        },
        methods:{
            fetchData(){
                var _this = this;
                this.$http.get('src/data/follow.data').then(
                    function (res) {
                        _this.arrList=res.data;
                    }).catch(function(err){
                        console.log(err)
                    })
            }
        }
    }
</script>
<style>
    .mt30{
        margin-top: 30px;
    }
</style>