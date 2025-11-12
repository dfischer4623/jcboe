
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import DrawerHeader from './ui-components/DrawerHeader';


import Header from './components/headersystem';
import Sidebar from './sidebar';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationList } from "./actions/admin.actions";
import { setLocations } from './features/userdataSlice';

const AdminSystemLayout = () => {
  const dispatch = useDispatch();
  const userdata = useSelector(state => state.userdata);

  useEffect(() => {
    getLocationList({ all: 1 }).then((res) => {
      if (res.data.status) {
        dispatch(setLocations(res.data.data.locations));
      }
    }).catch((error) => {
      console.log(error);
    });
  }, [userdata.value])

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminSystemLayout;
