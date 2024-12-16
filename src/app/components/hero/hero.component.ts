import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy{

allCounters=[
  {name:"progetti svolti", number:7,value: 74, color:"#ffe047" },
  {name:"Caffè trangugiati", number:562,value: 81, color:"#ffe047" },
  {name:"Ore a debuggare", number:243,value: 67, color:"#ffe047" },
  {name:"Div centrati", number:109,value: 70, color:"#ffe047" },
  {name:"Persone a cui piaccio", number:1537,value: 90, color:"#ffe047" },
  {name:"Record minuti al PC", number:691,value: 87, color:"#ffe047" },
  {name:"Video tutorial Guardati", number:162,value: 71, color:"#ffe047" },
  {name:"Risposta fondamentale", number:42,value: 93, color:"#ffe047" },
  {name:"Parentesi chiuse", number:903,value: 97, color:"#ffe047" },
  {name:"Hello World scritti", number:148,value: 79, color:"#ffe047" },
  {name:"Console.log lanciati", number:2186,value: 82, color:"#ffe047" }
]
selectedCounters:any[]=[];
language={
heroTitle:"",heroDescription:"", heroContacts:"",
heroAbility1:"",heroAbility2:"",heroImgDescription:" ", 
heroContactMe:""};

activeAnimations: { [key: string]: boolean } = {
  angular: false,
  js: false,
  node: false,
  ts: false
};


constructor(private languageService:LanguageService){}


ngOnInit(): void {
 this.rerollCounters();
 this.languageService.selectedLanguage$.subscribe((lang) => {
  this.language = lang;
});
}



rerollCounters():void{
  this.selectedCounters=[];
  this.selectedCounters.push(this.allCounters[0]);
  const remainingCounters = [...this.allCounters.slice(1)];
  const randomItems = this.getRandomItems(remainingCounters,2);
  this.selectedCounters.push(randomItems[0],randomItems[1]);
}

getRandomItems(array:any[], n:number){
  const shuffled = array.sort(()=> 0.5 - Math.random())
  return shuffled.slice(0,n)
}

animateLogo(id:string):void{
  if( this.activeAnimations[id] ===false){
    this.activeAnimations[id] = true;

  setTimeout(() => {
    this.activeAnimations[id] = false;},2100)
}
}

ngOnDestroy(): void {
  this.selectedCounters=[]
}


}
