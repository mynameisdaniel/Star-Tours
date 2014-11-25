class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.integer :user_id, null: false
      t.integer :location_id, null: false
      t.integer :rating, null: false
      t.string :body, null: false
      t.timestamps
    end

    add_index(:reviews, :user_id)
    add_index(:reviews, :location_id)
  end
end
