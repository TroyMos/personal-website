import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BlogComponent } from './app/blog.component';
import { HomeComponent } from './app/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: '', component: HomeComponent },
        { path: 'overview', component: HomeComponent },
        { path: 'projects', component: HomeComponent },
        { path: 'resume', component: HomeComponent },
        { path: 'reviews', component: HomeComponent },
        { path: 'contact', component: HomeComponent },
        { path: 'blogs', component: BlogComponent },
          { path: '**', redirectTo: '' }
        ],
        withInMemoryScrolling({ anchorScrolling: 'enabled' })
      )
  ]
}).catch((err) => console.error(err));
