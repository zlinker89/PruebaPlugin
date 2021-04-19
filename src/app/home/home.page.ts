import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-plugin-myplugin';

const { Alert } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Mensaje : string = "hola mundo";
  op: any = {
    value1: 0,
    value2: 0
  };
  resultado: number = 0;
  constructor() {}

  showMensaje = () => {
    Alert.echo({value: this.Mensaje});
  }

  sumar = async () => {
    try {
      const result = await (Alert.sumar(this.op));
      console.log("Encaso de error", result); 
      this.resultado = result.suma;
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
  
}
