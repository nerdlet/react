/**
 * @author Ashwin Hariharan
 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main dashboard page.
 */

define(
    [
        'react',
        'react-dom',
        'jquery',
        'raphael',
        'morris',
        './components/header-bar/header-bar',
        './components/navigation-menu',
        './components/control-panel',
        './components/controls-menu',
        './components/earnings/progressbar-earnings',
        './components/earnings/pending-earnings',
        './components/earnings/paid-earnings'

    ],
    function(React, ReactDOM, $, Raphael, Morris, HeaderBar, NavigationMenu, ControlPanel,ControlsMenu,ProgressbarEarnings,PendingEarnings,PaidEarnings){
        var Earnings = React.createClass({
            render: function(){
                return (
                    <div className="wrapper">
                        <HeaderBar />
                        
                        <NavigationMenu />
                        
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Earnings   
                                </h1>
                                <small>A snapshot of all the recent earnings</small>

                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Earnings</li>
                                </ol>

                            </section>

                            <section className="content">
                                <div className="row">
                                    <ProgressbarEarnings/>
                                </div>

                                <div className="col-lg-12">
                                     <div className="row">
                                        <PendingEarnings/>  
                                     </div>
                                </div>

                               <div className="col-lg-12">
                                     <div className="row">
                                        <PaidEarnings/>  
                                     </div>
                                </div>
                                
                            </section>

                        </div>


                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 0.0.0
                            </div>

                            By your continued use of our website means you accept our <a href="/">Terms</a> and <a href="/">Fines Policy</a><br></br>
                            <strong>Copyright © 2017 <a href="/">Academic Research Assistants</a>.</strong> All rights reserved.
                        </footer>

                        {/*<ControlsMenu />*/}
                    </div>
                )
            }
        });

        ReactDOM.render(<Earnings />,  document.getElementById('earnings-container'));
    }   
)     