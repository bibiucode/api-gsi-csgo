import config from 'config';
import jwt from 'jsonwebtoken';

export interface RequestPayload {
    app: string;
}

export class AuthService {
    public static verifyToken(token: string): RequestPayload {
        const payloadDecoded = jwt.verify(
            token,
            config.get('app.jwt.secret')
        );
        return payloadDecoded as RequestPayload;
    }

    public static generateToken(payload: object = {}): string {
        const token = jwt.sign(
            payload,
            config.get('app.jwt.secret')
        );
        return token;
    }
}