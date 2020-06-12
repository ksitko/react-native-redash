(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{clwf:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return r})),a.d(n,"default",(function(){return m}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var t=a("/FXl"),i=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/run-animations.mdx"}});var b={_frontmatter:r},c=i.a;function m(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(t.b)(c,o({},b,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"run-animations"},"Run Animations"),Object(t.b)("hr",null),Object(t.b)("h2",{id:"timing"},Object(t.b)("inlineCode",{parentName:"h2"},"timing()")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"interface TimingParams {\n    clock?: Animated.Clock;\n    from?: Animated.Adaptable<number>;\n    to?: Animated.Adaptable<number>;\n    duration?: Animated.Adaptable<number>;\n    easing?: Animated.EasingFunction;\n}\nconst timing: (params: TimingParams) => Animated.Node<number>;\n")),Object(t.b)("p",null,"Convenience function to run a timing animation.\nExample usage:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"timing({\n  duration: 10 * 1000,\n  from: 0,\n  to: 1,\n  easing: Easing.linear,\n});\n")),Object(t.b)("hr",null),Object(t.b)("h2",{id:"decay"},Object(t.b)("inlineCode",{parentName:"h2"},"decay()")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"export interface DecayParams {\n    clock?: Animated.Clock;\n    from?: Animated.Adaptable<number>;\n    velocity?: Animated.Value<number>;\n    deceleration?: Animated.Adaptable<number>;\n}\nconst decay: (params: DecayParams) => Animated.Node<number>;\n")),Object(t.b)("p",null,"Convenience function to run a decay animation."),Object(t.b)("h2",{id:"spring"},Object(t.b)("inlineCode",{parentName:"h2"},"spring()")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"interface SpringParams {\n    clock?: Animated.Clock;\n    from?: Animated.Adaptable<number>;\n    to: Animated.Adaptable<number>;\n    velocity?: Animated.Value<number>;\n    config?: SpringConfig;\n}\nconst spring: (params: SpringParams) => Animated.Node<number>;\n")),Object(t.b)("p",null,"Convenience function to run a spring animation."),Object(t.b)("h2",{id:"delay"},Object(t.b)("inlineCode",{parentName:"h2"},"delay()")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const delay: (node: Animated.Node<number>, duration: number) => Animated.Node<number>;\n")),Object(t.b)("p",null,"Evaluate an animation node after a certain amount of time. ",Object(t.b)("inlineCode",{parentName:"p"},"duration")," is in milliseconds.\nExample usage:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"delay(set(value, 1), 250);\n")),Object(t.b)("h2",{id:"loop"},Object(t.b)("inlineCode",{parentName:"h2"},"loop()")),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"interface LoopProps {\n    clock?: Animated.Clock;\n    easing?: Animated.EasingFunction;\n    duration?: number;\n    boomerang?: boolean;\n    autoStart?: boolean;\n}\nconst loop: (loopConfig: LoopProps) => Animated.Node<number>;\n")),Object(t.b)("p",null,"Returns an animated node that goes from ",Object(t.b)("inlineCode",{parentName:"p"},"0")," to ",Object(t.b)("inlineCode",{parentName:"p"},"1")," during the time set by ",Object(t.b)("inlineCode",{parentName:"p"},"duration")," continuously. If the ",Object(t.b)("inlineCode",{parentName:"p"},"boomerang")," option is set to ",Object(t.b)("inlineCode",{parentName:"p"},"true"),", the animation goes from ",Object(t.b)("inlineCode",{parentName:"p"},"0")," to ",Object(t.b)("inlineCode",{parentName:"p"},"1")," and then from ",Object(t.b)("inlineCode",{parentName:"p"},"1")," to ",Object(t.b)("inlineCode",{parentName:"p"},"0")," in the next cycle.\nExample usage:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"const progress = new Value(0);\nset(progress, loop({ duration: 400, easing: Easing.linear }));\n")))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/run-animations.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-run-animations-mdx-5fb6c2f81c5abac3baae.js.map