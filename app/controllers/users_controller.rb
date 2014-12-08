class UsersController < ApplicationController

	before_action :ensure_signed_on, except: [:new, :create]

	def new
    @user = User.new
	end

  def show
  	@user = User.find(params[:id])
  	render :show
  end

  def index
  	@users = User.where("id <= 14")
  	render :index
  end

	def create
		@user = User.new(user_params)
		if @user.save
			sign_on!(@user)
  		redirect_to root_url
		else
			flash[:errors] = @user.errors.full_messages
			render :new
		end
	end

  private
	def user_params
    params.require(:user).permit(:username, :password)
	end


end
