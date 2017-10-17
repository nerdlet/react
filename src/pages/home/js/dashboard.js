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
        './components/orders',
        './components/snapshot'
    ],
    function(React, ReactDOM, $, Raphael, Morris, HeaderBar, NavigationMenu, ControlPanel, DonutChart, AreaChart, WorldMap, ContainerOne, ContainerTwo, ContainerThree, ContainerFour,ContainerFive,ContainerSix,ContainerSeven,ControlsMenu,StatTile,Orders,Snapshot){
    	var Dashboard = React.createClass({
            getInitialState: function() {
                return {
                    statTileOptions: []
                }
            },
            componentDidMount: function(){

                var statTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'ion-bag',
                    subject: 'MY CURRENT BIDS',
                    stats: '0',
                    link: '#'
                }, {
                    theme: 'bg-aqua',
                    icon: 'ion-stats-bars',
                    subject: 'ORDERS IN PROGRESS',
                    stats: '0',
                    link: '#'
                }, {
                    theme: 'bg-aqua',
                    icon: 'ion-person-add',
                    subject: 'PAST ORDERS',
                    stats: '0',
                    link: '#'
                }, {
                    theme: 'bg-green',
                    icon: 'ion-pie-graph',
                    subject: 'EARNINGS',
                    stats: '$0 Pending',
                    link: '#'
                }];

                
                this.setState({
                    statTileOptions: statTileOptions
                });
            },

            componentDidUpdate: function(){

                $('.box ul.nav a').on('shown.bs.tab', function () {
                  area.redraw();
                  donut.redraw();
                  console.log("graph drawn")
                });

            },

    		render: function(){

                var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
                    return (
                        <StatTile 
                            key={"rowThree"+iterator}
                            width = {3}
                            icon = {options.icon} 
                            link = {options.link}
                            stats = {options.stats}
                            subject = {options.subject} 
                            theme = {options.theme} />
                    )
                });


    			return (
    				<div className="wrapper">
    					<HeaderBar />
    					
    					<NavigationMenu />
    					
    					<div className="content-wrapper">
    						<section className="content-header">
    							<h1>
    						        Dashboard
    						       	<small></small>
    						    </h1>

    							<ol className="breadcrumb">
    								<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
    								<li className="active">Dashboard</li>
    							</ol>

                                <Snapshot/>

                                {/*<ControlPanel />*/}
                               
    						</section>

    						<section className="content">
                                
                                <div className="row">
                                    {statTileWidgets}
                                </div>

                                <div className="row">
                                        <Orders/>
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

    	ReactDOM.render(<Dashboard />,  document.getElementById('dashboard-container'));
    }   
)     