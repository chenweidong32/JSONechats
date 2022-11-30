/*
 * @Author: cwd
 * @Date: 2022-11-30 15:42:51
 * @LastEditors: cwd
 * @LastEditTime: 2022-11-30 15:58:14
 * @FilePath: \cwdniubi\cwdniubi\src\router\route.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by cwd, All Rights Reserved. 
 */
import { RouteRecordRaw } from 'vue-router';

export const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('/@/views/main/index.vue'),
		meta: {
			title: '首页',
		},
	},
	
];
