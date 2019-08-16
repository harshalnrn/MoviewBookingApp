import React,{Component} from 'react';
import './Home.css';
import Header from '../common/Header.js';
import {withStyles} from '@material-ui/core/styles';
import movieData from '../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from'@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

//didnt undetrstand the below styles constant and high level components
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
});





class Home extends Component {

constructor(){
super();
    this.state={
movieName:""

    }
}


movieNameChangeHandler=(e)=>{

  this.setState({
      movieData:e.target.value
  });


}




    render(){
        const {
            classes
        }
        =this.props;

        return(
<div>
<Header/>
<header className={classes.upcomingMoviesHeading}>Upcoming Movies</header>

{/* add a flex row div  */}
<div>
<GridList cellHeight={350} cols ={5} className={classes.gridListUpcomingMovies}>
                            {/* iterating throw map, to display each element/object in grid */}     
{

    movieData.map(movie =>(

<GridListTile key={movie.id}>                                    {/* remember why key is needed for each element within map */}
   <img className="movie-poster" src={movie.poster_url} alt={movie.title}/>
   <GridListTileBar title={movie.title}/>
</GridListTile>
))}

</GridList>
</div>

<br/>

<div className="flex-container">
                    <div className="left">
<GridList cellHeight={350} cols ={3} className={classes.gridListMain}>
                            {/* iterating throw map, to display each element/object in grid */}     
{

    movieData.map(movie =>(

<GridListTile key={movie.id}>                                    {/* remember why key is needed for each element within map */}
   <img className="movie-poster" src={movie.poster_url} alt={movie.title}/>
   <GridListTileBar title={movie.title}/>
</GridListTile>
))}

</GridList>
</div>
<div className="right">
<Card>
<CardContent>
<FormControl className={classes.formControl}>
<Typography className={classes.title} colors="textSecondary">
Find Movies By :
</Typography>
</FormControl>


<FormControl className={classes.formControl}>
<InputLabel htmlFor="movieName">Movie Name</InputLabel>
<Input id="movieName" onChange={this.movieNameChangeHandler}></Input>
</FormControl>
</CardContent>
</Card>
</div>
</div>
</div>
        )
    }
}
export default withStyles(styles)(Home);