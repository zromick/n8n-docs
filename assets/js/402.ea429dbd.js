(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1280:function(t,n,e){"use strict";e.r(n);e(10);var o={data:function(){return{items:[]}},props:["node"],beforeMount:function(){var t=this;fetch("https://api.n8n.io/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n\t\t\t\t\tquery GetNode{\n\t\t\t\t\t\tnodes (where: {displayName:"'.concat(this.node,'"}){\n\t\t\t\t\t\t\tdisplayName\n\t\t\t\t\t\t\tcodex\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t')})}).then((function(t){return t.json()})).then((function(n){t.$data.items=n.data.nodes[0].codex.data.resources.generic,console.log(t.items)})).catch((function(t){return console.log(t)}))}},a=e(26),r=Object(a.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",t._l(t.items,(function(n){return e("li",{key:n.label},[e("a",{attrs:{href:n.url,target:"_blank"}},[t._v(t._s(n.label)+" "+t._s(n.icon))])])})),0)}),[],!1,null,null,null);n.default=r.exports}}]);