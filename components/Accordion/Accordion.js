import { useState } from "react";
import styles from './styles.module.scss';
import {plus, minus} from '/utils/svgImages'
export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
        <button className={styles.accordionButton} onClick={toggle} type="button">
            <span className="" 
            dangerouslySetInnerHTML={{ __html: isShowing ? minus() : plus()}}/>
            <h1 className={styles.accordionTitle}>{props.title}</h1>
        </button>
      <div
        className={styles.accordionContent}
        style={{ display: isShowing ? "block" : "none"}}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
