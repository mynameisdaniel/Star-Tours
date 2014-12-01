class Api::ReviewsController < ApplicationController

	def new
		@review = Review.new
		@location = Location.find(params[:location_id])
	end

	def create
		@review = current_user.reviews.new(review_params)
		@location = Location.find(review_params[:location_id])
		
    if ensure_rating(@review) && @review.save
			render json: @review
    else
    	flash[:errors] = ["Please fill out review or select a rating"]
    end 
	end

	def destroy
    review = Review.find(params[:id])
    review.destroy
    redirect_to location_url(review.location)
	end

	private
  def ensure_rating(review)
    review.rating.between?(1,5)
  end

	def review_params
		params.require(:review).permit(:user_id, :location_id, :body, :rating)
	end
end
