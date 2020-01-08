import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [
      // When you wanna make a path for every user this is a way to do that. Though it's not very optimal.
      // { path: "users/1", component: UsersComponent },
      // { path: "users/2", component: UsersComponent },
      // To make it dynamic you can use ":" this says "the path users/{anything}" where anything is interpreted as id.
      { path: ":id/:name", component: UserComponent }
    ]
  },
  {
    path: "servers",
    // This one can protect the current page
    // canActivate: [AuthGuard],
    // This one protects the child routes
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver }
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  // { path: "not-found", component: PageNotFoundComponent },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found!" }
  },

  // Last one
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  // To add a hashtag after the basic route: "localhost:4200/#"
  // imports: [RouterModule.forRoot(appRoutes), {useHash: true}],
  exports: [RouterModule]
})
export class AppRoutingModule {}
