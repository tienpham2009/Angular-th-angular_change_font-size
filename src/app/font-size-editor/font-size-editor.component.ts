import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {

  fontSize: string = "14";

  constructor() { }

  ngOnInit(): void {
  }

  changeFontSizeValue(fontSize : string):void {
    this.fontSize = fontSize;

  }

}
