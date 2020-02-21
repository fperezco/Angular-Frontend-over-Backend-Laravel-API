import { Component, OnInit, Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alerts',
  templateUrl: './sweet-alerts.component.html',
  styleUrls: ['./sweet-alerts.component.css']
})
/*
@Injectable({
  providedIn: 'root'
})*/
//@Injectable()
/**
 * Creo este componente para ser reutilizado en todas las clases que usen alertas
 * sin duplicar codigo, el tema aqui es el siguiente, puedo declararlo como un servicio e inyectarlo
 * directamente en root para que cualquier lo use como un servicio o puedo declararlo como un componente
 * que ya implicitamente tiene el @injectable pero no en root por lo que este componente ha de figurar
 * en los exports de este módulo y en los providers del módulo que lo use, ademas del constructor
 * del componente que lo invoque
 */
export class SweetAlertsComponent {


  launchSweetUpdating() {
    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Actualizando informacion',
      allowOutsideClick: false
    });
    Swal.showLoading();
  }

  launchSweetUpdated(name) {
    Swal.fire({
      icon: 'success',
      title: name,
      text: 'Se actualizo correctamente'
    });
  }


  launchSweetDeleted(name) {
    Swal.fire({
      icon: 'error',
      title: name,
      text: `Se eliminó correctamente ${name}`
    });
  }

  launchSweetError(message) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }

  launchSweetYesNo(title: any, text: any) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    });
  }

}
