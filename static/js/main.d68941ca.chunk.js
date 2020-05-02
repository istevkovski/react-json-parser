(this["webpackJsonpjson-parser"]=this["webpackJsonpjson-parser"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),o=(n(14),n(5)),i=n.n(o),l=n(8),u=n(1),d=n(2),p=n(4),m=n(3);function h(e){return Object.entries(e)}var f=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isExpanded:!1},a}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){this.state.isExpanded!==this.props.expanded&&this.props.expanded!==e.expanded?this.setState({isExpanded:this.props.expanded}):!0===this.props.isAnyExpanded&&this.setState({isExpanded:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){e.setState({isExpanded:!e.state.isExpanded},(function(){e.props.counter(e.state.isExpanded?1:-1)}))}},r.a.createElement("div",{className:"expandable"},this.props.item[0],this.state.isExpanded?r.a.createElement("span",null,"-"):r.a.createElement("span",null,"+"))),r.a.createElement("td",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:this.state.isExpanded?null:"hide"},r.a.createElement("tbody",null,function(e,t,n,a){var s=[];return e.map((function(e,c){"string"===typeof e[1]||"number"===typeof e[1]?s.push(r.a.createElement(E,{item:e,key:"sC".concat(c)})):"object"===typeof e[1]&&s.push(r.a.createElement(f,{item:e,key:"sT".concat(c),expanded:t,isAnyExpanded:a,counter:n}))})),s}(h(this.props.item[1]),this.props.expanded,this.props.counter,this.props.isAnyExpanded))),r.a.createElement("span",{className:this.state.isExpanded?"hide":null},"..."))))}}]),n}(r.a.Component);function E(e){return r.a.createElement("tr",{className:"table-item"},r.a.createElement("td",null,e.item[0]),r.a.createElement("td",null,e.item[1]))}function x(e){return r.a.createElement("table",null,r.a.createElement("tbody",{id:"table-body"},function(e,t){var n=h(e),a=[];return n.map((function(e,n){"string"===typeof e[1]||"number"===typeof e[1]?a.push(r.a.createElement(E,{item:e,key:"sC".concat(n)})):"object"===typeof e[1]&&a.push(r.a.createElement(f,{item:e,key:"sT".concat(n),expanded:t.expanded,isAnyExpanded:t.isAnyExpanded,counter:t.counter}))})),a}(e.table,e)))}n(16);var y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).expandAll=function(){a.state.expandedCounter>0?a.setState({closeAllChilden:!0},(function(){a.setState({expanded:!1,closeAllChilden:!1,expandedCounter:0})})):0===a.state.expandedCounter&&a.setState({expanded:!0,expandedCounter:1})},a.counterHandler=function(e){a.setState({expandedCounter:a.state.expandedCounter+e})},a.state={expanded:!1,expandedCounter:0,closeAllChilden:!1},a}return Object(d.a)(n,[{key:"processAllInformation",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.dataList;return Array.isArray(t)||(t=[t]),t.map((function(t,n){if("object"===typeof t)return r.a.createElement(x,{table:t,key:"rT".concat(n),expanded:e.state.expanded,isAnyExpanded:e.state.closeAllChilden,counter:e.counterHandler})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"expand",onClick:this.expandAll},this.state.expandedCounter>0?"Collapse All":"Expand All"),this.processAllInformation())}}]),n}(r.a.Component),b=(n(17),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSendJSON=function(){try{a.setState({users:JSON.parse(a.customJSONRef.current.value)})}catch(e){return alert("JSON NOT VALID"),!1}},a.state={users:[]},a.customJSONRef=r.a.createRef(),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t.setState({users:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"json-input"},r.a.createElement("textarea",{ref:this.customJSONRef,placeholder:"Enter custom JSON here"}),r.a.createElement("button",{onClick:this.handleSendJSON},"Send")),r.a.createElement(y,{dataList:this.state.users}))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d68941ca.chunk.js.map