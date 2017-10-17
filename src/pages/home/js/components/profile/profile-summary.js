define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
        var ProfileSummary = React.createClass({
            render: function(){
                var style = {
                    position: 'relative',
                    height: '300px',
                    backgroundColor:'#337ab7'
                };
                var color = {
                    backgroundColor:'#337ab7'
                };

                return (
                    <div className="col-md-9">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs">
                                    <li className="" style={color}>
                                        <a href="#experience" data-toggle="tab" aria-expanded="false"><h4>My profile</h4></a>
                                    </li>

                                    <li className="active" style={color}>
                                        <a href="#billing" data-toggle="tab" aria-expanded="true"><h4>Bank details</h4></a>
                                    </li>

                                    <li style={color}>
                                        <a href="#settings" data-toggle="tab"><h4>Edit Profile</h4></a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                  <div className="tab-pane" id="experience">

                                    <div className="box box-solid">
                                      <div className="box-body">
                                          <div className="box-title">
                                              <div className="box-header">
                                                  <h3 className="box-title">About Me</h3>
                                              </div>
                                            </div>
                                          <span className="col-md-12"> <p></p></span>
                                          <br></br>

                                            <div className="form-group">
                                                <div className="col-md-4">
                                                  <strong>Orders Approved</strong>
                                                </div>
                                                <div className="text-muted col-md-8">
                                                  <strong>0</strong>
                                                </div>
                                            </div> 

                                            <div className="form-group">
                                                <div className="col-md-4">
                                                  <strong>Orders Delivered</strong>
                                                </div>
                                                <div className="text-muted col-md-8">
                                                  <strong>0</strong>
                                                </div>
                                            </div> 

                                            <div className="form-group">
                                                <div className="col-md-4">
                                                  <strong>Late Orders</strong>
                                                </div>
                                                <div className="text-muted col-md-8">
                                                  <strong>0</strong>
                                                </div>
                                            </div>  

                                            <div className="form-group">
                                                <div className="col-md-4">
                                                  <strong>Orders in Revision</strong>
                                                </div>
                                                <div className="text-muted col-md-8">
                                                  <strong>0</strong>
                                                </div>
                                              </div>  

                                            <div className="form-group">
                                                <div className="col-md-4">
                                                  <strong>Orders Active</strong>
                                                </div>
                                                <div className="text-muted col-md-8">
                                                  <strong>0</strong>
                                                </div>
                                            </div>

                                            <p></p>

                                            <div className="box-title">
                                              <div className="box-header with-border"></div>
                                                  <h4 className="box-title"> <i className="fa fa-user margin-r-5"></i>More details about Me</h4>

                                            </div>

                                            <div className="box-body">
                                                <span className="col-md-4">
                                                  <strong><i className="fa fa-graduation-cap margin-r-5"></i> Education</strong>
                                                </span>
                                                <span className="col-md-8 text-muted">
                                                  
                                                </span>
                                                <hr></hr>
                                                <span className="col-md-4">
                                                  <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>
                                                </span>
                                                <span className="col-md-4 text-muted">
                                                  
                                                </span>
                                                <hr></hr>
                                            </div>
                                      </div>
                                    </div>
                                </div>
                                    

                                <div className="tab-pane" id="settings">
                                    <div className="box-header">
                                        <h4 className="box-title text-olive">Fill in the Form Below to update your Profile</h4>
                                    </div>

                                        <form method="POST" action="http://academicresearchassistants.com/user/update" accept-charset="UTF-8" className="form-horizontal" enctype="multipart/form-data">
                                        <input name="_token" type="hidden" value="lfCQGaX95WMJpei7nH71sDC1dcw8GzTuKjTFMDdZ"/>
                                            <input type="hidden" name="_method" value="PATCH"/>
                                                <div className="form-group">
                                                    <label for="first_name" className="col-sm-2 control-label text-olive">First Name</label>
                                              
                                                    <div className="col-sm-4">
                                                        <input className="form-control" placeholder="First Name" required="required" name="first_name" type="text" value="Brenda" id="first_name"/>
                                                    </div>

                                                    <label for="last_name" className="col-sm-2 control-label text-olive">Last Name</label>
                                              
                                                    <div className="col-sm-4">
                                                        <input className="form-control" placeholder="First Name" required="required" name="last_name" type="text" value="Nyokabi" id="last_name"/>
                                                    </div>
                                              
                                                </div>

                                                <div className="form-group">
                                                    <label for="email" className="col-sm-2 control-label text-olive">Email</label>

                                                <div className="col-sm-4">
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-envelope-square text-olive"></i>
                                                        </div>

                                                        <input className="form-control" placeholder="Enter Email" required="required" name="email" type="email" value="brndnyokabi@gmail.com" id="email"/>
                                                    </div>
                                                    <span className="text-muted text-olive">This is the email that we use to send you notifications and communication</span>
                                                </div>

                                                <label for="username" className="col-sm-2 control-label text-olive">UserName</label>

                                                <div className="col-sm-4">
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-user text-olive"></i>
                                                        </div>
                                                        <input className="form-control" placeholder="Enter your Username here" required="required" name="name" type="text" value=""/>
                                                    </div>
                                                </div>
                                                </div>

                                                <div className="form-group">
                                                    <label for="phone1" className="col-sm-2 control-label text-olive">Phone 1</label>

                                                <div className="col-sm-4">
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-phone text-olive"></i>
                                                        </div>
                                                         <input className="form-control" placeholder="+2541234567890" required="required" name="phone1" type="text" id="phone1"/>
                                                    </div>
                                                </div>

                                                <label for="phone2" className="col-sm-2 control-label text-olive">Phone 2</label>

                                                <div className="col-sm-4">
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-mobile text-olive"></i>
                                                        </div>
                                                        <input className="form-control" placeholder="+2541234567890" name="phone2" type="text" id="phone2"/>
                                                    </div>
                                                </div>

                                                </div>

                                                <div className="form-group">
                                                    <label for="address" className="col-sm-2 control-label text-olive">Address</label>

                                                <div className="col-sm-4">
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-building text-olive"></i>
                                                        </div>
                                                        <input className="form-control" placeholder="Emter your Address: City, town and zipcode" required="required" name="address" type="text" id="address"/>
                                                    </div>
                                                </div>

                                                <label for="country" className="col-sm-2 control-label text-olive">Country</label>
                                                  <div className="col-sm-4">
                                                    <div className="input-group">
                                                      <div className="input-group-addon">
                                                        <i className="fa fa-building text-olive"></i>
                                                      </div>
                                                      <input className="form-control" placeholder="Enter your Country" required="required" name="country" type="text" id="country"/>
                                                    </div>
                                                  </div>
                                                </div>
                                                <hr></hr>

                                                <div className="form-group">
                                                    <label for="academic_level" className="col-sm-2 control-label text-olive">Academic Level</label>
                                                        <div className="col-sm-4">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-language text-olive"></i>
                                                                </div>
                                                                <select className="form-control" required="required" id="academic_level" name="academic_level"><option selected="selected" value="">Select your Academic level</option><option value="Undergraduate">undergraduate</option><option value="High School">high school</option><option value="Masters">masters</option><option value="PHD">phd</option></select>
                                                            </div>
                                                        </div>
                                            
                                                <label for="language" className="col-sm-2 control-label text-olive">Language</label>
                                                    <div className="col-sm-4">
                                                        <div className="input-group">
                                                            <div className="input-group-addon">
                                                                <i className="fa fa-language text-olive"></i>
                                                            </div>
                                                            <input className="form-control" placeholder="Enter your Language" required="required" name="language" type="text" id="language"/>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <hr></hr>

                                                <div className="form-group">
                                                    <label for="description" className="col-sm-2 control-label text-olive">Description</label>
                                                        <div className="col-sm-8">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-sticky-note text-olive"></i>
                                                                </div>
                                                                <textarea className="form-control" placeholder="In less than 140 characters tell us a bit about yourself" rows="3" required="required" name="description" cols="50" id="description"></textarea>
                                                            </div>
                                                        </div>
                                                        </div>

                                                        
                                                        <hr></hr>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label pull-left text-olive" for="prof_pic">
                                                        <img src="/assets/public/avatars/avi3.png" className="user-image" width="100" alt="Brenda's Image"/>
                                                    </label>
                                                <div className="col-sm-9">
                                                    <input name="prof_pic" type="file"/>
                                                        <div className="text-muted text-olive">
                                                            Upload a new profile Image
                                                        </div>
                                                </div>
                                                </div>
                                                <hr></hr>

                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label text-olive" for="picha_ya_id">
                                        
                                                        Upload a scanned copy of your ID
                                                    </label>

                                                <div className="col-sm-9">
                                                    <input name="picha_ya_id" type="file"/>
                                                        <div className="text-muted text-olive">
                                                            Upload a scanned copy of your id
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr></hr>

                                                <div className="form-group">
                                                    <label className="control-label col-sm-3 text-olive" for="resume">
                                                        Upload your CV
                                                    </label>

                                                <div className="col-sm-9">
                                                    <input name="resume" type="file"/>
                                                        <div className="text-muted text-olive">
                                                            Update your CV
                                                        </div>
                                                </div>
                                                </div>
                                                <hr></hr>

                                                <div className="form-group">
                                                    <label className="control-label col-sm-4 text-olive" for="resume">
                                                        Degree or Academic Certificate
                                                    </label>

                                                <div className="col-sm-8">
                                                    <input name="certificate" type="file"/>
                                                        <div className="text-muted text-olive">
                                                            Click to upload a scanned copy of Degree/Certificate
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>

                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10 ">
                                                        <input className="btn btn-success" type="submit" value="Update Profile"/>
                                                    </div>
                                            </div>
                                        </form>
                                </div>

                                 

                                <div className="tab-pane active" id="billing">
                                    <div className="box box-solid">
                                    <div className="box-header">
                                        <h4 className="box-title text-olive">Add your Bank Details</h4>
                                      </div>
                                    <div className="box-body">
                                        <form method="POST" action="http://academicresearchassistants.com/user/billing" accept-charset="UTF-8" className="form-horizontal">
                                        <input name="_token" type="hidden" value="lfCQGaX95WMJpei7nH71sDC1dcw8GzTuKjTFMDdZ"/>
                                          <div className="form-group">
                                            <label for="b_name" className="col-md-4 control-label">Bank Name</label>
                                            <div className="col-md-8">
                                            <input className="form-control" required="required" placeholder="Enter your Bank Name" name="b_name" type="text" id="b_name"/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label for="b_b_name" className="col-md-4 control-label">Bank branch name</label>
                                            <div className="col-md-8">
                                            <input className="form-control" required="required" placeholder="Enter your Bank branch Name" name="b_b_name" type="text" id="b_b_name"/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label for="a_name" className="col-md-4 control-label">Registered Name on bank account</label>
                                            <div className="col-md-8">
                                            <input className="form-control" required="required" placeholder="Enter the name registered on the account" name="a_name" type="text" id="a_name"/>
                                            </div>
                                          </div>

                                           <div className="form-group">
                                            <label for="a_number" className="col-md-4 control-label">Account Number</label>
                                            <div className="col-md-8">
                                            <input className="form-control" required="required" placeholder="Enter the Account Number" type="number" name="a_number" id="a_number"/>
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                              <input className="btn btn-primary" type="submit" value="Add a Bank Account"/>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                                        
                                    </div>
                                    
                                     
                                  </div>
                                 
                                
                                </div>
                               
                              </div>
                             
                            </div>
                )
            }
        })

        return ProfileSummary;
    }   
)     