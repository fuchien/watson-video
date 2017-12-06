import { Directive, ElementRef } from '@angular/core';

import { HomeService } from './home.service';

@Directive({
  selector: '[appAudio]'
})
export class AudioDirective {

  constructor(
    private elRef:ElementRef
  ) {}
  
  // SCROLLTOP apos a VIEW de carregamento de DIGITAMENTO
  ngAfterViewInit() {

    let currentTime = HomeService.getTimeStamp()

    if (!currentTime) {

      this.elRef.nativeElement.pause()
      return
    }
    this.elRef.nativeElement.currentTime = currentTime
    this.elRef.nativeElement.pause()
  }
}