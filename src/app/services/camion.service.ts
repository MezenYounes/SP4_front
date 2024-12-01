import { Injectable } from '@angular/core';
import { camion } from '../model/camion.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root'
})

export class CamionService {
  apiURL: string = 'http://localhost:8080/camions/api';
  camions! : camion[];
  camion! : camion;
  
  camionRecherche?: camion[];

  constructor(private http : HttpClient,
  ) { }
   listecamion(): Observable<camion[]>{
    
    return this.http.get<camion[]>(this.apiURL+"/all");
    }

/* ajoutercamion( cam: camion):Observable<camion>{
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
  return this.http.post<camion>(this.apiURL+"/addcam", cam, {headers:httpHeaders});
  }
supprimercamion( id: number){
 
  const url = `${this.apiURL}/delcam/${id}`;

  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
}

  consultercamion(id:number): Observable<camion> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<camion>(url,{headers:httpHeaders});
}

    
    triercamion(){
      this.camions = this.camions.sort((n1,n2) => {
      if (n1.idcamion! > n2.idcamion!) {
      return 1;
      }
      if (n1.idcamion! < n2.idcamion!) {
      return -1;
      }
      return 0;
      });
      }
      
    updatecamion(c:camion) : Observable<camion>
    {
      let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.put<camion>(this.apiURL+"/updatecam",c, {headers:httpHeaders});
    }
listemarques():Observable<Marque[]>{
  return this.http.get<Marque[]>(this.apiURL+"/mar");
  }
  consultermarques(id:number): Marque{
    return this.marques.find(mar => mar.idmar == id)!;
    }
   /*  rechercheparmarque(idmarq: number): camion[] {
      const filtredcamion=this.camions.filter((camion) => camion.marque?.idmar == idmarq);
      return filtredcamion;
    } 
    rechercherparmarque(idmar: number):Observable< camion[]> {
      const url = `${this.apiURL}/CamionMarq/${idmar}`;
      return this.http.get<camion[]>(url);
      }
      ajoutermarrque( mar: Marque):Observable<Marque>{
        return this.http.post<Marque>(this.apiURLMar, mar, httpOptions);
        }
        
      
      
 */
  }