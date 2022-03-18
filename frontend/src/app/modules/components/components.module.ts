import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationBarComponent,
    ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    NavigationBarComponent,
    ],
})
export class ComponentsModule {}
