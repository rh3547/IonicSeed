import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(
      private apiService: ApiService,
      private http: HttpClient
    ) { }

    //=========================================================================
    //  LOGIN                                                                
    //=========================================================================
    // - Authenticates a user
    login(user) {
      return this.apiService.post('/user/login', user);
    }

    //=========================================================================
    //  LOGOUT                                                               
    //=========================================================================
    // - Logout the currently authenticated user
    logout() {
        
    }
}
