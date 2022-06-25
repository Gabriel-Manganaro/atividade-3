import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsComponent } from '../features/sell/components/components.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ComponentsComponent
    
  ],
  imports: [
    CommonModule
  ],
    exports: [
      HeaderComponent,
      FooterComponent,
      ComponentsComponent
    ],
  })
export class SharedModule { }
