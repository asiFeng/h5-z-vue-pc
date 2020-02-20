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
    line-height: 1.6;
    color: rgb(0, 20, 134);
    background-color:lightsteelblue;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bolder;
    border-bottom: 1px dotted #fff;
    letter-spacing: 2px;
}
.title::before{
    content: "";
    padding-right: 6px;
    margin-right: 14px;
    // background-color: cornflowerblue;
    background-color: rgb(217, 229, 252);
}

.content{
    margin: 20px 0 30px 20px;
}

.hide-el{
    visibility: hidden;
    height: 0;
    margin: 0;
}

</style>