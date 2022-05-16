import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return { msg: 'Hello, signIn' };
  }

  signUp() {
    return { msg: 'Hello, signUp' };
  }
}
