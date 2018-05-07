import { Component , OnInit} from '@angular/core';
import { ApiService }  from '../../api.service';

@Component({
    selector: 'emails',
    templateUrl: './list.template.html',
    
})
  
export class EmailListComponent{
    private emailList: Array<any>;
    constructor(private apiService: ApiService) {}
    ngOnInit() {
             
        this.apiService.get('http://localhost:3003/emails')
        .subscribe(data => this.emailList = data.data);
        
    }
}

