class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  private
  def current_user
  	return nil if session[:session_token].nil?
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def signed_on?
  	!!current_user
  end

  def sign_on!(user)
  	@current_user = user
  	session[:session_token] = user.reset_token!
  end

  def sign_out
  	session[:session_token] = nil
  	@current_user = nil
  end

  def ensure_signed_on
    redirect_to root_url unless signed_on?
  end
  
end
