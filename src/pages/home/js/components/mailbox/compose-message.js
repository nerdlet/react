define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ComposeMessage = React.createClass({
    		render: function(){
                var style = {
                    height: '300px',
                    display:'none'
                };

                var description = {
                  display: 'block',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderCollapse: 'separate',
                  borderColor: 'rgb(210, 214, 222)',
                  borderStyle: 'solid', 
                  borderWidth: '1px', 
                  clear: 'none', 
                  float: 'none', 
                  margin: '0px',
                  outline: 'rgb(85, 85, 85) none 0px', 
                  outlineOffset: '0px', 
                  padding: '6px 12px', 
                  position: 'static', 
                  top: 'auto', 
                  left: 'auto', 
                  right: 'auto',
                  bottom: 'auto', 
                  zIndex: 'auto' ,
                  verticalAlign: 'baseline', 
                  textAlign: 'start' ,
                  boxSizing: 'border-box', 
                  boxShadow: 'none', 
                  borderRadius: '0px', 
                  width: '100%', 
                  height: '300px'
                };

                var toolbar = {
                    float:'left'
                };

    			return (
    				 <div className="col-md-9">
                <div className="box box-success">
                  <div className="box-header with-border">
                      <h3 className="box-title">Compose a New Message</h3>
                  </div>

                    
                  <div className="box-body">
                      <div className="form-group">
                        <form method="POST" action="http://academicresearchassistants.com/compose" acceptCharset="UTF-8" className="form-horizontal">
                          <input name="_token" type="hidden" value="lfCQGaX95WMJpei7nH71sDC1dcw8GzTuKjTFMDdZ"/>
                          <select className="form-control" required="required" name="department">
                              <option selected="selected" value="">Select Department:</option>
                              <option value="Support">Support</option>
                              <option value="Quality Assurance">Quality Assurance</option>
                              <option value="Billing">Billing</option>
                          </select>
                        </form>
                      </div>

                  <div className="form-group">
                      <input className="form-control" required="required" placeholder="Subject" name="subject" type="text"/>
                  </div>

                  <div className="form-group">
                      <ul className="wysihtml5-toolbar"><li className="dropdown">
                        <a className="btn btn-default dropdown-toggle " data-toggle="dropdown">
                          
                            <span className="glyphicon glyphicon-font"></span>
                          
                          <span className="current-font">Normal text</span>
                          <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabIndex="-1" href="javascript:;" unselectable="on">Normal text</a></li>
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabIndex="-1" href="javascript:;" unselectable="on">Heading 1</a></li>
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabIndex="-1" href="javascript:;" unselectable="on">Heading 2</a></li>
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabIndex="-1" href="javascript:;" unselectable="on">Heading 3</a></li>
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabIndex="-1" href="javascript:;" unselectable="on">Heading 4</a></li>
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabIndex="-1" href="javascript:;" unselectable="on">Heading 5</a></li>
                          <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabIndex="-1" href="javascript:;" unselectable="on">Heading 6</a></li>
                        </ul>
                      </li>
                      <li>
                        <div className="btn-group">
                          <a className="btn  btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabIndex="-1" href="javascript:;" unselectable="on">Bold</a>
                          <a className="btn  btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabIndex="-1" href="javascript:;" unselectable="on">Italic</a>
                          <a className="btn  btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabIndex="-1" href="javascript:;" unselectable="on">Underline</a>
                          
                          <a className="btn  btn-default" data-wysihtml5-command="small" title="CTRL+S" tabIndex="-1" href="javascript:;" unselectable="on">Small</a>
                          
                        </div>
                      </li>
                      <li>
                        <a className="btn  btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-quote"></span>
                          
                        </a>
                      </li>
                      <li>
                        <div className="btn-group">
                          <a className="btn  btn-default" data-wysihtml5-command="insertUnorderedList" title="Unordered list" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-list"></span>
                          
                          </a>
                          <a className="btn  btn-default" data-wysihtml5-command="insertOrderedList" title="Ordered list" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-th-list"></span>
                          
                          </a>
                          <a className="btn  btn-default" data-wysihtml5-command="Outdent" title="Outdent" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-indent-right"></span>
                          
                          </a>
                          <a className="btn  btn-default" data-wysihtml5-command="Indent" title="Indent" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-indent-left"></span>
                          
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="bootstrap-wysihtml5-insert-link-modal modal fade" data-wysihtml5-dialog="createLink">
                          <div className="modal-dialog ">
                            <div className="modal-content">
                              <div className="modal-header">
                                <a className="close" data-dismiss="modal">×</a>
                                <h3>Insert link</h3>
                              </div>
                              <div className="modal-body">
                                <div className="form-group">
                                  <input value="http://" className="bootstrap-wysihtml5-insert-link-url form-control" data-wysihtml5-dialog-field="href"/>
                                </div> 
                                <div className="checkbox">
                                  <label> 
                                    <input type="checkbox" className="bootstrap-wysihtml5-insert-link-target" checked=""/>Open link in new window
                                  </label>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <a className="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">Cancel</a>
                                <a href="#" className="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save">Insert link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="btn  btn-default" data-wysihtml5-command="createLink" title="Insert link" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-share"></span>
                          
                        </a>
                      </li>
                      <li>
                        <div className="bootstrap-wysihtml5-insert-image-modal modal fade" data-wysihtml5-dialog="insertImage">
                          <div className="modal-dialog ">
                            <div className="modal-content">
                              <div className="modal-header">
                                <a className="close" data-dismiss="modal">×</a>
                                <h3>Insert image</h3>
                              </div>
                              <div className="modal-body">
                                <div className="form-group">
                                  <input value="http://" className="bootstrap-wysihtml5-insert-image-url form-control" data-wysihtml5-dialog-field="src"/>
                                </div> 
                              </div>
                              <div className="modal-footer">
                                <a className="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">Cancel</a>
                                <a className="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save" href="#">Insert image</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="btn  btn-default" data-wysihtml5-command="insertImage" title="Insert image" tabIndex="-1" href="javascript:;" unselectable="on">
                          
                            <span className="glyphicon glyphicon-picture"></span>
                          
                        </a>
                      </li>
                      </ul>
                        <textarea id="compose-textarea" className="form-control" required="required" placeholder="Enter your Message here" style={style}></textarea>
                        <input type="hidden" name="_wysihtml5_mode" value="1"/>
                        <iframe className="wysihtml5-sandbox" security="restricted" allowTransparency="true" frameBorder="0" width="0" height="0" marginWidth="0" marginHeight="0"style={description}></iframe>
                                      </div>
                                    </div>
                               
                          <div className="box-footer">
                              <div className="pull-right">
                                  <button type="submit" className="btn btn-primary">
                                  <i className="fa fa-envelope-o"></i> Send</button>
                              </div>
                            </div>
                          </div>         
                      </div>
        	)
    		}
    	})

    	return ComposeMessage;
    }   
)     