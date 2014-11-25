# == Schema Information
#
# Table name: reservations
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  location_id :integer          not null
#  status      :string(255)      not null
#  date_start  :date             not null
#  date_end    :date             not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Reservation < ActiveRecord::Base

	STATUS_TYPES = [ "PENDING", "DENIED", "APPROVED"]

	validates :user, :location, presence: true
	validates :status, :date_start, :date_end, presence: true

	belongs_to :user
	belongs_to :location

	before_validation :ensure_status

	def ensure_status
    self.status ||= "PENDING"
	end
	
end
