(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{100:function(e,n,t){},139:function(e,n,t){var o={"./About":[91,0,3],"./About.jsx":[91,0,3],"./Education":[92,9,4],"./Education.jsx":[92,9,4],"./Experience":[93,0,1,5],"./Experience.jsx":[93,0,1,5],"./FallbackSpinner":[31],"./FallbackSpinner.jsx":[31],"./Header":[87,8],"./Header.jsx":[87,8],"./Home":[48],"./Home.jsx":[48],"./NavBar":[44],"./NavBar.jsx":[44],"./Projects":[94,0,2],"./Projects.jsx":[94,0,2],"./Skills":[95,0,7],"./Skills.jsx":[95,0,7],"./Social":[49],"./Social.jsx":[49],"./ThemeToggler":[45],"./ThemeToggler.jsx":[45],"./projects/ProjectCard":[90,0,6],"./projects/ProjectCard.jsx":[90,0,6]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=139,e.exports=r},140:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(17),c=t.n(i),a=(t(100),t(89),t(101),t(33)),l=t(20),s=t(76),u=t(51),d=t(4),j=t(10),f=t(31),h=t(44),m=t(48),b=t(24),v=t(1);var x,O=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),i=n[0],c=n[1];return Object(o.useEffect)((function(){fetch(b.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),Object(v.jsxs)("div",{className:"MainApp",children:[Object(v.jsx)(h.default,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(j.c,{children:Object(v.jsxs)(o.Suspense,{fallback:Object(v.jsx)(f.default,{}),children:[Object(v.jsx)(j.a,{exact:!0,component:m.default}),i&&i.sections.map((function(e){var n=r.a.lazy((function(){return t(139)("./"+e.component)}));return Object(v.jsx)(j.a,{path:e.path,component:function(){return Object(v.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},p=t(35),g=Object(l.c)(x||(x=Object(p.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),k={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},C={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var y=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(v.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(v.jsxs)(l.b,{theme:e.value?C:k,children:[Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(a.a,{children:Object(v.jsx)(O,{})})})]})})},S=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,180)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root")),S()},24:function(e,n,t){"use strict";n.a={navbar:"https://mohamed-moneim.github.io/mmoneim9/profile/navbar.json",routes:"https://mohamed-moneim.github.io/mmoneim9/profile/routes.json",home:"profile/home.json",social:"https://mohamed-moneim.github.io/mmoneim9/profile/social.json",about:"https://mohamed-moneim.github.io/mmoneim9/profile/about.json",skills:"https://mohamed-moneim.github.io/mmoneim9/profile/skills.json",education:"https://mohamed-moneim.github.io/mmoneim9/profile/education.json",experiences:"https://mohamed-moneim.github.io/mmoneim9/profile/experiences.json",projects:"https://mohamed-moneim.github.io/mmoneim9/profile/projects.json"}},31:function(e,n,t){"use strict";t.r(n);t(0);var o=t(141),r=t(1),i={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:i.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},44:function(e,n,t){"use strict";t.r(n);var o,r,i=t(4),c=t(35),a=t(54),l=t(142),s=t(86),u=t(0),d=t(10),j=t(33),f=t(20),h=t(24),m=t(45),b=t(1),v={logoStyle:{width:50,height:40},brand:{fontSize:18},slogan:{fontSize:14}},x=f.d.a(o||(o=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),O=Object(f.d)(j.b)(r||(r=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),p=Object(d.f)((function(){var e,n,t,o,r,c,d=Object(u.useContext)(f.a),j=Object(u.useState)(null),p=Object(i.a)(j,2),g=p[0],k=p[1],C=Object(u.useState)(!1),y=Object(i.a)(C,2),S=y[0],T=y[1];return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return k(e)})).catch((function(e){return e}))}),[]),Object(b.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(b.jsxs)(l.a,{children:[(null===g||void 0===g?void 0:g.logo)&&Object(b.jsxs)(a.a.Brand,{href:"/",children:[Object(b.jsx)("img",{src:null===g||void 0===g||null===(e=g.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==g&&void 0!==g&&null!==(n=g.logo)&&void 0!==n&&n.height&&null!==g&&void 0!==g&&null!==(t=g.logo)&&void 0!==t&&t.width?{height:null===g||void 0===g||null===(o=g.logo)||void 0===o?void 0:o.height,width:null===g||void 0===g||null===(r=g.logo)||void 0===r?void 0:r.width}:v.logoStyle}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{style:v.brand,children:"Mohamed Abdelmoneim"}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{style:v.slogan,children:"Javascript Ninja"})]}),Object(b.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(b.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsx)(s.a,{className:"me-auto"}),Object(b.jsx)(s.a,{children:g&&(null===(c=g.sections)||void 0===c?void 0:c.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(b.jsx)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(b.jsx)(O,{onClick:function(){return T(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(b.jsx)(m.default,{onClick:function(){return T(!1)}})]})]})})}));n.default=p},45:function(e,n,t){"use strict";t.r(n);t(0);var o=t(78),r=t.n(o),i=t(51),c=t(1);function a(e){var n=e.onClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.a.Consumer,{children:function(e){return Object(c.jsx)("div",{style:{marginBottom:8},children:Object(c.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},n.default=a},48:function(e,n,t){"use strict";t.r(n);var o=t(4),r=t(0),i=t(83),c=t.n(i),a=t(64),l=t.n(a),s=t(24),u=t(49),d=t(31),j=t(1),f={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(r.useState)(null),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),t?Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{style:f.mainContainer,children:[Object(j.jsx)("h1",{style:f.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(j.jsxs)("div",{style:{flexDirection:"row"},children:[Object(j.jsx)("h2",{style:f.inlineChild,children:"I'm\xa0"}),Object(j.jsx)(c.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(j.jsx)(u.default,{})]})}):Object(j.jsx)(d.default,{})}},49:function(e,n,t){"use strict";t.r(n);var o=t(4),r=t(0),i=t(84),c=t(20),a=t(24),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(c.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(i.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},51:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},89:function(e,n,t){}},[[140,11,12]]]);
//# sourceMappingURL=main.11f4c275.chunk.js.map