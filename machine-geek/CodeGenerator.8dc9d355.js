let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as t,r as a,o,c as n,g as l}from"./index.84ff1683.js";import{a as s}from"./index.30948e8a.js";var r=t({setup(){let e=a({sourceData:[],paginate:{page:1,size:10}});function t(t=e.paginate){s.codeGenerator.codeGenerator_paging(t).then(t=>{t.success&&(e.sourceData=t.data.records)})}return t(),{state:e,rowSelection:c,fetch:t}},data:()=>({sourceData:[],columns:d})});const c={onChange:(e,t)=>{console.log("selectedRowKeys: "+e,"selectedRows: ",t)},onSelect:(e,t,a)=>{console.log(e,t,a)},onSelectAll:(e,t,a)=>{console.log(e,t,a)}},d=[{title:"TableName",dataIndex:"tableName",key:"tableName"},{title:"Engine",dataIndex:"engine",key:"engine"},{title:"TableComment",dataIndex:"tableComment",key:"tableComment"},{title:"CreateTime",dataIndex:"createTime",key:"createTime"}];r.render=function(e,t,a,s,r,c){const d=l("a-table");return o(),n(d,{columns:e.columns,"data-source":e.state.sourceData,"row-selection":e.rowSelection,"row-key":e=>e.id},null,8,["columns","data-source","row-selection","row-key"])},r.__file="src/views/DevTools/CodeGenerator.vue";export default r;