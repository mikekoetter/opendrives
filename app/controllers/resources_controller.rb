class ResourcesController < ApplicationController
  def index
  	@resource = Resource.new
  end

  def create
  	@resource = Resource.new(params[:resource])
  	@resource.request = request
    respond_to do |format|
    	if @resource.deliver
    		format.js
    	else
    		format.js { render 'form_errors' }
    	end
    end
  end
end
