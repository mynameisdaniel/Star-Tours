json.array! @users do |user|
    json.extract!(user, :id, :username, :biography, :picture_url)
end