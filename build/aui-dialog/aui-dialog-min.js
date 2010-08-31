AUI.add("aui-dialog",function(S){var M=S.Lang,j=M.isBoolean,d=M.isArray,n=M.isObject,X="",O="bodyContent",s="boundingBox",w="button",E="buttons",t="close",o="closethick",k="constrain2view",C="container",F="dd",p="default",u="destroyOnClose",Z="dialog",a=".",P="draggable",N="dragInstance",I="footerContent",q="hd",i="height",g="icon",D="icons",V="io",Y="loading",c="modal",x="proxy",G="resizable",Q="resizableInstance",f="stack",H="width",T="resize:resize",m="resize:end",J=S.ClassNameManager.getClassName,b=J(Z),K=J(Z,w),e=J(Z,w,C),r=J(Z,w,p),B=J(Z,q),W=J(g,Y),R=J(F),h=document.createTextNode(""),l='<button class="'+K+'"></button>',v='<div class="'+e+'"></div>';var U=function(A){if(!S.DialogMask){S.DialogMask=new S.OverlayMask().render();}};S.mix(U,{NAME:Z,ATTRS:{bodyContent:{value:h},buttons:{value:[],validator:d},close:{value:true},constrain2view:{value:false,validator:j},destroyOnClose:{value:false,validator:j},draggable:{lazyAdd:true,value:true,setter:function(A){return this._setDraggable(A);}},dragInstance:{value:null},modal:{setter:function(A){return this._setModal(A);},lazyAdd:false,value:false,validator:j},resizable:{setter:function(A){return this._setResizable(A);},value:true},resizableInstance:{value:null},stack:{lazyAdd:true,value:true,setter:function(A){return this._setStack(A);},validator:j}}});U.prototype={initializer:function(y){var A=this;var z=A.get(D);var AB=A.get(t);var AA=A.get(E);if(AA&&AA.length&&!A.get(I)){A.set(I,h);}if(AB){var L={icon:o,id:o,handler:{fn:A.close,context:A}};if(z){z.push(L);}A.set(D,z);}A.after("render",A._afterRenderer);},bindUI:function(){var A=this;A._bindLazyComponents();A.publish("close",{defaultFn:A._close});A.on("visibleChange",A._afterSetVisible);},destructor:function(){var A=this;var L=A.get(s);S.Event.purgeElement(L,true);},_bindLazyComponents:function(){var A=this;var L=A.get(s);L.on("mouseenter",S.bind(A._initLazyComponents,A));},close:function(){var A=this;A.fire("close");},_afterConstrain2viewChange:function(L){var A=this;A._setConstrain2view(L.newVal);},_afterRenderer:function(L){var A=this;A._initButtons();A.get(f);A.get(V);},_close:function(){var A=this;if(A.get(u)){A.destroy();}else{A.hide();}if(A.get(c)){S.DialogMask.hide();}},_initButtons:function(){var A=this;var y=A.get(E);var L=S.Node.create(v);var z=S.Node.create(l);S.each(y,function(AB,AA){var AC=z.clone();if(AB.isDefault){AC.addClass(r);}if(AB.handler){AC.on("click",AB.handler,A);}AC.html(AB.text||X);L.append(AC);});if(y.length){A.set(I,L);}},_initLazyComponents:function(){var A=this;if(!A.get(N)&&A.get(P)){A.get(P);}if(!A.get(Q)&&A.get(G)){A.get(G);}},_setConstrain2view:function(L){var A=this;var y=A.get(N);if(y){if(L){y.plug(S.Plugin.DDConstrained,{constrain2view:A.get(k)});}else{y.unplug(S.Plugin.DDConstrained);}}},_setDraggable:function(AA){var A=this;var y=A.get(s);var z=function(){var AD=A.get(N);if(AD){AD.destroy();AD.unplug(S.Plugin.DDConstrained);}};S.DD.DDM.CSS_PREFIX=R;if(AA){var AB={node:y,handles:[a+B]};var L=S.merge(AB,AA||{});if(L.on){S.each(L.on,function(AE,AD){L.on[AD]=S.bind(AE,A);});}z();var AC=new S.DD.Drag(L);A.set(N,AC);A.after("constrain2viewChange",A._afterConstrain2viewChange,A);A._setConstrain2view(A.get("constrain2view"));}else{z();}return AA;},_setModal:function(L){var A=this;if(L){S.DialogMask.show();}else{S.DialogMask.hide();}return L;},_setResizable:function(AA){var A=this;var AB=A.get(Q);var z=function(){if(AB){AB.destroy();}};if(AA){var y=function(AD){var AC=AD.type;var AE=AD.info;if((AC==m)||((AC==T)&&!AD.currentTarget.get(x))){A.set(i,AE.offsetHeight);A.set(H,AE.offsetWidth);}};z();var L=new S.Resize(S.merge({handles:"r,br,b",minHeight:100,minWidth:200,constrain2view:true,node:A.get(s),proxy:true},AA||{}));L.after("end",y);L.after("resize",y);A.set(Q,L);return AA;}else{z();}},_setStack:function(L){var A=this;if(L){S.DialogManager.register(A);}else{S.DialogManager.remove(A);}return L;},_afterSetVisible:function(L){var A=this;if(A.get(c)){if(L.newVal){S.DialogMask.show();}else{S.DialogMask.hide();}}}};S.Dialog=S.Base.build(Z,S.Panel,[U,S.WidgetPosition,S.WidgetStack,S.WidgetPositionAlign,S.WidgetPositionConstrain]);S.DialogManager=new S.OverlayManager({zIndexBase:1000});S.mix(S.DialogManager,{findByChild:function(A){return S.Widget.getByNode(S.one(A).ancestor(a+b,true));},closeByChild:function(A){return S.DialogManager.findByChild(A).close();},refreshByChild:function(L){var A=S.DialogManager.findByChild(L);if(A&&A.io){A.io.start();}}});},"@VERSION@",{requires:["aui-panel","dd-constrain","aui-button-item","aui-overlay-manager","aui-overlay-mask","aui-io-plugin","aui-resize"],skinnable:true});