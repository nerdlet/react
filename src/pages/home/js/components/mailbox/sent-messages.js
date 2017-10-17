define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var SentMessages = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
    				 <div className="col-md-9">
                <div className="box box-success">
                  <div className="box-header with-border">
                      <h3 className="box-title">Sent Mail</h3>
                      
                  </div>
                  
                  <div className="box-body">
                    <div className="table-responsive mailbox-messages">
                      <table className="table table-hover table-striped" id="mailbox_table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                     
                    </div>
                  </div>

                  <div className="box-footer no-padding"></div>
              </div>
            </div>
    			)
    		}
    	})

    	return SentMessages;
    }   
)     