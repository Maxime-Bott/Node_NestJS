import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// routes /auth/*
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    signIn() {
        return this.authService.signIn();
    }

    @Post('register')
    signUp() {
        return this.authService.signUp();
    }
}
