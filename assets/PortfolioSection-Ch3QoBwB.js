import{r as b,u as w,j as r,B as i,T as n,d as c,e as h,H as k,F as S,I as z}from"./index-DhjxO4If.js";import{U as l}from"./UpRightArrow-D3h6Hx_u.js";import{p as v}from"./portfolioData-CkYl4_kU.js";import{C as B}from"./chunk-YQO7BFFX-BHO3u4uA.js";import{C}from"./chunk-FHHZMTWR-BKMpsyTP.js";const D=()=>{var p;const[e,m]=b.useState(1),d=t=>{m(e===t?1:t)},[a]=w("(min-width: 1230px)");return r.jsxs(i,{py:20,children:[r.jsxs(i,{px:{base:5,md:20},py:10,children:[r.jsx(n,{fontSize:"32px",fontWeight:600,children:"Portfolio"}),r.jsx(n,{fontSize:"16px",fontWeight:400,color:"#6B7280",mt:2,children:"Explore our diverse portfolio of projects that showcase our expertise"}),r.jsx(c,{as:h,to:"/portfolio",colorScheme:"primary",mt:5,borderRadius:0,reloadDocument:!0,rightIcon:r.jsx(l,{stroke:"white"}),size:{base:"sm",md:"sm"},children:"View Our Works"})]}),r.jsx(i,{pos:"relative",h:{base:450,md:600},children:(p=v)==null?void 0:p.map(({id:t,title:s,image:f,bgColor:y,slug:o,description:j,textColor:x})=>r.jsx(B,{cursor:"pointer",p:4,h:{base:o==="yogtirtha"?"300px":o==="lincoln"?"350px":"400px",md:o==="yogtirtha"?"500px":o==="lincoln"?"551px":"600px"},zIndex:o==="yogtirtha"?1:0,w:a?o==="yogtirtha"?"500px":o==="lincoln"?e===t?"1200px":"550px":o==="eshha"?e===t?"1200px":"600px":"500px":{base:o==="yogtirtha"?t!==e?"20px":"200px":o==="lincoln"?t<e?"60px":"250px":t<e?"40px":"300px",sm:o==="yogtirtha"?t<e?"30px":"300px":o==="lincoln"?t<e?"50px":"350px":"400px"},onClick:()=>d(t),bg:y,transition:"all 0.5s",shadow:"none",borderRadius:0,borderTopRightRadius:"150px",pos:"absolute",top:o==="yogtirtha"?"100px":o==="lincoln"?"49px":0,children:r.jsxs(C,{as:k.div,initial:{opacity:a&&o==="yogtirtha"?1:0},animate:{opacity:a?o==="yogtirtha"||e===t?1:0:e===t?1:0,transition:{delay:.4},x:["0px","1px","0px"]},pl:a?o==="lincoln"?e===t?"400px":0:o==="eshha"&&e===t?"450px":0:{base:o==="lincoln"?e===t?"40px":0:o==="eshha"&&e===t?"50px":0},justifyItems:o==="yogtirtha"?"center":e===t?"end":"center",alignSelf:o==="yogtirtha"?"center":e===t?"end":"center",w:{base:"100%",md:"90%"},overflow:"hidden",gap:5,children:[r.jsx(n,{mb:2,textColor:x,fontSize:{base:"20px",sm:"24px",md:"28px",lg:"32px"},fontWeight:600,children:s}),r.jsx(n,{display:{base:"none",md:"block"},textColor:x,letterSpacing:"0.32px",fontSize:"16px",fontWeight:400,children:j}),r.jsx(c,{as:h,variant:"transparent",rightIcon:r.jsx(l,{stroke:"#F05B2D"}),to:"/portfolio",size:{base:"xs",md:"sm"},children:"View More"}),r.jsx(S,{pos:"relative",justify:"center",children:r.jsx(i,{pos:"absolute",top:"20px",transition:"transform 0.5s",children:r.jsx(z,{w:o!=="yogtirtha"?600:300,src:f,alt:s})})})]})},t))})]})};export{D as default};