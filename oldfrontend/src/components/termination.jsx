import React from 'react';
// import Header from './header';
// import Sidebar from './sidebar';
import PrintIcon from '@mui/icons-material/Print';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import filticon from '../assets/img/filter-icon-blue.png';



const Termination = () => {
  return (
    <>  

      {/* <Header />
      <Sidebar /> */}

      <div className='main-inner-sec content-main'>
        {/* <div className='main-inner-heading'>
          <div className='col-md-12'>
            <div className='emp-main-serach'>
              <div className='emp-serach emp-data-head emp-another-sec'>
              
                    <h2>Vendor Name Search</h2>
              </div>
            </div>


          </div>
        </div> */}

        <div class=" emp-main-heading-emp all-simple-table-margin">
          <div class="main-heading-sec ">
            <div class="col-md-12">
              <div class="head-inner">
                <h2>Termination</h2>
                
              </div>
            </div>
          </div>
        </div>


        {/* table section start */}
        <div className="emp-table-sec">
          <div className='form-table-sec emp-table-inner'>
            <div className='row'>

              <div className='col-md-12 emp-serch-main' >
                {/* <div className='search-sec'>
                  <input type='text' className='input-srch' placeholder='Termination' />
                  <button className='go-sec' >Go</button>
                </div> */}
              </div>

            </div>
            <div className='row'>
              {/* table section start from here */}
              <div class="table-main-sec">
                <table class="table table-sec">
                  <thead class="thead-before-sec thaed-colaps-sec">
                    <tr>
                   
                      <th className='job-width vendor-widh code-widh' >Termination</th>
                      <th className='abse-type-width desc-widh'>Description</th>

                    </tr>
                  </thead>
                  <tbody class="tbody-light">
                  
                            <tr>
                            
                              <td class="value-table">
                                <p>1</p>
                              </td>
                              <td class="value-table">
                                <p>DECEASED</p>
                              </td>
                              
                              
                            </tr>

                          
                            <tr>
                            
                              <td class="value-table">
                                <p>2</p>
                              </td>
                              <td class="value-table">
                                <p>SERVICES TERMINATED</p>
                              </td>
                              
                              
                            </tr>


                       

                            <tr>
                            
                              <td class="value-table">
                                <p>3</p>
                              </td>
                              <td class="value-table">
                                <p>RESIGNED</p>
                              </td>
                              
                              
                            </tr>

                            <tr>
                            
                            <td class="value-table">
                              <p>4</p>
                            </td>
                            <td class="value-table">
                              <p>RETIRED</p>
                            </td>
                            
                            
                          </tr>

                          <tr>
                            
                            <td class="value-table">
                              <p>5</p>
                            </td>
                            <td class="value-table">
                              <p>CONTRACT NOT RENEWED</p>
                            </td>
                            
                            
                          </tr>
                          <tr>
                            
                            <td class="value-table">
                              <p>6</p>
                            </td>
                            <td class="value-table">
                              <p>LONG TERM LEAVE</p>
                            </td>
                            
                            
                          </tr>



                  </tbody>
                </table>
              </div>
        

            </div>
          </div>
        </div>
        {/* table section end */}





      </div>
    
    </>
  )
}

export default Termination;
