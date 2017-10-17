define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var PaidEarnings = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px',
                    borderColor: 'green'
                };
    			return (
                <div classNameName="col-md-12">
                  <div className="box box-success">

                    <div className="box-header with-border">
                        <div className="box-title">
                          <h3 className="box-title">Paid Earnings</h3>
                        </div>

                        <div className="box-tools pull-right">
                          <button type="button" className="btn btn-box-tool" data-widget="collapse">
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                    </div>

                    <div className="box-body table-responsive">
                          No Data to display. You haven't had any paided orders yet.

                    <div id="pe_earnings_table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="dataTables_length" id="pe_earnings_table_length">
                                <label>Show <select name="pe_earnings_table_length" aria-controls="pe_earnings_table" className="form-control input-sm">
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select> entries</label>
                            </div>
                          </div>

                        <div className="col-sm-6">
                          <div id="pe_earnings_table_filter" className="dataTables_filter">
                              <label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="pe_earnings_table"/>
                              </label>
                          </div>
                        </div>
                    </div>


                  <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-bordered table-striped dataTable" id="pe_earnings_table" role="grid" aria-describedby="pe_earnings_table_info">

                          <thead>
                            <tr role="row">
                              <th className="sorting_asc" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Earning ID: activate to sort column descending">Earning ID</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Order No: activate to sort column ascending">Order No</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Date Approved: activate to sort column ascending">Date Approved</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Payment Status: activate to sort column ascending">Payment Status</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Bonus: activate to sort column ascending">Bonus</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Total Fine: activate to sort column ascending">Total Fine</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Amount: activate to sort column ascending">Amount</th>
                              <th className="sorting" tabindex="0" aria-controls="pe_earnings_table" rowspan="1" colspan="1" aria-label="Total: activate to sort column ascending">Total</th>
                            </tr>
                          </thead>

                          <tfoot>
                            <tr>
                              <th rowspan="1" colspan="1">Earning ID</th>
                              <th rowspan="1" colspan="1">Order No</th>
                              <th rowspan="1" colspan="1">Date Approved</th>
                              <th rowspan="1" colspan="1">Payment Status</th>
                              <th rowspan="1" colspan="1">Bonus</th>
                              <th rowspan="1" colspan="1">Total Fine</th>
                              <th rowspan="1" colspan="1">Amount</th>
                              <th rowspan="1" colspan="1">Total</th>
                            </tr>
                          </tfoot>

                          <tbody>
                            <tr className="odd">
                              <td valign="top" colspan="8" className="dataTables_empty">No data available in table</td>
                            </tr>
                          </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-5">
                      <div className="dataTables_info" id="pe_earnings_table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                    </div>

                    <div className="col-sm-7">
                      <div className="dataTables_paginate paging_simple_numbers" id="pe_earnings_table_paginate">
                        <ul className="pagination">
                          <li className="paginate_button previous disabled" id="pe_earnings_table_previous">
                            <a href="#" aria-controls="pe_earnings_table" data-dt-idx="0" tabindex="0">Previous</a>
                          </li>

                          <li className="paginate_button next disabled" id="pe_earnings_table_next">
                            <a href="#" aria-controls="pe_earnings_table" data-dt-idx="1" tabindex="0">Next</a>
                          </li>
                        </ul>
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

    	return PaidEarnings;
    }   
)     