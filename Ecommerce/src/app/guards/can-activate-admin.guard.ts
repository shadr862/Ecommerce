import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { inject } from '@angular/core';

export const canActivateAdminGuard: CanActivateFn = (route, state) => {
  
    return localStorage.getItem('isAdmin')==='true' && localStorage.getItem('isLoggedIn')==='true';
};

