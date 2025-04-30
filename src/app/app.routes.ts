import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '',
      redirectTo: '/login', 
      pathMatch: 'full' 
    },
    {
        path: 'login',
        loadComponent: () => 
            import('./pages/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () => 
            import('./pages/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./layout/main-layout.component').then(m => m.MainLayoutComponent)
          ,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/dashboard.component').then(m => m.DashboardComponent),
            },
            {
                path: 'reports',
                loadComponent: () =>
                  import('./pages/reports.component').then(m => m.ReportsComponent),
            },
            {
                path: 'profile',
                loadComponent: () =>
                  import('./pages/profile/profile/profile.component').then(m => m.ProfileComponent),
              }
              
        ],
    },
];
