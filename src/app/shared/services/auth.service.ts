import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider, CognitoUser } from '@aws-amplify/auth';
import { ICredentials, Hub } from '@aws-amplify/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public  static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  private authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();

  constructor() {
    Hub.listen('auth', (data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this.authState.next(payload.event);
      }
    });
   }
  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    console.log('provider', provider);
    return Auth.federatedSignIn({
      provider: provider
    });
  }

}
