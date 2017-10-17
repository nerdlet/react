define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var InboxComponent = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
    				<div className="col-md-3">
                      <a href="compose.html" className="btn btn-primary btn-block margin-bottom">Compose</a>
                      <div className="box box-solid">
                        <div className="box-header with-border">
                          <h3 className="box-title">Folders</h3>

                          <div className="box-tools">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse">
                            <i className="fa fa-minus"></i>
                            </button>
                          </div>
                        </div>

                        <div className="box-body no-padding">
                          <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="inbox.html"><i className="fa fa-inbox"></i> Inbox
                              <span className="label label-primary pull-right">0</span>
                            </a>
                            </li>
                            <li className=""><a href="sent.html"><i className="fa fa-envelope-o"></i>Sent</a></li>
                            

                          </ul>
                        </div>  
                      </div>
                          <div className="box box-solid">
                            <div className="box-header with-border">
                              <h3 className="box-title">Labels</h3>

                              <div className="box-tools">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                                <i className="fa fa-minus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="box-body no-padding">
                              <ul className="nav nav-pills nav-stacked">
                                <li><a href="#"><i className="fa fa-star text-purple"></i> Quality Assurance</a></li>
                                <li><a href="#"><i className="fa fa-star text-fuchsia"></i> Support</a></li>
                                <li><a href="#"><i className="fa fa-star text-olive"></i> Billing</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
    			)
    		}
    	})

    	return InboxComponent;
    }   
)     