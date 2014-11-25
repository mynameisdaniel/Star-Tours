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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
