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
import { CreditCard, ICreditProps } from "./creditcard";

  export const CreditCards: React.FC = () => {
  
    const creditCards: ICreditProps[] = [
      {
        provider: "ICICI Amazon Pay",
        lastDigits: "4010",
        totalDue:5000,
        availableCredit:200000,
        dueDate:"05",
      },
      {
        provider: "ICICI",
        lastDigits: "7024",
        totalDue:5000,
        availableCredit:120000,
        dueDate:"05",
      },
      {
        provider: "AMEX",
        lastDigits: "92005",
        totalDue:5000,
        availableCredit:190000,
        dueDate:"05",
      },
      {
        provider: "HDFC",
        lastDigits: "7446",
        totalDue:5000,
        availableCredit:250000,
        dueDate:"05",
      },
      {
        provider: "HSBC",
        lastDigits: "8873",
        totalDue:5000,
        availableCredit:250000,
        dueDate:"05",
      },
      {
        provider: "IndusInd",
        lastDigits: "2675",
        totalDue:5000,
        availableCredit:1850000,
        dueDate:"05",
      }
    ]
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Credit Cards</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Banks</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            {
                (creditCards).map((creditCard) => (
                    <CreditCard provider={creditCard.provider}
                                lastDigits={creditCard.lastDigits}
                                totalDue={creditCard.totalDue}
                                availableCredit={creditCard.availableCredit}
                                dueDate={creditCard.dueDate}
                    />
                ))
            }
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  