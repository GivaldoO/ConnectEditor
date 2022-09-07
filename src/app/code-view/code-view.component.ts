import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

import * as ace from "ace-builds"

import { HttpClient } from '@angular/common/http';

import "brace"
import "brace/ext/language_tools"

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})




export class CodeViewComponent implements OnInit {

  @ViewChild("editor")
  private editor!: ElementRef<HTMLElement>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/data').subscribe(res => {
      localStorage.setItem('data', JSON.stringify(res))
    })
  }
    
  ngAfterViewInit(): void { 

    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    const aceEditor = ace.edit(this.editor.nativeElement);
    //aceEditor.session.setValue("print('lets code in python')");
    aceEditor.setTheme('ace/theme/tomorrow') //twilight');
    aceEditor.session.setMode('ace/mode/python');
    
    ace.require("ace/ext/language_tools.js");
    aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    });

    var data: any = []
    data.push(this.getItem())
    data = JSON.parse(data)
    //console.log(data)

    var keys: any = []
    Object.keys(data).forEach((key) => {
      keys.push(`@@${key}`)
    })
    console.log(keys)
    

    aceEditor.session.on('change', () => {
      for(let i of keys){
        aceEditor.find(i, 
          {
            caseSensitive: true,
          });

        let key = i.replace('@@','')
        aceEditor.replace(JSON.stringify(data[key], null, '\t'))
      }
    });
  }

  
  public getItem(){
    var req = localStorage.getItem('data')
    return req
  }

}