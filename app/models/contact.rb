class Contact < MailForm::Base
  attribute :first_name,      :validate => true
  attribute :last_name,      	:validate => true
  attribute :email,     			:validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :company_name, 		:validate => true
  attribute :job_title
  attribute :phone
  attribute :country
  attribute :date
  attribute :message
  attribute :nickname,  			:captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Contact Request from opendrives.com",
      :to => "sales@opendrives.com",
      :from => "sales@opendrives.com"
    }
  end

end