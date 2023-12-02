import { Component } from '@angular/core';
import { UserReg } from 'src/app/interfaces/user-reg';
import { UserRegisService } from 'src/app/services/user-regis.service';

@Component({
  selector: 'app-usuario-registrado',
  templateUrl: './usuario-registrado.component.html',
  styleUrls: ['./usuario-registrado.component.css']
})
export class UsuarioRegistradoComponent {

  dtOptions: DataTables.Settings = {};
  public usuarioReg!: UserReg[];

  constructor(private userRegi: UserRegisService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getUserReg();
  }

  getUserReg(): any {
    this.userRegi.getUserReg().subscribe((usuarioReg) => {
      this.usuarioReg = usuarioReg;
      return this.usuarioReg
    })
  }
}
