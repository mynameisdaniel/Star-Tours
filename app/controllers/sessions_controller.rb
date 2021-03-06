class SessionsController < ApplicationController

  def new
  end

  def create
  	@user = User.find_by_credentials(params[:user][:username],
  		                               params[:user][:password])
  	if @user
  		sign_on!(@user)
  		redirect_to "#/master/"
  	else
  		flash[:errors] = ["Invalid username or password"]
  		render :new
    end
  end

  def destroy
  	sign_out
  	redirect_to root_url
  end
  
end