# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141201223956) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "location_pictures", force: true do |t|
    t.integer  "location_id", null: false
    t.string   "image_url",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", force: true do |t|
    t.string   "title",       null: false
    t.string   "description", null: false
    t.integer  "user_id",     null: false
    t.integer  "price",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "longitude"
    t.float    "latitude"
    t.string   "address"
  end

  add_index "locations", ["user_id"], name: "index_locations_on_user_id", using: :btree

  create_table "reservations", force: true do |t|
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.string   "status",      null: false
    t.date     "date_start",  null: false
    t.date     "date_end",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reservations", ["location_id"], name: "index_reservations_on_location_id", using: :btree
  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree

  create_table "reviews", force: true do |t|
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.integer  "rating",      null: false
    t.string   "body",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["location_id"], name: "index_reviews_on_location_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
