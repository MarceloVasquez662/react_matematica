(this["webpackJsonpaplicacion-matematica"]=this["webpackJsonpaplicacion-matematica"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),o=a(3),c=a(4),m=a(6),u=a(5),i=(a(26),a(1)),d=a(10);var b=function(e){return r.a.createElement("div",{className:"col-12"},r.a.createElement(i.b,{to:"/Suma",className:"btn btn-success m-2 col-6 btn-block mx-auto"},"Suma"),r.a.createElement(i.b,{to:"/Resta",className:"btn btn-info m-2 col-6 btn-block mx-auto"},"Resta"),r.a.createElement(i.b,{to:"/Multiplicacion",className:"btn btn-danger m-2 col-6 btn-block mx-auto"},"Multiplicacion"),r.a.createElement(i.b,{to:"/Division",className:"btn btn-primary m-2 col-6 btn-block mx-auto"},"Division"))};var f=function(e){return r.a.createElement("div",{className:"text-center p-5 col-12"},r.a.createElement("h1",null,"MatematicApp"),r.a.createElement("p",null,e.subtitulo))},E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{subtitulo:"Selecciona una de las opciones para practicar cualquier operacion"}),r.a.createElement(b,null))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"p-3"},"Pagina no encontrada"),r.a.createElement(i.b,{to:"/",className:"btn btn-danger"},"Volver a Inicio"))},p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron text-center text-white mt-5",style:{backgroundColor:"rgba(0,0,0,0.5)"}},r.a.createElement("p",null,"Has acertado ",this.props.acertadas," y has fallado"," ",this.props.falladas),r.a.createElement(i.b,{to:"/Inicio",className:"btn btn-success"},"Volver al Inicio"))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).resultadoRef=r.a.createRef(),e.state={numeros:[1,2,3,4,5,6,7,8,9,10],intentos:0,acertadas:0,falladas:0},e.desordenarNumeros=function(){e.setState({numeros:e.state.numeros.sort((function(){return Math.random()-.5}))}),console.log(e.state.numeros)},e.revisarResultado=function(t){t.preventDefault(),e.state.numeros[0]+e.state.numeros[1]==e.resultadoRef.current.value?(e.setState({acertadas:e.state.acertadas+1}),alert("Excelente :)")):(e.setState({falladas:e.state.falladas+1}),alert("Has fallado :(")),e.setState({intentos:e.state.intentos+1}),document.getElementById("numero").value="",e.desordenarNumeros()},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{subtitulo:"Prueba las Sumas"}),r.a.createElement("form",{onSubmit:this.revisarResultado},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[0]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"+")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[1]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"=")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",required:!0,type:"number",ref:this.resultadoRef,id:"numero"})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success col-4",id:"enviar"},"Revisar"))),r.a.createElement(i.b,{to:"/",className:"btn btn-info m-2 col-4 btn-block mx-auto"},"Inicio"),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Intentos ",this.state.intentos,"/5")),5==this.state.intentos&&(document.getElementById("numero").disabled=!0,document.getElementById("enviar").disabled=!0,r.a.createElement(i.b,{to:"/Resultado",component:p,acertadas:this.state.acertadas,falladas:this.state.falladas})))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).resultadoRef=r.a.createRef(),e.state={numeros:[1,2,3,4,5,6,7,8,9,10],intentos:0,acertadas:0,falladas:0},e.desordenarNumeros=function(){e.setState({numeros:e.state.numeros.sort((function(){return Math.random()-.5}))}),console.log(e.state.numeros)},e.revisarResultado=function(t){t.preventDefault(),e.state.numeros[0]-e.state.numeros[1]==e.resultadoRef.current.value?(e.setState({acertadas:e.state.acertadas+1}),alert("Excelente :)")):(e.setState({falladas:e.state.falladas+1}),alert("Has fallado :(")),e.setState({intentos:e.state.intentos+1}),document.getElementById("numero").value="",e.desordenarNumeros()},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{subtitulo:"Prueba las Restas"}),r.a.createElement("form",{onSubmit:this.revisarResultado},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[0]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"-")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[1]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"=")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",required:!0,type:"number",ref:this.resultadoRef,id:"numero"})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success col-4",id:"enviar"},"Revisar"))),r.a.createElement(i.b,{to:"/",className:"btn btn-info m-2 col-4 btn-block mx-auto"},"Inicio"),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Intentos ",this.state.intentos,"/5")),5==this.state.intentos&&(document.getElementById("numero").disabled=!0,document.getElementById("enviar").disabled=!0,r.a.createElement(i.b,{to:"/Resultado",component:p,acertadas:this.state.acertadas,falladas:this.state.falladas})))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).resultadoRef=r.a.createRef(),e.state={numeros:[2,4,6,8,10,12],intentos:0,acertadas:0,falladas:0},e.desordenarNumeros=function(){e.setState({numeros:e.state.numeros.sort((function(){return Math.random()-.5}))}),console.log(e.state.numeros)},e.revisarResultado=function(t){t.preventDefault();var a=e.state.numeros[0]/e.state.numeros[1];Math.trunc(a),a==e.resultadoRef.current.value?(e.setState({acertadas:e.state.acertadas+1}),alert("Excelente :)")):(e.setState({falladas:e.state.falladas+1}),alert("Has fallado :(")),e.setState({intentos:e.state.intentos+1}),document.getElementById("numero").value="",e.desordenarNumeros()},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{subtitulo:"Prueba las Divisiones"}),r.a.createElement("form",{onSubmit:this.revisarResultado},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[0]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"/")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[1]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"=")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",required:!0,type:"number",ref:this.resultadoRef,id:"numero",step:"0.01"})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success col-4",id:"enviar"},"Revisar"))),r.a.createElement(i.b,{to:"/",className:"btn btn-info m-2 col-4 btn-block mx-auto"},"Inicio"),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Intentos ",this.state.intentos,"/5")),5==this.state.intentos&&(document.getElementById("numero").disabled=!0,document.getElementById("enviar").disabled=!0,r.a.createElement(i.b,{to:"/Resultado",component:p,acertadas:this.state.acertadas,falladas:this.state.falladas})))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).resultadoRef=r.a.createRef(),e.state={numeros:[1,2,3,4,5,6,7,8,9,10],intentos:0,acertadas:0,falladas:0},e.desordenarNumeros=function(){e.setState({numeros:e.state.numeros.sort((function(){return Math.random()-.5}))}),console.log(e.state.numeros)},e.revisarResultado=function(t){t.preventDefault(),e.state.numeros[0]*e.state.numeros[1]==e.resultadoRef.current.value?(e.setState({acertadas:e.state.acertadas+1}),alert("Excelente :)")):(e.setState({falladas:e.state.falladas+1}),alert("Has fallado :(")),e.setState({intentos:e.state.intentos+1}),document.getElementById("numero").value="",e.desordenarNumeros()},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{subtitulo:"Prueba las Multiplicaciones"}),r.a.createElement("form",{onSubmit:this.revisarResultado},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[0]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"*")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",disabled:!0,value:this.state.numeros[1]})),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h2",null,"=")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control col-4 mx-auto",required:!0,type:"number",ref:this.resultadoRef,id:"numero"})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success col-4",id:"enviar"},"Revisar"))),r.a.createElement(i.b,{to:"/",className:"btn btn-info m-2 col-4 btn-block mx-auto"},"Inicio"),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Intentos ",this.state.intentos,"/5")),5==this.state.intentos&&(document.getElementById("numero").disabled=!0,document.getElementById("enviar").disabled=!0,r.a.createElement(i.b,{to:"/Resultado",component:p,acertadas:this.state.acertadas,falladas:this.state.falladas})))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/Inicio",component:E}),r.a.createElement(d.a,{exact:!0,path:"/",component:E}),r.a.createElement(d.a,{exact:!0,path:"/Suma",component:h}),r.a.createElement(d.a,{exact:!0,path:"/Resta",component:N}),r.a.createElement(d.a,{exact:!0,path:"/Multiplicacion",component:g}),r.a.createElement(d.a,{exact:!0,path:"/Division",component:x}),r.a.createElement(d.a,{component:v})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32);l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.92c04ae8.chunk.js.map