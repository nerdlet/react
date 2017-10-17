
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
        './components/charts/donut-chart',
        './components/charts/area-chart',
        './components/charts/world-map',
        './components/containers/container-one',
        './components/containers/container-two',
        './components/containers/container-three',
        './components/containers/container-four',
        './components/containers/container-five',
        './components/containers/container-six',
        './components/containers/container-seven',
        './components/controls-menu',
        './components/stat-tile',
        './components/profile/profile-details',
        './components/profile/profile-summary'
    ],
    function(React, ReactDOM, $, Raphael, Morris, HeaderBar, NavigationMenu, ControlPanel, DonutChart, AreaChart, WorldMap, ContainerOne, ContainerTwo, ContainerThree, ContainerFour,ContainerFive,ContainerSix,ContainerSeven,ControlsMenu,StatTile,ProfileSummary,ProfileDetails){
        var Profile = React.createClass({
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
                                    User Profile
                                    <small>Your profile details</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Profile</li>
                                </ol>
                                <ControlPanel />
                            </section>

                            <section className="content">
                                <div className ="row">
                                        <ProfileSummary/>

                                        <ProfileDetails/>
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

        ReactDOM.render(<Profile />,  document.getElementById('profile-container'));
    }   
)  