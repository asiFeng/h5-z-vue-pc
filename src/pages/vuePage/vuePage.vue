<template>
    <div>
        <h1> vue Page</h1>
        <h3>{{getTime()}}</h3>
        <el-button @click="cc">dd</el-button>
        <el-button @click="show('啥？')">show</el-button>

    </div>
</template>


<script>
import { getTime } from "@/utils/date"
import { debounce } from '@/utils/debounce'
import { show } from '@/utils/util'

export default {
    data(){
        return {

        }
    },
    methods: {
        getTime,
        cc: debounce(),
        show,
    }
}
</script>
