import {RouterModule,Routes} from '@angular/router';
import {
	AllProductsComponent,
	AboutComponent,
	CollageComponent,
	ContactComponent,
	TixComponent
	}from "./components/index.paginas";



const app_routes: Routes = [
	{path:'',component:AllProductsComponent},
	{path:'about',component:AboutComponent},
	{path:'contact',component:ContactComponent},
	{path:'tix',component:TixComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);		