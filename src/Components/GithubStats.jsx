import { background } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar'
import styles from './GithubStats.module.css'


const GithubStats = () => {
console.log(window.innerWidth)

    return(
        <div className={styles.github}>
            <div>
                <h2 className={styles.heading}>My Github Statistics</h2>
                <div className={styles.images}>
                    <div>
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=arun24hrs&theme=dark&hide_border=false" alt="" />
                    </div>
                    
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arun24hrs&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="" />
                    </div>
                
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api?username=arun24hrs&theme=algolia&hide_border=false&include_all_commits=true&count_private=true&show_icons=true" alt="" />
                        
                    </div>
                
                </div>
                <div className={styles.github1}>
                    <GitHubCalendar username='arun24hrs' year={2023} transformTotalCount={false} blockSize={20} fontSize={20} style={{margin:'auto', marginTop:'80px', color:'#86C232', width:"90%"}}/>
                </div>

            </div>

        </div>
    )
}

export default GithubStats