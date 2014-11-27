Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :locations do 
      resources :reviews, only: [:new]
      resources :reservations, only: [:new]
    end
  end

  resources :users do
  	resources :locations, only: [:new]
  end
  resource :session
  
  resources :reviews
  resources :reservations
  resources :location_pictures, only: [:create]

end
