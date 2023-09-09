import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpPetitions {
  constructor(private http: HttpClient) {}

  async get<Type>(
    url: string,
    params?: { name: string; value: string }[]
  ): Promise<Type> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type>((resolve, reject) => {
      this.http
        .get<Type>(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => {
            resolve(value);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async post<Type>(
    url: string,
    body: any,
    params?: { name: string; value: string }[]
  ): Promise<Type> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type>((resolve, reject) => {
      this.http
        .post<Type>(url, body, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => {
            resolve(value);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async patch<Type>(
    url: string,
    body: any,
    params?: { name: string; value: string }[]
  ): Promise<Type> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type>((resolve, reject) => {
      this.http
        .patch<Type>(url, body, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => {
            resolve(value);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  async delete<Type>(
    url: string,
    params?: { name: string; value: string }[]
  ): Promise<Type> {
    let sendParams: undefined | HttpParams = undefined;
    if (params) {
      sendParams = new HttpParams();
      params.map((param) => {
        sendParams = sendParams!.set(param.name, param.value);
      });
    }
    return new Promise<Type>((resolve, reject) => {
      this.http
        .delete<Type>(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')!,
          },
          params: sendParams,
        })
        .subscribe({
          next: (value) => {
            resolve(value);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }
}
