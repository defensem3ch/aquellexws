(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MC94:function(e,t,a){e.exports={spoilerBox:"SpoilerBox-module--spoilerBox--3bEV8",spoilerBoxToggle:"SpoilerBox-module--spoilerBoxToggle--2hzk6",spoilerBoxContent:"SpoilerBox-module--spoilerBoxContent--25IxO"}},Vy5H:function(e,t,a){e.exports={music:"Music-module--music--3PP6H",musicEntryTitle:"Music-module--musicEntryTitle--3SNsw"}},cYZm:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("9Hrx"),o=a("q1tI"),n=a("MC94"),l=a.n(n),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={visible:!1},a}return Object(r.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.title,r=t.children,n=this.state.visible;return o.createElement("div",{className:l.a.spoilerBox},o.createElement("button",{type:"button",className:l.a.spoilerBoxToggle,onClick:function(){e.setState({visible:!n})}},a),o.createElement("div",{className:l.a.spoilerBoxContent,style:{display:n?"block":"none"}},r))},t}(o.Component)},"h+xR":function(e,t,a){"use strict";var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,o=!1,n=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(i){o=!0,n=i}finally{try{!r&&s.return&&s.return()}finally{if(o)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=a("q1tI"),n=a("17x9"),l=o.createElement.bind(o,"div"),s=o.createElement.bind(o,"iframe"),i={position:"relative",height:0,overflow:"hidden",maxWidth:"100%"},c={position:"absolute",top:0,left:0,width:"100%",height:"100%"},u=function(e){var t,a,o,n,u=(t=e.ratio,a=t.split(":").map((function(e){return Number(e)})),o=r(a,2),n=o[0],o[1]/n*100+"%"),m=Object.assign({},i,{paddingBottom:u}),d=Object.assign({frameBorder:0},e,{style:c});return delete d.ratio,l({style:m},s(d))};u.defaultProps={src:"https://www.youtube.com/embed/dQw4w9WgXcQ",ratio:"16:9"},u.propTypes={src:n.string,ratio:function(e,t,a){if(!/\d+:\d+/.test(e[t]))return new Error('Invalid ratio supplied to ResponsiveEmbed. Expected a string like "16:9" or any 2 numbers seperated by a colon')}},e.exports=u},vBl1:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r),n=a("qhky"),l=a("h+xR"),s=a.n(l),i=a("RXmK"),c=a("Vy5H"),u=a.n(c),m=function(e){var t=e.title,a=e.genre,r=e.children;return o.a.createElement("article",{className:u.a.music},o.a.createElement("h4",{className:u.a.musicEntryTitle},o.a.createElement("span",null,t)," ∙ ",a),r)},d=a("cYZm"),p=function(e){var t=e.src,a=e.title;return o.a.createElement("iframe",{title:a,width:"100%",maxWidth:"100%",height:"166",scrolling:"no",frameBorder:"no",src:t})};p.defaultProps={title:null};var h=p,f=a("aArQ");t.default=function(e){var t=e.data,a=t.site.siteMetadata;return o.a.createElement(f.a,null,o.a.createElement(n.a,null,o.a.createElement("title",null,"MUSIC · "+a.title),o.a.createElement("meta",{name:"description",content:t.site.siteMetadata.description}),o.a.createElement("meta",{property:"og:title",content:"MUSIC"}),o.a.createElement("meta",{property:"og:description",content:t.site.siteMetadata.description})),o.a.createElement(i.a,{title:"MUSIC"},o.a.createElement("h3",null,"GAME BOY ORIGINALS"),o.a.createElement(m,{title:"Ballistic Bunny (feat. Kommisar)",genre:"Double Time Drum & Bass"},o.a.createElement("p",null,"What started off as a fun idea in the middle of waiting for my next university tutorial, ended up becoming several hours of writer's block, heheheh! And since my good friend Kommisar and I were thinking of doing a collaboration of sorts, sending him the first minute of the project file was a fantastic move on my part for alleviating my writer's block, as he managed to come up with some sick trademark insaneous chiptune solos of his own. I took care of the main themes, drum programming & structuring, while he took care of his epic 3-minute solos. ♥"),o.a.createElement("p",null,"We're doing a handful of these in the foreseeable future, by the way. Expect us!"),o.a.createElement(d.a,{title:"YouTube Video"},o.a.createElement(s.a,{src:"https://www.youtube.com/embed/TEAhoN7PfNc",allowfullscreen:!0})),o.a.createElement(d.a,{title:"SoundCloud Player"},o.a.createElement(h,{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337789973&color=9633a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})),o.a.createElement("span",null,"audio file unavailable until further notice ∙"," ",o.a.createElement("a",{href:"mailto:aquellex@f0xpa.ws"},"e-mail me for project files"))),o.a.createElement(m,{title:"Tachyon Beam Cannon",genre:"Breakcore + Speedcore + Impressionism"},o.a.createElement("p",null,"After finally recovering from severe emotional trauma in mid-June 2017, I went to work on my dream composition for ChipWIN 6. During my recovery period within the psychiatric hospital, I was listening to a lot of System Of A Down. Funnily enough, you could sing \"She's Like Heroin\" to some of the sections, and it'd fit in just fine. Of course, this composition demonstrates my fixation for writing concert-like études for the Game Boy as per usual. Fans of j-core will want to take note of this. ☺"),o.a.createElement(d.a,{title:"YouTube Video"},o.a.createElement(s.a,{src:"https://www.youtube.com/embed/E5i9VbxD3yY",allowfullscreen:!0})),o.a.createElement(d.a,{title:"SoundCloud Player"},o.a.createElement(h,{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337537370&color=9633a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})),o.a.createElement("span",null,o.a.createElement("a",{href:"https://chiptuneswin.bandcamp.com/track/tachyon-beam-cannon",target:"_blank",rel:"noopener noreferrer"},"audio file")," ","∙"," ",o.a.createElement("a",{href:"http://2a03.free.fr/dl.php?file=5458",target:"_blank",rel:"noopener noreferrer"},"project files"))),o.a.createElement(m,{title:"Decipher.#003",genre:"Breakcore + Speedcore"},o.a.createElement("p",null,"Originally started on October 2015 as a means to mimic the structuring from Renard's Banned Forever and one of the lead programming techniques used for YZYX's Gravity Distortion's main motif. Didn't finish until February 2017 in time for Square Sounds Melbourne 2017 pre-party. That was an awesome night. Glad I was able to finally put this étude to rest."),o.a.createElement("p",null,'You might be interested where the alternate title "Hatred of Renard" comes from. That comes from an object named "Hatred of Goku", which is used for unlocking certain characters in Dragon Ball Z Budokai Tenkaichi 2.'),o.a.createElement("p",null,"Also going to be a part of my upcoming LP. ☺"),o.a.createElement(d.a,{title:"YouTube Video"},o.a.createElement(s.a,{src:"https://www.youtube.com/embed/N9TNIYETSXQ",allowfullscreen:!0})),o.a.createElement(d.a,{title:"SoundCloud Player"},o.a.createElement(h,{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313709199&color=9633a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})),o.a.createElement("span",null,o.a.createElement("a",{href:"https://soundcloud.com/aquellex/hatred-of-renard",target:"_blank",rel:"noopener noreferrer"},"audio file")," ","(click on 'more' > 'download') ∙"," ",o.a.createElement("a",{href:"mailto:aquellex@f0xpa.ws"},"e-mail me for project files"))),o.a.createElement(m,{title:"Crystal Chamber Combustion",genre:"Speedcore"},o.a.createElement("p",null,"I was invited to take part of a local radio show that hosts all kinds of eccentric music (sound art, IDM, breakcore, ambient, drone, the whole lot etc.). Due to university and HalloWIN commitments, I almost wasn't able to contribute anything at all, but then I set aside a full day to compose something really cool just relying on lydian chords and quartal harmonies, and this was the result. Still one of my personal favourites to this day. ☺"),o.a.createElement(d.a,{title:"YouTube Video"},o.a.createElement(s.a,{src:"https://www.youtube.com/embed/mfuh3NwtO4M",allowfullscreen:!0})),o.a.createElement(d.a,{title:"SoundCloud Player"},o.a.createElement(h,{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291092079&color=9633a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})),o.a.createElement("span",null,o.a.createElement("a",{href:"https://subsequenceradio.bandcamp.com/track/crystal-chamber-combustion",target:"_blank",rel:"noopener noreferrer"},"audio file")," ","(donate, or ",o.a.createElement("a",{href:"mailto:aquellex@f0xpa.ws"},"ask"),") ∙"," ",o.a.createElement("a",{href:"mailto:aquellex@f0xpa.ws"},"e-mail me for project files"))),o.a.createElement(m,{title:"Wanderflux",genre:"Breakcore + Speed Drum & Bass"},o.a.createElement("p",null,"I had a lot of fun composing this dream track for ChipWIN 5. Draws a lot of inspiration from YZYX's -flux series and music you'd expect from rhythm game simulations (BMS). Contains a reference to The Quick Brown Fox's Wanderlust as a jab towards a trolling tactic on Tumblr where 2 people thought it was funny to make parody names of a LapFox-inspired netlabel (one I was a part of, as well). I had my fun as well. ☺"),o.a.createElement(d.a,{title:"YouTube Video"},o.a.createElement(s.a,{src:"https://www.youtube.com/embed/cvoLXNJFzsw",allowfullscreen:!0})),o.a.createElement(d.a,{title:"SoundCloud Player"},o.a.createElement(h,{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274331592&color=9633a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})),o.a.createElement("span",null,o.a.createElement("a",{href:"https://chiptuneswin.bandcamp.com/track/wanderflux",target:"_blank",rel:"noopener noreferrer"},"audio file")," ","∙ ",o.a.createElement("a",{href:"http://2a03.free.fr/dl.php?file=5193"},"project files"))),o.a.createElement(m,{title:"Candy Explosion",genre:"IDM + Breakcore"},o.a.createElement("p",null,"The composition that kickstarted my chipbreaking career. Also serves as an étude + ode to YZYX's ._Pulse. So many great memories spending time composing this beast. Also, if you've played the 2nd or 3rd Ratchet & Clank PS2 games, you'll recognise a familiar sound effect somewhere...♥"),o.a.createElement(d.a,{title:"YouTube Video"},o.a.createElement(s.a,{src:"https://www.youtube.com/embed/goSl4YTnwv8",allowfullscreen:!0})),o.a.createElement(d.a,{title:"SoundCloud Player"},o.a.createElement(h,{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262626889&color=9633a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})),o.a.createElement("span",null,o.a.createElement("a",{href:"https://soundcloud.com/aquellex/candy-explosion",target:"_blank",rel:"noopener noreferrer"},"audio file")," ","(click on 'more' > 'download') ∙"," ",o.a.createElement("a",{href:"http://2a03.free.fr/dl.php?file=5167"},"project files")))))}}}]);
//# sourceMappingURL=component---src-pages-music-js-8323d430ec07f9da8179.js.map