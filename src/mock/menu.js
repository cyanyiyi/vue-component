// import Mock from 'mockjs'
export default {
  getMenuList () {
    const menu = [
      {
        index: '1',
        name: '订单管理',
        path: '',
        sub: [
          {
            index: '1',
            name: '订单列表',
            path: ''
          },
          {
            index: '2',
            name: '工单列表',
            path: ''
          }
        ]
      },
      {
        index: '2',
        name: '系统管理',
        path: '',
        sub: [
          {
            index: '1',
            name: '权限管理',
            path: '',
            sub: [
              {
                index: '1',
                name: '菜单权限',
                path: ''
              },
              {
                index: '2',
                name: '人员权限',
                path: ''
              }
            ]
          },
          {
            index: '2',
            name: '基础设置',
            path: ''
          }
        ]
      },
      {
        index: '3',
        name: '库存管理',
        path: ''
      }
    ]
    return menu
  }
}
