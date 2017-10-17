define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var InboxMessages = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };
                var tableWidth = {
                    width: this.props.rowwidth
                };

    			return (
      				  <div className="col-md-9">
                  <div className="box box-primary">
                      <div className="box-header with-border">
                        <h3 className="box-title">Unread Messages</h3>
                          <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                              </button>
                          </div>
                        </div>

                      <div className="box-body">
                          <div className="table-responsive mailbox-messages">
                            <div id="unread_table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="dataTables_length" id="unread_table_length">
                                    <label>Show <select name="unread_table_length" aria-controls="unread_table" className="form-control input-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> entries</label>
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div id="unread_table_filter" className="dataTables_filter">
                                    <label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="unread_table"/></label>
                                </div>
                              </div>
                            </div>

                              <div className="row">
                                <div className="col-sm-12">
                                  <table className="table table-hover table-striped dataTable no-footer" id="unread_table" role="grid" aria-describedby="unread_table_info">
                                      <thead>
                                        <tr role="row">
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1" rowwidth="86px;">Label</th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1" rowwidth="107px;">Name</th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1" rowwidth="403px;">Subject</th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1" rowwidth="186px;">Date</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                          <tr className="odd">
                                            <td valign="top" colSpan="4" className="dataTables_empty">No data available in table</td>
                                          </tr>
                                      </tbody>
                                  </table>
                                </div>
                            </div>

                            <div className="row">
                              <div className="col-sm-5">
                                <div className="dataTables_info" id="unread_table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                              </div>

                            <div className="col-sm-7">
                              <div className="dataTables_paginate paging_simple_numbers" id="unread_table_paginate">
                                <ul className="pagination">
                                  <li className="paginate_button previous disabled" id="unread_table_previous">
                                    <a href="#" aria-controls="unread_table" data-dt-idx="0" tabIndex="0">Previous</a>
                                  </li>

                                  <li className="paginate_button next disabled" id="unread_table_next">
                                    <a href="#" aria-controls="unread_table" data-dt-idx="1" tabIndex="0">Next</a>
                                    </li>
                                </ul>
                                </div>
                              </div>
                              </div>
                              </div>
                            </div>
                             
                            </div>

                            <div className="box-footer no-padding"></div>
                          </div>

                    
                          <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">All Messages</h3>
                                <div className="box-tools pull-right">
                                  <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                  </button>
                              </div>
                            </div>

                          <div className="box-body">
                              <div className="table-responsive mailbox-messages">
                                <div id="mailbox_table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                  <div className="row">
                                    <div className="col-sm-6">
                                        <div className="dataTables_length" id="mailbox_table_length">
                                          <label>Show <select name="mailbox_table_length" aria-controls="mailbox_table" className="form-control input-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                          </select> entries</label>
                                        </div>
                                       </div>

                          <div className="col-sm-6">
                            <div id="mailbox_table_filter" className="dataTables_filter">
                              <label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="mailbox_table"/>
                              </label>
                            </div>
                          </div>
                         </div>


                          <div className="row">
                            <div className="col-sm-12">
                              <table className="table table-hover table-striped dataTable no-footer" id="mailbox_table" role="grid" aria-describedby="mailbox_table_info">
                                <thead>
                                  <tr role="row">
                                    <th className="sorting_disabled" rowSpan="1" colSpan="1">Label</th>
                                    <th className="sorting_disabled" rowSpan="1" colSpan="1">Name</th>
                                    <th className="sorting_disabled" rowSpan="1" colSpan="1">Subject</th>
                                    <th className="sorting_disabled" rowSpan="1" colSpan="1">Date</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr className="odd">
                                    <td valign="top" colSpan="4" className="dataTables_empty">No data available in table</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            </div>

                            <div className="row">
                              <div className="col-sm-5">
                                <div className="dataTables_info" id="mailbox_table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                              </div>

                              <div className="col-sm-7">
                                <div className="dataTables_paginate paging_simple_numbers" id="mailbox_table_paginate">
                                  <ul className="pagination">
                                      <li className="paginate_button previous disabled" id="mailbox_table_previous">
                                        <a href="#" aria-controls="mailbox_table" data-dt-idx="0" tabIndex="0">Previous</a>
                                      </li>

                                      <li className="paginate_button next disabled" id="mailbox_table_next">
                                        <a href="#" aria-controls="mailbox_table" data-dt-idx="1" tabIndex="0">Next</a>
                                      </li>
                                  </ul>
                                </div>
                              </div>
                              </div>
                              </div>
                            
                            </div>
                        
                            </div>
                            <div className="box-footer no-padding">
                         
                        </div>
                    </div>
                  </div>
    			)
    		}
    	})

    	return InboxMessages;
    }   
)     