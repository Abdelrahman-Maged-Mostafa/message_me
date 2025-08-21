Rails.application.routes.draw do
  root "chatroom#index"
  get "login",to: "sessions#new"
  post "login",to: "sessions#create"
  delete "logout",to: "sessions#destroy"
  post "messages", to: "messages#create"
 
  mount ActionCable.server, at: "/cable"
  get "up" => "rails/health#show", as: :rails_health_check
end
# start in video 25 in part 8