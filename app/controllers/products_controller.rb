class ProductsController < ApplicationController
  def index
  	@products = Product.products
  end
end
