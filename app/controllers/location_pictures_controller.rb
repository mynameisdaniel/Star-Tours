class LocationPicturesController < ApplicationController

	def create
		location_picture = LocationPicture.new(picture_params)
		if location_picture.save
			redirect_to location_url(location_picture.location)
		else
			flash[:errors] = location_picture.errors.full_messages
			redirect_to location_url(location_picture.location)
		end
	end

  protected
	def picture_params
		params.require(:location_picture).permit(:location_id, :image_url)
	end 
end
