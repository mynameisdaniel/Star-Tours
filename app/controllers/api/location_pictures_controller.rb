class Api::LocationPicturesController < ApplicationController

	def create
		location_picture = LocationPicture.new(picture_params)
		if location_picture.save
			render json: location_picture
		else
			flash[:errors] = location_picture.errors.full_messages
		end
	end

  protected
	def picture_params
		params.require(:location_picture).permit(:location_id, :image_url)
	end 
end
