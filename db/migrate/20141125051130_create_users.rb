class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :username, null: false
    	t.string :password_digest, null: false
    	t.string :session_token, null: false
    	t.text   :biography
    	t.string :picture_url
    	t.timestamps
    end
  end
end
