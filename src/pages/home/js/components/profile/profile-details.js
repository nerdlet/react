define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
      var ProfileDetails = React.createClass({
        render: function(){
                var style = {
                    position: 'relative',
                    height: '0px'
                };

          return (
              <div className="col-md-3">
                  <div className="box box-primary">
                    <div className="box-body box-profile">
                        <img className="profile-user-img img-responsive img-circle" src="dist/img/avi3.png" alt="Your profile picture"/>
                        <h3 className="profile-username text-center">Brenda Nyokabi</h3>
              
            
                        <ul className="list-group list-group-unbordered">
                            <li className="list-group-item">
                              <b> <i className="fa fa-user margin-r-5"></i>Username:</b> <span className="pull-right text-muted"></span>
                            </li>

                            <li className="list-group-item">
                              <b><i className="fa fa-calendar margin-r-5"></i>Member Since:</b> <div className="pull-right text-muted">September 10, 2017</div>
                            </li>

                            <li className="list-group-item">
                              <b> <i className="fa fa-pencil"></i> Orders completed</b> <a className="pull-right">0</a>
                            </li>

                            <li className="list-group-item">
                              <b> <i className="fa fa-envelope margin-r-5"></i>Email:</b> <span className="pull-right text-muted">brndnyokabi@gmail.com</span>
                            </li>

                            <li className="list-group-item">
                              <b> <i className="fa fa-mobile margin-r-5"></i>Phones:</b> <div className="text-muted"> </div>
                            </li>

                            <li className="list-group-item">
                              <b><i className="fa fa-id-card-o margin-r-5"></i>
                                <a href=""> 
                                  Download my ID
                                </a>
                              </b>
                            </li>

                            <li className="list-group-item">
                              <b><i className="fa fa-graduation-cap margin-r-5"></i>
                                <a href="">
                                  Download my Certificate
                                </a>
                              </b>
                            </li>

                            <li className="list-group-item">
                              <b><i className="fa fa-download margin-r-5"></i>
                                <a href="">
                                  Download my CV
                                </a>
                              </b>
                            </li>
                      </ul>
                    </div>
                  </div>
              </div>  
          )
        }
      })

      return ProfileDetails;
    }   
)     