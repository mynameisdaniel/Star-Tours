class LocationsController < ApplicationController

	def new
    @location = Location.new
	end

	def create
    @location = current_user.locations.new(location_params)
    if @location.save
      redirect_to location_url(@location)
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
      redirect_to location_url(@location)
    else
      flash[:errors] = @location.errors.full_messages
      render :edit
    end
  end

  def index
  	@locations = Location.all
  end

  def show
  	@location = Location.find(params[:id])
    @reviews = @location.reviews
    @reservations = @location.reservations
  	# render :json => @location
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    redirect_to locations_url
  end

  private
  def location_params
    params.require(:location).permit(:title, :description, :price, :user_id)
  end
end
