"use strict";(self.webpackChunkdtapa_git_hub_pages=self.webpackChunkdtapa_git_hub_pages||[]).push([[2711],{9331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(6540);var r=a(8774),n=a(1312),s=a(1213),i=a(6266),c=a(781),l=a(1107),o=a(4848);function d(e){let{year:t,posts:a}=e;const n=(0,i.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:t,children:t}),(0,o.jsx)("ul",{children:a.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(r.A,{to:e.metadata.permalink,children:[(t=e.metadata.date,n.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function h(e){let{years:t}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},t)))})})})}function m(e){let{archive:t}=e;const a=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.be,{title:a,description:r}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,o.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},6266:(e,t,a)=>{a.d(t,{i:()=>n});var r=a(4586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);