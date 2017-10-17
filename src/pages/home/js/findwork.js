
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
        './components/orders/findwork-component',
       
        
    ],
    function(React, ReactDOM, $, Raphael, Morris, HeaderBar, NavigationMenu, ControlPanel,ControlsMenu,FindWorkComponent){
        var FindWork = React.createClass({
            render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

               return (
                    <div className="wrapper">
                        <HeaderBar />
                        
                        <NavigationMenu />

                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Dashboard
                                    <small>Control panel</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Find  work</li>
                                </ol>
                                <ControlPanel />
                            </section>

                            <section className="content">
                                <div className ="row">
                                
                                    
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

        ReactDOM.render(<FindWork />,  document.getElementById('findwork-container'));
    }   
)  