class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
      t.string :status, null: false
      t.date :date_start, null: false
      t.date :date_end, null: false
      t.timestamps
    end

    add_index(:reservations, :user_id)
    add_index(:reservations, :location_id)
  end
end
