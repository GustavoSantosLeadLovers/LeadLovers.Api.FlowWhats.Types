import { ILeadLoversSSOSession } from '../entities/ILeadLoversSSOSession';
import { ILeadLoversSSOUser } from '../entities/ILeadLoversSSOUser';
import { ILeadLoversSSOProvider } from '../models/ILeadLoversSSOProvider';
export declare class HttpLeadLoversSSOProvider implements ILeadLoversSSOProvider {
    private service;
    constructor();
    getUser({ token, refresh_token }: ILeadLoversSSOSession): Promise<ILeadLoversSSOUser | undefined>;
    refreshToken(refresh_token: string): Promise<ILeadLoversSSOSession | undefined>;
    validateToken({ token, refresh_token }: ILeadLoversSSOSession): Promise<ILeadLoversSSOUser | undefined>;
}