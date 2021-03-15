import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'
import Heading from './Heading';
import photo from './photo3.png'
import './Heading.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(5),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(14),
      height: theme.spacing(15),
    },
    name:{
        margin: theme.spacing(50),
    }
  }));
  

export default function Home(){
    const classes = useStyles();
    return(<div>
        <Heading className={classes.name}/>
        <div className="int">
          <div className={classes.root}>
              <Avatar src={photo} className={classes.large}/>
              <p className={classes.pra}>Hii, I'm prasanna.<br/>Currently in final year pusing B.tech in Information Technology.
              <br/>Say hi in Linkdin<a href="www.google.com"> @prasannabisen</a></p>
          </div>
        </div>
    </div>)
}