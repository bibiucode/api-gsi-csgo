import { OK, BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { Controller, ClassMiddleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { authMiddleware } from '../middlewares/auth';

@Controller('')
// @ClassMiddleware(authMiddleware)
export class CSGOController {

    @Post()
    private async post(req: Request, res: Response): Promise<Response> {
        Logger.Info(req.body);
        // console.log('DATA =>', req.body);
        return res.status(OK).json({ statusCode: OK });
    }
}