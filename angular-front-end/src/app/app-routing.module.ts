import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ReadUsersComponent } from './admin-user-panel/read-users/read-users.component';
import { CreateUserComponent } from './admin-user-panel/create-user/create-user.component';
import { EditUserComponent } from './admin-user-panel/edit-user/edit-user.component';

import { UserInfoComponent } from './user-profile/user-info/user-info.component';

import { ReadConferencesComponent } from './admin-conference-panel/read-conferences/read-conferences.component';
import { ViewConferenceComponent } from './admin-conference-panel/view-conference/view-conference.component';
import { CreateConferenceComponent } from './admin-conference-panel/create-conference/create-conference.component';
import { EditConferenceComponent } from './admin-conference-panel/edit-conference/edit-conference.component';

import { ReadCategoriesComponent } from './admin-conference-panel/read-categories/read-categories.component';
import { CreateCategoryComponent } from './admin-conference-panel/create-category/create-category.component';
import { EditCategoryComponent } from './admin-conference-panel/edit-category/edit-category.component';

import { ConferencesListComponent } from './user-content/conferences-list/conferences-list.component';
import { ViewConfComponent } from './user-content/view-conf/view-conf.component';

import { MyConferencesComponent } from './user-content/myconferences/myconferences.component';
import { FavouritesConferencesComponent } from './user-content/favourites-conferences/favourites-conferences.component';
import { StatsComponent } from './user-content/stats/stats.component';

import { YandexPaymentComponent } from './user-content/yandex-payment/yandex-payment.component';
import { PaymentComponent } from './user-content/payment/payment.component';

import { VisitedConferencesComponent } from './user-content/visited-conferences/visited-conferences.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegisterComponent },
	
	{ path: 'users', component: ReadUsersComponent },
	{ path: 'createuser', component: CreateUserComponent },
	{ path: 'edituser/:id', component: EditUserComponent },
	
	{ path: 'profile', component: UserInfoComponent },
	
	{ path: 'conferences', component: ReadConferencesComponent },
	{ path: 'conference/:id', component: ViewConferenceComponent },
	{ path: 'createconference', component: CreateConferenceComponent },
	{ path: 'editconference/:id', component: EditConferenceComponent },
	
	{ path: 'conferences/categories', component: ReadCategoriesComponent },
	{ path: 'createcategory', component: CreateCategoryComponent },
	{ path: 'editcategory/:id', component: EditCategoryComponent },
	
	{ path: 'listconferences', component: ConferencesListComponent },
	{ path: 'userconference/:id', component: ViewConfComponent },
	
	{ path: 'myconferences', component: MyConferencesComponent },
	{ path: 'favourites', component: FavouritesConferencesComponent },
	{ path: 'stats', component: StatsComponent },
	
	{ path: 'yandexpayment', component: YandexPaymentComponent },
	{ path: 'payment/:id', component: PaymentComponent },
	
	{ path: 'visited', component: VisitedConferencesComponent },
	
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
