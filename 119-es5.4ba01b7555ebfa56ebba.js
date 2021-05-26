!function(){function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var r=i[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[119],{97119:function(e,r,o){"use strict";o.r(r),o.d(r,{FavouritesModule:function(){return q}});var n=o(61116),a=o(2937),s=o(31041),c=o(63337),u=o(56967),f=o(31431),l=o(92935),v=o(59472),p=o(35366),x=o(59411),d=o(730),g=o(3492),h=o(35965),m=o(26470),F=o(84369);function k(t,i){if(1&t){var e=p.EpF();p.TgZ(0,"button",16),p.NdJ("click",function(){p.CHM(e);var t=p.oxw().$implicit;return p.oxw().addToFavourites(t)}),p._uU(1," Add to Favourites "),p.qZA()}}function w(t,i){if(1&t){var e=p.EpF();p.TgZ(0,"button",17),p.NdJ("click",function(){p.CHM(e);var t=p.oxw().$implicit;return p.oxw().removeFromFavourites(t)}),p._uU(1," Remove from Favourites "),p.qZA()}}function Z(t,i){if(1&t){var e=p.EpF();p.ynx(0),p.TgZ(1,"div",4),p.TgZ(2,"div",5),p.TgZ(3,"div",1),p.TgZ(4,"app-photo-preview",6),p.NdJ("click",function(){var t=p.CHM(e).$implicit;return p.oxw().showMovieDetails(t)}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(5,"div",7),p.TgZ(6,"div",8),p.TgZ(7,"div",9),p.NdJ("click",function(){var t=p.CHM(e).$implicit;return p.oxw().showMovieDetails(t)}),p._uU(8),p.qZA(),p.TgZ(9,"div",1),p._uU(10),p.qZA(),p.TgZ(11,"div",1),p._uU(12),p.qZA(),p.qZA(),p.TgZ(13,"div",10),p.TgZ(14,"div",11),p._uU(15,"Rating:"),p.qZA(),p.TgZ(16,"div",12),p.TgZ(17,"span"),p._uU(18),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(19,"div",13),p.YNc(20,k,2,0,"button",14),p.YNc(21,w,2,0,"button",15),p.qZA(),p.qZA(),p.BQk()}if(2&t){var r=i.$implicit;p.xp6(4),p.Q6J("size","40px")("photoURL",r.posterURL),p.xp6(4),p.hij(" Name: ",r.name,""),p.xp6(2),p.hij("Name: ",r.name,""),p.xp6(2),p.hij("Year: ",r.year,""),p.xp6(6),p.Oqu(r.rating),p.xp6(2),p.Q6J("ngIf",!r.isFavourite),p.xp6(1),p.Q6J("ngIf",r.isFavourite)}}var b,y,A=[{path:"",component:(b=function(){function e(i,r,o,n,a){var s=this;t(this,e),this.dialog=i,this.usersService=r,this.cdr=o,this.stateService=n,this.toastr=a,this.favourites=[],this.readFavourites(),this.userSubscription=this.stateService.getUser().subscribe(function(t){t&&t.id?(s.activeUser=t,s.cdr.markForCheck()):(s.activeUser={},s.cdr.markForCheck())})}var r,o,n;return r=e,(o=[{key:"ngOnDestroy",value:function(){this.userSubscription&&this.userSubscription.unsubscribe()}},{key:"readFavourites",value:function(){var t=localStorage.getItem("favourites");if(t){var i=JSON.parse(t);i&&(this.favourites=i,this.cdr.markForCheck())}}},{key:"addToFavourites",value:function(t){t.isFavourite=!0,this.favourites=this.favourites.filter(function(t){return t.isFavourite}),localStorage.setItem("favourites",JSON.stringify(this.favourites)),this.cdr.markForCheck()}},{key:"removeFromFavourites",value:function(t){t.isFavourite=!1,this.favourites=this.favourites.filter(function(t){return t.isFavourite}),localStorage.setItem("favourites",JSON.stringify(this.favourites)),this.cdr.markForCheck()}},{key:"showMovieDetails",value:function(t){var i=this,e=new l.vA;e.width="500px",e.hasBackdrop=!0,e.closeOnNavigation=!0;var r=this.dialog.open(v.F,e);r.componentInstance.movie=t,r.afterClosed().subscribe(function(t){t&&i.cdr.markForCheck()})}}])&&i(r.prototype,o),n&&i(r,n),e}(),b.\u0275fac=function(t){return new(t||b)(p.Y36(l.uw),p.Y36(x.K),p.Y36(p.sBO),p.Y36(d.b),p.Y36(g._W))},b.\u0275cmp=p.Xpm({type:b,selectors:[["app-favourites"]],decls:5,vars:1,consts:[["fxFlex","100","fxLayout","row wrap",1,"favourites-page"],["fxFlex","100"],["fxLayout","row wrap","fxLayoutGap","10px",1,"users-container"],[4,"ngFor","ngForOf"],["fxFlex","0 1 24","fxFlex.lt-lg","0 1 48","fxFlex.lt-sm","0 1 95","fxLayout","row wrap",1,"movie"],["fxFlex","calc(50px)"],[3,"size","photoURL","click"],["fxFlex","calc(100%-50px)","fxLayout","row wrap"],["fxFlex","calc(100%-60px)","fxLayout","row wrap",1,"user-info"],["fxFlex","100",1,"pointer","bold",3,"click"],["fxFlex","calc(60px)","fxLayout","row wrap",1,"skill-wrapper"],["fxFlex","100",1,"skill-label","text-center"],["fxFlex","100",1,"skill-rating","text-center","pointer"],["fxFlex","100","fxLayoutAlign","center center"],["mat-button","","color","primary",3,"click",4,"ngIf"],["mat-button","","color","warn",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"click"]],template:function(t,i){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"h2",1),p._uU(2,"Favourite Movies"),p.qZA(),p.TgZ(3,"div",2),p.YNc(4,Z,22,8,"ng-container",3),p.qZA(),p.qZA()),2&t&&(p.xp6(4),p.Q6J("ngForOf",i.favourites))},directives:[h.yH,h.xw,h.SQ,n.sg,m.g,h.Wh,n.O5,F.lW],styles:[".favourites-page[_ngcontent-%COMP%]{padding:10px 20px}.movie[_ngcontent-%COMP%]{border:1px solid #673ab7;border-radius:5px;padding:15px 10px;margin-bottom:10px;min-width:300px}.skill-rating[_ngcontent-%COMP%]{font-weight:700;font-size:30px;border:1px solid;border-radius:10px;padding:10px 5px;line-height:35px;background-color:#000;color:#fff;max-height:55px}"],changeDetection:0}),b)}],T=o(69244),q=((y=function i(){t(this,i)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=p.oAB({type:y}),y.\u0275inj=p.cJS({providers:[],imports:[[n.ez,c.Bz,a.o9,s.u5,f.q,u.y,s.UX,T._t,c.Bz.forChild(A)]]}),y)}}])}();