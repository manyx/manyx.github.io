(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[119],{97119:function(t,i,e){"use strict";e.r(i),e.d(i,{FavouritesModule:function(){return b}});var o=e(61116),r=e(2937),s=e(31041),n=e(63337),a=e(56967),c=e(31431),u=e(92935),p=e(59472),l=e(35366),f=e(59411),x=e(730),v=e(3492),d=e(35965),g=e(26470),h=e(84369);function m(t,i){if(1&t){const t=l.EpF();l.TgZ(0,"button",16),l.NdJ("click",function(){l.CHM(t);const i=l.oxw().$implicit;return l.oxw().addToFavourites(i)}),l._uU(1," Add to Favourites "),l.qZA()}}function F(t,i){if(1&t){const t=l.EpF();l.TgZ(0,"button",17),l.NdJ("click",function(){l.CHM(t);const i=l.oxw().$implicit;return l.oxw().removeFromFavourites(i)}),l._uU(1," Remove from Favourites "),l.qZA()}}function Z(t,i){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"div",4),l.TgZ(2,"div",5),l.TgZ(3,"div",1),l.TgZ(4,"app-photo-preview",6),l.NdJ("click",function(){const i=l.CHM(t).$implicit;return l.oxw().showMovieDetails(i)}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"div",7),l.TgZ(6,"div",8),l.TgZ(7,"div",9),l.NdJ("click",function(){const i=l.CHM(t).$implicit;return l.oxw().showMovieDetails(i)}),l._uU(8),l.qZA(),l.TgZ(9,"div",1),l._uU(10),l.qZA(),l.TgZ(11,"div",1),l._uU(12),l.qZA(),l.qZA(),l.TgZ(13,"div",10),l.TgZ(14,"div",11),l._uU(15,"Rating:"),l.qZA(),l.TgZ(16,"div",12),l.TgZ(17,"span"),l._uU(18),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(19,"div",13),l.YNc(20,m,2,0,"button",14),l.YNc(21,F,2,0,"button",15),l.qZA(),l.qZA(),l.BQk()}if(2&t){const t=i.$implicit;l.xp6(4),l.Q6J("size","40px")("photoURL",t.posterURL),l.xp6(4),l.hij(" Name: ",t.name,""),l.xp6(2),l.hij("Name: ",t.name,""),l.xp6(2),l.hij("Year: ",t.year,""),l.xp6(6),l.Oqu(t.rating),l.xp6(2),l.Q6J("ngIf",!t.isFavourite),l.xp6(1),l.Q6J("ngIf",t.isFavourite)}}const w=[{path:"",component:(()=>{class t{constructor(t,i,e,o,r){this.dialog=t,this.usersService=i,this.cdr=e,this.stateService=o,this.toastr=r,this.favourites=[],this.readFavourites(),this.userSubscription=this.stateService.getUser().subscribe(t=>{t&&t.id?(this.activeUser=t,this.cdr.markForCheck()):(this.activeUser={},this.cdr.markForCheck())})}ngOnDestroy(){this.userSubscription&&this.userSubscription.unsubscribe()}readFavourites(){const t=localStorage.getItem("favourites");if(t){const i=JSON.parse(t);i&&(this.favourites=i,this.cdr.markForCheck())}}addToFavourites(t){t.isFavourite=!0,this.favourites=this.favourites.filter(t=>t.isFavourite),localStorage.setItem("favourites",JSON.stringify(this.favourites)),this.cdr.markForCheck()}removeFromFavourites(t){t.isFavourite=!1,this.favourites=this.favourites.filter(t=>t.isFavourite),localStorage.setItem("favourites",JSON.stringify(this.favourites)),this.cdr.markForCheck()}showMovieDetails(t){const i=new u.vA;i.width="500px",i.hasBackdrop=!0,i.closeOnNavigation=!0;const e=this.dialog.open(p.F,i);e.componentInstance.movie=t,e.afterClosed().subscribe(t=>{t&&this.cdr.markForCheck()})}}return t.\u0275fac=function(i){return new(i||t)(l.Y36(u.uw),l.Y36(f.K),l.Y36(l.sBO),l.Y36(x.b),l.Y36(v._W))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-favourites"]],decls:5,vars:1,consts:[["fxFlex","100","fxLayout","row wrap",1,"favourites-page"],["fxFlex","100"],["fxLayout","row wrap","fxLayoutGap","10px",1,"users-container"],[4,"ngFor","ngForOf"],["fxFlex","0 1 24","fxFlex.lt-lg","0 1 48","fxFlex.lt-sm","0 1 95","fxLayout","row wrap",1,"movie"],["fxFlex","calc(50px)"],[3,"size","photoURL","click"],["fxFlex","calc(100%-50px)","fxLayout","row wrap"],["fxFlex","calc(100%-60px)","fxLayout","row wrap",1,"user-info"],["fxFlex","100",1,"pointer","bold",3,"click"],["fxFlex","calc(60px)","fxLayout","row wrap",1,"skill-wrapper"],["fxFlex","100",1,"skill-label","text-center"],["fxFlex","100",1,"skill-rating","text-center","pointer"],["fxFlex","100","fxLayoutAlign","center center"],["mat-button","","color","primary",3,"click",4,"ngIf"],["mat-button","","color","warn",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"click"]],template:function(t,i){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"h2",1),l._uU(2,"Favourite Movies"),l.qZA(),l.TgZ(3,"div",2),l.YNc(4,Z,22,8,"ng-container",3),l.qZA(),l.qZA()),2&t&&(l.xp6(4),l.Q6J("ngForOf",i.favourites))},directives:[d.yH,d.xw,d.SQ,o.sg,g.g,d.Wh,o.O5,h.lW],styles:[".favourites-page[_ngcontent-%COMP%]{padding:10px 20px}.movie[_ngcontent-%COMP%]{border:1px solid #673ab7;border-radius:5px;padding:15px 10px;margin-bottom:10px;min-width:300px}.skill-rating[_ngcontent-%COMP%]{font-weight:700;font-size:30px;border:1px solid;border-radius:10px;padding:10px 5px;line-height:35px;background-color:#000;color:#fff;max-height:55px}"],changeDetection:0}),t})()}];var k=e(69244);let b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[],imports:[[o.ez,n.Bz,r.o9,s.u5,c.q,a.y,s.UX,k._t,n.Bz.forChild(w)]]}),t})()}}]);