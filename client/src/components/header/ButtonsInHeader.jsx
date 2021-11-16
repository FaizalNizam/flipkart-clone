import React,{useState,useContext} from 'react'
import {Box,Button,makeStyles,Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom'
import Login from '../loginDialogBox/LoginDialogBox';
import {loginContext} from '../../context/contextProvider'
import Profile from './Profile';


const useStyle=makeStyles({
    button:{
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    
    },
    wrapper:{
        marginLeft:255,
        display:'flex',
        '& > *':{
            marginRight:50
        }
    },
    icon:{
        display:'flex',
        
    }


})

function ButtonHead() {

    const classes=useStyle()
    const [open, setOpen] = useState(false)
    const {account,setAccount} = useContext(loginContext)

    function handleClickOpen(){
      setOpen(true);
    }
   
    return (
        <Box className={classes.wrapper}>
            {
                account?<Profile account={account} setAccount={setAccount}/>:<Button  variant="contained" className={classes.button} onClick={handleClickOpen}>Login</Button>
            }

            <Typography>More</Typography>
            
            <Box className={classes.icon}>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartIcon/> 
              </Badge>
              <Link to='/cart' style={{textDecoration:'none'}}><Typography style={{marginLeft:10,color:'white'}}>Cart</Typography></Link>
            </Box>

            <Login open={open} setOpen={setOpen} setAccount={setAccount}/>

        </Box>
       
        
    )
}

export default ButtonHead
 