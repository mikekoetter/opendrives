Rails.application.routes.draw do
  
  

  resources :jobs
  get "admins/jobs"
  get "admins/sign_up", to: "admins#index"
  get "admins", to: "admins#index"
  devise_for :admins
  get 'why_us/index'

  resources :resources, only: [:index, :create]

  get 'products/index'

  # post '/send_email', to: 'contacts#send_email', as: :send_email 

  # get 'contacts/index'
  resources :contacts, only: [:index, :create]

  get 'case_studies/index'

  get 'case_interior/gone_girl'

  get 'case_interior/joke'

  get 'case_interior/videos'

  # get 'careers/vp_engineering'

  # get 'careers/professional_services_engineer'

  # get 'careers/sales'

  # get 'careers/node_js_developer'

  get 'careers/index'

  post 'home/subscribe' => 'homes#subscribe'

  root 'homes#index'

end
