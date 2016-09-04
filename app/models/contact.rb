class Contact < MailForm::Base
	 # def send_email(options={})
  #   @first_name = options[:first_name]
  #   @last_name = options[:last_name]
  #   @email = options[:email]
  #   @company_name = options[:company_name]
  #   @job_title = options[:job_title]
  #   @phone = options[:phone]
  #   @country = options[:country]
  #   @date = options[:date]
  #   @message = options[:message]
  #   mail(:to=>"channebertrand@gmail.com", :subject=>"Message From opendrives.com", from: 'channe@channedesign.com') do |format|
  #   	format.text { render 'contacts/send_email' }
  #   	# format.html
  #   end
  # end

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
      :to => "channe@channedesign.com",
      :from => "channe@channedesign.com"
    }
  end

end