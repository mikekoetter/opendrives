class ResourcesController < ApplicationController
  def index
  	@contact = Contact.new
  end
end
