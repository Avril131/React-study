const menuGlobal=[
    {
        id:'home',
        pid:'0',
        name:'home页',
        icon:'user',
        path: '/home',
        models: () => [import('../models/home')], //models可多个
        component: () => import('../routes/home'),
    }, 
    {
        id:'tmp1',
        pid:'0',
        name:'tmp1页',
        icon:'user',
        path: '/home/tmp1',
        models: () => [import('../models/tmp1')], //models可多个
        component: () => import('../routes/tmp1'),
    }, 
    {
        id:'tmp2',
        pid:'0',
        name:'tmp2页',
        icon:'user',
        path: '/tmp2',
        models: () => [import('../models/tmp2')], //models可多个
        component: () => import('../routes/tmp2'),
    }, 
  ];
  
export default {
    menuGlobal
}