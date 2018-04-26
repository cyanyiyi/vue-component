import Mock from 'mockjs'
import menuApi from './menu'

// 菜单
Mock.mock(/\/menu\/getMenuList/, 'get', menuApi.getMenuList)
