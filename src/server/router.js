import express from 'express'
import path from 'path'
const router = express.Router()

// <router history={ browserHistory }>

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('用户所访问的时间为: ', Date());
  next();
});
//解决了url访问报错，需要引入path模块，并且发送的index路径必须为完整路径
router.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname , './public/index.html'));
});

export default router
