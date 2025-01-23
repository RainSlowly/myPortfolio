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
    this.foldedVideoComponent.activateMouth();


  }
  changeBrows(id:string):void{
    this.foldedVideoComponent.changeBrows(id)
  }

  changeExpression(expression:string):void{
    
    if(expression==="dubbio"){
     setTimeout(() => {
      this.stopSpeaking;
      this.startSpeaking();
      this.foldedVideoComponent.changeBrows("2")
     }, 300); 
     setTimeout(() => {
      this.foldedVideoComponent.changeBrows("3")
     }, 3000);
     setTimeout(() => {
      this.foldedVideoComponent.changeBrows("1")
     }, 3800); 
    }else if (expression==="soffoco"){
      setTimeout(() => {
        this.stopSpeaking();
        this.foldedVideoComponent.changeBrows("3");
        this.foldedVideoComponent.closeEyes();
        this.foldedVideoComponent.changeMouth("O");
       }, 100); 
       setTimeout(() => {
        this.foldedVideoComponent.changeMouth("A");
       }, 800); 
       setTimeout(() => {
        this.foldedVideoComponent.changeMouth("O");
       }, 1500); 
       setTimeout(() => {
        this.foldedVideoComponent.changeBrows("1");
        this.foldedVideoComponent.changeMouth("A");
       }, 2100); 
       setTimeout(() => {
        this.foldedVideoComponent.changeBrows("3");
        this.foldedVideoComponent.changeMouth("O");
       }, 2800); 
       setTimeout(() => {
        this.startSpeaking();
       }, 3700); 
       setTimeout(() => {
        this.foldedVideoComponent.openEyes();
       }, 4100); 
       setTimeout(() => {
        this.foldedVideoComponent.changeBrows("1")
        this.stopSpeaking();
       }, 6500); 
    }
  }


  startSpeaking():void{
    if(this.foldedVideoComponent){
      this.foldedVideoComponent.activateMouth()
    }
  }

  stopSpeaking():void{
    this.foldedVideoComponent.stopMouth();
  }
}
