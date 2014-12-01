# == Schema Information
#
# Table name: locations
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :string(255)      not null
#  user_id     :integer          not null
#  price       :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Location < ActiveRecord::Base
  
  validates :title, :description, :price, presence: true
  validates :user, presence: true

  geocoded_by :address
  after_validation :geocode

  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :reservations, dependent: :destroy
  has_many :location_pictures, dependent: :destroy

end
