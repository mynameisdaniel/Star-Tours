json.extract!(@location, :id, :title, :description, :user_id,
              :price, :created_at, :updated_at)


json.reviews @location.reviews do |review|
    json.extract!(review, :user_id, :rating, :body)
end

json.reservations @location.reservations do |reservation|
    json.extract!(reservation, :id, :user_id, :location_id, :date_start, :date_end, :status)
end

json.pictures @location.location_pictures do |picture|
    json.extract!(picture, :image_url)
end