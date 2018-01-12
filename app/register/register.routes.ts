import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./register.component";

const registerRoutes: Routes = [
  { path: "register", component: RegisterComponent },
];
export const registerRouting: ModuleWithProviders = RouterModule.forChild(registerRoutes);