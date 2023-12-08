import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  appartform!:FormGroup
  
    idd=0
  constructor( private acr : ActivatedRoute){
  
  }
  ngOnInit(): void {
    this.idd=this.acr.snapshot.params['id']
    this.appartform=new FormGroup({
      id:new FormControl('',Validators.required),
      titre:new FormControl('',Validators.required),
      prix:new FormControl('',Validators.required),
      quantite:new FormControl('',Validators.required),
      aime:new FormControl('',Validators.required)
     
  
    })
  }
  
  get id(){return this.appartform.get('id')}
  get titre(){return this.appartform.get('titre')}
  get prix(){return this.appartform.get('prix')}
  get quantite(){return this.appartform.get('quantite')}
  get aime(){return this.appartform.get('aime')}
  
  add(){
    console.log("my form: "+JSON.stringify(this.appartform.value))
  }

  }
