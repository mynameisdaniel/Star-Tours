class Api::LocationsController < ApplicationController

  def index
      # @board = Board.includes(:members, lists: :cards).find(params[:id])


    @locations = Location.includes(:location_pictures).all
    render :index
  end

	def new
    @location = Location.new
	end

	def create
    @location = current_user.locations.new(location_params)
    if @location.save
      render :json => @location
    else
    	flash[:errors] = @location.errors.full_messages
      render :new
    end
  end

  def edit
    @location = Location.find(params[:id])
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
      render :json => @location
    else
      flash[:errors] = @location.errors.full_messages
    end
  end

  def show
  	@location = Location.includes(:reviews, :reservations, :location_pictures).find(params[:id])
  	render :show
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render :json => {}
  end

  private
  def location_params
    params.require(:location).permit(:title, :description, :price, :user_id, :address, :longitude, :latitude)
  end
end
