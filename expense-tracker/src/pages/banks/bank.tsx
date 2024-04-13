import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

export interface IBankProps {
    accountName: string;
    lastDigits: string;
    balance:number;
    isExpenseAccount:boolean;
}

export const Bank: React.FC<IBankProps> = (props:IBankProps) => {
  return (
    <IonCard color={props.isExpenseAccount? "success": "tertiary"}>
      <IonCardHeader>
        <IonCardTitle>{props.accountName}- xxx{props.lastDigits}</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{props.balance}</IonCardContent>
      <IonButton fill="clear">View</IonButton>
    </IonCard>
  );
};
