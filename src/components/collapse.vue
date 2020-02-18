<template>
    <div>
        <div class="title" @click="toggle">{{title}}
            
        </div>
        <div :class="['content',opened?'':'hide-el']">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        open: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            opened: false,
        }
    },

    created(){
        this.open && ( this.opened = this.open);
    },

    methods: {
        toggle(){
            this.opened = !this.opened;
        },
    },
}
</script>

<style lang="scss">
.title{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bolder;
    border-bottom: 1px dotted #fff;
}
.title::before{
    content: "";
    line-height: 1;
    padding-right: 6px;
    margin-right: 14px;
    background-color: cornflowerblue;
}

.content{
    margin: 20px 0 30px 20px;
}

.hide-el{
    visibility: hidden;
    height: 0;
}

</style>