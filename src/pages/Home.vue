<template>
    <div id="app-container">
        <section class="app-title">测试平台</section>
        <section class="menu-container">
            <ul>
                <li  class="menu-item" v-for="(item, index) in menuList" 
                    :key="index" 
                    @click="toPage(item.page, item.pageName)">{{item.pageName}}</li>
            </ul>
        </section>
        <section class="main-content">
            <section class="bread-cast">{{currentPageName}}</section>
            <section>
                <router-view style="padding: 30px 15px;" />
            </section>
        </section>
    </div>

</template>

<script>
export default {
    name:'home',
    data(){
        return {
            currentPageName:'Home',
            // 从 vuex 获取系统“菜单列表”
            menuList: this.$store.state.systemMenuList,
        }
    },
    methods:{
        toPage(page, pageName){
            this.$router.push( {'name': page} );
            this.currentPageName = pageName;
            console.log('home page', this.currentPageName,this.$router);
            
        },
    },

    created(){
        console.log('home page created', this.$route.matched);
        
    },
}
</script>

<style lang="scss">
$bg-l-gray: #f1f1f1;
$bg-d-gray: #e1e1e1;

#app-container{
    overflow: hidden;
    height: 100%;
    position: relative;
    
    .app-title{
        line-height: 44px;
        background-color: #000;
        color: #fff;
    }
}


.menu-container{
    position: absolute;


    // float: left;
    width: 15%;
    height: 100%;
    background-color: $bg-l-gray;
    padding-left: 0;
    ul{
        list-style: none;
        padding-left: 0;
    }
    li{
        padding-left: 20px;
        line-height: 2.6rem;
        border-bottom: 1px solid #fff;
    }
    li:hover{
        background-color: $bg-d-gray;
    }
}
.main-content{
    margin-left: 15%;
    border-left: 2px solid #fff;

    padding: 10px 0px;
    // float: left;
    // width: 85%;
    height: 100%;
    // margin-left: 4px;
    .el-header{
        background-color: $bg-l-gray;
        color: yellow;
    }
    background-color: #f1f1f1;
}

.bread-cast{
    padding: 10px 30px;
    border-bottom: 1px solid #fff;
}
body{
    height: unset!important
}


</style>

