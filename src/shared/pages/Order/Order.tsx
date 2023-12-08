import React from "react";
import { Advantages } from "../../components/Advantages/Advantages";
import { Capabilities } from "../../components/Capabilities/Capabilities";
import { Feedback } from "../../components/Feedback/Feedback";
import styles from './order.scss';

export function Order() {
  return (
    <main className={styles.main}>
      <Advantages/>
      <Capabilities/>
      <Feedback/>
    </main>
  );
}
