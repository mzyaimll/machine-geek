let s=document.createElement("style");s.innerHTML="",document.head.appendChild(s);import{d as l,r,o as d,c as p,f as m}from"./index.2eb0f08e.js";import"./request.81f97de2.js";import{a as u}from"./index.58c66d56.js";var n=l({setup(){let e=r({sourceData:[],paginate:{page:1,size:10}});function t(o=e.paginate){u.systemException.systemException_paging(o).then(a=>{a.success&&(e.sourceData=a.data.records)})}return t(),{state:e,rowSelection:x,fetch:t,columns:y}}});const x={onChange:(e,t)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",t)},onSelect:(e,t,o)=>{console.log(e,t,o)},onSelectAll:(e,t,o)=>{console.log(e,t,o)}},y=[{title:"ID",dataIndex:"id",key:"id"},{title:"URI",dataIndex:"uri",key:"uri"},{title:"请求方法",dataIndex:"method",key:"method"},{title:"请求参数",dataIndex:"parameter",key:"parameter"},{title:"IP",dataIndex:"ip",key:"ip"},{title:"exceptionClass",dataIndex:"exceptionClass",key:"exceptionClass"},{title:"exceptionMessage",dataIndex:"exceptionMessage",key:"exceptionMessage"},{title:"创建时间",dataIndex:"createTime",key:"createTime"}];function f(e,t,o,a,g,k){const c=m("a-table");return d(),p(c,{columns:e.columns,"data-source":e.state.sourceData,"row-selection":e.rowSelection,"row-key":i=>i.id},null,8,["columns","data-source","row-selection","row-key"])}n.render=f,n.__file="src/views/DevTools/SystemException.vue";export default n;