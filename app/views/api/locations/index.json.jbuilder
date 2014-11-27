json.array! @locations do |location|

    json.extract!(location, :id, :title, :description, :user_id, 
                            :price, :created_at, :updated_at)

    json.pictures location.location_pictures do |picture|
      json.extract!(picture, :image_url)
    end

    json.owner do
      json.extract!(location.user, :username)
    end
end