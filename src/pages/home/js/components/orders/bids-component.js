define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var BidsComponent = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
              <div className="col-xs-12 col-sd-12 ">
                      <div className="box box-solid">
                        <div className="box-header with-border">
                          <h3 className="box-title">All Orders with Bids</h3>
                        </div>

                    
                        <div className="box-body">
                            <div className="box-group" id="all_bids">
                                <div className="panel box box-success">
                              <div className="box-header with-border">
                                <h4 className="box-title">
                                  <a data-toggle="collapse" data-parent="#all_bids" href="#1818">
                                    158295
                                  </a>
                                </h4>
                                <span className="label label-success pull-right">$20</span>
                              </div>

                              <div id="1818" className="panel-collapse collapse">
                                <div className="box-body">
                                    <div className="user-panel">
                                          <div className="pull-left image">
                                            <img src="http://academicresearchassistants.com/assets/public/avatars/avi122.jpg" className="img-circle" alt="Sandra  Avi"/>
                                          </div>   
                                    </div> 

                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Sandra  Wangeci</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$20</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">Kindly assign admin</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-04 11:02:00</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1818">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                            <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi23.PNG" className="img-circle" alt="Brian Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Brian Mutanda</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$20</div>

                                                <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">Kindly assign me this paper.</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-04 13:01:41</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1818">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                            <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi158.jpg" className="img-circle" alt="Brian Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Brian Gachuki</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$20</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">kindly assign me this order.Regards </div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-04 13:05:40</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1818">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>   
                                      </div>
                              </div>
                            </div>

                        <div className="panel box box-success">
                              <div className="box-header with-border">
                                <h4 className="box-title">
                                  <a data-toggle="collapse" data-parent="#all_bids" href="#1816">
                                    158289
                                  </a>
                                </h4>
                                <span className="label label-success pull-right">$5</span>
                              </div>
                              <div id="1816" className="panel-collapse collapse">

                                <div className="box-body">
                                      <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi122.jpg" className="img-circle" alt="Sandra  Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Sandra  Wangeci</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$5</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">Kindly assign admin</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-04 10:36:57</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1816">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                            <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi158.jpg" className="img-circle" alt="Brian Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Brian Gachuki</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$10</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">kindly assign me this order.Regards </div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-04 13:06:21</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1816">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                            </div>
                              </div>
                            </div>

                        <div className="panel box box-success">
                              <div className="box-header with-border">
                                <h4 className="box-title">
                                  <a data-toggle="collapse" data-parent="#all_bids" href="#1812">
                                    158278
                                  </a>
                                </h4>
                                <span className="label label-success pull-right">$18</span>
                              </div>
                              <div id="1812" className="panel-collapse collapse">
                                <div className="box-body">

                          <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi85.jpg" className="img-circle" alt="David Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">David Mwandairo</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$20</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">Please assign me this order.</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-03 11:02:51</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1812">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                          <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi9.jpg" className="img-circle" alt=" Oliver Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6"> Oliver Keverenge</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$15</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">kindly assign me this order</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-03 11:23:17</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1812">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                    <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi23.PNG" className="img-circle" alt="Brian Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Brian Mutanda</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$24</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">Perfect in Nursing Kindly assign for quality and continuity</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-03 13:33:26</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1812">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                        <div className="user-panel">
                                                <div className="pull-left image">
                                                  <img src="http://academicresearchassistants.com/assets/public/avatars/avi55.jpg" className="img-circle" alt="Alex Avi"/>
                                                </div>   
                                              </div>                       
                                                <div className="col-md-5 col-sm-6"><strong>Name</strong></div>
                                                  <div className="col-md-7 col-sm-6">Alex Wambugu</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Total placed:</strong></div>
                                                  <div className="col-md-7 col-sm-6">$18</div>
                                                  <div className="col-md-5 col-sm-6"><strong>Message:</strong></div>
                                                  <div className="col-md-7 col-sm-6">Kindly assign this order for a quality presentation. Regards</div>
                                                  <div className="col-md-5 col-sm-6"><b>Date Placed</b></div>
                                                  <div className="col-md-7 col-sm-6">2017-10-03 15:08:34</div>
                                                  <div className="col-xs-12">
                                                  <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1812">Assign</a>
                                                </div>
                                                  <br></br>
                                                  <br></br>

                                                  
                                </div>
                              </div>
                            </div>
                          </div>
                         </div>
                      </div>
                  </div>
    			)
    		}
    	})

    	return BidsComponent;
    }   
)     