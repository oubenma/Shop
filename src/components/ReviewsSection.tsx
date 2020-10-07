import React from 'react';
import { makeStyles, createStyles,} from '@material-ui/core/styles';
import Reviews from '../components/ReviewCard';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import {reviewsList} from '../components/constants';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import { CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import { TimeToLeave } from '@material-ui/icons';
const useStyles = makeStyles(() =>
  createStyles({
    reviewHeader:{
        marginBottom:'20px',
        borderBottom:'1px solid #DEDEDE',
      },
      
      spanTitle1: {
        fontSize: '16px',
        lineHeight: '1,5',
        color: '#202020',
        fontFamily: '"Poppins" sans-serif',
        letterSpacing: '0px',
        display:'inline-block',
        paddingBottom:'15px',
        verticalAlign:"middle"
      },
      gridButton:{
        textAlign:'right',
        marginBottom:'15px',
      },
      rootReview: {
        backgroundColor:'#e6e6e6',
        width: '100%',
         cursor: ' pointer',
         boxShadow: 'none', 
       },
       
       media: {
         height: '220px',
         borderRadius: '3px',
         '&:hover': {
           transition: 'all 0.4s ease',
           transform: 'scale(1.1)',
           opacity: 0.6,
         },
         cursor: 'zoom-in',
       },
       title: {
         fontSize: '16px',
         lineHeight: '1,5',
         color: '#202020',
         fontFamily: '"Poppins" sans-serif',
         fontWeight:'bold',
         letterSpacing: '0px',
         display:'inline-block'
         
       },
       
       para:{
         fontSize: '14px',
         lineHeight: '1,5',
         color: '#202020',
         fontFamily: '"Poppins" sans-serif',
         cursor:'pointer',
         letterSpacing: '0px',
         whiteSpace:'pre-wrap',
       },
       gridContainer:{
         position:'relative'
       },
       rev1:{
         position:'absolute',
         top:382
       },
       rev2:{
        position:'absolute',
        top:568,
        left:305
      },
      
      rev3:{
        position:'absolute',
        top:438,
        left:610
      },
      rev4:{
        position:'absolute',
        top:419,
        left:915
      },
      rootee: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
   
      },
      gridList: {
        width: 500,
        height: 450,
      },
    })
    );  


export default function NewArrivalsSection() {
    const classes = useStyles();
    return (
        <><Grid container direction="row" className={classes.reviewHeader}>
            <Grid item xs={6}>
                <span ><Rating
                    name='read-only'
                    defaultValue={5}
                    readOnly
                    size='medium' /> </span>
                <span className={classes.spanTitle1}>8 Reviews</span>
            </Grid>
            <Grid item xs={6} className={classes.gridButton}>
                <Button variant="outlined" color="default">
                    write a review
                </Button>
            </Grid>
         </Grid>
         <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item  container xs={6} sm={3} md={3}  direction='column'spacing={1}>
                    <Grid item>
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://picsum.photos/200/200' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Hajar EL Yemlahi</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p>ero aliquid cum odit quae.</p>
                        </CardContent>
                    </Card>
                </Grid>
               
         <Grid item>
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://picsum.photos/200/200' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Meriem El bahri</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p> la composition et la mise en page avant impression.  quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique'</p>

                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                <Grid item  container xs={6} sm={3} md={3}  direction='column'spacing={1}>
                    
                    <Grid item>
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://picsum.photos/200/200' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Oussama el bahri</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumendakkjjl lklkmlù kjlkmllùm jkkjlkm  excepturi cum odit quae.</p>
                        </CardContent>
                    </Card>
                </Grid>
                    <Grid item>
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://picsum.photos/200/200' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Hajar EL Yemlahi</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p>Lorem ipsum ding elit. Assumenda excepturi suscipit quo nostrum libero aliquid cum odit quae.</p>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                <Grid item  container xs={6} sm={3} md={3}  direction='column'spacing={1}>
                    <Grid item >
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://picsum.photos/200/200' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Souraya El bahri</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p> sit amet consectetur adipisicing elit.  suscipit quo nostrum libero aliquid cum odit quae.</p>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item>
                <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://www.w3schools.com/w3images/rocks.jpg' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Mohammed oubenma</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p>isicing elit. Assumenda excepturi suscipit quo nostrum libero aliquid cum odit quae.</p>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                <Grid item  container xs={6} sm={3} md={3}  direction='column'spacing={1}>
                <Grid item  >
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://www.w3schools.com/w3images/rocks.jpg' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Mohammed oubenma</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p>isicing elit. Assumenda excepturi suscipit quo nostrum libero aliquid cum odit quae.</p>
                        </CardContent>
                    </Card>
                </Grid>
               
                <Grid item>
                    <Card className={classes.rootReview}>
                        <CardMedia className={classes.media} image='https://picsum.photos/200/200' />
                        <CardContent className={classes.para}>
                            <Typography>
                                <span className={classes.title}>Naima El kamel</span>
                                <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title} /></IconButton></span></Typography>
                            <Rating
                                name='read-only'
                                defaultValue={3}
                                readOnly
                                size='small' />
                            <p>da excepturi suscipit quo nostrum libero aliquid cum odit quae.</p>
                        </CardContent>
                    </Card>
                </Grid>
             </Grid>
             
            </Grid> 

            {/* <Grid container spacing={2} >
                {reviewsList.map((review) => {
                    return (
                        <Grid item  xs={6} sm={3} md={3}  >
                        <Grid  item>
                            <Reviews
                                name={review.name}
                                value={review.value}
                                imageUrl={review.imageUrl}
                                description={review.description} />
                        </Grid>
                        </Grid>
                    );
                })}
            </Grid> */}
            {/* <div className={classes.rootee}>
       <GridList cellHeight={'auto'}  cols={5}  >
        {reviewsList.map((tile) => ( 
          <GridListTile key={tile.imageUrl}  rows={5}  >
             <Reviews
            name={tile.name}
            value={tile.value}
            imageUrl={tile.imageUrl}
            description={tile.description} />
          </GridListTile>
        ))}
      </GridList>
    </div> */}
    </>
           );
        }