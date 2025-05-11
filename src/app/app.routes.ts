import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { TablesViewPageComponent } from './shared/pages/tables/tables-view-page/tables-view-page.component';
import { ProjectsViewPageComponent } from './shared/pages/projects/projects-view-page/projects-view-page.component';
import { GraphicsViewPageComponent } from './shared/pages/graphics/graphics-view-page/graphics-view-page.component';
import { DashboardViewPageComponent } from './shared/pages/dashboard/dashboard-view-page/dashboard-view-page.component';
import { NotificationsViewPageComponent } from './shared/pages/notifications/notifications-view-page/notifications-view-page.component';
import { ConfigurationsViewPageComponent } from './shared/pages/configurations/configurations-view-page/configurations-view-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tables',
        component: TablesViewPageComponent
    },
    {
        path: 'projects',
        component: ProjectsViewPageComponent
    },
    {
        path: 'graphics',
        component: GraphicsViewPageComponent
    }, 
    {
        path: 'dashboard',
        component: DashboardViewPageComponent
    },
    {
        path: 'notifications',
        component: NotificationsViewPageComponent
    },
    {
        path: 'configurations',
        component: ConfigurationsViewPageComponent
    },

    // Ejemplo de como usar Lazy Loading 
    {
        path: 'Raye',
        loadComponent:() => import('./shared/components/raye/raye.component').then(c => c.RayeComponent)
    }
];
 