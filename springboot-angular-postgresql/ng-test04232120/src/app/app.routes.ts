import { Routes } from '@angular/router';
import { ValuesComponent } from './components/values/values.component';
import { NgcontainerComponent } from './components/ngcontainer/ngcontainer.component';
import { ScopesComponent } from './components/scopes/scopes.component';

export const routes: Routes = [
    { path: 'values', component: ValuesComponent },
    { path: 'ngcontainer', component: NgcontainerComponent },
    { path: 'scopes', component: ScopesComponent }
];
