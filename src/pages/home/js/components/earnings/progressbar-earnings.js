define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ProgressbarEarnings = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px',
                    borderColor: 'green'
                };

    			return (
                    <div className="col-md-12">
          
                        <div className="box box-success">

                           <div className="col-md-4 border-right">
                              <div className="box-header with-border">
                                <h3 className="box-title">In Progress <br></br>
                                  <small>Work in Progress</small></h3>
                              </div>
                                <div className="box-body">
                                  <small>$</small>
                                </div>
                            </div>

                           <div className="col-md-4 border-right"> 
                              <div className="box-header with-border">
                                <h3 className="box-title">Pending <br></br>
                                  <small>Available to Withdraw</small></h3>
                              </div>
                                <div className="box-body">
                                    <small>$</small>0
                                </div>
                            </div>

                           <div className="col-md-4 border-right-left">
                              <div className="box-header with-border">
                                <h3 className="box-title">Total Paid</h3>
                              </div>
                                <div className="box-body">
                                  
                                    <small>$</small>0 <br></br>
                                    Recent payment $ 0.00
                                </div>
                            </div>

                        </div>
                    </div>
    			)
    		}
    	})

    	return ProgressbarEarnings;
    }   
)     