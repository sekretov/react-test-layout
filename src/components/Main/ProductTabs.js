import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import ProductCuff from './ProductCuff';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProductTabsWrapper = styled.div`
  width: 100%;
  & .MuiPaper-root {
    box-shadow: none;
    background: white;
  }
  & button.MuiButtonBase-root {
    position: relative;
    margin-right: 20px;
  }
  & button.MuiButtonBase-root span.MuiTab-wrapper {
    text-transform: capitalize;
    font-size: 10px;
  }
  & button.MuiButtonBase-root::after {
    width: 100%;
    height: 3px;
    background: #dcdcdc;
    position: absolute;
    content: '';
    bottom: 0;
  }
  & .MuiTabs-root .MuiButtonBase-root svg {
    display: none;
  }
  & .MuiTabs-scrollable {
    width: 100px;
  }
  & .MuiTabs-root {
    margin-left: -18px;
  }
  @media all and (min-width: 600px) {
    & .MuiTab-root {
      min-width: 90px;
    }
  }
  @media all and (max-width: 1200px) {
    & .MuiTabs-root .MuiButtonBase-root svg {
      display: flex;
    }
    & .MuiTabs-root {
      margin-left: -18px;
    }
  }
  @media all and (max-width: 720px) {
    & .app_bar {
      opacity: 0;
    }
  }
  @media all and (max-width: 500px) {
    & .MuiBox-root-6 {
      padding: 24px 0;
    }
  }
`;

export default function ProductTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ProductTabsWrapper>
      <div className={classes.root}>
        <AppBar className="app_bar" position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Fabric" {...a11yProps(0)} />
            <Tab label="Fit" {...a11yProps(1)} />
            <Tab label="Collar" {...a11yProps(2)} />
            <Tab label="Cuff" {...a11yProps(3)} />
            <Tab label="Monogram" {...a11yProps(4)} />
            <Tab label="Size" {...a11yProps(5)} />
            <Tab label="Summary" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProductCuff />
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
    </ProductTabsWrapper>
  );
}
