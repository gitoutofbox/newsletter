import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'send-email',
    templateUrl: './send.email.template.html'
})

export class SendEmailComponent {
    private submitted :boolean;
    constructor(private fb: FormBuilder) {
    }

    private emailForm = this.fb.group({
        group: ['', Validators.required],
        subject: ['', Validators.compose([Validators.required])],
        mainBody: ['', Validators.required]
    });

    onSubmit(){
        this.submitted = true;
        if(this.emailForm.valid) {
            console.log(this.emailForm)
        }
        
    };
}