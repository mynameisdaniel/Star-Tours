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

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
