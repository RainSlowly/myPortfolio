import { Injectable } from '@angular/core';
import { FoldedVideoComponent } from '../components/folded-video/folded-video.component';

@Injectable({
  providedIn: 'root'
})
export class AvatarAnimationsService {
  private foldedVideoComponent!: FoldedVideoComponent
  constructor() { }

  setFoldedVideoComponent(component: FoldedVideoComponent): void {
    this.foldedVideoComponent = component;
  }

  startAnimation():void{
    this.foldedVideoComponent.rollBody();
    this.foldedVideoComponent.rollEye();
    this.foldedVideoComponent.rollMouth();


  }

  startSpeaking():void{
    if(this.foldedVideoComponent){
      this.foldedVideoComponent.activateMouth()
    }
  }
}
