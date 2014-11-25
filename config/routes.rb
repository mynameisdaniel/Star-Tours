Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users do
  	resources :locations, only: [:new]
  end
  resource :session
  resources :locations

end
