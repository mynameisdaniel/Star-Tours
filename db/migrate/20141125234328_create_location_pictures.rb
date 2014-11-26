class CreateLocationPictures < ActiveRecord::Migration
  def change
    create_table :location_pictures do |t|
      t.integer :location_id, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
