import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProductIndex from './products/ProductIndex';
import CategoryIndex from './categorys/CategoryIndex';
import { Link, Route } from 'react-router-dom';
import Authorized from '../admin/Authorized';
import OrderList from './orders/OrderList';
import { connect } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: '#353A40',
    width: drawerWidth
  },
  links: {
    textDecoration: 'none',
    color: '#C2C7CD',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { auth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const isAdmin = (roles) => {
    if (roles && roles.includes(1)) {
      return true;
    }
    else return false
  }

  const isStaff = (roles) => {
    if (roles && roles.includes(2)) {
      return true;
    }
    else return false
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography className="p-3" style={{ color: 'white' }}>S G E S</Typography>
      </div>
      <hr></hr>
      <List>

        <Link className={classes.links} to="/sges">
          <ListItem button>
            <i className="bi bi-house-door-fill me-2"></i>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        {['Product', 'Category', 'Order'].map((text, index) => (
          <Link key={index} className={classes.links} to={"/staff/" + text.toLowerCase()}>
            <ListItem button key={text}>
              <i className="bi bi-file-earmark-ppt-fill me-2"></i>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
        {
          isAdmin(props.auth.roles) ? <Link className={classes.links} to="/staff/Adminstrator">
            <ListItem button>
              <i className="bi bi-house-door-fill me-2"></i>
              <ListItemText primary="Adminstrator" />
            </ListItem>
          </Link> : <></>
        }
      </List>
      <hr></hr>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: 'white', color: '#353A40' }}>
          <div className="row w-100">
            <Typography variant="h6" noWrap className="col-6">
              Dashboard
            </Typography>
            <div className="col-6 d-flex justify-content-end">
              <img src="https://static-s.aa-cdn.net/img/ios/1109277833/0df781f42d16c739d841831e462bc99e" width="30" height="30" className="d-inline-block align-top mx-2" alt="avatar" style={{borderRadius: '50px', border: '1px solid'}} />
              <Typography variant="h5" noWrap>
                {auth.fullName}
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/staff/product">
          <ProductIndex />
        </Route>
        <Route exact path="/staff/category">
          <CategoryIndex />
        </Route>
        <Route exact path="/staff/Adminstrator">
          <Authorized />
        </Route>
        <Route exact path="/staff/Order">
          <OrderList />
        </Route>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

const mapStateToProps = state => {
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
