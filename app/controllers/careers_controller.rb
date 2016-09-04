class CareersController < ApplicationController
  def index
    @benefits = Career.benefits
  end

  def node_js_developer
  	
  end

  def sales
  	
  end

  def professional_services_engineer
  	@duties = Career.services_engineer_duties
    @requirements = Career.requirements
  end

  def vp_engineering
  	
  end

end
