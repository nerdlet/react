define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var FindWorkComponent = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
                  <div className="box box-default">
                    <div className="box-header with-border">
                      <h3 className="box-title">Available Orders</h3>

                      <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="box-body">
                      <div id="availabe_orders_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                      <div className="row">
                      <div className="col-sm-6">
                      <div className="dataTables_length" id="availabe_orders_length">
                      <label>Show <select name="availabe_orders_length" aria-controls="availabe_orders" className="form-control input-sm">
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option></select> entries</label>
                      </div></div>

                      <div className="col-sm-6">
                      <div id="availabe_orders_filter" className="dataTables_filter">
                        <label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="availabe_orders"/></label></div></div></div>
                        <div className="row">
                        <div className="col-sm-12">
                        <table className="table table-striped dataTable" id="availabe_orders" cellSpacing="0" width="100%"role="grid" aria-describedby="availabe_orders_info">
                        <thead>
                          <tr role="row">
                          <th className="sorting_asc" tabIndex="0" aria-controls="availabe_orders" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Order: activate to sort column descending" >Order</th></tr>
                        </thead> 
                        <tfoot>
                          <tr><th rowSpan="1" colSpan="1">Order</th></tr>
                        </tfoot>
                        <tbody> 
                                                                      
                                                      
                                                      
                        <tr role="row" className="odd">
                        <td className="sorting_1">
                          <div className="panel box box-success">
                                      <div className="box-header with-border">
                                          <a data-toggle="collapse" data-parent="#all_orders" href="#1812">
                                                <span >158278</span>
                                                <span className="pull-right">$18</span>
                                          </a>  
                                      </div>
                                      <div id="1812" className="panel-collapse collapse">
                                        <div className="box-body">
                                      
                                              <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                              <div className="col-md-7 col-sm-6">PowerPoint Presentation</div>
                                              <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                              <div className="col-md-7 col-sm-6">Health and Safety</div>
                                              <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                              <div className="col-md-7 col-sm-6">6, <strong>Double Spaced</strong></div>
                                              <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                              <div className="col-md-7 col-sm-6">Undergraduate</div>
                                              <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                              <div className="col-md-7 col-sm-6"><b>1 day from now</b> <br></br> 2017-10-05 22:00:00</div>
                                              <div className="box-footer clearfix">
                                               <span className="pull-left text-green">4 Bids placed</span>
                                                <a className="btn btn-sm btn-success btn-flat pull-right" href="orders/1812">Place Bid</a>
                                              </div>
                                        </div>
                                      </div>    
                                </div>
                                </td>
                              </tr><tr role="row" className="even">
                                <td className="sorting_1">
                                  <div className="panel box box-success">
                                              <div className="box-header with-border">
                                                  <a data-toggle="collapse" data-parent="#all_orders" href="#1816" aria-expanded="true">
                                                        <span>158289</span>
                                                        <span className="pull-right">$5</span>
                                                  </a>  
                                              </div>
                                              <div id="1816" className="panel-collapse collapse in" aria-expanded="true">
                                                <div className="box-body">
                                                  
                                                      <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                                      <div className="col-md-7 col-sm-6">Essay</div>
                                                      <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                                      <div className="col-md-7 col-sm-6">History</div>
                                                      <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                                      <div className="col-md-7 col-sm-6">1, <strong>Double Spaced</strong></div>
                                                      <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                                      <div className="col-md-7 col-sm-6">Undergraduate</div>
                                                      <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                                      <div className="col-md-7 col-sm-6"><b>1 day from now</b> <br></br> 2017-10-05 22:00:00</div>
                                                      <div className="box-footer clearfix">
                                                       <span className="pull-left text-green">1 Bids placed</span>
                                                        <a className="btn btn-sm btn-success btn-flat pull-right" href="orders/1816">Place Bid</a>
                                                      </div>
                                                </div>
                                              </div>    
                                        </div>
                                        </td>
                                      </tr><tr role="row" className="odd">
                                        <td className="sorting_1">
                                          <div className="panel box box-success">
                                                      <div className="box-header with-border">
                                                          <a data-toggle="collapse" data-parent="#all_orders" href="#1818">
                                                                <span>158295</span>
                                                                <span className="pull-right">$20</span>
                                                          </a>  
                                                      </div>
                                                      <div id="1818" className="panel-collapse collapse">
                                                        <div className="box-body">
                                                          
                                                              <div className="col-md-5 col-sm-6"><strong>Order Type:</strong></div>
                                                              <div className="col-md-7 col-sm-6">Coursework</div>
                                                              <div className="col-md-5 col-sm-6"><strong>Topic:</strong></div>
                                                              <div className="col-md-7 col-sm-6">Health</div>
                                                              <div className="col-md-5 col-sm-6"><strong>Pages:</strong><small>(275 Words/Page)</small></div>
                                                              <div className="col-md-7 col-sm-6">4, <strong>Double Spaced</strong></div>
                                                              <div className="col-md-5 col-sm-6"><strong>Academic Level:</strong></div>
                                                              <div className="col-md-7 col-sm-6">Masters</div>
                                                              <div className="col-md-5 col-sm-6"><strong>Deadline:</strong></div>
                                                              <div className="col-md-7 col-sm-6"><b>1 day from now</b> <br></br> 2017-10-06 09:00:00</div>
                                                              <div className="box-footer clearfix">
                                                               <span className="pull-left text-green">0 Bids placed</span>
                                                                <a className="btn btn-sm btn-success btn-flat pull-right" href="orders/1818">Place Bid</a>
                                                              </div>
                                                        </div>
                                                      </div>    
                                                </div>
                                        </td>
                                      </tr></tbody>
                                  </table>
                                  </div>
                                  </div>
                                  <div className="row">
                                  <div className="col-sm-5">
                                  <div className="dataTables_info" id="availabe_orders_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div>
                                  </div>
                                  <div className="col-sm-7">
                                  <div className="dataTables_paginate paging_simple_numbers" id="availabe_orders_paginate">
                                  <ul className="pagination">
                                  <li className="paginate_button previous disabled" id="availabe_orders_previous">
                                  <a href="#" aria-controls="availabe_orders" data-dt-idx="0" tabIndex="0">Previous</a></li>
                                  <li className="paginate_button active">
                                  <a href="#" aria-controls="availabe_orders" data-dt-idx="1" tabIndex="0">1</a></li>
                                  <li className="paginate_button next disabled" id="availabe_orders_next">
                                  <a href="#" aria-controls="availabe_orders" data-dt-idx="2" tabIndex="0">Next</a></li>
                                  </ul>
                                  </div>
                                  </div>
                                  </div>
                                  </div>

                                </div>
                                
                              </div>

    			)
    		}
    	})

    	return FindWorkComponent;
    }   
)     