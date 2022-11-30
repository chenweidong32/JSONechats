/*
 * @Author: cwd
 * @Date: 2022-11-30 15:42:04
 * @LastEditors: cwd
 * @LastEditTime: 2022-11-30 15:57:28
 * @FilePath: \cwdniubi\cwdniubi\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by cwd, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from '/@/router/route';

export const router = createRouter({
	history: createWebHashHistory(),
	routes: staticRoutes,
})

export default router;