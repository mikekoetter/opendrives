Rails.application.routes.draw do
  
  get 'products/index'

  post '/send_email', to: 'contact#send_email', as: :send_email 

  get 'contacts/index'

  get 'case_studies/index'

  get 'case_interior/gone_girl'

  get 'case_interior/joke'

  get 'careers/index'

  root 'homes#index'

end
