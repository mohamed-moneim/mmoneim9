(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{103:function(e,t,n){},142:function(e,t,n){var o={"./About":[94,0,3],"./About.jsx":[94,0,3],"./Education":[95,9,4],"./Education.jsx":[95,9,4],"./Experience":[96,0,1,5],"./Experience.jsx":[96,0,1,5],"./FallbackSpinner":[32],"./FallbackSpinner.jsx":[32],"./Header":[90,8],"./Header.jsx":[90,8],"./Home":[49],"./Home.jsx":[49],"./NavBar":[45],"./NavBar.jsx":[45],"./Projects":[97,0,2],"./Projects.jsx":[97,0,2],"./Skills":[98,0,7],"./Skills.jsx":[98,0,7],"./Social":[50],"./Social.jsx":[50],"./ThemeToggler":[46],"./ThemeToggler.jsx":[46],"./projects/ProjectCard":[93,0,6],"./projects/ProjectCard.jsx":[93,0,6]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=142,e.exports=r},143:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(17),c=n.n(i),a=(n(103),n(92),n(104),n(34)),l=n(20),s=n(76),m=n(78),u=n(52),j=n(5),d=n(10),h=n(32),b=n(45),f=n(49),p=n(24),v=n(1);var g,x=function(){var e=Object(o.useState)(null),t=Object(j.a)(e,2),i=t[0],c=t[1];return Object(o.useEffect)((function(){fetch(p.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),Object(v.jsxs)("div",{className:"MainApp",children:[Object(v.jsx)(b.default,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(d.c,{children:Object(v.jsxs)(o.Suspense,{fallback:Object(v.jsx)(h.default,{}),children:[Object(v.jsx)(d.a,{exact:!0,path:"/",component:f.default}),i&&i.sections.map((function(e){var t=r.a.lazy((function(){return n(142)("./"+e.component)}));return Object(v.jsx)(d.a,{path:e.path,component:function(){return Object(v.jsx)(t,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},O=n(36),k=Object(l.c)(g||(g=Object(O.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),C={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},y={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var S=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(v.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(v.jsxs)(l.b,{theme:e.value?y:C,children:[Object(v.jsx)(k,{}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)(m.a,{children:[Object(v.jsx)("title",{children:"\u0645\u062d\u0645\u062f \u0639\u0628\u062f \u0627\u0644\u0645\u0646\u0639\u0645 \u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a"}),Object(v.jsx)("meta",{name:"description",content:""}),Object(v.jsx)("meta",{name:"keywords",content:"\u0627\u0644\u0645\u0628\u0631\u0645\u062c \u0645\u062d\u0645\u062f \u0639\u0628\u062f \u0627\u0644\u0645\u0646\u0639\u0645"}),Object(v.jsx)("meta",{name:"author",content:"\u0627\u0644\u0645\u0628\u0631\u0645\u062c \u0645\u062d\u0645\u062f \u0639\u0628\u062f \u0627\u0644\u0645\u0646\u0639\u0645"}),Object(v.jsx)("meta",{property:"og:title",content:"\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645 \u0643\u0627\u0645\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u062f\u0646\u064a "}),Object(v.jsx)("meta",{property:"og:description",content:"\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645 \u0643\u0627\u0645\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u062f\u0646\u064a "}),Object(v.jsx)("meta",{property:"og:image",content:"https://mohamed-moneim.github.io/mmoneim9/images/mmoneim9.jpg"}),Object(v.jsx)("meta",{property:"og:url",content:"https://mohamed-moneim.github.io/mmoneim9"}),Object(v.jsx)("meta",{name:"twitter:title",content:">\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645 \u0643\u0627\u0645\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0645\u062f\u0646\u064a"}),Object(v.jsx)("meta",{name:"twitter:description",content:"\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0635\u062d\u0641 \u0627\u0644\u0634\u0631\u064a\u0641 \u0643\u0627\u0645\u0644\u0627\u064b "}),Object(v.jsx)("meta",{name:"twitter:image",content:"https://mohamed-moneim.github.io/mmoneim9/images/mmoneim9.jpg"}),Object(v.jsx)("meta",{name:"twitter:card",content:"https://mohamed-moneim.github.io/mmoneim9/images/mmoneim9.jpg"})]}),Object(v.jsx)(a.a,{children:Object(v.jsx)(x,{})})]})]})})},T=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,183)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),i(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),T()},24:function(e,t,n){"use strict";t.a={navbar:"https://mohamed-moneim.github.io/mmoneim9/profile/navbar.json",routes:"https://mohamed-moneim.github.io/mmoneim9/profile/routes.json",home:"https://mohamed-moneim.github.io/mmoneim9/profile/home.json",social:"https://mohamed-moneim.github.io/mmoneim9/profile/social.json",about:"https://mohamed-moneim.github.io/mmoneim9/profile/about.json",skills:"https://mohamed-moneim.github.io/mmoneim9/profile/skills.json",education:"https://mohamed-moneim.github.io/mmoneim9/profile/education.json",experiences:"https://mohamed-moneim.github.io/mmoneim9/profile/experiences.json",projects:"https://mohamed-moneim.github.io/mmoneim9/profile/projects.json"}},32:function(e,t,n){"use strict";n.r(t);n(0);var o=n(144),r=n(1),i={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};t.default=function(){return Object(r.jsx)("div",{style:i.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},45:function(e,t,n){"use strict";n.r(t);var o,r,i=n(5),c=n(36),a=n(55),l=n(145),s=n(89),m=n(0),u=n(10),j=n(34),d=n(20),h=n(24),b=n(46),f=n(1),p={logoStyle:{width:50,height:40},brand:{fontSize:18},slogan:{fontSize:14}},v=d.d.a(o||(o=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),g=Object(d.d)(j.b)(r||(r=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),x=Object(u.f)((function(){var e,t,n,o,r,c,u=Object(m.useContext)(d.a),j=Object(m.useState)(null),x=Object(i.a)(j,2),O=x[0],k=x[1],C=Object(m.useState)(!1),y=Object(i.a)(C,2),S=y[0],T=y[1];return Object(m.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return k(e)})).catch((function(e){return e}))}),[]),Object(f.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(f.jsxs)(l.a,{children:[(null===O||void 0===O?void 0:O.logo)&&Object(f.jsxs)(a.a.Brand,{href:"",children:[Object(f.jsx)("img",{src:null===O||void 0===O||null===(e=O.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==O&&void 0!==O&&null!==(t=O.logo)&&void 0!==t&&t.height&&null!==O&&void 0!==O&&null!==(n=O.logo)&&void 0!==n&&n.width?{height:null===O||void 0===O||null===(o=O.logo)||void 0===o?void 0:o.height,width:null===O||void 0===O||null===(r=O.logo)||void 0===r?void 0:r.width}:p.logoStyle}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:p.brand,children:"Mohamed Abdelmoneim"}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:p.slogan,children:"Javascript Ninja"})]}),Object(f.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(f.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsx)(s.a,{className:"me-auto"}),Object(f.jsx)(s.a,{children:O&&(null===(c=O.sections)||void 0===c?void 0:c.map((function(e,t){return"link"===(null===e||void 0===e?void 0:e.type)?Object(f.jsx)(v,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:u,children:e.title},e.title):Object(f.jsx)(g,{onClick:function(){return T(!1)},exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:u,children:e.title},e.title)})))}),Object(f.jsx)(b.default,{onClick:function(){return T(!1)}})]})]})})}));t.default=x},46:function(e,t,n){"use strict";n.r(t);n(0);var o=n(81),r=n.n(o),i=n(52),c=n(1);function a(e){var t=e.onClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.a.Consumer,{children:function(e){return Object(c.jsx)("div",{style:{marginBottom:8},children:Object(c.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void t()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},t.default=a},49:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(0),i=n(86),c=n.n(i),a=n(64),l=n.n(a),s=n(24),m=n(50),u=n(32),j=n(1),d={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};t.default=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),n?Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{style:d.mainContainer,children:[Object(j.jsx)("h1",{style:d.nameStyle,children:null===n||void 0===n?void 0:n.name}),Object(j.jsxs)("div",{style:{flexDirection:"row"},children:[Object(j.jsx)("h2",{style:d.inlineChild,children:"I'm\xa0"}),Object(j.jsx)(c.a,{options:{loop:!0,autoStart:!0,strings:null===n||void 0===n?void 0:n.roles}})]}),Object(j.jsx)(m.default,{})]})}):Object(j.jsx)(u.default,{})}},50:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(0),i=n(87),c=n(20),a=n(24),l=n(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};t.default=function(){var e=Object(r.useContext)(c.a),t=Object(r.useState)(null),n=Object(o.a)(t,2),m=n[0],u=n[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:m?m.social.map((function(t){return Object(l.jsx)(i.SocialIcon,{style:s.iconStyle,url:t.href,network:t.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},t.network)})):null})}},52:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext();t.a=r},92:function(e,t,n){}},[[143,11,12]]]);
//# sourceMappingURL=main.e91235a7.chunk.js.map