class StaticPagesController < ApplicationController
  
  before_action :ensure_signed_on, only: [:new]

  def root; end

  def about; end

  def contact; end
end
