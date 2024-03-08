import {Component, OnInit, ViewChild} from '@angular/core';
import {ChangeEvent, CKEditorModule} from '@ckeditor/ckeditor5-angular';
import CKSource from 'custom-ckeditor5/build/ckeditor';
import {CommonModule} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";

const Context = CKSource.Editor.Context;
const Editor = CKSource.Editor;
const ContextWatchdog = CKSource.Editor.ContextWatchdog;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CKEditorModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild("myEditor", { static: false }) myEditor: any;

  text: string = "";
  ckeditor: any = Editor;
  watchdog: any;
  ready = false;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const contextConfig = {};
    this.watchdog = new ContextWatchdog( Context );

    this.watchdog.create( contextConfig )
      .then( () => {
        this.ready = true;
        console.log({ready: this.ready})
      } );
  }

  getSafetyHtml(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  onChange({ editor }: ChangeEvent) {
    this.text = editor.getData();
  }
}
