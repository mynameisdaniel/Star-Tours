Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :locations do 
      resources :reviews, only: [:new]
      resources :reservations, only: [:new]
    end
    resources :location_pictures, only: [:create]
    resources :reservations, only: [:create, :update, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
  end
  resources :users do
  	resources :locations, only: [:new]
  end
  resource :session
end
