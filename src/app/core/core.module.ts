import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpPetitions } from './services/http-petitions.service';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        HttpPetitions,
    ]
})
export class CoreModule {}
