(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){},25:function(e,a,t){var c=t(2);function r(e){for(var a={},t=0;t<e.length;t++)a[e[t].placement[0]]?a[e[t].placement[0]]+=1:a[e[t].placement[0]]=1;return a}function o(e){return Object.entries(e).sort(function(e,a){return a[1]-e[1]})}e.exports={countWins:r,sortWinners:o,sortedWinnerData:function(e){return o(r(e))},sortedChampWinnerData:function(e){return o(function(e){for(var a=function(e){return e.filter(function(e){return e.championship="true"})}(e),t={},c=0;c<a.length;c++)t[a[c].races[0].placement[0]]?t[a[c].races[0].placement[0]].value+=1:t[a[c].races[0].placement[0]]={value:0};return t}(e))},sortedTrackData:function(e){return o(function(e){for(var a={},t=0;t<e.length;t++)a[e[t].track]?a[e[t].track]+=1:a[e[t].track]=1;return a}(e))},sortedCharacterData:function(e){return o(function(e){for(var a={},t=0;t<e.length;t++)a[e[t].character]?a[e[t].character]+=1:a[e[t].character]=1;return a}(e))},playerTracks:function(e){for(var a={},t=0;t<e.length;t++)a[e[t].chosen_by]||"championship"===e[t].chosen_by||(a[e[t].chosen_by]=[]),a[e[t].chosen_by]&&a[e[t].chosen_by].push(e[t].track);return Object.entries(a)},playersChars:function(e){for(var a={},t=0;t<e.length;t++)a[e[t].name]||(a[e[t].name]=[]),a[e[t].name]&&a[e[t].name].push(e[t].character);return Object.entries(a)},findMostFreqLodash:function(e){for(var a,t=[],r=0;r<e.length;r++)t.push({name:e[r][0],val:(a=e[r][1],c.head(c(a).countBy().entries().maxBy("[1]")))});return t}}},254:function(e,a,t){e.exports=t(484)},259:function(e,a,t){},271:function(e,a,t){},273:function(e,a,t){},341:function(e,a,t){},484:function(e,a,t){"use strict";t.r(a);var c,r=t(1),o=t.n(r),n=t(34),m=t.n(n),l=(t(259),t(490)),s=t(67),h=(t(271),t(491)),i=t(492),p=t(63),y=t.n(p),f=t(488),d=(t(273),function(){return o.a.createElement("div",{className:"home_container"},o.a.createElement("h2",{className:"home_title"},"MARIO KART ALL(OY) STARS"),o.a.createElement(s.Parallax,{offsetYMax:20,offsetYMin:-20,slowerScrollRate:!0},o.a.createElement("div",{className:"enter"},o.a.createElement(f.a,{to:"/main"},o.a.createElement(y.a,{variant:"contained",size:"large",color:"primary",className:"start"},"start")))))}),u=(t(341),t(44)),T=t(24),b=(t(127),t(489)),S=t(486),k=t(485),C=t(153),w=t(72),_={Characters:["Mario","Yoshi","Peach","Toad","Luigi","Donkey Kong","Wario","Bowser"],Tracks:{"Mushroom Cup":["Luigi Raceway","Moo Moo Farm","Koopa Troopa Beach","Kalimari Desert"],"Flower Cup":["Toad's Turnpike","Frappe Snowland","Choco Mountain","Mario Raceway"],"Star Cup":["Wario Stadium","Sherbet Land","Royal Raceway","Bowser's Castle"],"Special Cup":["DK's Jungle Parkway","Yoshi Valley","Banshee Boardwalk","Rainbow Road"]},Heats:(c={"8/13/18 5:30 PM":{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"}],races:[{track:"Mario Raceway",chosen_by:"Charles",placement:["Jeff","Scott","Charles"]},{track:"Koopa Troopa Beach",chosen_by:"Scott",placement:["Charles","Jeff","Scott"]},{track:"Choco Mountain",chosen_by:"Jeff",placement:["Scott","Jeff","Charles"]}]},"8/14/18 4:00 PM":{championship:!0,players:[{name:"Charles",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"}],races:[{track:"Sherbet Land",chosen_by:"Charles",placement:["Scott","Jeff","Charles"]},{track:"Mario Raceway",chosen_by:"Scott",placement:["Scott","Charles","Jeff"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Jeff","Charles","Scott"]},{track:"Rainbow Road",chosen_by:"championship",placement:["Jeff","Scott","Charles"]}]},"8/16/18 3:00 PM":{championship:!1,players:[{name:"Tommy N",character:"Peach"},{name:"Edwina",character:"Toad"},{name:"Scott",character:"Bowser"},{name:"Charles",character:"Yoshi"}],races:[{track:"Mario Raceway",chosen_by:"Tommy N",placement:["Charles","Scott","Tommy N","Edwina"]},{track:"Moo Moo Farm",chosen_by:"Edwina",placement:["Scott","Charles","Edwina","Tommy N (DNR)"]},{track:"Royal Raceway",chosen_by:"Scott",placement:["Scott","Charles","Edwina","Tommy N (DNR)"]},{track:"Sherbet Land",chosen_by:"Charles",placement:["Scott","Charles","Edwina","Tommy N (DNR)"]}]},"8/20/18 2:30 PM":{championship:!1,players:[{name:"Tommy G",character:"Donkey Kong"},{name:"Jeff",character:"Peach"},{name:"Tommy N",character:"Toad"}],races:[{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Tommy N","Jeff","Tommy G"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Jeff","Tommy G","Tommy N"]},{track:"Bowser's Castle",chosen_by:"Tommy N",placement:["Tommy N","Tommy G","Jeff (DQ)"]}]},"8/20/18 4:00 PM":{championship:!1,players:[{name:"Tommy G",character:"Wario"},{name:"Scott",character:"Bowser"},{name:"Charles",character:"Yoshi"},{name:"Jeff",character:"Toad"}],races:[{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Scott","Tommy G","Charles","Jeff (DNR)"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Charles","Scott","Tommy G","Jeff (DNR)"]},{track:"DK's Jungle Parkway",chosen_by:"Charles",placement:["Tommy G","Jeff","Charles","Scott"]},{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Scott","Jeff","Charles","Tommy G"]}]},"8/21/18 3:30 PM":{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Tommy G",character:"Wario"},{name:"Jeff",character:"Toad"}],races:[{track:"Mario Raceway",chosen_by:"Charles",placement:["Charles","Jeff","Tommy G","Scott"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Scott","Jeff","Charles","Tommy G"]},{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Jeff","Scott","Tommy G","Charles"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Jeff","Charles","Tommy G","Scott"]}]},"8/22/18 3:00 PM":{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Jeff",character:"Peach"},{name:"Tommy G",character:"Wario"},{name:"Scott",character:"Toad"}],races:[{track:"Kalimari Desert",chosen_by:"Charles",placement:["Scott","Jeff","Tommy G","Charles"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Jeff","Tommy G","Charles","Scott"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Scott","Charles","Tommy G","Jeff"]},{track:"Royal Raceway",chosen_by:"Tommy G",placement:["Tommy G","Jeff","Charles","Scott"]}]},"8/24/18 3:00 PM":{championship:!1,players:[{name:"Jeff",character:"Toad"},{name:"Tommy G",character:"Wario"},{name:"Scott",character:"Bowser"}],races:[{track:"Choco Mountain",chosen_by:"Jeff",placement:["Jeff","Scott","Tommy G"]},{track:"Frappe Snowland",chosen_by:"Tommy G",placement:["Jeff","Scott","Tommy G"]},{track:"Mario Raceway",chosen_by:"Scott",placement:["Scott","Tommy G","Jeff"]}]},"8/27/18 3:00 PM":{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"}],races:[{track:"Mario Raceway",chosen_by:"Charles",placement:["Charles","Scott","Jeff"]},{track:"Frappe Snowland",chosen_by:"Tommy G",placement:["Scott","Charles","Jeff"]},{track:"Mario Raceway",chosen_by:"Scott",placement:["Scott","Jeff","Charles"]}]},"8/28/18 3:00 PM":{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Jeff",character:"Toad"},{name:"Scott",character:"Bowser"}],races:[{track:"Bowser's Castle",chosen_by:"Charles",placement:["Scott","Charles","Jeff"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Scott","Charles","Jeff"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Jeff","Scott","Charles"]}]},"8/29/18 3:30 PM":{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Tommy N",character:"Toad"},{name:"Tommy G",character:"Wario"}],races:[{track:"DK's Jungle Parkway",chosen_by:"Charles",placement:["Charles","Tommy N","Tommy G","Scott"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Scott","Charles","Tommy N","Tommy G"]},{track:"Royal Raceway",chosen_by:"Tommy N",placement:["Scott","Tommy N","Charles","Tommy G"]},{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Scott","Charles","Tommy N","Tommy G"]}]},"8/30/18 3:00 PM":{championship:!1,players:[{name:"Tommy N",character:"Peach"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"},{name:"Charles",character:"Yoshi"}],races:[{track:"Royal Raceway",chosen_by:"Tommy N",placement:["Scott","Tommy N","Jeff","Charles"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Jeff","Scott","Charles","Tommy N"]},{track:"Choco Mountain",chosen_by:"Jeff",placement:["Jeff","Charles","Scott","Tommy N"]},{track:"Mario Raceway",chosen_by:"Charles",placement:["Jeff","Scott","Charles","Tommy N"]}]},"8/31/18 3:00 PM":{championship:!1,players:[{name:"Tommy N",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"},{name:"Tommy G",character:"Wario"}],races:[{track:"Royal Raceway",chosen_by:"Tommy N",placement:["Scott","Tommy N","Tommy G","Jeff"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Scott","Tommy N","Jeff","Tommy G"]},{track:"Choco Mountain",chosen_by:"Jeff",placement:["Scott","Tommy N","Jeff","Tommy G"]},{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Jeff","Tommy N","Tommy G","Scott"]}]},"9/5/18 3:30 PM":{championship:!1,players:[{name:"Tommy N",character:"Peach"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"},{name:"Charles",character:"Yoshi"}],races:[{track:"Royal Raceway",chosen_by:"Tommy N",placement:["Jeff","Scott","Charles","Tommy N"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Charles","Scott","Tommy N","Jeff"]},{track:"Choco Mountain",chosen_by:"Jeff",placement:["Scott","Tommy N","Jeff","Charles"]},{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Scott","Jeff","Charles","Tommy N"]}]},"9/6/18 3:30 PM":{championship:!1,players:[{name:"Tommy G",character:"Wario"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Toad"},{name:"Tommy N",character:"Peach"}],races:[{track:"Toad's Turnpike",chosen_by:"Tommy G",placement:["Tommy G","Scott","Tommy N","Jeff"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Scott","Jeff","Tommy G","Tommy N"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Scott","Tommy G","Tommy N","Jeff"]},{track:"Mario Raceway",chosen_by:"Tommy N",placement:["Jeff","Tommy N","Scott","Tommy G"]}]},"9/7/18 2:30 PM":{championship:!1,players:[{name:"Charles",character:"Peach"},{name:"Scott",character:"Bowser"},{name:"Tommy N",character:"Yoshi"},{name:"Mark",character:"Luigi"}],races:[{track:"Mario Raceway",chosen_by:"Charles",placement:["Charles","Scott","Tommy N","Mark"]},{track:"Kalimari Desert",chosen_by:"Scott",placement:["Scott","Charles","Tommy N","Mark"]},{track:"Royal Raceway",chosen_by:"Tommy N",placement:["Charles","Scott","Tommy N","Mark"]},{track:"Toad's Turnpike",chosen_by:"Mark",placement:["Scott","Tommy N","Charles","Mark"]}]}},Object(w.a)(c,"9/7/18 2:30 PM",{championship:!0,players:[{name:"Charles",character:"Peach"},{name:"Scott",character:"Bowser"},{name:"Tommy N",character:"Yoshi"}],races:[{track:"Koopa Troopa Beach",chosen_by:"Charles",placement:["Charles","Jeff","Scott"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Charles","Scott","Jeff"]},{track:"Banshee Boardwalk",chosen_by:"Jeff",placement:["Jeff","Charles","Scott"]},{track:"Rainbow Road",chosen_by:"championship",placement:["Scott","Jeff","Charles"]}]}),Object(w.a)(c,"9/11/18 2:30 PM",{championship:!1,players:[{name:"Charles",character:"Yoshi"},{name:"Scott",character:"Bowser"},{name:"Jeff",character:"Peach"},{name:"Tommy N",character:"Toad"}],races:[{track:"Mario Raceway",chosen_by:"Charles",placement:["Jeff","Scott","Charles","Tommy N"]},{track:"Sherbet Land",chosen_by:"Scott",placement:["Jeff","Scott","Charles","Tommy N"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Tommy N","Jeff","Scott","Charles"]},{track:"Kalimari Desert",chosen_by:"Tommy N",placement:["Tommy N","Charles","Jeff","Scott"]}]}),Object(w.a)(c,"9/12/18 3:00 PM",{championship:!0,players:[{name:"Scott",character:"Bowser"},{name:"Charles",character:"Yoshi"},{name:"Jeff",character:"Toad"}],races:[{track:"Toad's Turnpike",chosen_by:"Scott",placement:["Charles","Jeff","Scott"]},{track:"Mario Raceway",chosen_by:"Charles",placement:["Scott","Charles","Jeff"]},{track:"Royal Raceway",chosen_by:"Jeff",placement:["Charles","Scott","Jeff"]},{track:"Bowser's Castle",chosen_by:"championship",placement:["Charles","Jeff","Scott"]}]}),c)},J=t(25),E=t(128),v=E.flattenDeep(E.map(_.Heats,"races")),N=Object(J.sortedWinnerData)(v).slice(0,3),R=E.flattenDeep(E.map(_.Heats)),g=Object(J.sortedChampWinnerData)(R).slice(0,3),M=Object(J.sortedTrackData)(v).slice(0,3),G=E.flattenDeep(E.map(_.Heats,"players")),P=Object(J.sortedCharacterData)(G).slice(0,3),B=["#049cd8","#fbd000","#43b047","#4ce1b6","#049cd8","#fbd000","#43b047","#e52521","#049cd8"],D={top:30,left:240,width:150,lineHeight:"24px"},L=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"tracks_stats_container"},o.a.createElement("div",{className:"tracks_stats"},o.a.createElement("p",{className:"chart_title"},"Top Overall Wins"),o.a.createElement(b.a,{width:250,height:250},o.a.createElement(S.a,null),o.a.createElement(k.a,{data:N.map(function(e,a){return{name:e[0],value:e[1],fill:B[a]}}),dataKey:"value",cx:110,cy:110,innerRadius:60,outerRadius:80,label:!0}),o.a.createElement(C.a,{layout:"vertical",verticalAlign:"middle",wrapperStyle:D}))),o.a.createElement("div",null,o.a.createElement("p",null,"Top Championship Wins"),o.a.createElement(b.a,{width:250,height:250},o.a.createElement(S.a,null),o.a.createElement(k.a,{data:g.map(function(e,a){return{name:e[0],value:e[1].value,fill:B[a+1]}}),dataKey:"value",cx:110,cy:110,innerRadius:60,outerRadius:80,label:!0}),o.a.createElement(C.a,{layout:"vertical",verticalAlign:"middle",wrapperStyle:D})))),o.a.createElement("div",{className:"tracks_stats_container"},o.a.createElement("div",{className:"tracks_stats"},o.a.createElement("p",null,"Top Raced Tracks"),o.a.createElement(b.a,{width:240,height:220},o.a.createElement(S.a,null),o.a.createElement(k.a,{data:M.map(function(e,a){return{name:e[0],value:e[1],fill:B[a+3]}}),dataKey:"value",cx:110,cy:110,innerRadius:60,outerRadius:80,label:!0}),o.a.createElement(C.a,{layout:"vertical",verticalAlign:"middle",wrapperStyle:D}))),o.a.createElement("div",null,o.a.createElement("p",null,"Most Popular Characters"),o.a.createElement(b.a,{width:240,height:250},o.a.createElement(S.a,null),o.a.createElement(k.a,{data:P.map(function(e,a){return{name:e[0],value:e[1],fill:B[a]}}),dataKey:"value",cx:110,cy:110,innerRadius:60,outerRadius:80,label:!0}),o.a.createElement(C.a,{layout:"vertical",verticalAlign:"middle",wrapperStyle:D})))))},Y=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h5",{className:"track_title"}," Bragging Rights Analytics ")),o.a.createElement(L,null)))},O=t(64),W=t.n(O),x=t(65),K=t.n(x),j=t(66),A=t.n(j),F=t(158),H=t.n(F),q=t(103),I=function(e){var a=e.img,t=e.name;return o.a.createElement("div",{className:"player"},o.a.createElement("div",{className:"player_avatar-wrap"},o.a.createElement("img",{src:a,alt:"avatar"})),o.a.createElement("div",null,o.a.createElement("p",{className:"player_name"},t)))},z=t(128),Q=z.flattenDeep(z.map(_.Heats,"players")),V=z.flattenDeep(z.map(_.Heats,"races")),$=Object(J.playersChars)(Q),U=Object(J.playerTracks)(V),X=Object(J.findMostFreqLodash)(U),Z=Object(J.findMostFreqLodash)($),ee=["https://api.adorable.io/avatars/60/one@adorable.io.png","https://api.adorable.io/avatars/60/two@adorable.io.png","https://api.adorable.io/avatars/60/three@adorable.io.png","https://api.adorable.io/avatars/60/four@adorable.io.png","https://api.adorable.io/avatars/60/five@adorable.io.png","https://api.adorable.io/avatars/60/six@adorable.io.png","https://api.adorable.io/avatars/60/seven@adorable.io.png","https://api.adorable.io/avatars/60/twenty@adorable.io.png","https://api.adorable.io/avatars/60/fourty@adorable.io.png","https://api.adorable.io/avatars/60/fourteen@adorable.io.png","https://api.adorable.io/avatars/60/three@adorable.io.png","https://api.adorable.io/avatars/60/four@adorable.io.png","https://api.adorable.io/avatars/60/five@adorable.io.png","https://api.adorable.io/avatars/60/one@adorable.io.png","https://api.adorable.io/avatars/60/two@adorable.io.png","https://api.adorable.io/avatars/60/three@adorable.io.png"],ae=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h5",null,"Players")),Z.map(function(e,a){return o.a.createElement("div",{key:e.name},o.a.createElement(W.a,null,o.a.createElement(K.a,{expandIcon:o.a.createElement(H.a,null)},o.a.createElement(I,{key:e,img:ee[a],name:e.name})),o.a.createElement(A.a,null,o.a.createElement("div",{className:"player_details"},o.a.createElement("h4",{className:""},"Favorite Character:"),o.a.createElement(q.a,{trigger:o.a.createElement("p",{className:"player_item"},e.val),modal:!0,closeOnDocumentClick:!0},"to do: replace this with stats about this character"),o.a.createElement("h4",null,"Favorite Track:"),o.a.createElement(q.a,{trigger:o.a.createElement("p",{className:"player_item"},X[a].val),modal:!0,closeOnDocumentClick:!0},"to do: replace this with stats about this track")))))}))},te=Object(T.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var a=e.classes;return o.a.createElement("div",{className:a.root},o.a.createElement(u.a,{container:!0,spacing:24},o.a.createElement(u.a,{item:!0,md:12},o.a.createElement(u.b,{className:a.paper},o.a.createElement(Y,null))),o.a.createElement(u.a,{item:!0,md:12},o.a.createElement(u.b,{className:a.paper},o.a.createElement(ae,null)))))}),ce=function(){return o.a.createElement("div",{className:"main_container"},o.a.createElement("div",{className:"main_content"},o.a.createElement("h2",{className:"main_title"},"PLAYERS GOTTA PLAY"),o.a.createElement(te,null)))},re=function(){return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:d}),o.a.createElement(i.a,{exact:!0,path:"/main",component:ce})))},oe=function(){return o.a.createElement(s.ParallaxProvider,null,o.a.createElement(l.a,null,o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(re,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[254,2,1]]]);
//# sourceMappingURL=main.0a1df9dc.chunk.js.map