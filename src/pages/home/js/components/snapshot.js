

//sidebar component 
define(
    [
        'react',
        'jquery',
    ],
    function (React, $) {
        var Snapshot = React.createClass({
            render: function () {
                var style = {
                    display: "block"
                };

                return (
                  <div className="alert alert-warning alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">x</button>
                  <h4><i className="icon fa fa-info"></i>Kindly Complete your Profile</h4>

                  <ol>
                    <li className="label label-info" font-size="100%">You need to complete the steps below in order to bid for jobs</li>
                    <li className="label label-info" font-size="100%"><a href="profile.html">Add your Bank Details</a></li>
                    <li className="label label-info" font-size="100%"><a href="profile.html">Add a phone number to your account</a></li>
                    <li className="label label-info" font-size="100%"><a href="profile.html">Select your Academic Level</a></li>
                    <li className="label label-info" font-size="100%"><a href="profile.html">Upload a scanned copy of your ID/Passport</a></li>
                    <li className="label label-info" font-size="100%"><a href="profile.html">Upload your CV/Resume</a></li>
                  </ol>
              </div>
                            
                )
            }
        });

        return Snapshot
    }
)


