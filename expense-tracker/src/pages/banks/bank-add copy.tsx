import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBankProps } from "./bank";

export const BankAdd: React.FC = () => {
  const pageTitle = "Add Bank Account";

  const addBankSchema = yup.object().shape({
    accountName: yup.string().required("Please provide Account Name"),
    lastDigits: yup.string().required("Please provide last digits of account"),
    balance: yup
      .number()
      .required("Please enter starting balance")
      .typeError("Balance should be a number"),
    isExpenseAccount: yup.bool().default(false)
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBankSchema),
  });

  // const { register, handleSubmit, setValue, control, formState: {errors} } = useForm<IBankProps>();

  const addBank = (data:any) => {
    console.log("Form Submitted : " + JSON.stringify(data));
  };

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

        <form className="ion-padding" onSubmit={handleSubmit(addBank)}>
          <IonItem>
            <IonLabel position="floating">Bank Name</IonLabel>
            <Controller
              name="accountName"
              control={control}
              defaultValue=""
              render={({ field }) => <IonInput {...field} />}
            />
          </IonItem>
          {errors && errors.accountName && (
            <IonText color="danger" className="ion-padding-start">
              <small>{errors.accountName?.message}</small>
            </IonText>
          )}
          <IonItem>
            <IonLabel position="floating">Last 4 Digits</IonLabel>
            <Controller
              name="lastDigits"
              control={control}
              defaultValue=""
              render={({ field }) => <IonInput {...field} />}
            />
          </IonItem>
          {errors && errors.lastDigits && (
            <IonText color="danger" className="ion-padding-start">
              <small>{errors.lastDigits?.message}</small>
            </IonText>
          )}
          <IonItem>
            <IonLabel position="floating">Current Balance</IonLabel>
            <Controller
              name="balance"
              control={control}
              render={({ field }) => <IonInput type="number" {...field} />}
            />
          </IonItem>
          {errors && errors.balance && (
            <IonText color="danger" className="ion-padding-start">
              <small>{errors.balance?.message}</small>
            </IonText>
          )}
          <IonItem lines="none">
            <Controller
              name="isExpenseAccount"
              control={control}
              defaultValue={false}
              render={({ field }) => <IonCheckbox {...field} />}
            />
            <IonLabel>Expense Account</IonLabel>
          </IonItem>

          <IonButton className="ion-margin-top" type="submit" expand="block">
            Add Bank
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};
