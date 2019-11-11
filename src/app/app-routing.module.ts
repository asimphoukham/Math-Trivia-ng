import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './views/pages/start-page/start-page.component';
import { GamePageComponent } from './views/pages/game-page/game-page.component';
import { OptionPageComponent } from './views/pages/option-page/option-page.component';
import { EndPageComponent } from './views/pages/end-page/end-page.component';
import { RulePageComponent } from './views/pages/rule-page/rule-page.component';

const routes: Routes = [
  { path: 'title', component: StartPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'options', component: OptionPageComponent },
  { path: 'endGame', component: EndPageComponent },
  { path: 'rules', component: RulePageComponent },
  { path: '', component: StartPageComponent, pathMatch: 'full' },
  { path: '**', component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
