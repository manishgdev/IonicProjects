import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { add, ban, cashOutline } from "ionicons/icons";
import { Bank, IBankProps } from "./bank";

export const Banks: React.FC = () => {
  const router = useIonRouter();

  const pageTitle = "Bank Accounts";

  const bankAccounts: IBankProps[] = [
    {
      accountName: "ICICI",
      lastDigits: "1692",
      balance: 10000,
      isExpenseAccount: true,
    },
    {
      accountName: "HDFC",
      lastDigits: "8754",
      balance: 10000,
      isExpenseAccount: true,
    },
    {
      accountName: "Union Bank",
      lastDigits: "6396",
      balance: 234000,
      isExpenseAccount: false,
    },
    {
      accountName: "Yes Bank",
      lastDigits: "1488",
      balance: 90000,
      isExpenseAccount: false,
    },
    {
      accountName: "IndusInd Bank",
      lastDigits: "1635",
      balance: 200000,
      isExpenseAccount: false,
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle size="large">{pageTitle}</IonTitle>
          </IonToolbar>
        </IonHeader>
          {bankAccounts.map((bankAccount: IBankProps, key) => (
            <Bank
              accountName={bankAccount.accountName}
              balance={bankAccount.balance}
              lastDigits={bankAccount.lastDigits}
              isExpenseAccount={bankAccount.isExpenseAccount}
              key={key}
            />
          ))}
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={() => router.push("/add-bank")}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
