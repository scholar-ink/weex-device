import ViewLogin from './login.vue'

const router = [
  {
    path: '/login',
    component: ViewLogin
  },
]

exports.pageRouter = function (url) {
  console.log(url)
  let base = router.find(function (obj) {
    return obj.path === url
  })
  return base.component.__file
}

// // 页面传参设置
// exports.pageRouter = function (url, params) {
//   var base = router.find(function (obj) {
//     return obj.path === url
//   })
//   if (!params) {
//     return base.component.__file
//   } else {
//     return {
//       url: base.component.__file,
//       params: params
//     }
//   }
// }
