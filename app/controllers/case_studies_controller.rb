class CaseStudiesController < ApplicationController
  def index
  	@clients = Client.all
  end
end
