import{j as n,C as $,a as e,G as D,b as I,A as T,s as t,r as l,e as C,c as h,O as p,S as j,M as W,u as _,R,P,T as F,F as u,E as z,B as E,d as A,L as f,f as b,g as O,h as L,i as B,k as N}from"./vendor-1db47a07.js";import"./__commonjsHelpers__-39b5b250.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const x of c.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();const Z=()=>n($,{projection:"geoAzimuthalEqualArea",projectionConfig:{rotate:[-10,-52,0],center:[-5,-3],scale:1600},style:{width:"100%",height:"100%"},children:[e(D,{geography:"/features.json",fill:"#4c85ba",stroke:"#FFFFFF",strokeWidth:3,children:({geographies:o})=>o.map(s=>e(I,{geography:s},s.rsmKey))}),e(T,{subject:[-9.3522,38.8566],dx:90,dy:-30,connectorProps:{stroke:"lightblue",strokeWidth:5,strokeLinecap:"round"},children:e("text",{x:"+70",textAnchor:"end",alignmentBaseline:"middle",fill:"white",children:"Lisbon"})})]}),G=t.div`
  height: 100vh;
  scroll-snap-align: center;
`,H=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`,q=t.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`,U=t.h1`
  font-weight: 200;
`,Y=t.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`,w=t.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`,K=t.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`,J=t.button`
  background-color: #4e6fda;#4e6fda
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`,Q=t.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`,V=()=>{const o=l.useRef(),[s,i]=l.useState(null);return e(G,{children:n(H,{children:[e(q,{children:n(Y,{ref:o,onSubmit:a=>{a.preventDefault(),C.sendForm("service_id","template_id",o.current,"public_key").then(c=>{console.log(c.text),i(!0)},c=>{console.log(c.text),i(!1)})},children:[e(U,{children:"Contact Us"}),e(w,{placeholder:"Name",name:"name"}),e(w,{placeholder:"Email",name:"email"}),e(K,{placeholder:"Write your message",name:"message",rows:10}),e(J,{type:"submit",children:"Send"}),s&&"Your message has been sent. We'll get back to you soon :)"]})}),e(Q,{children:e(Z,{})})]})})},X=t.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`,ee=t.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5px 3rem 5px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`,te=t.div`
  display: flex;
  align-items: center;
  gap: 50px;
`,ne=t.img`
  height: 30px;
`,ie=t.ul`
  display: flex;
  color: black;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`,y=t.li`
  cursor: pointer;
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,re=t.img`
  width: 20px;
  cursor: pointer;
`,ae=t.button`
  width: 100px;
  padding: 10px;
  background-color: #4e6fda;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,se=()=>e(X,{children:n(ee,{children:[n(te,{children:[e(ne,{src:"./img/LogoDave.png"}),n(ie,{children:[e(y,{children:"HOME"}),e(y,{children:"WORKS"}),e(y,{children:"CONTACT"})]})]}),n(oe,{children:[e(re,{src:"./img/search.png"}),e("a",{href:"https://wa.me/+351930548674 ",target:"_blank",rel:"Personal Whatzap",children:e(ae,{children:"Hire Now"})})]})]})}),ce=t.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`,le=t.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,de=t.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`,he=t.h1`
  font-size: 74px;
  color: black;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`,pe=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,me=t.img`
  height: 5px;
`,ge=t.h2`
  color: #4e6fda;
`,ue=t.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;t.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;const m=t.button`
  background-color: #4e6fda;
  color: white;
  font-weight: 500;
  width: 100px;
  height: 1.9rem;
  padding: 0.4rem;
  margin: 0.3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;t.button`
  margin: 80px;
`;const xe=t.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`,g=t.img`
  height: 1rem;
  margin-right: 4px;
`,fe=t.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`,ye=()=>n(ce,{children:[e(se,{}),n(le,{children:[n(de,{children:[e(he,{children:"Front-End React Developer"}),n(pe,{children:[e(me,{src:"./src/img/line.png"}),e(ge,{children:"Hi, I'm David Patrik."})]}),e(ue,{children:"A passionate SE Developer based in Lisbon, Portugal.📍"}),n("section_social",{children:[e("a",{href:"https://github.com/davecarrijo",target:"_blank",children:n(m,{children:[e(g,{src:"./img/github-logo.png"}),"Github"]})}),e("a",{href:"https://github.com/davecarrijo",target:"_blank",children:n(m,{children:[e(g,{src:"./img/github-logo.png"}),"Leetc"]})}),e("a",{href:"https://www.linkedin.com/in/davidcarrijo/",target:"_blank",children:n(m,{children:[e(g,{src:"./img/linkdin_logo.png"}),"Linkdln"]})}),e("a",{href:"https://drive.google.com/file/d/1envhtsJNZ1HDQIM1jsZPYDEZNHvo4L3J/view",target:"_blank",children:n(m,{children:[e(g,{src:"./img/LogoDave.png"}),"RC"]})})]})]}),n(xe,{children:[e(h,{children:n(l.Suspense,{fallback:null,children:[e(p,{enableZoom:!1}),e("ambientLight",{intensity:3}),e("directionalLight",{position:[3,2,1]}),e(j,{args:[1,100,200],scale:1.9,children:e(W,{color:"#4e6fda",attach:"material",distort:.7,speed:.3})})]})}),e(fe,{src:"./img/me.jpg"})]})]})]}),be=()=>{const o=l.useRef();return _(s=>o.current.position.x=Math.sin(s.clock.elapsedTime)*2),n("mesh",{children:[e("boxGeometry",{}),e("meshStandardMaterial",{children:n(R,{attach:"map",children:[e(P,{makeDefault:!0,position:[0,0,5]}),e("color",{attach:"background",args:["#4e6fda"]}),e(F,{ref:o,fontSize:4,color:"#555",children:"@"})]})})]})},we=t.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`,ve=t.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`,ke=t.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`,Se=t.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`,Me=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,v=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,k=t.img`
  height: 5px;
`,S=t.h2`
  color: #4e6fda;
`,je=t.p`
  font-size: 24px;
  color: lightgray;
`;t.p`
  font-size: 24px;
  color: lightgray;
`;t.button`
  background-color: #4e6fda;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;const M=t.div`
  height: 10%;
  scroll-snap-align: center;
  /* width: 1400px; */
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,d=t.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* border-radius: 50%; */
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`,Le=()=>e(we,{children:n(ve,{children:[e(ke,{children:e(h,{camera:{position:[5,5,5],fov:25},children:n(l.Suspense,{fallback:null,children:[e("ambientLight",{intensity:.5}),e("directionalLight",{position:[3,2,1]}),e(be,{}),e(p,{enableZoom:!1,autoRotate:!0})]})})}),n(Me,{children:[e(Se,{children:"Think outside the square space"}),n(v,{children:[e(k,{src:"./src/img/line.png"}),e(S,{children:"My persona"})]}),e(je,{children:"I approach my work with unwavering discipline, unwavering dedication, and boundless passion. Discipline guides me through the rare days when passion falters, allowing me to consistently deliver my best work. When I'm passionate about a project, I harness that energy to produce top-tier results. I thrive on adaptability, relish problem-solving, and excel in collaborative environments, always striving to provide optimal solutions and elevate team performance."}),n(v,{children:[e(k,{src:"./src/img/line.png"}),e(S,{children:" Tech Stack ;"})]}),n(M,{children:[e(d,{src:"./img/TechStack/react.png"}),e(d,{src:"./img/TechStack/nodejs.png"}),e(d,{src:"./img/TechStack/typescript.png"}),e(d,{src:"./img/TechStack/python.png"}),e(d,{src:"./img/TechStack/postgresql.png"})]}),n(M,{children:[e(d,{src:"./img/TechStack/icons8-vite-48.png"}),e(d,{src:"./img/TechStack/icons8-sass-480.png"}),e(d,{src:"./img/TechStack/icons8-nginx-480.png"}),e(d,{src:"./img/TechStack/icons8-bun-64.png"}),e(d,{src:"./img/TechStack/icons8-html-100.png"})]})]})]})}),$e=()=>{const o=l.useMemo(()=>new A(0,0,3,1.15,0,2*Math.PI,!1,0).getPoints(100),[]);return n("group",{children:[e(f,{worldUnits:!0,points:o,color:"#cae6f1",lineWidth:.3}),e(f,{worldUnits:!0,points:o,color:"#cae6f1",lineWidth:.3,rotation:[0,0,1]}),e(f,{worldUnits:!0,points:o,color:"#cae6f1",lineWidth:.3,rotation:[0,0,-1]}),e(j,{args:[.55,64,64],children:e("meshBasicMaterial",{color:[6,.5,2],toneMapped:!1})})]})},De=()=>n(u,{children:[e($e,{}),e(z,{children:e(E,{mipmapBlur:!0,luminanceThreshold:1,radius:.7})})]}),Ie=t.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  /* background-color: white; */
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`,Te=()=>n(u,{children:[e(h,{camera:{position:[0,0,10]},children:n(l.Suspense,{fallback:null,children:[e(De,{}),e(p,{enableZoom:!1,autoRotate:!0})]})}),e(Ie,{children:"We design products with a strong focus on both world class design and ensuring your product is a market success."})]});function Ce({color:o,...s}){const{nodes:i,materials:r}=b("/shoe.gltf");return n("group",{...s,dispose:null,children:[e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe.geometry,material:r.laces,"material-envMapIntensity":.8}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_1.geometry,children:e("meshStandardMaterial",{color:"purple",aoMap:r.mesh.aoMap,normalMap:r.mesh.normalMap,"normalMap-encoding":O,roughnessMap:r.mesh.roughnessMap,metalnessMap:r.mesh.metalnessMap,envMapIntensity:.8})}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_2.geometry,material:r.caps,"material-envMapIntensity":.8}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_3.geometry,material:r.inner,"material-envMapIntensity":.8}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_4.geometry,material:r.sole,"material-envMapIntensity":.8}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_5.geometry,material:r.stripes,"material-envMapIntensity":.8}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_6.geometry,material:r.band,"material-envMapIntensity":.8}),e("mesh",{castShadow:!0,receiveShadow:!0,geometry:i.shoe_7.geometry,material:r.patch,"material-envMapIntensity":.8})]})}b.preload("/shoe.gltf");const We=t.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`,_e=()=>n(u,{children:[e(h,{children:n(l.Suspense,{fallback:null,children:[e(L,{environment:"city",intensity:.6,children:e(Ce,{})}),e(p,{enableZoom:!1,autoRotate:!0})]})}),e(We,{children:"We design products with a strong focus on both world class design and ensuring your product is a market success."})]});function Re({...o}){const s=l.useRef(),{nodes:i,materials:r}=b("/mac-draco.glb");return e("group",{ref:s,...o,dispose:null,children:n("group",{position:[0,2.96,-.13],rotation:[Math.PI/2,0,0],children:[e("mesh",{material:r.aluminium,geometry:i.Cube008.geometry}),e("mesh",{material:r["matte.001"],geometry:i.Cube008_1.geometry}),e("mesh",{material:r["screen.001"],geometry:i.Cube008_2.geometry})]})})}const Pe=t.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`,Fe=()=>n(u,{children:[e(h,{children:n(l.Suspense,{fallback:null,children:[e(L,{environment:"city",intensity:.6,children:e(Re,{})}),e(p,{enableZoom:!1,autoRotate:!0})]})}),e(Pe,{children:"We design products with a strong focus on both world class design and ensuring your product is a market success."})]}),ze=["Web Design","Development","Illustration","Product Design","Social Media"],Ee=t.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`,Ae=t.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`,Oe=t.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`,Be=t.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ne=t.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${o=>o.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`,Ze=t.div`
  flex: 1;
`,Ge=()=>{const[o,s]=l.useState("Web Design");return e(Ee,{children:n(Ae,{children:[e(Oe,{children:e(Be,{children:ze.map(i=>e(Ne,{text:i,onClick:()=>s(i),children:i},i))})}),e(Ze,{children:o==="Web Design"?e(Fe,{}):o==="Development"?e(Te,{}):e(_e,{})})]})})},He=t.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./");
  &::-webkit-scrollbar {
    display: none;
  }
`;function qe(){return n(He,{children:[e(ye,{}),e(Le,{}),e(Ge,{}),e(V,{})]})}B.createRoot(document.getElementById("root")).render(e(N.StrictMode,{children:e(qe,{})}));
