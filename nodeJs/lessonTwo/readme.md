Question:

1、`http://localhost:1314/`直接访问，会出错。错误是`crypto.js`抛出的，
主要原因是未传入`q`参数，所以`req.query.q`的值是undefined。问题来了，有什么办法检测是否传入`q`参数或者是否有值？？？