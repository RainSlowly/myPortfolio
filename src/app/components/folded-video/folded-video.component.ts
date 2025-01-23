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
  private speakingTimeout: any = null; 

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

openEyes():void{
  this.isClosedEyes=false;
  this.selectedEyeImageId = "Aperti";
   this.currentEyeImage = "assets/images/animation/Occhi" + this.selectedEyeImageId + ".png";
}

changeBrows(id:string):void{
  this.selectedBrowsImageId=id;
  this.currentBrowsImage="assets/images/animation/Sopracciglia"+ this.selectedBrowsImageId + ".png";
}

 rollEye():void{
  
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


clearMouthAnimation():void{
  if (this.speakingInterval !== null) {
    clearInterval(this.speakingInterval);
    this.speakingInterval = null;

}
if (this.speakingTimeout !== null) {
  clearTimeout(this.speakingTimeout);
  this.speakingTimeout = null;
 
}
}


 startSpeak(): void {
  this.clearMouthAnimation();
  this.isClosedMouth = false;
  this.speakingInterval = window.setInterval(() => {
      const tempArray = this.allMouthId.filter(id => id !== this.selectedMouthImageId);
      this.selectedMouthImageId = tempArray[
          Math.floor(Math.random() * tempArray.length)
      ];
      this.currentMouthImage = "assets/images/animation/Bocca" + this.selectedMouthImageId + ".png";
      
  }, 110);
  const duration = Math.random() * 4000 + 3000;
  this.speakingTimeout = setTimeout(() => {
    this.stopMouth();
}, duration);
}

stopMouth(): void {
     this.clearMouthAnimation();
  this.isClosedMouth = true;
  this.selectedMouthImageId = "Chiusa1";
  this.currentMouthImage = "assets/images/animation/Bocca" + this.selectedMouthImageId + ".png";
  
}

activateMouth(): void {

  this.startSpeak();
}

changeMouth(id: string): void {
  this.selectedMouthImageId = id;
  this.currentMouthImage = "assets/images/animation/Bocca" + this.selectedMouthImageId + ".png";

}

ngOnDestroy(): void {
  
}

}
