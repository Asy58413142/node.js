var url=require('url');
var querystring=require('querystring');
//解析URL地址
var parse=url.parse("baidu.com.cn:1008/index?asdas=dasd")
console.log(parse)
//序列化URL地址
var result=url.format(parse);
console.log(result);
//拼接URL地址
var resolve=url.resolve('http://baidu.com/','/sdasdasda')
console.log(resolve)
//解析查询条件
//1.需要解析的查询对象
//2.连接两个参数之间的&符，默认为&
//3.key和value之间的连接符，默认为=
var stringify=querystring.stringify({name:'ssss',sex:['s','y'],year:'12'},'*',':')
console.log(stringify)
//序列化查询条件
//1.需要序列化的查询对象
//2.解析时，连接两个参数之间的&符，默认为&
//3.解析时，key和value之间的连接符，默认为=
var querystringParse=querystring.parse('name:ssss*sex:s*sex:y*year:12','*',':')
console.log(querystringParse)
//转译
var escape=querystring.escape("<你好>")
console.log(escape)
//反转译
var unescape=querystring.unescape("%3%b%R%5%3E")
console.log(unescape)

//chrome://net-internals/#dns查看浏览器缓存记录