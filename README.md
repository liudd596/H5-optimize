## 移动端H5优化指南

> PC端优化手段在Mobile则同样适用<br>
> 在Mobile则我们提出3秒钟渲染完成首屏指标<br>
> 首屏加载3秒完成或使用Loading<br>
> 基于联通3G网络平均338kb/s（2.71mb/s）,所以首屏资源不应超过1014KB<br>
> Mobile则因手机配置原因，除加载外渲染速度也是优化重点<br>
***
### 加载优化
1.合并CSS、JavaScript  
2.合并小图片，使用雪碧图  
3.缓存一切可缓存的资源  
4.使用长Cache  
5.使用外联式引用CSS、JavaScript  
6.压缩HTML、CSS、JavaScript  
7.启用GZip  
8.使用首屏加载  
9.使用按需加载  
10.使用滚屏加载  
11.通过Media Query加载  
12.增加Loading进度条  
13.减少Cookie  
14.避免重定向  
15.异步加载第三方资源
***
### CSS优化
1.CSS写在头部，JavaScript写在尾部或异步  
2.避免图片和iframe等的空src  
3.尽量避免重设图片大小  
4.图片尽量避免使用DataURL  
5.尽量避免写在HTML标签中写Style属性  
6.避免CSS表达式  
7.移除空的CSS规则  
8.正确使用Display的属性  
9.不滥用Float   
10.不滥用Web字体  
11.不声明过多的Font-size  
12.值为0时不需要任何单位  
13.标准化各种浏览器前缀  
14.避免让选择符看起来像正则表达式
***
### 图片优化
1.使用智图  
2.使用(CSS3、SVG、IconFont)代替图片  
3.使用Srcset  
4.webP优于JPG   
5.PNG8优于GIF  
6.首次加载不大于1014KB(基于3秒联通平均网速所能达到的值)  
7.图片不宽于640  
***
### 脚本优化
1.减少重绘和回流  
2.缓存Dom选择与计算  
3.缓存列表.length  
4.尽量使用事件代理，避免批量绑定事件  
5.尽量使用ID选择器
6.使用touchstart、 touchend代替click  
***
### 渲染优化
1.HTML使用Viewport  
2.减少Dom节点  
3.尽量使用CSS动画  
4.合理使用requestAnimationFrame动画代替setTimeout  
5.适当使用Canvas动画  
6.Touchmove、Scroll事件会导致多次渲染  
7.使用(css3 transitions、css3 3D transforms、Opacity、Canvas、webGl、video)来触发GPU渲染
