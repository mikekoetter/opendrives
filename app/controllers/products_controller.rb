class ProductsController < ApplicationController
  def index
  	@products = Product.products
  	@resource = Resource.new
  	@faqs = @resource.faqs
  end
end
