import {Injectable} from '@angular/core';
// import {sendEmailVerification} from '@angular/fire/auth';
import {User} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  constructor() {}

  async sendEmailWithFirebase(user: User): Promise<void> {
    try {
      // await sendEmailVerification(user);
      console.log('Email sent');
    } catch (error) {
      console.log('error', error);
    }
  }
}
