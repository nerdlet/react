//sidebar component 
define(
    [
        'react',
        'jquery',
    ],
    function (React, $) {
        var Orders = React.createClass({
            render: function () {
                var style = {
                    display: "block"
                };

                return (
                  <div className="col-md-12">
                   <div className="box box-success">
                    <div className="box-header with-border">
                      <h3 className="box-title">Orders</h3>

                      <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <i className="fa fa-minus"></i>
                        </button>
                        
                      </div>
                    </div>
                    
                    <div className="box-body">
                      <div className="col-md-7 col-xs-12 col-sd-12 col-lg-7">
                          <div className="box-group" id="all_orders">
                          <h4 className="box-title">Recent Orders</h4>
                              
                            <div className="panel box box-primary">
                                      <div className="box-header with-border">
                                        <a data-toggle="collapse" data-parent="#all_orders" href="#1786" className="collapsed" aria-expanded="false">
                                              <h4 className="box-title">157334_Revision</h4>
                                              <span className="label label-success pull-right">$21</span>
                                          </a>  
                                      </div>
                                      <div id="1786" className="panel-collapse collapse" aria-expanded="false">
                                        <div className="box-body">
                                          
                                            <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                              <div className="col-md-7 col-sm-6">Essay</div>
                                              <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                              <div className="col-md-7 col-sm-6">Sociology</div>
                                              <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                              <div className="col-md-7 col-sm-6">7, <strong>Double Spaced</strong></div>
                                              <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                              <div className="col-md-7 col-sm-6">Masters</div>
                                              <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                              <div className="col-md-7 col-sm-6">1 hour from now</div>
                                              <div className="col-md-5 col-sm-6"><strong>Reference Style:</strong></div>
                                              <div className="col-md-7 col-sm-6">APA</div>
                                              <div className="col-md-5 col-sm-6"><strong>Number of Sources:</strong></div>
                                              <div className="col-md-7 col-sm-6">6</div>
                                              <div className="col-md-5 col-sm-6"><strong>Order Total:</strong></div>
                                              <div className="col-md-7 col-sm-6 text-green">$21</div>
                                          
                                          
                                              <div className="box-footer clearfix">
                                                <a className="btn btn-sm btn-success btn-flat pull-left" href="/orders/1786">View Order</a>
                                                <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1786#bidonthis">Place Bid</a>
                                              </div>
                                         </div>
                                    </div>    
                                </div>

                            <div className="panel box box-primary">
                                      <div className="box-header with-border">
                                        <a data-toggle="collapse" data-parent="#all_orders" href="#1787" className="collapsed" aria-expanded="false">
                                              <h4 className="box-title">45676_1</h4>
                                              <span className="label label-success pull-right">$60</span>
                                          </a>  
                                      </div>
                                      <div id="1787" className="panel-collapse collapse" aria-expanded="false">
                                        <div className="box-body">
                                          
                                            <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                              <div className="col-md-7 col-sm-6">PowerPoint Presentation</div>
                                              <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                              <div className="col-md-7 col-sm-6">Health Psychology</div>
                                              <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                              <div className="col-md-7 col-sm-6">20, <strong>Double Spaced</strong></div>
                                              <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                              <div className="col-md-7 col-sm-6">PHD</div>
                                              <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                              <div className="col-md-7 col-sm-6">1 day from now</div>
                                              <div className="col-md-5 col-sm-6"><strong>Reference Style:</strong></div>
                                              <div className="col-md-7 col-sm-6">APA</div>
                                              <div className="col-md-5 col-sm-6"><strong>Number of Sources:</strong></div>
                                              <div className="col-md-7 col-sm-6">20</div>
                                              <div className="col-md-5 col-sm-6"><strong>Order Total:</strong></div>
                                              <div className="col-md-7 col-sm-6 text-green">$60</div>
                                          
                                          
                                              <div className="box-footer clearfix">
                                                <a className="btn btn-sm btn-success btn-flat pull-left" href="/orders/1787">View Order</a>
                                                <a className="btn btn-sm btn-success btn-flat pull-right" href="/orders/1787#bidonthis">Place Bid</a>
                                              </div>
                                         </div>
                                    </div>    
                                </div>
                                

                          <div className="box-footer clearfix">
                              <a className="btn btn-sm btn-default btn-flat pull-left" href="findwork.html">Available Orders/Find Work
                              </a>
                           </div>
                        </div>
                       </div>
                        
                        <div className="col-md-5 col-xs-12 col-sd-12 col-lg-5">
                          <div className="box-group" id="all_orders">
                            <h4 className="box-title">All your Active Orders</h4>
                                                  No Data to display, no orders active, bid on an order to be assigned one.
                                                          </div>
                         </div>
                      </div>
                    </div>
                    </div>
                            
                )
            }
        });

        return Orders
    }
)