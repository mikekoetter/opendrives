class WhyUsController < ApplicationController
  def index
  	@datas = WhyUs.data
  end
end
