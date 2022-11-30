/*
 * @Author: cwd
 * @Date: 2022-11-30 15:02:48
 * @LastEditors: cwd
 * @LastEditTime: 2022-11-30 16:34:39
 * @FilePath: \cwdniubi\cwdniubi\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by cwd, All Rights Reserved. 
 */
import { createApp } from 'vue'
import '/@/style.scss';
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
const app = createApp(App);

app.use(router).use(ElementPlus).mount('#app')
