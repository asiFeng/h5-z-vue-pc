<template>
  <div>
    <h1>vue Page</h1>
    <h3>getTime: {{getTime()}}</h3>

    <collapse title="编辑器">
      <el-button @click="cc">dd</el-button>
      <el-button @click="show('啥？')">show</el-button>

      <div class="editor-container">
        <div @drop="dropCatch" @dragover.prevent>
          <div class="from-box-01">
            <span
              :class="['target-item', 'type-'+item.type]"
              v-for="(item, i) in preData"
              :key="i"
              draggable
              @dragstart="dragstart(item)"
              @dragend="dragend"
            >{{item.value}}</span>
          </div>
          <div class="from-box-02">
            <span
              :class="['target-item', 'type-'+item.type]"
              v-for="(item, i) in preSign"
              :key="i"
              draggable
              @dragstart="dragstart(item)"
              @dragend="dragend"
            >{{item.value}}</span>
          </div>
        </div>

        <div class="to-box" @drop="drop" @dragover.prevent>
          <h3 style="margin-left: 10px;">计算公式：</h3>
          <span
            :class="['target-item', 'type-'+item.type]"
            v-for="(item, i) in targetCal"
            :key="i"
            draggable
            @dragstart="dragsOutStart(item)"
            @dragend="dragOutend"
          >{{item.value}}</span>
        </div>
        <el-button class="show-cal-btn" v-if="targetCal.length" @click="showCal()">查看计算公式</el-button>
      </div>
    </collapse>
  </div>
</template>


<script>
import { getTime } from "@/utils/date";
import { debounce } from "@/utils/debounce";
import { show } from "@/utils/util";

export default {
  data() {
    return {
      preData: [
        { type: "d", value: "data 0" },
        { type: "d", value: "data 1" }
      ],
      preSign: [
        { type: "s", value: "+" },
        { type: "s", value: "-" },
        { type: "s", value: "abs" }
      ],
      targetItem: null,
      targetCal: []
    };
  },
  methods: {
    getTime,
    cc: debounce(),
    show,

    dragstart(item) {
      //   console.log("dragstart", item);
      this.targetItem = item;
    },

    dragend(event) {
      //   console.log("dragend", event);
      this.targetItem = null;
    },

    drop(event) {
      //   console.log("drop", event);
      this.targetItem._t = new Date().getTime();
      this.targetCal.push(this.targetItem);
    },

    dragsOutStart(item) {
      //   console.log("dragsOutStart", item);
      this.targetItem = item;
    },

    dragOutend() {
      this.targetItem = null;
    },

    dropCatch() {
      let idx = this.targetCal.indexOf(this.targetItem);
      if (idx > -1) {
        this.targetCal.splice(idx, 1);
      }
    },

    // 显示计算公式
    showCal() {
      let cal = this.targetCal.map(el => el.value).join(" ");
      console.log(cal);
    }
  }
};
</script>

<style lang="scss">
.editor-container {
  margin: 20px 0;
  border: 2px solid #ddd;
}

.target-item {
  color: #fff;
  border-radius: 2px;
  padding: 2px 6px;
  display: inline-block;
  margin: 6px 10px;
}
.target-item.type-d {
  background-color: cornflowerblue;
  padding: 6px 16px;
}
.target-item.type-s {
  background-color: rgb(129, 199, 64);
}
.to-box {
  border: 1px solid #ccc;
  background-color: #fff;
  height: 280px;
}

.show-cal-btn {
  margin-left: auto;
  width: 100%;
}
</style>
