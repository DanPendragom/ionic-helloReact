import { IonContent, IonGrid, IonItem, IonLabel, IonInput, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, {Component} from 'react';

export default class Home extends Component{
  
  getvalue(){
  }
  
  render(){
    return (
      <IonPage>
  
        <IonHeader>
          <IonToolbar>
            <IonTitle> Bem Vindo</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonGrid>
  
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Valor 1</IonLabel>
                  <IonInput  type="number"></IonInput>
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
                <IonButton onClick={this.getvalue} expand="block">Calcular</IonButton>
              </IonCol>
            </IonRow>
  
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}
  
