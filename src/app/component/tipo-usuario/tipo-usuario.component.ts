import { Component } from '@angular/core';
import { UserTypes } from 'src/app/interfaces/user-type';
import { UserTypeService } from 'src/app/services/user-type.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent {

  dtOptions: DataTables.Settings = {};
  public usuario!: UserTypes[];

  constructor(private userType: UserTypeService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getUserType();
  }

  getUserType(): any {
    this.userType.getUserType().subscribe((usuario) => {
      this.usuario = usuario;
      console.log(this.usuario)
      return this.usuario
    })
  }
}