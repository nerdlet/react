
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
        './components/mailbox/inbox-component',
        './components/mailbox/inbox-messages'
        
    ],
    function(React, ReactDOM, $, Raphael, Morris, HeaderBar, NavigationMenu, ControlPanel,ControlsMenu,InboxComponent,InboxMessages){
        var InboxDisplay = React.createClass({
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
                                    Mailbox
                                    <small>9 Unread Messages</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Inbox</li>
                                </ol>
                                <ControlPanel />
                            </section>

                            <section className="content">
                                <div className ="row">
                                    <InboxComponent/>
                                    
                                    <InboxMessages/>
                                    
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

        ReactDOM.render(<InboxDisplay />,  document.getElementById('inbox-container'));
    }   
)  