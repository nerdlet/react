define(
    [
        'react',
        'jquery',
    ],
    function (React, $) {
        var NavigationMenu = React.createClass({
            render: function () {
                var style = {
                    display: "block"
                };

                return (
                    <aside className="main-sidebar">
                        {/* sidebar: style can be found in sidebar.less */}
                        <section className="sidebar" >
                            {/* Sidebar user panel */}
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src="dist/img/avi3.png" className="img-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p>Brenda B.</p>
                                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                                </div>
                            </div>
                            {/* search form */}
                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                                  </span>
                                </div>
                            </form>
                            {/* /.search form */}

                            {/* sidebar menu: : style can be found in sidebar.less */}
                            <ul className="sidebar-menu">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="active treeview">
                                    <a href="/">
                                        <i className="fa fa-dashboard"></i> 
                                        <span>
                                            Dashboard
                                        </span>
                                    </a>
                                </li>

                                <li className="treeview">
                                    <a href="">
                                        <i className="fa fa-laptop"></i>
                                        <span>Orders</span>
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </a>
                                    <ul className="treeview-menu menu-open" style={style}>
                                        <li><a href="findwork.html"><i className="fa fa-circle-o"></i>Find Work</a></li>
                                        <li><a href="allorders.html"><i className="fa fa-circle-o"></i>All Orders </a></li>
                                        <li><a href="bids.html"><i className="fa fa-circle-o"></i> Bids</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="earnings.html">
                                        <i className="fa fa-th"></i>
                                        <span>Earnings</span> 
    
                                    </a>
                                </li>

                                <li className="treeview">
                                    <a href="">
                                        <i className="fa fa-table"></i> <span>Mailbox</span>
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="inbox.html">Inbox</a>
                                            <span className="label label-primary pull-right">4</span>
                                        </li>
                                        <li><a href="compose.html">Compose</a></li>
                                        <li><a href="sent.html">Send</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="profile.html">
                                        <i className="fa fa-calendar"></i> <span>Profile</span>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        {/* /.sidebar */}
                    </aside>
                )
            }
        });

        return NavigationMenu
    }
)