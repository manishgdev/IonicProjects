import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ban } from "ionicons/icons";
import { Bank, IBankProps } from "./bank";

export const Banks: React.FC = () => {

  const bankAccounts: IBankProps[] = [
    {
      "accountName": "ICICI",
      "lastDigits": "1692",
      "balance": 10000,
      "isExpenseAccount": true
    },
    {
      "accountName": "HDFC",
      "lastDigits": "8754",
      "balance": 10000,
      "isExpenseAccount": true
    },
    {
      "accountName": "Union Bank",
      "lastDigits": "6396",
      "balance": 234000,
      "isExpenseAccount": false
    },
    {
      "accountName": "Yes Bank",
      "lastDigits": "1488",
      "balance": 90000,
      "isExpenseAccount": false
    },
    {
      "accountName": "IndusInd Bank",
      "lastDigits": "1635",
      "balance": 200000,
      "isExpenseAccount": false
    }
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Bank Accounts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Banks</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {bankAccounts.map((bankAccount: IBankProps) => (
            <IonItem>
              <Bank accountName={bankAccount.accountName} balance={bankAccount.balance} lastDigits={bankAccount.lastDigits} isExpenseAccount={bankAccount.isExpenseAccount}/>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
