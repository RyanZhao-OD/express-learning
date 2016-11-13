//是路由里的路径
let path = '/users/:name/:age';
//真实请求的URL
let url = '/users/zfpx/8';
//存放所有的参数名
let paramNames = [];

let regStr = path.replace(/:(\w+)/g, function(matchedStr, group1){
    paramNames.push(group1);    // name age 添加进来的
    return '(\\w+)';
});
console.log(regStr);//   \/users\/(\w+)\/(\w+)

let reg = new RegExp(regStr);
let result = url.match(reg);
//[ '/users/zfpx/8', 'zfpx', '8', index: 0, input: '/users/zfpx/8' ]
console.log(result);
let params = {};
//循环数组名
for(let i = 0; i < paramNames.length; i++){
    params[paramNames[i]] = result[i + 1];
}
console.log(params);