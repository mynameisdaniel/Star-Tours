json.extract!(@location, :id, :title, :description, :user_id,
              :price, :created_at, :updated_at)


json.users @location.reviews do |review|
    json.extract!(review, :id)
end
