import { Component, OnInit,OnDestroy,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { start } from 'node:repl';
import { AvatarAnimationsService } from '../../services/avatar-animations.service';

@Component({
  selector: 'app-folded-video',
  templateUrl: './folded-video.component.html',
  styleUrl: './folded-video.component.css'
})
export class FoldedVideoComponent implements OnInit, OnDestroy {
  isPlatFormBrowser:boolean;
  isClosedEyes:boolean=false;
  isClosedMouth:boolean=true;

  allBodyId:string[]=["1-1","1-2","1-3","1-4","1-5","2-1","2-2","2-3","2-4","2-5","3-1","3-2","3-3","3-4","3-5"];
  selectedBodyImageId:string="1-1";
  currentBodyImage = "assets/images/animation/Body"+ this.selectedBodyImageId + ".png";

  allEyeId:string[]=["Aperti","Chiusi"];
  selectedEyeImageId:string="Aperti";
  currentEyeImage = "assets/images/animation/Occhi"+ this.selectedEyeImageId + ".png";

  allBrowsId:string[]=["1","2","3"];
  selectedBrowsImageId:string="1";
  currentBrowsImage = "assets/images/animation/Sopracciglia"+ this.selectedBrowsImageId + ".png";

  
  allMouthId:string[]=["A","O","S","Chiusa1","Chiusa2"]
  selectedMouthImageId:string="Chiusa2";
  currentMouthImage = "assets/images/animation/Bocca"+ this.selectedMouthImageId + ".png";

  private speakingInterval: any = null; 


  constructor(
    private animationService: AvatarAnimationsService,
    @Inject(PLATFORM_ID) platformId: Object )
   
{ 
    this.isPlatFormBrowser = isPlatformBrowser(platformId)}

 ngOnInit(): void {
   if(this.isPlatFormBrowser===true){
    this.animationService.setFoldedVideoComponent(this);
    
  }  
 }


 rollBody():void{
  window.setInterval(()=>{
    const tempArray = this.allBodyId.filter(id => id !== this.selectedBodyImageId);
    this.selectedBodyImageId = tempArray[
      Math.floor(Math.random() * tempArray.length)
    ];
    this.currentBodyImage = "assets/images/animation/Body" + this.selectedBodyImageId + ".png";
  }, 250);
 }

closeEyes():void{
  this.isClosedEyes=true;
  this.selectedEyeImageId = "Chiusi";
   this.currentEyeImage = "assets/images/animation/Occhi" + this.selectedEyeImageId + ".png";
}

 rollEye():void{
  console.log(this.currentEyeImage, this.selectedEyeImageId)
  const blink=()=>{
  if(this.selectedEyeImageId==="Aperti" && this.isClosedEyes!=true){
    this.selectedEyeImageId = "Chiusi";
    this.currentEyeImage = "assets/images/animation/Occhi" + this.selectedEyeImageId + ".png";
     window.setTimeout(blink, Math.random() * 100 + 50);
}else if (this.selectedEyeImageId ==="Chiusi" && this.isClosedEyes!=true){
    this.selectedEyeImageId = "Aperti";
    this.currentEyeImage = "assets/images/animation/Occhi" + this.selectedEyeImageId + ".png";
     window.setTimeout(blink, Math.random() *2000+3000);
   }else if (this.selectedEyeImageId ==="Chiusi" && this.isClosedEyes===true){
    this.isClosedEyes=false;
     window.setTimeout(blink, Math.random() *2000+3000);
   }else if (this.selectedEyeImageId ==="Aperti" && this.isClosedEyes===true){
    this.selectedEyeImageId = "Chiusi";
    this.currentEyeImage = "assets/images/animation/Occhi" + this.selectedEyeImageId + ".png";
    this.isClosedEyes=false;
     window.setTimeout(blink, Math.random() *2000+3000);
   }
  }
  blink();
 }





 startSpeak(): void {
   if (!this.isClosedMouth) {
     console.log("Speaking animation started");
 
     // Ferma un eventuale intervallo già attivo
     if (this.speakingInterval !== null) {
       clearInterval(this.speakingInterval);
     }
 
     // Avvia un nuovo intervallo per cambiare le immagini della bocca
     this.speakingInterval = window.setInterval(() => {
       const tempArray = this.allMouthId.filter(id => id !== this.selectedMouthImageId);
       this.selectedMouthImageId = tempArray[
         Math.floor(Math.random() * tempArray.length)
       ];
       this.currentMouthImage = "assets/images/animation/Bocca" + this.selectedMouthImageId + ".png";
     }, 110);
   } else {
     this.rollMouth();
   }
 }
 
 rollMouth(): void {
   console.log("Roll mouth method called");
 
   // Ferma l'intervallo se la bocca viene chiusa
   if (this.speakingInterval != null) {
     clearInterval(this.speakingInterval);
     this.speakingInterval = null; // Rimuove il riferimento
   }
 
   if (this.isClosedMouth) {
    const allowedIds = ["Chiusa1", "Chiusa2"];
    const tempArray = this.allMouthId.filter(id => allowedIds.includes(id));
    this.selectedMouthImageId = tempArray[
      Math.floor(Math.random() * tempArray.length)
    ]
     this.currentMouthImage = "assets/images/animation/Bocca" + this.selectedMouthImageId + ".png";
   } else {
     console.log("Mouth is open, starting to speak");
     this.startSpeak();
 
     // Chiude automaticamente la bocca dopo un intervallo
     window.setTimeout(() => {
       this.isClosedMouth = true;
       this.rollMouth();
     },Math.random() *4000+3000);
   }
 }
 
 activateMouth(): void {
   console.log("Activating mouth", this.selectedMouthImageId, this.isClosedMouth);
 
   // Cambia lo stato per aprire la bocca
   this.isClosedMouth = false;
 
   // Avvia il comportamento corrispondente
   this.rollMouth();
 }

ngOnDestroy(): void {
  
}

}
