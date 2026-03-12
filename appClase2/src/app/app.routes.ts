import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Acercade } from './pages/AcercaDe/acercade';

export const routes: Routes = [
    {path:'inicio',component:Inicio},
    {path:'acercade',component:Acercade},
    {path:'**',component:Inicio},
];
