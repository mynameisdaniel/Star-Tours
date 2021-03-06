class Api::ReservationsController < ApplicationController

  before_action :ensure_signed_on, only: [:new, :create, :update]

	def new
      @reservation = Reservation.new
      @location = Location.find(params[:location_id])
	end

	def create
      @reservation = current_user.reservations.new(reservation_params)
	  @location = Location.find(reservation_params[:location_id])
		
      if @reservation.save
        render json: @reservation
      else
    	flash[:errors] = @reservation.errors.full_messages
      end 
	end

	def update
      @reservation = Reservation.find(params[:id])
      location = @reservation.location
      if @reservation.update_attributes(reservation_params)
        render json: @reservation
      else
    	  flash[:errors] = @reservation.errors.full_messages
      end 
	end


	def reservation_params
      params.require(:reservation).permit(:user_id, :date_start, :date_end, :status, :location_id)
	end
end
