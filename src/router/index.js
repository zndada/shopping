const routers = [
  {
    path: '/home',
    meta: {
      title: '主页'
    },
    component: (resolve) => require(['../page/home.vue'], resolve),
    children: [
      {
        path: '/list',
        meta: {
          title: '商品列表'
        },
        component: (resolve) => require(['../page/list.vue'], resolve)
      },
      {
        path: '/product/:id',
        meta: {
          title: '商品详情'
        },
        component: (resolve) => require(['../page/product.vue'], resolve)
      },
      {
        path: '/cart',
        meta: {
          title: '购物车'
        },
        component: (resolve) => require(['../page/cart.vue'], resolve)
      }
    ]
  },
  // 当访问路径不存在时，自动跳转到主页
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/list'
  }
]
export default routers
