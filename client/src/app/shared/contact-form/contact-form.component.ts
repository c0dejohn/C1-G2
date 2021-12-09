import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { ContactService } from './../../services/contact.service';



@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  public formContact!: FormGroup;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: [null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      email: [null,[Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      subject: [null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      message: [null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
    });
  }

   async sendEmail(){

    try {
      const result: any = await this.formContact.value;
      console.log(result);
      Swal.fire("Consulta enviada");
      this.router.navigate(['home']);
    }
    catch (e) {
      Swal.fire("Error");
    }
  }


}


