YUI.add("oop",function(F){var D=F.Lang,C=F.Array,B=Object.prototype,E;F.augment=function(A,S,I,Q,M){var K=S.prototype,O=null,R=S,N=(M)?F.Array(M):[],H=A.prototype,L=H||A,P=false;if(H&&R){var G={},J={};O={};F.each(K,function(U,T){J[T]=function(){var W=this;for(var V in G){if(F.Object.owns(G,V)&&(W[V]===J[V])){W[V]=G[V];}}R.apply(W,N);return G[T].apply(W,arguments);};if((!Q||(T in Q))&&(I||!(T in this))){if(D.isFunction(U)){G[T]=U;this[T]=J[T];}else{this[T]=U;}}},O,true);}else{P=true;}F.mix(L,O||K,I,Q);if(P){S.apply(L,N);}return A;};F.aggregate=function(H,G,A,I){return F.mix(H,G,A,I,0,true);};F.extend=function(J,I,G,L){if(!I||!J){F.fail("extend failed, verify dependencies");}var K=I.prototype,H=F.Object(K),A;J.prototype=H;H.constructor=J;J.superclass=K;if(I!=Object&&K.constructor==B.constructor){K.constructor=I;}if(G){F.mix(H,G,true);}if(L){F.mix(J,L,true);}return J;};F.each=function(H,G,I,A){if(H.each&&H.item){return H.each.call(H,G,I);}else{switch(C.test(H)){case 1:return C.each(H,G,I);case 2:return C.each(F.Array(H,0,true),G,I);default:return F.Object.each(H,G,I,A);}}};F.clone=function(K,J,I,L,A){if(!D.isObject(K)){return K;}if(D.isDate(K)){return new Date(K);}var H=D.isFunction(K),G;if(H){if(K instanceof RegExp){return new RegExp(K.source);}G=F.bind(K,A);}else{G=(J)?{}:F.Object(K);}F.each(K,function(N,M){if(!I||(I.call(L||this,N,M,this,K)!==false)){this[M]=F.clone(N,J,I,L,this);}},G);return G;};F.bind=function(G,H){var A=F.Array(arguments,2,true);return function(){return G.apply(H||G,F.Array(arguments,0,true).concat(A));};};},"@VERSION@");