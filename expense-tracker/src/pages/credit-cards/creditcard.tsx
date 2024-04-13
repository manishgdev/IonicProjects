import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  } from "@ionic/react";
  
  export interface ICreditProps {
      provider: string;
      lastDigits: string;
      totalDue:number;
      availableCredit:number;
      dueDate:string;
  }
  
  export const CreditCard: React.FC<ICreditProps> = (props:ICreditProps) => {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{props.provider}- xxx{props.lastDigits}</IonCardTitle>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <>&#8377;</> {props.totalDue} / <>&#8377;</> {props.availableCredit} <br/>
            {"Due Date : " + props.dueDate}
        </IonCardContent>
        <IonButton fill="clear">View</IonButton>
      </IonCard>
    );
  };
  