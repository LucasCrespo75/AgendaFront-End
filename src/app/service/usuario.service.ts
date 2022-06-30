import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "../app-settings";
import { UUsuario } from "../models/usuario.interface";
import { RepositorioService } from "./repositorio.service";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    constructor(
        private repositorioService: RepositorioService
    ){ }
    
    findAll(): Observable<HttpResponse<UUsuario[]>>{
        return this.repositorioService.get<UUsuario[]>(AppSettings.URL_USUARIO, RepositorioService._MEDIA_TYPE_APP_JSON);
    }

    create(coloborador: UUsuario): Observable<HttpResponse<UUsuario>>{
        return this.repositorioService.post<UUsuario>(AppSettings.URL_USUARIO, coloborador, RepositorioService._MEDIA_TYPE_APP_JSON);

    }

    findById(coloborador: UUsuario): Observable<HttpResponse<UUsuario>>{
        return this.repositorioService.get<UUsuario>(`${AppSettings.URL_USUARIO}/${coloborador.email}`, RepositorioService._MEDIA_TYPE_APP_JSON);

    }

    update(coloborador: UUsuario): Observable<HttpResponse<UUsuario>>{
        return this.repositorioService.put<UUsuario>(`${AppSettings.URL_USUARIO}/${coloborador.email}`, coloborador, RepositorioService._MEDIA_TYPE_APP_JSON);
    }

    delete(coloborador: UUsuario): Observable<HttpResponse<UUsuario>>{
        return this.repositorioService.delete<UUsuario>(`${AppSettings.URL_USUARIO}/${coloborador.email}`,RepositorioService._MEDIA_TYPE_APP_JSON);
    }
}
