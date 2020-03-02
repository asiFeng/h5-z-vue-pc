<template>
    <div>
        <h1> node Page</h1>
        <h3>{{getTime()}}</h3>
        <el-button @click="cc">dd</el-button>
    </div>
</template>

<script>
import { getTime } from "@/utils/date"
import { debounce } from '@/utils/debounce'
export default {
    data(){
        return {}
    },
    methods: {
        getTime,
        cc: debounce(),
    }
}
</script>