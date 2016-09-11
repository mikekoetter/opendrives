Rails.application.routes.draw do
  
  get 'why_us/index'

  resources :resources, only: [:index, :create]

  get 'products/index'

  # post '/send_email', to: 'contacts#send_email', as: :send_email 

  # get 'contacts/index'
  resources :contacts, only: [:index, :create]

  get 'case_studies/index'

  get 'case_interior/gone_girl'

  get 'case_interior/joke'

  get 'careers/vp_engineering'

  get 'careers/professional_services_engineer'

  get 'careers/sales'

  get 'careers/node_js_developer'

  get 'careers/index'

  post 'home/subscribe' => 'homes#subscribe'

  root 'homes#index'

end
