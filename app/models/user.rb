# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :locations, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :reservations, dependent: :destroy

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
  	user = User.find_by_username(username)
    user.try(:is_password?, password) ? user : nil
  end

  def password=(password)
  	@password = password
  	self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
  	self.session_token = SecureRandom.urlsafe_base64(16)
  	self.save!
  	self.session_token
  end

  private
  def ensure_session_token
  	self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
