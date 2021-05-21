import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibilityVal: "password",
            visibilityClass: ""
        };
    }

    render() {
        return (
            <div className="container" id="page">
    
                <div className="session">
                    <h2 className="header">Sign in to Coinbase</h2>
    
                    <div className="account-form">
                        <div className="form">
                            <form className="form-vertical" action="/sessions" acceptCharset="UTF-8" method="post"><input
                                    name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
                                    name="authenticity_token"
                                    value="JyjFEM4dBY1zu7IL0eo1K0nntSdW1eQf7NCi/h7ogulKJ8xQ0Z8WmlrOZhYPGvR6+5OLjb8MIgDxuVXLpMNWaQ==" />
                                <div className="control-group">
    
                                    <div className="controls">
                                        <input type="email" name="email" id="email" className="focus text-field"
                                            placeholder="Email" tabIndex="1" autoComplete="off" />
                                    </div>
                                </div>
    
                                <div className="control-group">
    
                                    <div className="controls">
                                        <span className={"visible_active" + " " + this.state.visibilityClass} onClick={() => {
                                                if (this.state.visibilityVal == "password") {
                                                    this.setState({
                                                        visibilityVal: "text",
                                                        visibilityClass: "visible_inactive"
                                                    });
                                                } else {
                                                    this.setState({
                                                        visibilityVal: "password",
                                                        visibilityClass: ""
                                                    });
                                                }
                                            }}>
                                        </span>
                                        <input type={this.state.visibilityVal} name="password" id="password" className="text-field password" placeholder="Password" autoComplete="off" tabIndex="2" />
                                    </div>
                                    <input type="hidden" id="recaptcha_token" name="recaptcha_token" />
                                </div>
    
    
                                <div className="control-group">
                                    <div className="controls clearfix">
                                        <input type="submit" name="commit" value="Sign In" className="btn btn-primary pull-right" id="signin_button" tabIndex="4" data-disable-with="Signing in..." />
                                        <label className="checkbox">
                                            <input type="checkbox" name="stay_signed_in" id="stay_signed_in" value="1" tabIndex="3" /> Keep me signed in on this computer
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    
                    <div className="account-extras">
                        <p>
                            <a href="#">Forgot password?</a>
                            &middot; <a href="#">Don&#39;t have an account?</a>
                            &middot; <a href="#">Privacy Policy</a><br />
                        </p>
                        <p>
                            <a href="https://support.coinbase.com/customer/en/portal/articles/2488794-troubleshooting-2-factor-authentication" target="_blank">Have an issue with 2-factor authentication?</a>
                        </p>
                    </div>
    
                </div>
    
            </div>
        );
    }
}
    

export default Login;