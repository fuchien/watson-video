import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';

import { HomeService } from '../home.service';
import { ErrorComponent } from './../../error/error.component';

@Component({
  selector: 'chien-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  processando: boolean = false
  fileName: string = 'Choose 1 file'
  file: any
  error: any
  inProgress: boolean = false
  videoUrl: string
  inputDigitado: string

  private cpf: string = ''
  private myForm: FormGroup
  private fileUpload: any

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private homeService: HomeService
  ) {

    // criar o FORMULARIO
    this.myForm = fb.group({
      'trecho': [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  // abrir o DIALOG
  openDialog(msg: string): void {
    let dialogRef = this.dialog.open(ErrorComponent, {
      width: 'auto',
      data: msg
    });
  }

  // enviar os DADOS do FORM
  enviarDados(post, isValid: boolean) {

    // se o form esta VALIDO
    if (isValid) {
      
      this.videoUrl = undefined
      this.inProgress = true

      this.homeService.buscarVideos(post.trecho)
        .subscribe(resp => {

          console.log(resp)

          this.myForm.reset()
          this.inProgress = false
          this.inputDigitado = post.trecho

          if (resp.results.length != 0) {

            let data = JSON.parse(resp.results[0].data)
            data.results[0].alternatives[0].timestamps.map(timestamp => {

              if (timestamp[0].toLowerCase().includes(post.trecho.split(' ')[0].toLowerCase())) {

                HomeService.setTimeStamp(timestamp[1])
                return
              }
            })

            // this.videoUrl = `https://dal.objectstorage.open.softlayer.com/v1/AUTH_07a5d8e900744943b109ea40561d202d/file/${resp.results[0].id}.mp4`
            this.videoUrl = `http://localhost:3001/videos-processed/${resp.results[0].id}.mp4`
            return
          }
          this.openDialog('Não tem nenhum conteúdo!!')
        })
    }
  }
}