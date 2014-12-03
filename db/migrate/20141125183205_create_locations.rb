class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.integer :price, null: false
      t.float :longitude 
      t.float :latitude
      t.string :address
      t.timestamps
    end

    add_index(:locations, :user_id)
  end
end
