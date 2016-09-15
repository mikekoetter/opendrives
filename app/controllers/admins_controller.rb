class AdminsController < ApplicationController
	layout 'admin'
	before_action :authenticate_admin!
	

	def index
		
	end

	def jobs
		@jobs = Job.all
	end

end