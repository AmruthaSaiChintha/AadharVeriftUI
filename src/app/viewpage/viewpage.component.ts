import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent {
  email:string = '';


  details:any;


  constructor(private route: ActivatedRoute,
    private userdetails: UserService,
    private router:Router){
    
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.email = params['email']; 
    });
    this.userdetails.getuserbyemail(this.email).subscribe(
      (response: any)=>{
        console.log(response);
        this.details=response;
        console.log(this.details)
      }
    )
    }

    submitForm() {
      this.router.navigate(['passport'])
    }
    update(id:number){
      this.router.navigate(['/update', id])
    }
}
