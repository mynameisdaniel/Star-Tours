Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users do
  	resources :locations, only: [:new]
  end
  resource :session
  resources :locations do
  	resources :reviews, only: [:new]
  	resources :reservations, only: [:new]

  end
  resources :reviews
  resources :reservations
  resources :location_pictures, only: [:create]

end
