import { Injectable } from '@angular/core';
import { FirebaseAuthState } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: FirebaseAuthState = null;

  constructor() {}
}
