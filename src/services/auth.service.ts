import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class Authservice {

    constructor(public http: HttpClient) {}

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
}