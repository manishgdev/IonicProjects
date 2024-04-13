import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { CreditCard, ICreditProps } from "./creditcard";
import { add } from "ionicons/icons";

export const CreditCards: React.FC = () => {
  const pageTitle = "Credit Cards";

  const creditCards: ICreditProps[] = [
    {
      provider: "ICICI Amazon Pay",
      lastDigits: "4010",
      totalDue: 5000,
      availableCredit: 200000,
      dueDate: "05",
    },
    {
      provider: "ICICI",
      lastDigits: "7024",
      totalDue: 5000,
      availableCredit: 120000,
      dueDate: "05",
    },
    {
      provider: "AMEX",
      lastDigits: "92005",
      totalDue: 5000,
      availableCredit: 190000,
      dueDate: "05",
    },
    {
      provider: "HDFC",
      lastDigits: "7446",
      totalDue: 5000,
      availableCredit: 250000,
      dueDate: "05",
    },
    {
      provider: "HSBC",
      lastDigits: "8873",
      totalDue: 5000,
      availableCredit: 250000,
      dueDate: "05",
    },
    {
      provider: "IndusInd",
      lastDigits: "2675",
      totalDue: 5000,
      availableCredit: 1850000,
      dueDate: "05",
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
        {creditCards.map((creditCard: ICreditProps, key) => (
          <CreditCard
            provider={creditCard.provider}
            lastDigits={creditCard.lastDigits}
            totalDue={creditCard.totalDue}
            availableCredit={creditCard.availableCredit}
            dueDate={creditCard.dueDate}
            key={key}
          />
        ))}
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
