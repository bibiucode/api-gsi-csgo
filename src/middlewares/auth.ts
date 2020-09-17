import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth';

export function authMiddleware(
    req: Partial<Request>,
    res: Partial<Response>,
    next: NextFunction
): void {
    const token = req.headers?.['x-access-token'];

    try {
        const decoded = AuthService.verifyToken(token as string);
        // req.decoded = decoded;
        next();
    } catch (error) {
        res.status?.(401).json({ code: 401, error: error.message });
    }
}

