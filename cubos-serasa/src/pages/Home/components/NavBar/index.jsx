import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useFunction from '../../../../hooks/useFunction';
import useRequest from '../../../../hooks/useRequest';
import useUser from '../../../../hooks/useUser';
import * as N from './styled';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const { handleListCustomers, handleListCharges, handleInformationClient, handleBillingClient } = useRequest();
  const { value, setValue } = useUser();
  const { handleChangerBillings, handleChangerStatus } = useFunction();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleNavBar(location.pathname);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavBar = async (location) => {
    if (location === '/dashboard') {
      await handleInformationClient();
      await handleBillingClient();
      handleChangerBillings();
      handleChangerStatus();
      setValue(0);
      return;
    } else if (location === '/client') {
      await handleListCustomers();
      setValue(1);
      return;
    } else if (location === `/charge`) {
      await handleListCharges();
      setValue(2);
      return;
    }
    else {
      await handleInformationClient();
      await handleBillingClient();
      setValue(1);
      return;
    }
  };

  const handleChangerPageDashboard = async () => {
    navigate('/dashboard');
    await handleInformationClient();
    await handleBillingClient();
    handleChangerBillings();
    handleChangerStatus();
    return;
  }

  const handleChangerPageClient = async () => {
    navigate('/client');
    await handleListCustomers();
    return;
  }

  const handleChangerPageCharge = async () => {
    navigate('/charge')
    await handleListCharges();
    return;
  }

  return (
    <N.Container>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          minHeight: `100vh`
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'transparent',
            width: '10%',
            background: 'var(--grey_seven)'
          }}
        >
          <Tab
            label="Home"
            icon={<HomeIcon sx={{ fontSize: 39 }} />}
            onClick={() => handleChangerPageDashboard()}
            {...a11yProps(0)}
          />
          <Tab
            label="Clientes"
            icon={<PeopleAltIcon sx={{ fontSize: 39 }} />}
            onClick={() => handleChangerPageClient()}
            {...a11yProps(1)}
          />
          <Tab
            label="Cobranças"
            icon={<InsertDriveFileOutlinedIcon sx={{ fontSize: 39 }} />}
            onClick={() => handleChangerPageCharge()}
            {...a11yProps(2)}
          />
        </Tabs>
        <Outlet />
      </Box>
    </N.Container>
  );
}