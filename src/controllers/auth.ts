import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth';
import { Logger } from '@overnightjs/logger'

@Controller('authenticate')
export class AuthController {

    @Get('')
    private async authenticate(req: Request, res: Response): Promise<Response> {
        Logger.Info(req.body);
        const token = AuthService.generateToken();
        return res.status(200).json({ code: 200, token });
    }
}