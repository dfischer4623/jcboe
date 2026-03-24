import axios from "./systemaxios";



export const employeessearsingle = (employeeNumber) => {
       return axios.get(`/employees/empsys/${employeeNumber}`);
  
}
export const allemployeesystem = () => {
    return axios.get('/employees/empsys/s3data');

}







export const w2dtataemp = (id) => {
    return axios.get(`/employees/w2data/${id}`);

}

export const w2dtataempyear = (SSN,year) => {
    return axios.get(`/employees/w2datayr/details?SSN=${SSN}&year=${year}`);

}


export const checkresgterdtataemp = (id) => {
    return axios.get(`/employees/checkregister/${id}`);

}

export const checkresgterdtataempyear = (CHKNO) => {
    return axios.get(`/employees/checkregisterch/details?CHKNO=${CHKNO}`);

}

export const salarysydtataemp = (id) => {
    return axios.get(`/employees/salariessystem/${id}`);

}


export const systemvendornumber = (vendorno) => {
    return axios.get(`/employees/s3-vendor/${vendorno}`);

}


export const systemvendornamesearch = (vendorName) => {
    return axios.get(`/employees/s3-vendors/?indexName=${vendorName}`);

}
export const systempurchasewornumber = (vendorno) => {
    return axios.get(`/employees/s3-purchase-orders/${vendorno}`);

}
export const systemvendorchecksrnumber = (vendorno) => {
    return axios.get(`/employees/s3-vendor-checks/${vendorno}`);

}





