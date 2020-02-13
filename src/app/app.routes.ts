import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'videos', component: VideosComponent },
    // { path: 'videocategories', component: VideoCategoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
