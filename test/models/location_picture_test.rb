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

require 'test_helper'

class LocationPictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
