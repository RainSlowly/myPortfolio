import { Component, OnInit,Inject, PLATFORM_ID,ViewEncapsulation} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { tapeAnimation,paperFAnimation,paperFAnimation3,
  paperlinedAnimation,postItAnimation,postItAnimationAbout, postItAnimationAbout2,pinAnimation,paperNotepadAnimation, 
  projectAnimation,paperNotepadAltAnimation,paperFAnimation4,
  tapeAnimation2,segnaAnimation,projectAltAnimation, paperFAnimation2,
  postItAnimation2,paperPokeAnimation,  segnaAnimation2, linkAnimation
} from './animation';
import { AvatarAnimationsService } from '../../services/avatar-animations.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
  animations: [ projectAnimation, tapeAnimation, paperFAnimation, paperFAnimation3,
    paperlinedAnimation,postItAnimation, postItAnimationAbout,postItAnimationAbout2,pinAnimation, paperNotepadAnimation,
  paperNotepadAltAnimation, paperFAnimation4, tapeAnimation2,segnaAnimation,
projectAltAnimation, paperFAnimation2, postItAnimation2, paperPokeAnimation, segnaAnimation2,linkAnimation]
})
export class HomeComponent implements OnInit {
  
  isPlatFormBrowser:boolean;
  fixAvatar:boolean=false;
  isTriggered:boolean=false;
  wasHero:boolean=false;
  wasPresentation:boolean=false;
  projTriggered:boolean=false;
  selectedProj:number=5;
  alternative:boolean=true;
  linkAnimationState: { [key: number]: string } = { 0: 'initial', 1: 'initial', 2: 'initial', 3: 'initial', 4: 'initial', 5: 'initial' , 6: 'initial' , 7: 'initial' , 8: 'initial'  };
  selectedLink:number=10;
  alternativeState:string='visible';
  animationStates: { [key: number]: string } = { 0: 'visible', 1: 'visible', 2: 'visible' };
  projectButtons=[ {name:'Find It Game',static:'assets/images/button normal.png', gif :'assets/images/Button.gif'},
    {name:'Poke Game',static:'assets/images/button normal.png', gif :'assets/images/Button.gif'},
    {name:'Sito Vetrina',static:'assets/images/button normal.png', gif :'assets/images/Button.gif'}
  ]

  selectedLang:string="ITA";
  prelang:any;
  language={
    navigation1: " ", navigation2: " ", heroTitle: " ", heroDescription: " ",
heroContacts: " ", heroAbility1: " ", heroAbility2: " ", heroImgDescription: " ",
heroContactMe: " ", aboutPolaroid: " ", aboutDescription: " ", aboutListLove: " ",
aboutListLove1: " ", aboutListLove2: " ", aboutListLove3: " ", aboutListHate: " ",
aboutListHate1: " ", aboutListHate2: " ", aboutListHate3: " ", proj1Utilized: " ",
proj1Description: " ", proj2Utilized: " ", proj2Description: " ", proj3Title: " ",
proj3Utilized: " ", proj3Description: " ", proj4Title: " ", proj4Utilized: " ",
proj4Description: " ", resumeEdu: " ", resumeEdu2: " ", resumeLang: " ",
resumeLang2: " ", resumeSkill1: " ", resumeSkill2: " ", resumeSkill3: " ",
resumeSkill4: " ", resumeSkill5: " ", resumeSkill6: " ", resumeSkill7: " ",
jobTitle1: " ", jobPlace1: " ",jobTitle2:"",jobPlace2:"",jobTitle3:"",jobPlace3:"",jobTitle4:"",jobPlace4:""};

selectedPhrase:string="";
key: keyof typeof this.avatarLanguage = "aboutLocked";
preAvatarLang:any;
avatarLanguage={   
  aboutLocked:"Ciao sono <b>Simone</b>, questo è il mio sito portfolio.<br> Sarò la tua guida qui dentro.<br> Puoi navigare su questa versione o su quella più seria, se preferisci.",
  aboutMoving:"E' mio dovere seguirti in questa navigazione. Altrimenti che guida sarei?",
  heroReturn:"Uff! Stavo soffocando là sotto!",
  project1:"La parte più complicata è stata la gestione di ogni singolo livello. Se vuoi, puoi provare il gioco su itch.io. Funziona tutto, fino alla fine… Credo.",
  project2:"Tutti i programmatori, prima o poi, hanno avuto a che fare coi Pokémon. Ammettiamolo dai.",
  project3:"Sapete cosa dovremmo fare? APRIRE UN BAR! Questa era una cit. ad How i Met Your- lascia perdere… Non dovevo distrarti.",
  project4:"Fare un sito per un parente è come correre con le forbici in mano e i lacci slacciati.",
  resume1: "In ambienti diversi ho imparato una miriade di cose diverse. So lavorare a contatto con la gente e dietro le quinte, da solo e in gruppo e ho ottime doti comunicative.",
  resume2: "I lavori che ho fatto non c'entrano nulla con la programmazione, lo so. Ma cosa non si fa per campare eh?",
  contacts:"Spero che la mia personalità e le mie capacità ti abbiano almeno incuriosito. Se vuoi sapere di più o vuoi contattarmi, beh… Sai già cosa fare!",
  hidle1:"Sei ancora li? Ti sei alzato a prendere un caffè?<br>Sbrighiamoci però, tra un paio d’ore devo fare l’avatar digitale su un’app di trading.",
  hidle2:"E' imbarazzante stare qui fermo a non fare nulla...",
  return1:"Ma si guardiamo un'altra volta questa parte!",
  return2:"Non l'avevamo già visto questo?",
  return3:"Questa sezione non è niente male lo so."}


  constructor(private animationService: AvatarAnimationsService,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) platformId: Object )
    {this.isPlatFormBrowser = isPlatformBrowser(platformId)}
  

    changeLanguage(lang: string): void {
      if(this.selectedLang===lang){
        return
      }else{
      this.selectedLang=lang;
      this.languageService.changeLanguage(lang);
      this.selectedPhrase=this.avatarLanguage[this.key];
      }
    }

  private addScrollListener() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private removeScrollListener() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
   
    const heroSection = document.getElementById('hero');
    const aboutMeSection = document.getElementById('about-me');
    const projectSection= document.getElementById('project-container');
    const resumeSection= document.getElementById('resume');
    const contactSection= document.getElementById('contact-container')
    if (!aboutMeSection || !projectSection || !resumeSection || !contactSection || !heroSection

    ) return;

    const heroSectionTop = heroSection.getBoundingClientRect().top;
    const sectionTop = aboutMeSection.getBoundingClientRect().top;
    const projectSectionTop = projectSection.getBoundingClientRect().top;
    const resumeSectionTop = resumeSection.getBoundingClientRect().top;
    const contactSectionTop= contactSection.getBoundingClientRect().top;

    if( heroSectionTop <= -300 && heroSectionTop >=-400 && this.fixAvatar){

      this.wasHero=true;   
      console.log(this.wasHero)
    
    }if (sectionTop <= 600 && sectionTop >100 && this.wasHero===true) {
      this.key="heroReturn"
      this.selectedPhrase=this.avatarLanguage[this.key];
      this.wasHero=false;
      console.log(this.wasHero)
      this.animationService.changeExpression("soffoco");  
    } if (sectionTop <= 0 && !this.isTriggered) {
      this.key="aboutMoving"
      this.selectedPhrase=this.avatarLanguage[this.key];
      this.fixAvatar = true;
      this.isTriggered = true;
      this.animationService.startAnimation();
    
    } if (sectionTop <= 0 && this.isTriggered && this.wasPresentation) {
      this.key="return1"
      this.selectedPhrase=this.avatarLanguage[this.key];
      this.animationService.startSpeaking();
    }if (projectSectionTop <=200 && !this.projTriggered ) {
      this.key="project1";
      this.wasPresentation=true;
      this.selectedPhrase=this.avatarLanguage[this.key];
      this.selectedProj=0;
      this.animationStates[0] = 'visible';
      this.projTriggered=true;
      this.animationService.startSpeaking();
      this.removeScrollListener();
    }if (projectSectionTop <=200 && this.projTriggered ) {
      this.wasPresentation=true;
      if(this.selectedProj=== 0){
        this.key="project1"
        this.selectedPhrase=this.avatarLanguage[this.key]
      }else if(this.selectedProj=== 1){
        this.key="project2"
        this.selectedPhrase=this.avatarLanguage[this.key]
      }else if(this.selectedProj=== 2 && this.alternative){
        this.key="project3"
        this.selectedPhrase=this.avatarLanguage[this.key]
      }else if(this.selectedProj=== 2 && !this.alternative){
        this.key="project4"
        this.selectedPhrase=this.avatarLanguage[this.key]
      }
      this.animationService.startSpeaking();
    }  
    if (resumeSectionTop <=250) {
    this.key="resume1";
    this.selectedPhrase=this.avatarLanguage[this.key];
    this.animationService.startSpeaking();
    }if (contactSectionTop<=300) {
      this.key="contacts";
      this.selectedPhrase=this.avatarLanguage[this.key];
      this.animationService.startSpeaking();
      }
  }

scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;  
    const headerOffset = 0; 

    // Esegui lo scroll
    window.scrollTo({
      top: sectionPosition - headerOffset,
      behavior: 'smooth'
    });
  }
}


getBaloonSource(){
  if (this.fixAvatar === true) {
    return "assets/images/Baloon.gif";
  }
  return "assets/images/Baloon.png";
}



  getImageSource(index: number): string {
    if (this.selectedProj === index) {
      return this.projectButtons[index].gif;
    }
    return this.projectButtons[index].static;
  }


  changeProject(id:number):void{
    if(this.selectedProj===id) return;
    if(id===2 && this.alternative!=true){
      this.alternative=true;
    }
   
    this.animationStates[this.selectedProj]="hidden";
    setTimeout(() => {
      
      this.selectedProj = id;
      this.animationStates[id] = 'visible';
      if(id=== 0){
        this.key="project1"
        this.selectedPhrase=this.avatarLanguage[this.key]
        this.animationService.changeExpression("dubbio");
        this.alternative=false;
      }else if(id=== 1){
        this.key="project2"
        this.selectedPhrase=this.avatarLanguage[this.key]
        this.animationService.changeExpression("soffoco");
        this.alternative=false;
      }else if(id=== 2){
        this.key="project3"
        this.selectedPhrase=this.avatarLanguage[this.key]
      }
    }, 600);
  }

  changeAlternative():void{
    if(this.alternative===false) return;
    this.alternativeState = 'hidden';
    setTimeout(() => {
      this.animationService.startSpeaking();
      this.alternative=false;
      this.alternativeState = 'visible';
      this.key="project4";
      this.selectedPhrase=this.avatarLanguage[this.key]
    }, 600);
  }

  ngOnInit(): void {
    if(this.isPlatFormBrowser===true){
    this.addScrollListener();
    console.log(this.avatarLanguage)
    window.setTimeout(() => {
    this.onScroll()
    this.languageService.selectedLanguage$.subscribe((lang) => {
      this.prelang = lang; // Lingua non sanificata
      this.language = this.languageService.sanitizeLanguage(lang);
    });
    this.languageService.selectedLanguageAvatar$.subscribe((avatarLang) => {
      this.preAvatarLang = avatarLang 
      this.avatarLanguage = this.languageService.sanitizeLanguage(avatarLang) // Avatar sanitizzato
      this.selectedPhrase = this.avatarLanguage[this.key];
    });
    },0);
  }
  
  }
linkto(element:number):void{
  if(this.isPlatFormBrowser===true){
    this.selectedLink=element;
    this.linkAnimationState[element]="detached";

    setTimeout(() => {
      if(element=== 0|| element ===4 || element===8){
        const message = 'Ciao, saresti interessato a lavorare per noi?'; 
        const url = `https://wa.me/3770825242}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }else if(element===1 || element===6){
        const email = 'simone.zavaglia93@gmail.com';
        const subject = 'Oggetto della mail';
        const body = 'Ciao, ti scrivo perché...';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }else if (element===2 || element===5){
        window.location.href = 'https://www.instagram.com/sprotzpool/';
      }else if (element===3 || element===7){
       window.location.href = 'https://github.com/RainSlowly';
      }
    }, 1000);
  }
}



redirectToYoutube(project:string) {
  if(project='poke'){
    window.open('https://www.youtube.com/watch?v=z6o8C7Tcws4');
  }else if(project='bar'){
    window.open('https://www.youtube.com/watch?v=kcJ8_EDRfGE_blank');
  }else if(project='findIt'){
    window.open('https://www.youtube.com/watch?v=kcJ8_EDRfGE_blank');}
  }
}

