let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as t,o as a,c as d,w as i,g as s}from"./index.84ff1683.js";import{a as n}from"./index.30948e8a.js";import{P as o}from"./config.84ea8322.js";const l=[{title:"id",dataIndex:"id",width:"10%"},{title:"name",dataIndex:"name",width:"15%"},{title:"key",dataIndex:"key",width:"15%"},{title:"description",dataIndex:"description",width:"15%"},{title:"version",dataIndex:"version",width:"15%"},{title:"disable",dataIndex:"disable",width:"15%"}];var r=t({data:()=>({sourceData:[],columns:l,loading:!1,paginate:{size:o,page:1,total:0,keyWord:""}}),mounted(){this.fetch(this.paginate)},methods:{fetch(e){this.loading=!0,n.role.systemRole_query(e).then(e=>{e.success&&(this.sourceData=e.data.records,this.loading=!1)})},handleChange(e,t,a){},edit(e){},save(e){},cancel(e){}}});const c=i("data-v-f9dd6e2c")((function(e,t,i,n,o,l){const r=s("a-table");return a(),d(r,{columns:e.columns,"data-source":this.sourceData,"row-key":e=>e.id,loading:e.loading,bordered:""},null,8,["columns","row-key","loading"])}));r.render=c,r.__scopeId="data-v-f9dd6e2c",r.__file="src/views/SysManager/SystemRole.vue";export default r;