class AddColumnsToLocation < ActiveRecord::Migration
  def change
    remove_column :locations, :addres, :string
  	add_column :locations, :address, :string
  end
end
