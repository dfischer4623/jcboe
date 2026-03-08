import axios from "./axios";

export const login = (data) => {
    return axios.post(`/employees/login`, data);
}

export const logout = () => {
    return axios.post(`/logout`);
}
export const foegetpasword = ( data) => {
    return axios.post(`/foegetpasword`, data);
}

export const employeessear = (employeeNumber) => {
       return axios.get(`/employees/${employeeNumber}`);
  
}
export const allemployee = () => {
    return axios.get('/employees');

}


export const attaendansear = (employeeNumber) => {
    return axios.get(`/employees/attendance/${employeeNumber}`);

}
export const attaendandaet = (employeeNumber) => {
    return axios.get(`/employees/attendancedetail/${employeeNumber}`);

}
export const misdatemp = (employeeNumber) => {
    return axios.get(`/employees/miscdata/${employeeNumber}`);

}

export const certificates = (employeeNumber) => {
    return axios.get(`/employees/certificates/${employeeNumber}`);

}

export const salaries = (employeeNumber) => {
    return axios.get(`/employees/salaries/${employeeNumber}`);

}
export const voldeductions = (employeeNumber) => {
    return axios.get(`/employees/voldeductions/${employeeNumber}`);

}

export const payroll = (employeeNumber) => {
    return axios.get(`/employees/payroll/${employeeNumber}`);

}
export const w2s = (ssn) => {
    return axios.get(`/employees/pfrs860s/${ssn}`);

}
export const payrollCheck = (SSN,RUN) => {
    return axios.get(`/employees/payrollCheck/?SSN=${SSN}&RUN=${RUN}`);

}
export const payrollCheckDeductions = (SSN,RUN) => {
    return axios.get(`/employees/payrollCheckDeductions/?SSN=${SSN}&RUN=${RUN}`);

}


export const purchaseOrders = (PODOC,PONUM) => {
    return axios.get(`/employees/purchaseOrders/?poDoc=${PODOC}&poNum=${PONUM}`);

}


export const vendorNumberSearch = (vendorNumber) => {
    return axios.get(`/employees/ppur301s/${vendorNumber}`);

}


export const vendorNameSearch = (vendorName) => {
    return axios.get(`/employees/ppur301s/?name=${vendorName}`);

}
export const pofromvendorSearch = (vendorNumber) => {
    return axios.get(`/employees/pofromvendor/?poVEND=${vendorNumber}`);

}

export const checkbankSearch = (aphbnk,aphbac,aphfrm,aphchk,aphven) => {
    return axios.get(`/employees/lacp441s/?aphbnk=${aphbnk}&aphbac=${aphbac}&aphfrm=${aphfrm}&aphchk=${aphchk}&aphven=${aphven}`);

}



export const addaged = () => {
    return axios.get('/employees/ppay127s');

}
export const jobcode = () => {
    return axios.get('/employees/ppay124s');

}
export const paytablecode = () => {
    return axios.get('/employees/ppay125s');

}
export const deductionscode = () => {
    return axios.get('/employees/ppay122s');

}

export const absencecode = () => {
    return axios.get('/employees/ppay121s');

}


export const showBank = (aphven) => {
    return axios.get(`/employees/checksearch?aphven=${aphven}`);

}
export const showW2s = (W2CLYR,W2SSN,ESTB) => {
    return axios.get(`/employees/pfrs860sdetails/data?W2CLYR=${W2CLYR}&W2SSN=${W2SSN}&W2ESTB=${ESTB}`);

}




export const createuser = (data) => {
    return axios.post(`/employees/users`, data);
}


export const getusers = () => {
    return axios.get(`/employees/users`);

}

export const edituser = (data,userId) => {
    return axios.put(`/employees/users/${userId}`, data);
}

export const deleteuser = (userId) => {
    return axios.delete(`/employees/users/${userId}`);
}


export const updateuser = (data,userId) => {
    return axios.put(`/employees/status/${userId}`, data);
}

export const showpodeat = (poDoc,poNum) => {
    return axios.get(`/employees/ppur410lxs?poDoc=${poDoc}&poNum=${poNum}`);

}