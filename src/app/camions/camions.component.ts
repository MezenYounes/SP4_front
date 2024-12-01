import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';

@Component({
  selector: 'app-camions',
  templateUrl: './camions.component.html',
  styleUrls: ['./camions.component.css']
})
export class CamionsComponent implements OnInit {
  
  camions! : camion[];

    constructor(private camionService: CamionService,
      ) { }
      ngOnInit(): void {
        this.chargercamions();
        }
        chargercamions() {
          this.camionService.listecamion().subscribe(cams => {
          console.log(cams);
          this.camions = cams;
          });
          }
        
 
    



}
