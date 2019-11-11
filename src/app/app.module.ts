import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './views/pages/game-page/game-page.component';
import { OptionPageComponent } from './views/pages/option-page/option-page.component';
import { StartPageComponent } from './views/pages/start-page/start-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ToastrModule } from 'ngx-toastr';
import { CountdownModule, Config } from 'ngx-countdown';
import { ToastModule } from 'primeng/toast';
import { EndPageComponent } from './views/pages/end-page/end-page.component';
import { RulePageComponent } from './views/pages/rule-page/rule-page.component';

export function countdownConfigFactory(): Config {
  return { template: `$!h!:$!m!:$!s!` };
}
@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    OptionPageComponent,
    StartPageComponent,
    HeaderComponent,
    ButtonComponent,
    EndPageComponent,
    RulePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HighlightJsModule,
    ToastrModule.forRoot(),
    CountdownModule,
    ToastModule
  ],
  providers: [
    // { provide: CountdownConfig, useFactory: countdownConfigFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
