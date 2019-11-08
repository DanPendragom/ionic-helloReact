import { IonContent, IonGrid, IonItem, IonLabel, IonInput, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, {Component} from 'react';
import App from '../../App';

export default class Home extends Component{
  
  calcular(v:number, v2:number){
    let res = v + v2;
    document.querySelectorAll('input')[2].value = res.toString();
  }

  pegaValores(){
    let v1 = parseInt(document.querySelectorAll('input')[0].value);
    let v2 = parseInt(document.querySelectorAll('input')[1].value);

    this.calcular(v1, v2);
  }
  
  render(){
    return (
      <IonPage>
  
        <IonHeader>
          <IonToolbar>
            <IonTitle>Bem Vindo</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonGrid>
  
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Valor 1</IonLabel>
                  <IonInput id="valor1" value="" type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Valor 2</IonLabel>
                  <IonInput type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol size="12">
                <IonButton onClick={() =>this.pegaValores()} expand="block">Calcular</IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput placeholder="resultado" readonly type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}
  
