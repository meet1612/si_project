import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './date/date.component';
import { ViewComponentComponent } from './view/view-component/view-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingContactComponent } from './setting-contact/setting-contact.component';


const arr: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'date', component: DateComponent },
  {
    path: 'setting', component: HelloWorldComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: SettingProfileComponent },
      { path: 'contact', component: SettingContactComponent },
      { path: '**', redirectTo:'profile', pathMatch:'full' }
    ]
  },
  { path: 'search', component: ViewComponentComponent },
  { path: '**', component: PagenotfoundComponent }
];

export const routing = RouterModule.forRoot(arr);
