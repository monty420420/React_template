(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=(n(18),n(11)),s=n(5),i=n(1),u=n(2),m=n(4),h=n(3),d=(n(19),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"render",value:function(){console.log(this.props.habit);var e=this.props.habit,t=e.name,n=e.count;return r.a.createElement("li",{className:"habit"},r.a.createElement("span",{className:"habit-name"},t),r.a.createElement("span",{className:"habit-count"},n),r.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},r.a.createElement("i",{className:"fas fa-plus-square"})),r.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},r.a.createElement("i",{className:"fas fa-minus-square"})),r.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},r.a.createElement("i",{className:"fas fa-trash"})))}}]),n}(a.PureComponent)),b=Object(a.memo)(function(e){var t=r.a.createRef(),n=r.a.createRef();return r.a.createElement("form",{ref:n,className:"add-form",onSubmit:function(a){a.preventDefault();var r=t.current.value;r&&e.onAdd(r),n.current.reset()}},r.a.createElement("input",{ref:t,type:"text",className:"add-input",placeholder:"Habit"}),r.a.createElement("button",{className:"add-button"},"Add"))}),p=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{onAdd:this.handleAdd}),r.a.createElement("ul",null,this.props.habits.map(function(t){return r.a.createElement(d,{key:t.id,habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete})})),r.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset All"))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("i",{className:"fas fa-atom"}),r.a.createElement("span",null,"Habit Tracker"),r.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),n}(a.PureComponent),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){console.log("handleIncrement ".concat(t.name));var n=e.state.habits.map(function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},t),{},{count:t.count+1}):e});e.setState({habits:n})},e.handleDecrement=function(t){console.log("handleDecrement ".concat(t.name));var n=e.state.habits.map(function(e){if(e.id===t.id){var n=t.count-1;return Object(s.a)(Object(s.a)({},t),{},{count:n<0?0:n})}return e});e.setState({habits:n})},e.handleDelete=function(t){console.log("handleDelete ".concat(t.name));var n=e.state.habits.filter(function(e){return e.id!==t.id});e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(l.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map(function(e){return 0!==e.count?Object(s.a)(Object(s.a)({},e),{},{count:0}):e});e.setState({habits:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{totalCount:this.state.habits.filter(function(e){return e.count>0}).length}),r.a.createElement(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),n}(a.Component);n(20),n(12);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6db924dc.chunk.js.map