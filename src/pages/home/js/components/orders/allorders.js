define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var AllOrders = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
              <div className="col-md-12">
                    <div className="nav-tabs-custom success">
                        <ul className="nav nav-tabs">
                          <li><a href="#revision" data-toggle="tab">Revision</a></li>
                          <li className="active"><a href="#activeorders" data-toggle="tab">Active</a></li>
                          <li><a href="#pending" data-toggle="tab">Available</a></li>
                          <li><a href="#delivered" data-toggle="tab">Delivered</a></li>
                          <li><a href="#approved" data-toggle="tab">Approved</a></li>
                          <li><a href="#late" data-toggle="tab">Late</a></li>
                          <li className="pull-right header">Orders <i className="fa fa-th"></i></li>
                        </ul>

                        <div className="tab-content">
                          <div className="tab-pane" id="revision">
                              <div className="box-group" id="all_orders">
                                       No Data to display, You don't have any orders that need revision
                              </div>
                          </div>

                        
                          <div className="tab-pane active" id="activeorders">
                              <div className="box-group" id="all_orders">
                                              No Data to display, You don't have any active orders yet. <a href="/orders#pending"><span className="btn btn-sm btn-primary btn-flat">Place a bid</span></a> to be assigned an order
                                        </div>
                          </div>

                          <div className="tab-pane" id="pending">
                              <div className="box-group" id="all_orders">
                                                    <h3><small>Available Orders</small></h3>
                                          <div className="panel box box-success">
                                            <div className="box-header with-border">
                                                <a data-toggle="collapse" data-parent="#all_orders" href="#1818">
                                                      <h4 className="box-title">158295</h4>
                                                      <span className="label label-success pull-right">$20</span>
                                                </a>  
                                            </div>

                                            <div id="1818" className="panel-collapse collapse">
                                              <div className="box-body">
                                                
                                                    <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Coursework</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Order Status:</strong></div>
                                                    <div className="col-md-7 col-sm-6"><span className="btn btn-sm btn-primary btn-flat ">Available</span></div>
                                                    <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Health</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                                    <div className="col-md-7 col-sm-6">4, <strong>Double Spaced</strong></div>
                                                    <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Masters</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                                    <div className="col-md-7 col-sm-6">1 day from now</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Reference Style:</strong></div>
                                                    <div className="col-md-7 col-sm-6">APA</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Number of Sources:</strong></div>
                                                    <div className="col-md-7 col-sm-6">3</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Order Total:</strong></div>
                                                    <div className="col-md-7 col-sm-6 text-green">$20</div>
                                                
                                                
                                                    <div className="box-footer clearfix">
                                                      <a className="btn btn-sm btn-success btn-flat pull-left" href="orders/1818">View Order</a>
                                                      <a className="btn btn-sm btn-success btn-flat pull-right" href="orders/1818#bidonthis">Place Bid</a>
                                                    </div>
                                              </div>
                                            </div>    
                                      </div>

                                      <div className="panel box box-success">
                                            <div className="box-header with-border">
                                                <a data-toggle="collapse" data-parent="#all_orders" href="#1816">
                                                      <h4 className="box-title">158289</h4>
                                                      <span className="label label-success pull-right">$5</span>
                                                </a>  
                                            </div>

                                            <div id="1816" className="panel-collapse collapse">
                                              <div className="box-body">
                                                
                                                    <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Essay</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Order Status:</strong></div>
                                                    <div className="col-md-7 col-sm-6"><span className="btn btn-sm btn-primary btn-flat ">Available</span></div>
                                                    <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                                    <div className="col-md-7 col-sm-6">History</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                                    <div className="col-md-7 col-sm-6">1, <strong>Double Spaced</strong></div>
                                                    <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Undergraduate</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                                    <div className="col-md-7 col-sm-6">1 day from now</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Reference Style:</strong></div>
                                                    <div className="col-md-7 col-sm-6">APA</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Number of Sources:</strong></div>
                                                    <div className="col-md-7 col-sm-6">1</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Order Total:</strong></div>
                                                    <div className="col-md-7 col-sm-6 text-green">$5</div>
                                                
                                                
                                                    <div className="box-footer clearfix">
                                                      <a className="btn btn-sm btn-success btn-flat pull-left" href="orders/1816">View Order</a>
                                                      <a className="btn btn-sm btn-success btn-flat pull-right" href="orders/1816#bidonthis">Place Bid</a>
                                                    </div>
                                              </div>
                                            </div>    
                                      </div>

                                    <div className="panel box box-success">
                                            <div className="box-header with-border">
                                                <a data-toggle="collapse" data-parent="#all_orders" href="#1812">
                                                      <h4 className="box-title">158278</h4>
                                                      <span className="label label-success pull-right">$18</span>
                                                </a>  
                                            </div>
                                            <div id="1812" className="panel-collapse collapse">
                                              <div className="box-body">
                                                
                                                    <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                                    <div className="col-md-7 col-sm-6">PowerPoint Presentation</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Order Status:</strong></div>
                                                    <div className="col-md-7 col-sm-6"><span className="btn btn-sm btn-primary btn-flat ">Available</span></div>
                                                    <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Health and Safety</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                                    <div className="col-md-7 col-sm-6">6, <strong>Double Spaced</strong></div>
                                                    <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                                    <div className="col-md-7 col-sm-6">Undergraduate</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                                    <div className="col-md-7 col-sm-6">1 day from now</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Reference Style:</strong></div>
                                                    <div className="col-md-7 col-sm-6">APA</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Number of Sources:</strong></div>
                                                    <div className="col-md-7 col-sm-6">2</div>
                                                    <div className="col-md-5 col-sm-6"><strong>Order Total:</strong></div>
                                                    <div className="col-md-7 col-sm-6 text-green">$18</div>
                                                
                                                
                                                    <div className="box-footer clearfix">
                                                      <a className="btn btn-sm btn-success btn-flat pull-left" href="orders/1812">View Order</a>
                                                      <a className="btn btn-sm btn-success btn-flat pull-right" href="orders/1812#bidonthis">Place Bid</a>
                                                    </div>
                                              </div>
                                            </div>    
                                      </div>
                                      <div className="box-footer clearfix">
                                      </div>
                                    </div>
                          </div>

                          <div className="tab-pane" id="delivered">
                             <div className="box-group" id="all_orders">
                                        No Data to display, Sorry you haven't delivered any orders yet
                              </div>
                          </div>

                          <div className="tab-pane" id="approved">
                             <div className="box-group" id="all_orders">
                                                No Data to display, Sorry you haven't had any Approved orders yet
                              </div>
                              
                          </div>

                  
                          <div className="tab-pane" id="late">
                              <div className="box-group" id="all_orders">
                                        No Data to display, Good stuff there are not late orders
                              </div>
                          </div>
                        </div>
                    </div>
              </div>
    			)
    		}
    	})

    	return AllOrders;
    }   
)     