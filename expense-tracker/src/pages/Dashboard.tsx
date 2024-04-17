import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Dashboard.css";


const Dashboard: React.FC = () => {
  const router = useIonRouter();

  const openBanksPage = () => {
    router.push('/banks');
  }

  const openPage = (path:string) => {
    router.push(`/${path}`);
  }

  const openCreditCardsPage = () => {
    router.push('/credit-cards');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Bank Accounts</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>5</IonCardContent>
                <IonButton onClick={() => openPage("banks")} fill="clear">View</IonButton>
                <IonButton onClick={() => openPage("add-bank")} fill="clear">Add</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Credit Cards</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>5</IonCardContent>
                <IonButton onClick={() => openPage("credit-cards")} fill="clear">View</IonButton>
                <IonButton fill="clear">Add</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Useable Balance</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>50000</IonCardContent>
                <IonButton fill="clear">View</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Other Savings</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>5</IonCardContent>
                <IonButton fill="clear">View</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
