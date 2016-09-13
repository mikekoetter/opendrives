class Resource < MailForm::Base
  attribute :first_name,      :validate => true
  attribute :last_name,      	:validate => true
  attribute :email,     			:validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :company_name, 		:validate => true
  attribute :phone
  attribute :message
  attribute :nickname,  			:captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Support Request from opendrives.com",
      :to => "support@opendrives.com",
      :from => "support@opendrives.com"
    }
  end

end