var k=Object.defineProperty,v=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))F.call(n,t)&&C(e,t,n[t]);if(y)for(var t of y(n))P.call(n,t)&&C(e,t,n[t]);return e},m=(e,n)=>v(e,E(n));import{s as l,j as d,o as S,a as r,P as j,S as A,b as R,r as h,C as $,v as L,D as N,N as O,Z as I,R as M,c as z}from"./vendor.1e2bb0bc.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};B();const q={center:[57.751574,37.573856],zoom:5,controls:["zoomControl","fullscreenControl"]},T={ns:"use-load-option",load:"package.full",apikey:"836dd02d-02f8-4716-8e5f-c575930dc493"},w=async(e,n)=>{const u=(await n.geocode(e)).geoObjects.get(0),o=u.geometry.getCoordinates(),i=u.getAddressLine();return{newCoords:o,address:i}},V=e=>e>=0?`${e} \u0441.\u0448.`:`${e*-1} \u044E.\u0448.`,W=e=>e>=0?`${e} \u0432.\u0434.`:`${e*-1} \u0437.\u0434.`,H=e=>`${V(Number(e[0].toFixed(2)))}, ${W(Number(e[1].toFixed(2)))}`,Y=(e,n)=>e===0?"#f04323":e===n.length-1?"green":"blue",K=l.div`
    margin-right: 50px;

    @media (max-width: 1024px) {
        margin-right: 0;
    }
`,X=l.div`
    margin-top: 30px;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
`,x=l.div`
    display:flex;
`,b=l.div`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: ${e=>e.backgroundColor}
`;function Z({mapRef:e,placemarks:n,setPlacemarks:t,ymaps:u}){const o=async(i,s)=>{const c=i.get("target").geometry.getCoordinates(),a=[...n],{address:p}=await w(c,u);a.splice(s,1,m(f({},n[s]),{coords:c,name:p})),t(a)};return d(K,{children:[d(S,{defaultState:q,instanceRef:e,className:"customMap",children:[n.map((i,s,c)=>r(j,{geometry:i.coords,options:{draggable:!0,iconColor:Y(s,c)},onDragend:a=>o(a,s),properties:{balloonContent:i.name}},s)),r(A,{geometry:[...n.map(i=>i.coords)],options:{strokeColor:"#000",strokeWidth:4,strokeOpacity:.5},properties:{hintContent:"This os Polyline"}})]}),d(X,{children:[d(x,{children:[r(b,{backgroundColor:"#f04323"}),r("p",{children:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]}),d(x,{children:[r(b,{backgroundColor:"blue"}),r("p",{children:"\u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]}),d(x,{children:[r(b,{backgroundColor:"green"}),r("p",{children:"\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]})]})]})}const G=l.div`
    padding: 10px 15px;
    margin-bottom: 8px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.isDragging?"#bb3219":"#fff"}
`,J=l.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    color: #000;
`,Q=l.p`
    font-size: 18px;
    font-weight: 700;
`,U=l.p`
    font-size: 12px;
    font-style: italic;
`,_=l.button`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-radius: 3px;
    box-shadow: 1px 1px 0 0px lightgrey;
    cursor: pointer;
    color: white;
    background-color: #f04323;

    &:active { background-color: #bb3219; }
`;function ee({item:e,index:n,handleDelete:t}){return r(R,{draggableId:e.id,index:n,children:(u,o)=>d(G,m(f(f({ref:u.innerRef},u.draggableProps),u.dragHandleProps),{isDragging:o.isDragging,style:f({},u.draggableProps.style),children:[d(J,{children:[r(Q,{children:e.name}),r(U,{children:H(e.coords)})]}),r(_,{onClick:()=>{t(n)},children:"X"})]}))})}const ne=l.div`
    width: 40%;

    @media (max-width: 1024px) {
        width: 80%;
        margin-top: 50px;
    }
`,oe=l.form`
    display: flex;
    height: auto;
    gap: 10px;
    
`,te=l.input`
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    box-shadow: 1px 1px 0 0px #3a3838;
    font-family: 'Open Sans', sans-serif;

    &:focus-visible { outline: 2px solid #f04323 }
`;l.button`
    padding: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    cursor: pointer;
`;const re=l.div`
    padding: 8px;
    margin: 20px 0;
    background-color: ${e=>e.isDragging?"lightblue":"#f04323"}
`;function ie({mapRef:e,placemarks:n,setPlacemarks:t,ymaps:u}){const o=h.exports.useRef(null),i=c=>{const a=[...n];a.splice(c,1),t(a)},s=async c=>{var p;c.preventDefault();const a=(p=o.current)==null?void 0:p.value;if(!!a)try{if(!a.trim().length)return;const{newCoords:g,address:D}=await w(a,u);t([...n,{coords:g,id:L(),name:D}]),e.current.setCenter(g)}catch(g){console.log(g)}finally{o.current.value=""}};return h.exports.useEffect(()=>{new u.SuggestView(o.current)},[]),d(ne,{children:[r(oe,{onSubmit:s,children:r(te,{type:"text",id:"suggest",ref:o,autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435..."})}),r($,{droppableId:"droppable",children:(c,a)=>d(re,m(f({},c.droppableProps),{ref:c.innerRef,isDragging:a.isDraggingOver,children:[n.map((p,g)=>r(ee,{item:p,index:g,handleDelete:i},p.id)),c.placeholder]}))})]})}const ue=l.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`,se=l.div`
    display: flex;
    margin: 70px 20px ;
    justify-content: center;
    flex: 1 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`,ce=l.div`
    background-color: black;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: white;

    a { color: white }
`;function ae({ymaps:e}){const[n,t]=h.exports.useState([{coords:[55.75,37.62],id:"111",name:"\u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F"},{coords:[59.98,30.36],id:"222",name:"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043E\u0441\u0441\u0438\u044F"},{coords:[59.22,39.89],id:"333",name:"\u0412\u043E\u043B\u043E\u0433\u0434\u0430, \u0420\u043E\u0441\u0441\u0438\u044F"}]),u=h.exports.useRef(null),o=(s,c,a)=>{const p=Array.from(s),[g]=p.splice(c,1);return p.splice(a,0,g),p};return d(ue,{children:[d(se,{children:[r(Z,{mapRef:u,placemarks:n,setPlacemarks:t,ymaps:e}),r(N,{onDragEnd:({destination:s,source:c})=>{if(!s||c.index===s.index)return;const a=o(n,c.index,s.index);t(a)},children:r(ie,{mapRef:u,placemarks:n,setPlacemarks:t,ymaps:e})})]}),d(ce,{children:[r("a",{href:"https://t.me/keeeparis",className:"telLink",rel:"noopener noreferrer",children:"Vladimir Trotsenko"}),", ",new Date().getFullYear()]})]})}function le(){const e=h.exports.useMemo(()=>O(ae,!0,["SuggestView","geocode"]),[]);return r(I,{query:T,children:r(e,{})})}M.render(r(z.StrictMode,{children:r(le,{})}),document.getElementById("root"));
