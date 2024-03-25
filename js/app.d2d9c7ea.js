(function(){"use strict";var t={5906:function(t,e,a){var s=a(6848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"top"},[e("HeaderComponent"),e("HeroComponent"),e("ProjectComponent"),e("CounterComponent"),e("BlogComponent"),e("FooterComponent"),e("HeaderComponent"),e("BannerComponent"),e("BlogBigComponent"),e("FooterComponent"),e("HeaderComponent"),e("BannerTopComponent"),e("div",{staticClass:"blog-details",attrs:{id:"blog-details"}},[e("ArticleComponent")],1),e("FooterComponent")],1)])},r=[],o=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"header__inner"},[e("a",{staticClass:"header__logo",attrs:{href:"index.html"}},[e("img",{staticClass:"header__logo-img",attrs:{src:a(5549),alt:"logo"}})])]),e("nav",{staticClass:"header__menu"},[e("ul",{staticClass:"header__menu-list"},t._l(t.pages,(function(a){return e("li",{key:a.id,staticClass:"header__menu-item"},[e("a",{staticClass:"header__menu-link",attrs:{href:a.linkHref}},[t._v(t._s(a.title))])])})),0)])])},n=[],l={name:"HeaderComponent",data(){return{pages:[{title:"Home",linkHref:"index.html"},{title:"Project",linkHref:"#"},{title:"Blog",linkHref:"#"}]}}},c=l,u=a(1656),m=(0,u.A)(c,o,n,!1,null,null,null),d=m.exports,p=function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero__inner"},[e("div",{staticClass:"hero__images"},[e("img",{staticClass:"hero__images-item",attrs:{src:a(3828),alt:"hero"}})]),e("div",{staticClass:"hero__intro"},[t._m(0),e("button",{staticClass:"hero__btn"},[e("a",{staticClass:"hero__btn-link",attrs:{href:"#"}}),t._v(" Get Started "),e("svg",{staticClass:"hero__btn-icon",attrs:{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887",stroke:"#CDA274","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"round"}})])])])])])},h=[function(){var t=this,e=t._self._c;return e("main",{staticClass:"hero__main"},[e("h1",{staticClass:"hero__intro-title"},[t._v("Let Your Home Be Unique")]),e("p",{staticClass:"hero__intro-text"},[t._v(" There are many variations of the passages of Lorem Ipsum available, majority. ")])])}],f={name:"HeroComponent"},_=f,g=(0,u.A)(_,p,h,!1,null,null,null),v=g.exports,b=function(){var t=this,e=t._self._c;return e("section",{staticClass:"project"},[t._m(0),e("ul",{staticClass:"project-box"},t._l(t.projects,(function(a){return e("li",{key:a.id,staticClass:"project-box__item"},[e("img",{staticClass:"project-box__img",attrs:{src:a.img,alt:a.alt}}),e("div",{staticClass:"project-box__content"},[e("div",{staticClass:"project-box__info"},[e("h3",{staticClass:"project-box__title"},[t._v(t._s(a.title))]),t._m(1,!0)]),e("svg",{staticClass:"product__arrow",attrs:{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"35",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M32 44L40 35L32 26",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])})),0)])},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"project__heading"},[e("h2",{staticClass:"project__heading-title"},[t._v("Follow Our Projects")]),e("p",{staticClass:"project__heading-text"},[t._v(" It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points. ")])])},function(){var t=this,e=t._self._c;return e("nav",{staticClass:"breadcrumbs"},[e("ul",{staticClass:"breadcrumbs__ul"},[e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v("Decor")])]),e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v("Artchitecture")])])])])}],y={name:"ProjectComponent",data(){return{projects:[{id:1,title:"Modern Kitchan",img:a(4621),alt:"kitchen_with_microwave.jpg"},{id:2,title:"Modern Kitchan",img:a(9524),alt:"chest_of_drawers_witch_two_mirrors.png"},{id:3,title:"Modern Kitchan",img:a(778),alt:"workspace_with_chez_and_white_lamp.png"},{id:4,title:"Modern Kitchan",img:a(639),alt:"room_with_four_chairs_and_four_pictures.png"}]}},mounted(){},methods:{}},x=y,w=(0,u.A)(x,b,C,!1,null,null,null),A=w.exports,k=function(){var t=this,e=t._self._c;return e("section",{staticClass:"counter"},[e("div",{staticClass:"counter-box"},t._l(t.counters,(function(a){return e("div",{key:a.id,staticClass:"counter-box__item"},[e("div",{staticClass:"counter-box__item-inner"},[e("h2",{staticClass:"counter-box__item-title"},[t._v(t._s(a.title))]),e("p",{staticClass:"counter-box__item-text"},[t._v(t._s(a.text))])])])})),0)])},L=[],I={name:"CounterComponent",data(){return{counters:[{id:1,title:"12",text:"Years of Experience"},{id:2,title:"85",text:"Success Project"},{id:3,title:"15",text:"Active Project"},{id:4,title:"95",text:"Happy CUstomers"}]}},mounted(){},methods:{}},j=I,T=(0,u.A)(j,k,L,!1,null,null,null),S=T.exports,B=function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog"},[t._m(0),e("div",{staticClass:"news-articles"},[e("div",{staticClass:"news-box",attrs:{id:"app"}},t._l(t.listNews.slice(0,3),(function(a){return e("article",{key:a.id,staticClass:"news"},[e("div",{staticClass:"news__content"},[e("img",{staticClass:"news__img",attrs:{src:a.image,alt:""}}),e("a",{staticClass:"news__button",attrs:{href:"#"}},[t._v("Kitchan Design")]),e("h3",{staticClass:"news__title"},[t._v(t._s(a.title))]),e("div",{staticClass:"news-nav"},[e("span",{staticClass:"news-nav__date-news"},[t._v(t._s(a.date))]),e("svg",{staticClass:"news-nav__arrow",attrs:{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"35",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M32 44L40 35L32 26",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])})),0)])])},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog__heading"},[e("h2",{staticClass:"blog__heading-title"},[t._v("Articles & News")]),e("p",{staticClass:"blog__heading-text"},[t._v(" It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using. ")])])}],q={name:"BlogComponent",data(){return{listNews:[{id:1,tag:"Kitchan Design",image:a(7796),title:"Let’s Get Solution For Building Construction Work",date:"26 December,2022"},{id:2,tag:"Living Design",image:a(5968),title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2022"},{id:3,tag:"Interior Design",image:a(6925),title:"Best For Any Office & Business Interior Solution",date:"25 December,2022"}]}}},H=q,F=(0,u.A)(H,B,D,!1,null,null,null),P=F.exports,O=function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog"},[e("div",{staticClass:"latest-post"},[e("h2",{staticClass:"latest-post__heading"},[t._v("Latest Post")]),e("div",{staticClass:"latest-post__box"},[e("img",{staticClass:"latest-post__img",attrs:{src:a(5003),alt:"latest post"}}),e("div",{staticClass:"latest-post__content-box"},[t._m(0),e("div",{staticClass:"latest-post-nav"},[e("span",{staticClass:"article-nav__date-news"},[t._v("26 December,2022 ")]),e("svg",{staticClass:"latest-post-nav__arrow",attrs:{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"35",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M32 44L40 35L32 26",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])]),e("div",{staticClass:"news-articles"},[e("h2",{staticClass:"news-articles__title"},[t._v("Articles & News")]),e("div",{staticClass:"news-box",attrs:{id:"app"}},t._l(t.listNews.slice(0,6),(function(a){return e("article",{key:a.id,staticClass:"news"},[e("div",{staticClass:"news__content"},[e("img",{staticClass:"news__img",attrs:{src:a.image,alt:""}}),e("a",{staticClass:"news__button",attrs:{href:"#"}},[t._v("Kitchan Design")]),e("h3",{staticClass:"news__title"},[t._v(t._s(a.title))]),e("div",{staticClass:"news-nav"},[e("span",{staticClass:"news-nav__date-news"},[t._v(t._s(a.date))]),e("svg",{staticClass:"news-nav__arrow",attrs:{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"35",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M32 44L40 35L32 26",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])})),0)]),t._m(1)])},U=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"latest-post__content"},[e("h3",{staticClass:"latest-post__title"},[t._v(" Low Cost Latest Invented Interior Designing Ideas ")]),e("p",{staticClass:"latest-post__text"},[t._v(" Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. "),e("br"),t._v(" Lorem Ipsum is not simply random text. It has roots in a piece of classica. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("div",{staticClass:"pagination-box"},[e("div",{staticClass:"pagination__item pagination__item-active"},[e("div",{staticClass:"pagination__text"},[t._v("01")])]),e("div",{staticClass:"pagination__item"},[e("div",{staticClass:"pagination__text"},[t._v("02")])]),e("div",{staticClass:"pagination__item"},[e("div",{staticClass:"pagination__text"},[t._v("03")])]),e("div",{staticClass:"pagination__item"},[e("div",{staticClass:"pagination__text"},[t._v(">")])])])])}],E={name:"BlogBigComponent",data(){return{listNews:[{id:1,tag:"Kitchan Design",image:a(7796),title:"Let’s Get Solution For Building Construction Work",date:"26 December,2022"},{id:2,tag:"Living Design",image:a(5968),title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2022"},{id:3,tag:"Interior Design",image:a(6925),title:"Best For Any Office & Business Interior Solution",date:"25 December,2022"},{id:4,tag:"Kitchan Design",image:a(1619),title:"Let’s Get Solution For Building Construction Work",date:"26 December,2022"},{id:5,tag:"Living Design",image:a(7094),title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2022"},{id:6,tag:"Interior Design",image:a(7796),title:"Best For Any Office & Business Interior Solution",date:"25 December,2022"},{id:7,tag:"Kitchan Design",image:a(5003),title:"Low Cost Latest Invented Interior Designing Ideas",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",date:"26 December,2022"}]}}},V=E,M=(0,u.A)(V,O,U,!1,null,null,null),J=M.exports,K=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner-top"},[e("div",{staticClass:"banner-top__inner"})])}],Q={name:"VueBannerTopComponent",data(){return{}}},X=Q,W=(0,u.A)(X,K,N,!1,null,null,null),Y=W.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-details__content"},[t._l(t.currentArticle,(function(a){return e("article",{key:a.id,staticClass:"article"},[e("div",{staticClass:"article__content"},[e("h2",{staticClass:"article__heading"},[t._v(t._s(a.firstHeading))]),e("img",{staticClass:"article__image",attrs:{src:a.src,alt:a.alt}}),e("div",{staticClass:"article__sub-content"},[e("p",{staticClass:"article__date"},[t._v(" "+t._s(a.date)+" ")]),e("div",{staticClass:"breadcrumbs"},[e("ul",{staticClass:"breadcrumbs__ul"},[e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v(" "+t._s(a.firstLink)+" ")])]),e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v(" "+t._s(a.secondLink)+" ")])]),e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v(" "+t._s(a.thirdLink)+" ")])])])])]),e("p",{staticClass:"article__text"},[t._v(t._s(a.firstParagraph))]),e("p",{staticClass:"article__text"},[t._v(t._s(a.secondParagraph))])]),e("div",{staticClass:"quotes"},[e("div",{staticClass:"quotes__content"},[e("div",{staticClass:"quotes__marks"},[e("svg",{attrs:{width:"74",height:"56",viewBox:"0 0 74 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z",fill:"#CDA274"}})])]),e("p",{staticClass:"quotes__text"},[t._v(t._s(a.quoteText))])])]),e("h2",{staticClass:"article__heading"},[t._v(t._s(a.secondHeading))]),e("p",{staticClass:"article__text"},[t._v(t._s(a.thirdParagraph))]),e("div",{staticClass:"article__notes"},[e("div",{staticClass:"article__sub-text-box"},[e("span",{staticClass:"article__sub-text-span"},[t._v(t._s(a.firstSpan))]),e("p",{staticClass:"article__sub-text"},[t._v(t._s(a.firstSubtext))])]),e("div",{staticClass:"article__sub-text-box"},[e("span",{staticClass:"article__sub-text-span"},[t._v(t._s(a.secondSpan))]),e("p",{staticClass:"article__sub-text"},[t._v(t._s(a.secondSubtext))])]),e("div",{staticClass:"article__sub-text-box"},[e("span",{staticClass:"article__sub-text-span"},[t._v(t._s(a.thirdSpan))]),e("p",{staticClass:"article__sub-text"},[t._v(t._s(a.thirdSubtext))])])]),e("img",{staticClass:"article__image",attrs:{src:a.secondSrc,alt:a.secondAlt}}),e("p",{staticClass:"article__text"},[t._v(t._s(a.forthParagraph))])])})),e("aside",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__content"},[e("h3",{staticClass:"sidebar__heading"},[t._v(t._s(t.sidebarTitle))]),e("div",{staticClass:"sidebar__buttons-box"},t._l(t.buttons,(function(a){return e("button",{key:a.id,class:["sidebar__button",a.id===t.buttonIsActive&&"sidebar__button_active"],attrs:{type:"button"},on:{click:function(e){return t.changeArticle(a.id)}}},[t._v(t._s(a.title)+" ")])})),0)])])],2)},z=[],R=(a(4114),{name:"VueArticleComponent",data(){return{currentArticle:[{id:"kitchen",firstHeading:"Let’s Get Solution for Building Construction Work",src:a(9196),alt:"kitchen",date:"26 December,2022",firstLink:"Interior",secondLink:"Home",thirdLink:"Decore",firstParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.",secondParagraph:"Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",quoteText:"The details are not the details. They make the design.",secondHeading:"Design sprints are great",thirdParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",firstSpan:"1",firstSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSpan:"2",secondSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",thirdSpan:"3",thirdSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSrc:a(5149),secondAlt:"kitchen image",forthParagraph:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."}],listOfArticles:[{id:"kitchen",firstHeading:"Let’s Get Solution for Building Construction Work",src:a(9196),alt:"kitchen",date:"26 December,2022",firstLink:"Interior",secondLink:"Home",thirdLink:"Decore",firstParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.",secondParagraph:"Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",quoteText:"The details are not the details. They make the design.",secondHeading:"Design sprints are great",thirdParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",firstSpan:"1",firstSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSpan:"2",secondSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",thirdSpan:"3",thirdSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSrc:a(5149),secondAlt:"kitchen image",forthParagraph:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."},{id:"bedroom",firstHeading:"A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping",src:a(8873),alt:"bedroom",date:"26 December,2022",firstLink:"Interior",secondLink:"Home",thirdLink:"Bedroom",firstParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",secondParagraph:"Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",quoteText:"The details are not the details. They make the design.",secondHeading:"Design sprints are great",thirdParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",firstSpan:"1",firstSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSpan:"2",secondSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",thirdSpan:"3",thirdSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSrc:a(8873),secondAlt:"bedroom image",forthParagraph:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."},{id:"building",firstHeading:"A building is 'a structure that has a roof and walls and stands more or less permanently in one place",alt:"building",date:"26 December,2022",firstLink:"Interior",secondLink:"Home",thirdLink:"Building",firstParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",secondParagraph:"Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",quoteText:"The details are not the details. They make the design.",secondHeading:"Design sprints are great",thirdParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",firstSpan:"1",firstSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSpan:"2",secondSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",thirdSpan:"3",thirdSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondAlt:"building image",forthParagraph:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."},{id:"architecture",firstHeading:"Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction",alt:"architecture",date:"26 December,2022",firstLink:"Interior",secondLink:"Home",thirdLink:"Architecture",firstParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",secondParagraph:"Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",quoteText:"The details are not the details. They make the design.",secondHeading:"Design sprints are great",thirdParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",firstSpan:"1",firstSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSpan:"2",secondSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",thirdSpan:"3",thirdSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondAlt:"architecture image",forthParagraph:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."},{id:"kitchen-planning",firstHeading:"A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment",alt:"kitchen-planning",date:"26 December,2022",firstLink:"Interior",secondLink:"Home",thirdLink:"Kitchen planning",firstParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",secondParagraph:"Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",quoteText:"The details are not the details. They make the design.",secondHeading:"Design sprints are great",thirdParagraph:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",firstSpan:"1",firstSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondSpan:"2",secondSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",thirdSpan:"3",thirdSubtext:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",secondAlt:"kitchen-planning image",forthParagraph:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."}],sidebarTitle:"Tags",buttons:[{id:"kitchen",title:"Kitchen"},{id:"bedroom",title:"Bedroom"},{id:"building",title:"Building"},{id:"architecture",title:"Architecture"},{id:"kitchen-planning",title:"Kitchen Planning"}],currentButton:[{id:"kitchen",title:"Kitchen"}],buttonIsActive:"kitchen"}},methods:{changeArticle(t){const e=t;this.listOfArticles.forEach((a=>{if(e===a.id)return this.currentArticle=[],this.buttonIsActive=t,this.currentArticle.push(a)}))}}}),G=R,$=(0,u.A)(G,Z,z,!1,null,null,null),tt=$.exports,et=function(){var t=this;t._self._c;return t._m(0)},at=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner"},[e("div",{staticClass:"banner__inner"},[e("div",{staticClass:"banner__intro"},[e("h2",{staticClass:"banner__title"},[t._v("Articles & News")]),e("nav",{staticClass:"breadcrumbs"},[e("ul",{staticClass:"breadcrumbs__ul"},[e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v("Home")])]),e("li",{staticClass:"breadcrumbs__li"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v("Blog")])])])])])])])}],st={name:"BannerComponent"},it=st,rt=(0,u.A)(it,et,at,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer__inner"},[e("div",{staticClass:"footer__social"},[e("a",{staticClass:"footer__logo",attrs:{href:"index.html"}},[e("img",{staticClass:"footer__logo-image",attrs:{src:a(5549)}})]),e("p",{staticClass:"footer__social-text"},[t._v(" It is a long established fact that a reader will be distracted lookings. ")]),e("ul",{staticClass:"footer__social-icons-box"},[e("li",{staticClass:"footer__social-icon-item"},[e("svg",{staticClass:"footer__social-icon-link",attrs:{width:"19",height:"16",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z",fill:"#292F36"}})])]),e("li",{staticClass:"footer__social-icon-item"},[e("svg",{staticClass:"footer__social-icon-link",attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z",fill:"#292F36"}})])])])]),t._m(0),t._m(1)])])},lt=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"footer__menu"},[e("h3",{staticClass:"footer__menu-heading"},[t._v("Pages")]),e("ul",{staticClass:"footer__menu-list"},[e("li",{staticClass:"footer__menu-item"},[e("a",{staticClass:"footer__menu-link",attrs:{href:"index.html"}},[t._v("Home")])]),e("li",{staticClass:"footer__menu-item"},[e("a",{staticClass:"footer__menu-link",attrs:{href:"#"}},[t._v("Project")])]),e("li",{staticClass:"footer__menu-item"},[e("a",{staticClass:"footer__menu-link",attrs:{href:"#"}},[t._v("Blog")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer__contact"},[e("h3",{staticClass:"footer__contact-title"},[t._v("Contact")]),e("div",{staticClass:"footer__contact-box"},[e("p",{staticClass:"footer__contact-address"},[t._v(" 55 East Birchwood Ave. Brooklyn, New York 11201 ")]),e("p",{staticClass:"footer__contact-email"},[t._v("contact@interno.com")]),e("p",{staticClass:"footer__contact-tel"},[t._v("(123) 456 - 7890")])])])}],ct={name:"FooterComponent"},ut=ct,mt=(0,u.A)(ut,nt,lt,!1,null,null,null),dt=mt.exports,pt={name:"App",components:{HeaderComponent:d,HeroComponent:v,ProjectComponent:A,CounterComponent:S,BlogComponent:P,BannerComponent:ot,BlogBigComponent:J,BannerTopComponent:Y,ArticleComponent:tt,FooterComponent:dt}},ht=pt,ft=(0,u.A)(ht,i,r,!1,null,null,null),_t=ft.exports;s.Ay.config.productionTip=!1,new s.Ay({render:t=>t(_t)}).$mount("#app")},5149:function(t,e,a){t.exports=a.p+"img/article-kitchen2.776c2c60.png"},9196:function(t,e,a){t.exports=a.p+"img/article_kitchen_blue_cabinets.e8055ff5.png"},8873:function(t,e,a){t.exports=a.p+"img/bedroom_bd.0b61b9a4.png"},9524:function(t,e,a){t.exports=a.p+"img/chest_of_drawers_witch_two_mirrors.3edb1e2a.png"},3828:function(t,e,a){t.exports=a.p+"img/hero.a2064b66.jpg"},5003:function(t,e,a){t.exports=a.p+"img/kitche_with_marble_island.d0702954.png"},1619:function(t,e,a){t.exports=a.p+"img/kitchen_beige_four_lamp.1e777a37.png"},7796:function(t,e,a){t.exports=a.p+"img/kitchen_four_chez.2c3b83c4.png"},6925:function(t,e,a){t.exports=a.p+"img/kitchen_sink_hood.8c5719f3.png"},4621:function(t,e,a){t.exports=a.p+"img/kitchen_with_microwave.3b450f76.jpg"},5968:function(t,e,a){t.exports=a.p+"img/kitchen_with_view_door.abba53f7.png"},5549:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAAyCAYAAAATDTqzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkwSURBVHgB7ZxdUiPJEcczq1t82Y6RT2Dtgx1AeIae2GXGfhpxAuACRjoBEJ59Bt7HAXMCgfcAK06A/GIb2A16sGNg7YcRN9CGw+ZLXeXMklq0WtX6YCUBmvpFzEiq/qqq/ld2VlY2ABaLxWKxWCwWi8VisVgsFovFYvmcQRgSfyusZcacVFaAmpOIGVDg1baoDP//5R/eDa0ultHChQFxUlhLSye1BCDf0FihT0iTYEHyRqXAYukXfRfxceFt1nVgkcSaI7Wmh2jsLZ8pfRMxi9dxYYOMbFaCxTI8frKIjwprnuu62yzeYXgJnuelrwJ2Uzpz5dwWy75fActIc28Rs88LrrsqFWwO08X1SZTT3ldlUM4Ggsom7aZQrlsBfx4IuAck4AxN2k5YwPAAnPvflSbwejlpexVVnveBB2Ta8zIzL+Z3wDJwehbxyd4fV6TjnoShsYfCb2Nl/+0f+/CAZMjlQTV2QHPaObAMnJ5EfPLN2w2K8e6CDpdZkphUqW/pIwOWodC1iLWAH8h9eEqQC7FNYcUsWIZGVxM7K+DOsAsxpVLbCjAXlikQZbAMnI4iHkUBs+AmpZsDFG8u8SYfRjGi5fSTl8WpXFWUhL3zfxzvtj2XEqsq5kJQ9CQ9/duvstGyK7fqt4uazM7Oe+DiokJ9/XBpnqIxwlcy2D//Z/cTVr42CmeRvl6cnR7uNJU7YrV2flXu1L4JCmmi4DqJ9XP/7+VGuwMnq4S7SO0M61mh1dh9JarFc98vQ5dwfYQQb+ptzkBtdZeOR+p7tQ/Oband+doup53sfb0qUQ1lhn2f3ImZuVfG4N7Zh6OWc90JFBejj3uKZLy8hdvylBxbBVRrZEmT/P2ywpuFaGfOPP9ySaGjbyAibBiO8Sn8uB8tuBI3OyYRczQDVarAdSNRVKqI+RuYKpX9EoUU53NCwXa9bi31aDrPnSBy0BhUqnT24XhB15ndHcS1+HEklnwoZC3cquuB46wIkEthn4T70DlWqb2b7fqK+nW50wS7Nphwo3E/ENcvYXK31ubfZWhAFDiMinpw4M7H06Mt03kShVMLo3EUYjiTuEGJmBdHrvVEy+ynIse56YZLhfsogqKg0U8rjh4q7tz45OxODN3UhW7y7vmHwzx0YPrFqxVBxqIhFh0ibLaMtM9mZKCQyNVCVCTTz+dzZC0NddaUqU++mJ2bL0TdnVhl989Oj5am514XosJt3gd3AKXHDUWU7xWk6PpVGnyiYLhumZ5yL5OeOjwQ6CR3BpIEfOYfNhlMvnc3KvUpUhfjAE6c2FEc+ABGIArBoTiylnka1Xum7Sxgekwu/HB6uMax5Y8kDC0gGay37o3ZX3vzHvSR3zx/tUTi3I3eqLiAmQmy4JGfaVfhAVvMsIAtJC3w5LXVaiVNg2CDrsF1L4IJVM/44won1ykC9d64C0rqK7V1TgP5zP++yK4F9xlbXcPumYmElVWuS5OAiUu43o3vp++dguh9y3DoMtpuxihi9oMfOg7cT7Qfp6Tx5nEnhX5eU7mTMj4KnQD6JmJ2IRwB280Xhg+mfetx8XKkKE0uUJNbwILiJ4rh8DQNlNwlTi2QRV42DmgU+jh+lE/AjdGFlCCKpkUkfiIYB4/Qc4smtNuE8TmWKiXOE5QsxUoyU2q8qc9aRKzdiBGMRCiF/VmC5lzoPiHUeMvjnx7ViX4kWdJy02+E1bhVSjyWrDQLlL+fnR6TRQX2L8ssPv4efZT791iup7q1HINK/TJeVm9z7NjkKI7JmChQuWnvbsLcEp0gN2Jbd6VloLBFUkrlWjYonpV3TToFqQy0EX5I3IKe+0eb9LEJg6TuooS0afNF0ikm4KpyDWOtp5Y6R73E35ssMadT0hmXwDJ4glTWWO70JOK+ujcDJ6nNbUh8KugoU40mEXM+MFiGAmLv4sMnPk9JbHPnp49peyZ0pRruBFthzgmGXlHk0KOojNJEcBhQRGQODW6bUPgtheuSfNJMS0mPlvsh4QhMP9/zmcQpdlcqDRELR6309CoRjR4pMT+f/1OJf/KEULlu4V4DwdKAFpeWKcRWAktHlLr5gj4utDuhE9yTguDmoys3MliYz78rhUUv8ztlrFaXafGg4yTDos2F2doGmAFLVyCOfeJPLWLpiN4mcwjF35No48Uk5EogYQ8sHaFZ+o+mckTx5BeYkkhYiOnmOGOfnJ38VUc16hO7u5leN1BA/aLNZmuJuwBBGvtJjXIifevCRY0OsXfTEjgJu9F/or5XFixDZVxUd03lOMIhznEnKJmscZKlZbyExRyae/0l/C74bWUaCSP7CHus6LwAwJJhUzq6GtUOXjzodsXuMcBtNi2LU6TmWdIx/60t5rSghNNYYRSOI55OsPwRcy9/D9GYsMNZYSzQdofOkoni1M0n90a3EJvxNguQiRp0A5mJl1G8eSua7yKUwpET8UNYJwmixcc1uQbT3quV8DvfiACFKUdWZ2vNvHi9Fhcz5+DOchaYSh3o7LwuGXSftHMJonCbOY8jWsbZdUn1Q+HG52v+x9qSeQMhBD7JiQQnpCdtmwC3ZWBiQjsxaSIVBFnz/uqNcX8MTGJMz869LrDwOOVyZm7+QE/dIvzgH+5IREPaJy1soNomMX/iXGX6pz/REQc64R1hwZR9R+0x1m9SjuegS+JvozTOneCv65wIY4K8WZycxkn9xemb5bDsZzK1YT5vU65FkTPxWq7y3TdvT1D1tgQqFWzNr7zbNG3jlT/hwAH0SLdJ8bUk9zFOwm47AULA3f/h9Tr34LUc3+C3NjrtGz6ayQJu69zZ5DcXilVUW/E3F8jKblJfbpivUXtb41/+UdG0Xb/JICUnvq9AYj1VhXN9r2BqJ8xIC5nxaFArfuWo3UuqqhTQ8Ul10Ofp0HaOCtwi5MO2d/OWR4CwbrpmvM18H2QQ6BAtCtIk6leoMqD/GI56b8qz1vt+/+evP/W6ZPyQIn7s6BsDQVZJ4dHNeUaz6B/5jZEr+LkfF17S8Qi3npIOT7h/pQuVuqBz+Jfwi1I353hqZLxsehL+k+U266Xper8JEZRJ2PpFhXbHuzbnob/UH/G7cE/qx/O/Inwm1AdmEe7Z5nv9GSuLxWKxWCwWi8VisVgsFovFYrFYLJbHwv8BQ2A6Hjwq6lsAAAAASUVORK5CYII="},639:function(t,e,a){t.exports=a.p+"img/room_with_four_chairs_and_four_pictures.e4d63ea7.png"},7094:function(t,e,a){t.exports=a.p+"img/room_with_two_chair_one_sofa.6b067212.png"},778:function(t,e,a){t.exports=a.p+"img/workspace_with_chez_and_white_lamp.37c23955.png"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,r){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],r=t[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(n=!1,r<o&&(o=r));if(n){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,i,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/vue-cli-project/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,r,o=s[0],n=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(l)var u=l(a)}for(e&&e(s);c<o.length;c++)r=o[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkvue_cli_project"]=self["webpackChunkvue_cli_project"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(5906)}));s=a.O(s)})();
//# sourceMappingURL=app.d2d9c7ea.js.map