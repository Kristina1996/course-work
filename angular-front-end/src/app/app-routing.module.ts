import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReadUsersComponent } from './admin-user-panel/read-users/read-users.component';
import { CreateUserComponent } from './admin-user-panel/create-user/create-user.component';
import { EditUserComponent } from './admin-user-panel/edit-user/edit-user.component';

import { ReadConferencesComponent } from './admin-conference-panel/read-conferences/read-conferences.component';
import { CreateConferenceComponent } from './admin-conference-panel/create-conference/create-conference.component';
import { EditConferenceComponent } from './admin-conference-panel/edit-conference/edit-conference.component';

import { ReadCategoriesComponent } from './admin-conference-panel/read-categories/read-categories.component';
import { CreateCategoryComponent } from './admin-conference-panel/create-category/create-category.component';
import { EditCategoryComponent } from './admin-conference-panel/edit-category/edit-category.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: RegisterComponent },
	{ path: 'users', component: ReadUsersComponent },
	{ path: 'createuser', component: CreateUserComponent },
	{ path: 'edituser/:id', component: EditUserComponent },
	
	{ path: 'conferences', component: ReadConferencesComponent },
	{ path: 'createconference', component: CreateConferenceComponent },
	{ path: 'editconference/:id', component: EditConferenceComponent },
	
	{ path: 'conferences/categories', component: ReadCategoriesComponent },
	{ path: 'createcategory', component: CreateCategoryComponent },
	{ path: 'editcategory/:id', component: EditCategoryComponent },
	
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
