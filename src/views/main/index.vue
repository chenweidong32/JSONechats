<!--
 * @Author: cwd
 * @Date: 2022-11-30 15:41:19
 * @LastEditors: cwd
 * @LastEditTime: 2022-11-30 17:41:33
 * @FilePath: \cwdniubi\cwdniubi\src\views\main\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cwd, All Rights Reserved. 
-->

<template>
  <div class="container">
    <div class="left">
      <monacoEditor
        v-model="value"
        :language="language"
        :hight-change="hightChange"
        :read-only="tablist.length === 0"
        width="100%"
        height="100%"
        @editor-mounted="editorMounted"
      />
    </div>

    <div class="right">
      <div class="poabTop">
        <el-button type="primary" @click="removeMychart">清空</el-button>
        <el-button type="success" @click="ClickMychart">生成</el-button>
        <el-button type="primary" @click="ClickimportFont">导入字体</el-button>
        <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
        <el-button type="primary" @click="ClickdownloadPng">下载图片</el-button>

      </div>

      <div class="echarts" ref="chartsCenterOneRef"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, getCurrentInstance } from "vue";
import { ElMessage,UploadFile } from "element-plus";
import monacoEditor from "/@/views/components/monacoEditor.vue";
import * as echarts from "echarts";

const value = ref(`{
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  }`);
const language = ref("json");
const hightChange = ref<any>(true);
const tablist = reactive<any>([1]);
const { proxy } = <any>getCurrentInstance();

watch(value, (val) => {
//   console.log(val);
});
const removeMychart = () => {
  value.value = "";
};
//导入字体
const ClickimportFont = () =>{

}
//下载图片
const ClickdownloadPng = () =>{

}
//生成
const ClickMychart = () => {
  let option: any = value.value;

  if (!option) return ElMessage.error("左侧编辑器输入不能为空");

  option = eval('(' + option + ')'); 
  const myChart = echarts.init(proxy.$refs.chartsCenterOneRef);
  myChart.setOption(option);
  myChart.resize();
};
const editorMounted = (option) => {
  //   console.log("editor实例加载完成", editor);
};



</script>


<style scoped  lang="scss">
.container {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 100%;
  .left {
    width: 60%;
    height: 100%;
  }
}
.right {
  height: 100%;
  min-height: 380px;
  margin: 20px;
  width: 40%;
  position: relative;
  .poabTop {
    position: absolute;
    width: 100%;
    top: 20px;
    display: flex;
  }
  .echarts {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-height:90%
  }
}
</style>
