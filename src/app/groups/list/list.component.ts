import { Component } from '@angular/core';
import { ApiService }  from '../../api.service';

@Component({
    selector: 'groups',
    templateUrl: './list.template.html'
})

export class GroupsComponent {
    private listArr: Array<any>;
    constructor(private apiService: ApiService) {}
    ngOnInit() {
             
        this.apiService.get('http://localhost:3003/groups')
        .subscribe(response => this.listArr = response.data);
        
    }
}