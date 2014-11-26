# == Schema Information
#
# Table name: location_pictures
#
#  id          :integer          not null, primary key
#  location_id :integer          not null
#  image_url   :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class LocationPicture < ActiveRecord::Base

  validates :image_url, presence: true
	validates :location, presence: true

	belongs_to :location
end
