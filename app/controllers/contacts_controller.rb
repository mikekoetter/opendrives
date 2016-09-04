class ContactsController < ApplicationController
  def index
  	@contact = Contact.new
  end

  def new

  end

  def create
  	@contact = Contact.new(params[:contact])
  	@contact.request = request
  	if @contact.deliver
  		
  		redirect_to root_path
  	else
  		render :index
  	end
  end


  # def send_email
  # 	Contact.send_email(
  # 											first_name: params[:first_name],
  # 											last_name: params[:last_name],
  # 										 	email: params[:email],
  # 										 	company_name: params[:company_name],
  # 										 	job_title: params[:job_title],
  # 										 	phone: params[:phone], 
  # 										 	country: params[:country],
  # 										 	date: params[:date],
  # 										 	message: params[:message]
  # 										).deliver
  # 	redirect_to root_url, notice: "Email sent successfully"
  # end
end
