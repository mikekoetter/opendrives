class ContactsController < ApplicationController
  def index
  	@contact = Contact.new
  end

  def new

  end

  def create
  	@contact = Contact.new(params[:contact])
  	@contact.request = request
    respond_to do |format|
    	if @contact.deliver
    		format.js
    	else
        format.js { render 'form_errors' }
    	end
    end
  end

end
