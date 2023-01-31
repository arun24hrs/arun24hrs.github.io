import React from 'react'
import styles from "./TechSkills.module.css";
import git from '../Images/git.png'
import github from '../Images/github.png'


const Tools = () => {
    return (
        <div className={styles.mainContainer}>
          <h1 className={styles.heading}>Tools</h1>
          <div className={styles.stackContainer}>
              <div className={styles.imgContainer}><img width={"75px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" alt="logo" className={styles.techimg}/>VS Code</div>
              <div className={styles.imgContainer}><img width={"75px"} src={git} alt="logo" className={styles.techimg}/>Git</div>
              <div className={styles.imgContainer}><img width={"75px"} src={github} alt="logo" className={styles.techimg}/>Github</div>
              
            <div>
              
            </div>
          </div>
        </div>
      );
}

export default Tools