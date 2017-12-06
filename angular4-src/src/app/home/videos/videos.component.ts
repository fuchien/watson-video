import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations'

import { HomeService } from './../home.service';
import { ErrorComponent } from './../../error/error.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  animations: [
    trigger('fade', [
      state('visible', style({
        opacity: 1,
        transform: 'scale(1.0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.0)'
      })),
      transition('* => *', animate('500ms 0s ease-in-out'))
    ])
  ]
})
export class VideosComponent implements OnInit {

  videos = []

  processando: boolean = false
  fileName: string = 'Choose 1 file'
  file: any

  private fileUpload: any
  // private url: string = `http://localhost:3001`
  private url: string = `https://watson-video.herokuapp.com`
  // private url: string = ``

  constructor(
    public dialog: MatDialog,
    private homeService: HomeService
  ) { }

  ngOnInit() {

    this.buscarVideos()
  }

  // abrir o DIALOG
  openDialog(msg: string): void {
    let dialogRef = this.dialog.open(ErrorComponent, {
      width: 'auto',
      data: msg
    });
  }

  buscarVideos() {

    this.homeService.buscarTodosVideos()
      .subscribe(res => {

        this.videos = []
  
        res.map(video => {
  
          let videos = {
            videoName: video,
            videoUrl: `/videos-processed/${video}`
          }
          this.videos.push(videos)
        })
      }, err => {
  
        this.openDialog(err.json())
      })
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.fileName = this.file.name
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.fileUpload = {
          name: this.fileName,
          base: reader.result.split(',')[1]
        }
      };
    }
  }

  processFile() {

    if (!this.fileUpload) {

      this.openDialog('Upload someone file!')
      return
    }

    this.processando = true
    this.file = null
    this.fileName = 'Choose 1 file'
    this.homeService.enviarAudio(this.fileUpload)
      .subscribe(res => {

        this.buscarVideos()
        this.processando = false
        this.openDialog(res)
      }, err => {

        this.processando = false
        this.openDialog('Error!')
      })
  }

  removerVideo(video) {

    this.homeService.removerVideo(video)
      .subscribe(res => {

        let videos = this.videos.slice(0);
        this.videos = videos.filter(v => v.videoName != video)
        this.openDialog(res)
      })
  }

}