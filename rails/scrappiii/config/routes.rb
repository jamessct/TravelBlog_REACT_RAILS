Rails.application.routes.draw do
  scope path: "api" do
    resources :projects
    resources :entries
    resources :comments
  end
end
