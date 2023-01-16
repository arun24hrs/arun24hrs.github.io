import React from "react";
import styles from "./TechSkills.module.css";

const TechSkills = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Technical Skills</h1>
      <div className={styles.stackContainer}>
          <img width={"75px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="logo" className={styles.techimg}/>
          <img width={"75px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="logo" className={styles.techimg}/>
          <img width={"75px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="logo" className={styles.techimg}/>
          <img width={"75px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="logo" className={styles.techimg}/>
          <img width={"75px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="logo" className={styles.techimg}/>
          <img width={"75px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="logo" className={styles.techimg}/>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
