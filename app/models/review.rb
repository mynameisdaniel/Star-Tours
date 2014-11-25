# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  location_id :integer          not null
#  rating      :integer          not null
#  body        :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Review < ActiveRecord::Base

  validates :rating, :body, presence: true
	validates :user, :location, presence: true

	belongs_to :user
	belongs_to :location

	
end
