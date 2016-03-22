!function(){"use strict";angular.module("palazzoLuce",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","anim-in-out","angular-google-analytics"])}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("palazzoLuce").service("webDevTec",e)}(),angular.module("palazzoLuce").factory("uiState",function(){var e={pageTitle:"",pageDescription:""};return e}),angular.module("palazzoLuce").factory("staticize",["$timeout","$state",function(e,a){var i={setFinished:function(){var i=a.current.name;e(function(){a.is(i)&&0===angular.element("#finished").length&&angular.element("body").prepend('<div id="finished" style="position:absolute">&nbsp;</div>')},200)}};return i}]),function(){"use strict";function e(e){function a(){e.setFinished()}var i={restrict:"E",templateUrl:"app/components/pageHeader/pageHeader.html",transclude:!0,scope:{title:"@"},link:a};return i}e.$inject=["staticize"],angular.module("palazzoLuce").directive("pageHeader",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/pageContent/pageContent.html",scope:{prev:"=",next:"="},transclude:!0};return e}angular.module("palazzoLuce").directive("pageContent",e)}(),function(){"use strict";function e(){function e(){}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("palazzoLuce").directive("plNavbar",e)}(),function(){"use strict";function e(e){function a(a,i,t,o){var s,n=e(i[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});i.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){n.type(e).pause()["delete"]()}),s=a.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){n.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){s()})}function i(e,a){function i(){return t().then(function(){e.info("Activated Contributors View")})}function t(){return a.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],i()}i.$inject=["$log","githubContributor"];var t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:i,controllerAs:"vm"};return t}e.$inject=["malarkey"],angular.module("palazzoLuce").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,a){function i(i){function o(e){return e.data}function s(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return i||(i=30),a.get(t+"/contributors?per_page="+i).then(o)["catch"](s)}var t="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:t,getContributors:i};return o}e.$inject=["$log","$http"],angular.module("palazzoLuce").factory("githubContributor",e)}(),angular.module("palazzoLuce").factory("fsvs",function(){var e=$.fn.fsvs({speed:1e3,bodyID:"fsvs-body",selector:"> .slide",mouseSwipeDisance:40,afterSlide:function(){},beforeSlide:function(){},endSlide:function(){},mouseWheelEvents:!0,mouseDragEvents:!0,touchEvents:!0,arrowKeyEvents:!0,pagination:!0,nthClasses:!1,detectHash:!0});return e}),function(){"use strict";function e(e){function a(a){var i=!1;!function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i?angular.element(".pl-arrow").hide():(e.rebind(),a.$on("$destroy",function(){e.unbind()})),e.slideToIndex(0)}var i={restrict:"A",link:a};return i}e.$inject=["fsvs"],angular.module("palazzoLuce").directive("fsvsLibrary",e)}(),function(){"use strict";function e(){function e(){}var a={restrict:"E",templateUrl:"app/components/footer/footer.html",controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("palazzoLuce").directive("plFooter",e)}(),function(){"use strict";function e(){function e(e,a){var i=angular.element("#menuToggle input");a.click(function(){i.trigger("click")})}var a={restrict:"A",link:e};return a}angular.module("palazzoLuce").directive("closeMenu",e)}(),function(){"use strict";function e(e){function a(a,i){i.click(function(){e.slideDown()})}var i={restrict:"A",link:a};return i}e.$inject=["fsvs"],angular.module("palazzoLuce").directive("angleTrigger",e)}(),function(){"use strict";function e(e){e.setFinished()}e.$inject=["staticize"],angular.module("palazzoLuce").controller("MainController",e)}(),function(){"use strict";function e(){var e=this;e.galleryImageUrls=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"]}angular.module("palazzoLuce").controller("LocationController",e)}(),function(){"use strict";function e(){}angular.module("palazzoLuce").controller("HistoryController",e)}(),function(){"use strict";function e(e,a,i,t){lightbox.option({albumLabel:"%1 / %2"}),i.uiState=a;var o=i.$on("$stateChangeSuccess",function(i,t){angular.element("body").scrollTop(0);var o=t.params||{};a.pageTitle=o.pageTitle||e});i.$on("$destroy",function(){o()})}e.$inject=["defaultPageTitle","uiState","$rootScope","Analytics"],angular.module("palazzoLuce").run(e)}(),function(){"use strict";function e(e,a,i){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",params:{pageTitle:i}}).state("history",{url:"/la-storia",templateUrl:"app/history/history.html",controller:"HistoryController",controllerAs:"history",params:{pageTitle:"La storia | "+i}}).state("architecture",{url:"/architettura",templateUrl:"app/architecture/architecture.html",params:{pageTitle:"Architettura | "+i}}).state("location",{url:"/location",controller:"LocationController",controllerAs:"vm",templateUrl:"app/location/location.html",params:{pageTitle:"Location | "+i}}).state("services",{url:"/servizi",templateUrl:"app/services/services.html",params:{pageTitle:"Servizi | "+i}}).state("contacts",{url:"/contatti",templateUrl:"app/contacts/contacts.html",params:{pageTitle:"Contatti | "+i}}),a.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider","defaultPageTitle"],angular.module("palazzoLuce").config(e)}(),function(){"use strict";angular.module("palazzoLuce").constant("malarkey",malarkey).constant("moment",moment).constant("defaultPageTitle","Il Palazzo della Luce").constant("analyticsAccount","UA-45999356-17")}(),function(){"use strict";function e(e,a,i,t){i.logAllCalls(!0).setAccount(t).setPageEvent("$stateChangeSuccess"),e.debugEnabled(!0),a.html5Mode(!0),a.hashPrefix("!")}e.$inject=["$logProvider","$locationProvider","AnalyticsProvider","analyticsAccount"],angular.module("palazzoLuce").config(e)}(),angular.module("palazzoLuce").run(["$templateCache",function(e){e.put("app/architecture/architecture.html",'<div class="page architecture"><page-header title="architettura"><p>La "Piccola Madama", un capolavoro di eclettismo, un omaggio ai fasti della belle epoque.</p></page-header><page-content prev="\'history\'" next="\'location\'"><p class="weight-600">Omaggio ai fasti della belle epoque e alle seduzioni del passato, il Palazzo della Luce occupa un intero isolato con la sua struttura imponente eppur discreta. Definito dai torinesi "la piccola Madama" si ispira nella maestosa e scenografica facciata al Palazzo Madama di Piazza Castello interpretando magnificamente lo stile eclettico in voga all\'inizio del \'900. Uno stile che, guardando nostalgicamente agli anni d\'oro dell\'architettura, ne mescola a volte in modo bizzarro, stili e dettagli.</p><p>A vegliare sul Palazzo due gruppi scultorei in travertino, allegorie di Industria e Lavoro, opera di Edoardo Rubino. All\'interno, l\'ampio e luminoso ingresso, è degno preambolo ai fastosi ambienti del primo piano serviti da uno scalone d\'onore imponente e scenografico. Qui, sconosciuta a tanti, si svela una grande sala di elegante architettura neobarocca dominata da una volta a cassettoni con rosoni in stucco, un salone che nonostante l\'evidente ricchezza di decori conserva una sobria eleganza ed un fascino discreto.</p></page-content></div>'),e.put("app/contacts/contacts.html",'<div class="page contacts"><page-header title="contatti"><p>Nel cuore di Torino, un capolavoro tornato all’antico splendore ed uno staff di specialisti nell’organizzazione di eventi.</p></page-header><div class="container page-content"><div class="row"><div class="col-md-offset-2 col-md-8"><h4 class="font-600 text-center">La gestione del Palazzo della Luce è affidata a:</h4><div class="col-md-6"><div class="round-image patrizia-img"></div><p class="text-center uppercase">patrizia reviglio</p><hr><p class="text-center">Una laurea in Giurisprudenza, un marito, due figli. Molteplici esperienze nel settore pubblicitario e di marketing, e nel settore turistico, una parentesi famigliare, ed ora il desiderio di ridare al Palazzo della Luce il lustro che merita.</p></div><div class="col-md-6"><div class="round-image susanna-img"></div><p class="text-center uppercase">susanna viberti</p><hr><p class="text-center">Un dolce sorriso che cela un\'anima grintosa, un autentico spirito commerciale e una grande energia. Gestisce la logistica del Palazzo della Luce e si occupa di tutto quello che ”non si vede” (ma c\'è).</p></div></div></div><div class="separator"></div><div class="row"><div class="col-md-offset-2 col-md-8"><h4 class="text-center font-600">Dove</h4><p>Elegantemente affacciato sugli ottocenteschi giardini La Marmora, progettati nel 1863 e che ospitano querce, tigli, ippocastani e platani centenari, il Palazzo della Luce è idealmente ubicato nel cuore di Torino. A pochi passi si trovano infatti le più scenografiche ed eleganti piazze storiche: Piazza Castello, Piazza S. Carlo, Piazza Solferino; le vie dello shopping e del passeggio come via Roma e via Garibaldi e il nucleo più antico e caratteristico della città, le Porte Palatine e il suo vivace quartiere oltre che il tempio della fede per eccellenza, il Duomo, custode della Sacra Sindone.</p></div></div><div class="separator"></div><div class="row"><div id="contacts-data" class="col-md-offset-2 col-md-8"><h4 class="text-center font-600">Contatti</h4><div itemscope="" itemtype="http://schema.org/LocalBusiness" class="text-center"><div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress">Via Antonio Giuseppe Bertola, 40</span> - <span itemprop="postalCode">10122</span> <span itemprop="addressLocality">Torino</span></div><div><a href="mailto:info@ilpalazzodellaluce.com" itemprop="email">info@ilpalazzodellaluce.com</a></div><div><span itemprop="telephone">+39 347 4162809</span></div></div></div></div></div><div class="separator"></div><page-content prev="\'services\'" next="\'home\'"></page-content></div>'),e.put("app/history/history.html","<div class=\"page history\"><page-header title=\"la storia\"><p>Energia, telecomunicazioni e radiofonia, da oltre un secolo simbolo di tradizione e innovazione.</p></page-header><page-content prev=\"'home'\" next=\"'architecture'\"><p class=\"weight-600\">Progettato nel 1915 dall'architetto Carlo Angelo Ceresa per ospitare la nuova sede della Cassa di Risparmio, il Palazzo della Luce si ispira ai criteri monumentali di fine '800 con una superba facciata di ispirazione juvarriana su modello di Palazzo Madama.</p><br><p>Nel 1925 viene venduto, incompiuto, alla Società Idroelettrica Piemontese (Sip) che provvede, sotto la direzione del Grand Ufficiale Giuseppe Besozzi al completamento . Il palazzo viene inaugurato nel 1928 per ospitare gli uffici e la direzione della Sip, una delle maggiori imprese del Paese impegnata nella produzione e distribuzione di energia elettrica, nelle telecomunicazioni (Siptel) e nella radiofonia (Eiar). Le prime trasmissioni radiofoniche pubbliche italiane vennero irradiate da questo edificio: se infatti il nucleo primigenio della Rai ebbe sede a Roma, la direzione generale fu stabilita proprio in via Bertola 40 dove esiste ancora la sala anecoica un tempo destinata alle audizioni. L'11 febbraio 1929 (in concomitanza con la firma dei Patti Lateranensi) con una solenne cerimoniaa nel salone d'onore al primo piano ebbe luogo l'inaugurazione ufficiale di \"Radio Torino\".</p><br><p>La nazionalizzazione dell'industria energetica nel 1962 determinò il trasferimento della proprietà all' Enel fino ai tempi recenti quando l'acquisizione da parte di un fondo immobiliare ha avviato il processo di valorizzazione.</p></page-content></div>"),e.put("app/main/main.html",'<div id="fsvs-body" fsvs-library="" class="main pl-full-screen"><div class="slide nth-class-1"><div class="content"><div class="box-content"><div class="col-md-offset-1 ol-md-6"><div class="pl-logo"></div><span class="pl-title">palazzo della luce</span><p>Nuova luce ai tuoi eventi</p></div></div><div class="pl-arrow hidden-xs hidden-sm"><a angle-trigger=""><i class="pl-angle-down"></i></a></div></div></div><div class="slide nth-class-2"><div class="content"><div class="box-content"><div class="col-md-offset-1 ol-md-6"><span class="pl-title">la storia</span><p>Energia, telecomunicazioni e radiofonia</p><button type="button" class="btn btn-default btn-dark" ui-sref="history">Scopri di più <i class="fa fa-angle-right"></i></button></div></div><div class="pl-arrow hidden-xs hidden-sm"><i class="pl-angle-down" angle-trigger=""></i></div></div></div><div class="slide nth-class-3"><div class="content"><div class="box-content"><div class="col-md-offset-1 ol-md-6"><span class="pl-title">architettura</span><p>Un capolavoro di eclettismo</p><button type="button" class="btn btn-default btn-dark" ui-sref="architecture">Scopri di più <i class="fa fa-angle-right"></i></button></div></div><div class="pl-arrow hidden-xs hidden-sm"><i class="pl-angle-down" angle-trigger=""></i></div></div></div><div class="slide nth-class-4"><div class="content"><div class="box-content"><div class="col-md-offset-1 ol-md-6"><div class="pl-logo-light"></div><span class="pl-title">location</span><p>Il luogo ideale per un evento</p><button type="button" class="btn btn-default btn-dark" ui-sref="location">Scopri di più <i class="fa fa-angle-right"></i></button></div></div><div class="pl-arrow hidden-xs hidden-sm"><i class="pl-angle-down" angle-trigger=""></i></div></div></div><div class="slide nth-class-5"><div class="content"><div class="box-content"><div class="col-md-offset-1 ol-md-6"><span class="pl-title">servizi</span><p>Tutto si può fare</p><button type="button" class="btn btn-default btn-dark" ui-sref="services">Scopri di più <i class="fa fa-angle-right"></i></button></div></div><div class="pl-arrow hidden-xs hidden-sm"><i class="pl-angle-down" angle-trigger=""></i></div></div></div><div class="slide nth-class-6"><div class="content"><div class="box-content"><div class="col-md-offset-1 ol-md-6"><span class="pl-title">contatti</span><p>Nel cuore di Torino</p><button type="button" class="btn btn-default btn-dark" ui-sref="contacts">Scopri di più <i class="fa fa-angle-right"></i></button></div></div></div></div><pl-footer></pl-footer></div>'),e.put("app/location/location.html",'<div class="page location"><page-header title="location"><p>Il grande salone di Palazzo della Luce, il luogo ideale per ogni tipo di avvenimento pubblico e privato.</p></page-header><page-content prev="\'architecture\'" next="\'services\'"><p class="weight-600">Al primo piano nobile la grande sala, originaria scenografia per le celebrazioni pubbliche e private degli enti residenti, torna al primitivo splendore dopo un attento intervento di restauro e valorizzazione. Preceduta da un maestoso scalone marmoreo, piena testimonianza dell\'architettura neobarocca, è dominata da una slanciata volta a cassettoni con rosoni in stucco. Una profusione di decori che ne esalta l\'eleganza sobria e l\'armonia.</p><div class="small-separator"></div><div class="gallery"><div ng-repeat="imageUrl in vm.galleryImageUrls"><div class="col-sm-6 col-md-4 col-lg-4"><a href="/assets/images/photo/{{imageUrl}}" data-lightbox="location"><img ng-src="/assets/images/photo/thumb/thumb_{{imageUrl}}"></a></div><div ng-if="$index % 2 === 1" class="break visible-sm"></div><div ng-if="$index % 3 === 2" class="break visible-md visible-lg"></div></div></div><p>Qui è possibile, ora come allora, celebrare degnamente una ricorrenza, un anniversario istituzionale, allestire un\'esposizione, organizzare un evento personalizzato da ricordare, dare luce alle proprie creazioni.</p><br><p>Se i fasti del passato sono esaltati, il grande salone del Palazzo della Luce affronta con le più elevate tecnologie le sfide del presente, offrendo un ambiente che può ospitare fino a 200 persone per un convegno, una sfilata, un\'esposizione, 150 invitati per una cena o anche gruppi più raccolti grazie a soluzioni modulabili in relazione alle differenti esigenze.</p><br><p>Si coniugano così in perfetta armonia le seducenti eleganze della belle epoque con le suggestioni contemporanee quanto ad efficenza e logistica. Il salone del Palazzo della Luce è la location ideale, idealmente ubicata nel cuore pulsante della Torino più affascinante, per ogni tipo di avvenimento, pubblico e privato.</p></page-content></div>'),e.put("app/services/services.html",'<div class="page services"><page-header title="servizi"><p>Le più moderne tecnologie, soluzioni modulabili, supporto e professionalità per rispondere alle differenti esigenze.</p></page-header><div class="container page-content"><div class="row"><div class="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-xs-offset-0 col-xs-12"><h4 class="text-center font-600 label-where">Tutto si può fare</h4><div class="small-separator"></div><div class="row box-services"><div class="col-xs-4 col-sm-3"><div class="services-img"><img src="/../assets/images/carrozzina.png"></div><hr><span>accesso disabili</span></div><div class="col-xs-4 col-sm-3"><div class="services-img"><img src="/../assets/images/cammion.png"></div><hr><span>accesso carraio<br>riservato</span></div><div class="col-xs-4 col-sm-3"><div class="services-img"><img src="/../assets/images/regia.png"></div><hr><span>cabina di regia</span></div><div class="small-separator visible-xs first-mobile-separator"></div><div class="col-xs-4 col-sm-3"><div class="services-img"><img src="/../assets/images/audio.png"></div><hr><span>impianto<br>audio-video</span></div><div class="col-xs-4 col-sm-3 box-last-row"><div class="services-img"><img src="/../assets/images/schermo.png"></div><hr><span>maxi schermo</span></div><div class="col-xs-4 col-sm-3 box-last-row"><div class="services-img"><img src="/../assets/images/cucina.png"></div><hr><span>cucina professionale</span></div><div class="col-xs-4 col-sm-3 box-last-row"><div class="services-img"><img src="/../assets/images/climatizzazione.png"></div><hr><span>impianto<br>di climatizzazione</span></div><div class="col-xs-4 col-sm-3 box-last-row"><div class="services-img"><img src="/../assets/images/luce.png"></div><hr><span>project lighting</span></div></div></div><div class="row"><div class="col-sm-offset-2 col-sm-8 col-xs-offset-0 col-xs-12"><h3 class="text-center font-600 label-where uppercase">capacità fino a 200 persone. Mise en place fino a 150</h3><div class="small-separator"></div><div class="small-separator"></div><h4 class="text-center font-600">Per te questo e altro</h4></div></div><div class="small-separator"></div><div class="row box-services"><div class="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-xs-offset-0 col-xs-12"><div class="col-xs-4"><div class="services-img"><img src="/../assets/images/fiore.png"></div><hr><span>floreal design</span></div><div class="col-xs-4"><div class="services-img"><img src="/../assets/images/catering.png"></div><hr><span>catering</span></div><div class="col-xs-4"><div class="services-img"><img src="/../assets/images/intrattenimento.png"></div><hr><span>intrattenimento</span></div></div></div><div class="row box-services box-last-row"><div class="col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4 col-xs-offset-2 col-xs-8"><div class="col-xs-6"><div class="services-img"><img src="/../assets/images/servizi.png"></div><hr><span>allestimenti speciali</span></div><div class="col-xs-6"><div class="services-img"><img src="/../assets/images/sedia.jpg"></div><hr><span>allestimenti speciali</span></div></div></div><div class="small-separator"></div></div></div><page-content prev="\'location\'" next="\'contacts\'"></page-content></div>'),e.put("app/components/footer/footer.html",'<footer class="pl-footer"><div class="footer-copyright"><div class="container"><div class="row"><div class="col-sm-6">&copy; Copyright - Il Palazzo della Luce | <a href="https://www.google.it/maps/place/Via+Antonio+Giuseppe+Bertola,+40,+10122+Torino/@45.0715848,7.6747723,17z/data=!3m1!4b1!4m2!3m1!1s0x47886d72d04264c1:0xac3032ca20d50bf3" target="_blank">Via Antonio Giuseppe Bertola, 40 - 10122 Torino</a></div><div class="col-sm-6"><div class="pull-right"><a href="mailto:info@ilpalazzodellaluce.com">info@ilpalazzodellaluce.com</a> | Tel: +39 347 4162809</div></div></div></div></div></footer>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar pl-navbar navbar-fixed-top" role="navigation"><div class="container"><div class="navbar-header text-center"><div id="menuToggle"><input type="checkbox"><span></span> <span></span> <span></span> <span></span><div class="bg"></div><ul id="menu"><div class="pl-logo-light"></div><a href="/#slide-1" close-menu=""><li>Home</li></a> <a ui-sref="history" close-menu=""><li>La storia</li></a> <a ui-sref="architecture" close-menu=""><li>Architettura</li></a> <a ui-sref="location" close-menu=""><li>Location</li></a> <a ui-sref="services" close-menu=""><li>Servizi</li></a> <a ui-sref="contacts" close-menu=""><li>Contatti</li></a></ul></div></div></div></nav>'),e.put("app/components/pageContent/pageContent.html",'<div class="all-content"><div class="container page-content"><div class="row"><div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10"><ng-transclude></ng-transclude></div></div><div class="separator"></div><div class="row"><div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10"><div class="col-md-4 prev-link section-{{ prev }}" ng-show="prev"><button type="button" class="btn btn-default btn-light" ui-sref="{{ prev }}">&lt; Prev</button><div class="sfondo"></div></div><div class="col-md-4 next-link section-{{ next }}" ng-show="next"><button type="button" class="btn btn-default btn-light" ui-sref="{{ next }}">Next &gt;</button></div></div></div></div><div class="separator"></div></div><pl-footer></pl-footer>'),e.put("app/components/pageHeader/pageHeader.html",'<div class="page-header"><div class="page-header-bg"></div><div class="page-box-centered"><div class="page-box-centered-vertical"><div class="pl-logo-light hidden-xs"></div><div class="pl-logo visible-xs"></div><h1>{{ title }}</h1><hr><ng-transclude></ng-transclude></div></div></div><div class="page-header-placeholder visible-xs"></div>')}]);
//# sourceMappingURL=../maps/scripts/app-5c3be6aab5.js.map
