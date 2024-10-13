# html 文件的组成

一个完整的 **HTML** 文档由以下几个部分构成

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## **`<!DOCTYPE>`**

`<!DOCTYPE>` 声明位于文档中的最前面的位置，处于`<html>`标签之前。

`<!DOCTYPE>` 声明不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。

在 HTML 4.01 中， `<!DOCTYPE>` 声明需引用 `DTD` （文档类型声明），因为 HTML 4.01 是基于 SGML （Standard Generalized Markup Language 标准通用标记语言）。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。

HTML5 不是基于 SGML，因此不要求引用 DTD。

常见的 DOCTYPE 声明:

- html5

  ```html
  <!DOCTYPE html>
  ```

- HTML 4.01 Strict

  这个 DTD 包含所有 HTML 元素和属性，但不包括表象或过时的元素（如 font ）。框架集是不允许的。

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  ```

- HTML 4.01 Transitional

  这个 DTD 包含所有 HTML 元素和属性，包括表象或过时的元素（如 font ）。框架集是不允许的。

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  ```

- HTML 4.01 Frameset

  这个 DTD 与 HTML 4.01 Transitional 相同，但是允许使用框架集内容。

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
  ```

## **`<html></html>`** 标签

html 标签是 html 文档的根标签，其他所有标签都要包含在该标签内；html 标签上包含一个 `lang` 属性，用来定义文档的语言，其中：

- `en` 表示语言为英语

- `zh-CN` 表示语言为中文

## **`<head></head>`** 标签

head 标签于 html 标签中；head 标签中定义当前页面的元数据，如编码，标题；也可以定义或引入 css\javascript

head 标签中主要存在以下几种标签

### **`<meta/>`** 标签

`<meta>` 标签是 HTML 语言头部的一个辅助性标签，提供有关页面的元信息（比如：针对搜索引擎和更新频度的描述和关键词、定义页面使用的语言），使用好 `<meta>` 标签对 HTML 很有益。

`<meta>` 标签具有以下属性：

#### `charset` 定义文档的字符编码。

```html
<meta charset="UTF-8" />
```

#### `name="viewport"` 用于定义移动设备上网页的视口设置，以控制网页的显示方式和缩放行为。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

#### `name="application-name"` 规定页面所代表的 Web 应用程序的名称。

```html
<meta name="application-name" content="This is a webpage" />
```

#### `name="author"` 规定文档的作者的名字。

```html
<meta name="author" content="Black Star" />
```

#### `name="description"` 规定页面的描述。搜索引擎会把这个描述显示在搜索结果中。

```html
<meta name="description" content="前端知识合集网站" />
```

#### `name="keywords"` 规定一个逗号分隔的关键词列表 - 相关的网页（告诉搜索引擎页面是与什么相关的）。

```html
<meta name="keywords" content="HTML,CSS,Javascript" />
```

#### `name="generator"` 标识用于生成文档的软件或工具。它通常用于表明网站是由哪个内容管理系统或编辑器创建的。

```html
<meta name="generator" content="VitePress" />
```

#### `name="robots"` 用于指定搜索引擎爬虫如何处理页面。这可以控制搜索引擎是否索引页面以及是否跟踪页面上的链接。

```html
<meta name="robots" content="index,follow" />
```

对应 content 值有以下几种：

- all（默认）：文件将被检索，且页面上的链接可以被查询；
- none：文件将不被检索，且页面上的链接不可以被查询；
- index：文件将被检索；
- noindex：文件将不被检索；
- follow：页面上的链接可以被查询；
- nofollow：页面上的链接不可以被查询；

#### `http-equiv="Content-Type"` 用于定义文档的类型和字符编码。它告诉浏览器文档的内容类型和应如何解析内容。

```html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
```

#### `http-equiv="Cache-Control"` 缓存控制

#### `http-equiv="Expires"` 设置过期时间

#### `http-equiv="refresh"` 用于设置页面在特定时间间隔后自动刷新，并可以指定刷新后要加载的页面。可以用于重定向用户到另一个页面，或者定期更新页面内容。

content 属性的值由两部分组成：刷新间隔（以秒为单位）和可选的 URL。

```html
<meta http-equiv="refresh" content="5; url=https://www.example.com" />
```

### **`<title></title>`** 标签

用来定义文档的标题，标题将显示在浏览器标签栏中。

```html
<title>这是一个html 文档</title>
```

## **`<body></body>`** 标签

body 标签包含于 html 标签中；body 标签中定义页面的主体部分，如文字、图片等；body 标签中也可以定义或引入 javascript
