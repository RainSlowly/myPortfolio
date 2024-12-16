import { Component, OnInit,Inject, PLATFORM_ID,ViewEncapsulation} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { tapeAnimation,paperFAnimation,paperFAnimation3,
  paperlinedAnimation,postItAnimation,pinAnimation,paperNotepadAnimation, 
  projectAnimation,paperNotepadAltAnimation,paperFAnimation4,
  tapeAnimation2,segnaAnimation,projectAltAnimation, paperFAnimation2,
  postItAnimation2,
  paperPokeAnimation,
  segnaAnimation2} from './animation';
import { AvatarAnimationsService } from '../../services/avatar-animations.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
  animations: [ projectAnimation, tapeAnimation, paperFAnimation, paperFAnimation3,
    paperlinedAnimation,postItAnimation,pinAnimation, paperNotepadAnimation,
  paperNotepadAltAnimation, paperFAnimation4, tapeAnimation2,segnaAnimation,
projectAltAnimation, paperFAnimation2, postItAnimation2, paperPokeAnimation, segnaAnimation2]
})
export class HomeComponent implements OnInit {
  
  isPlatFormBrowser:boolean;
  fixAvatar:boolean=false;
  isTriggered:boolean=false;
  projTriggered:boolean=false;
  selectedProj:number=5;
  alternative:boolean=true;
  alternativeState:string='visible'
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
jobTitle1: " ", jobPlace1: " "};





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
      }
    }

  private addScrollListener() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private removeScrollListener() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
   
    
    const aboutMeSection = document.getElementById('about-me');
    const projectSection= document.getElementById('project-container');
    if (!aboutMeSection || !projectSection) return;

    const sectionTop = aboutMeSection.getBoundingClientRect().top;
    const projectSectionTop = projectSection.getBoundingClientRect().top;

    // Aggiungi la classe quando si supera la sezione di 50px
    if (sectionTop <= -50 && !this.isTriggered) {
      this.fixAvatar = true;
      this.isTriggered = true;
      this.animationService.startAnimation();
      this.removeScrollListener(); // Disabilita il listener dopo il primo trigger
    } if (projectSectionTop <=300 && !this.projTriggered ) {
      this.selectedProj=0;
      this.animationStates[0] = 'visible';
      this.projTriggered=true;
      this.animationService.startSpeaking();
      this.removeScrollListener();
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
      this.animationService.startSpeaking();
      this.selectedProj = id;
      this.animationStates[id] = 'visible';
      console.log(this.selectedProj)
    }, 600);
    
  }

  changeAlternative():void{
    if(this.alternative===false) return;
    this.alternativeState = 'hidden';
    setTimeout(() => {
      this.animationService.startSpeaking();
      this.alternative=false;
      this.alternativeState = 'visible';
    }, 600);
  }

  ngOnInit(): void {
    if(this.isPlatFormBrowser===true){
    this.addScrollListener();
    window.setTimeout(() => {
    this.onScroll()
    this.languageService.selectedLanguage$.subscribe((lang) => {
      this.prelang = lang; // Lingua non sanificata
      this.language = this.languageService.sanitizeLanguage(lang);
    });
    },0);
  }
  
  }

}
