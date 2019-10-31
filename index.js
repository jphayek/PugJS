function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"index.pug":"mixin list(title, para)\r\n    div\r\n        h2=title\r\n        p=para\r\n        block\r\nmixin listNav(title, email)\r\n    div\r\n        h2=title\r\n        block\r\n\r\ndoctype html\r\nhtml \r\n    head\r\n        title Jean-Paul Hayek\r\n        link(href=\"style.css\",rel=\"stylesheet\",type=\"text\u002Fcss\")\r\n    body\r\n        nav\r\n            div.NavBar\r\n            h2.title Electro\r\n            h2 .\r\n            input(type=\"text\" placeholder=\"recherche\")\r\n\r\n        \r\n        div.UneClass\r\n            +list(\"hello\", \"World\")\r\n            +list(\"glados\", \"wheatley\")\r\n        div#unTag\r\n            +list(\"Un block\", \"qui claque\")\r\n                button Click me\r\n                p Un aute\r\n                div \r\n                    +list(\"Hello\", \"again\")\r\n"};
;pug_debug_line = 1;pug_debug_filename = "index.pug";
pug_mixins["list"] = pug_interp = function(title, para){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 3;pug_debug_filename = "index.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 4;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 4;pug_debug_filename = "index.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = para) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "index.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 6;pug_debug_filename = "index.pug";












;pug_debug_line = 11;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 12;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 12;pug_debug_filename = "index.pug";
pug_html = pug_html + " ";
;pug_debug_line = 13;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 14;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 14;pug_debug_filename = "index.pug";
pug_html = pug_html + "Jean-Paul Hayek\u003C\u002Ftitle\u003E";
;pug_debug_line = 15;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Clink href=\"style.css\" rel=\"stylesheet\" type=\"text\u002Fcss\"\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 17;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cnav\u003E";
;pug_debug_line = 18;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cdiv class=\"NavBar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Ch2 class=\"title\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "index.pug";
pug_html = pug_html + "Electro\u003C\u002Fh2\u003E";
;pug_debug_line = 20;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 20;pug_debug_filename = "index.pug";
pug_html = pug_html + ".\u003C\u002Fh2\u003E";
;pug_debug_line = 21;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cinput type=\"text\" placeholder=\"recherche\"\u003E\u003C\u002Fnav\u003E";
;pug_debug_line = 24;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cdiv class=\"UneClass\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "index.pug";
pug_mixins["list"]("hello", "World");
;pug_debug_line = 26;pug_debug_filename = "index.pug";
pug_mixins["list"]("glados", "wheatley");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cdiv id=\"unTag\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "index.pug";
pug_mixins["list"].call({
block: function(){
;pug_debug_line = 29;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cbutton\u003E";
;pug_debug_line = 29;pug_debug_filename = "index.pug";
pug_html = pug_html + "Click me\u003C\u002Fbutton\u003E";
;pug_debug_line = 30;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 30;pug_debug_filename = "index.pug";
pug_html = pug_html + "Un aute\u003C\u002Fp\u003E";
;pug_debug_line = 31;pug_debug_filename = "index.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "index.pug";
pug_html = pug_html + " ";
;pug_debug_line = 32;pug_debug_filename = "index.pug";
pug_mixins["list"]("Hello", "again");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
}, "Un block", "qui claque");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}