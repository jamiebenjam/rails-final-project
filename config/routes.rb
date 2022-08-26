Rails.application.routes.draw do
  
  resources :replies
  resources :cheeps
  resources :users

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/homefeed', to: 'users#feed'
  get '/myCheeps', to: 'users#myCheeps'
  patch '/like/:id', to: 'cheeps#like'
  patch '/unlike/:id', to: 'cheeps#unlike'
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
